import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Dimensions, Pressable } from 'react-native';

import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { PostType } from "../../../types";
/*import moment from 'moment';*/

import * as FileSystem from 'expo-file-system';
import Modal from 'react-native-modal';
import { API, graphqlOperation } from "aws-amplify";
import { createUser, deletePost } from "../../../graphql/mutations";

export type TopContainerProps = {
  post: PostType;
  isHome: boolean;
  refresh: () => void;
};

const { width, height } = Dimensions.get('window');

const TopContainer = ({ post, isHome, refresh }: TopContainerProps) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [modalDirection, setModalDirection] = useState('down');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const removePost = async () => {
    try {
      const input = {
        id: post.id,
      };
      const result = await API.graphql(graphqlOperation(deletePost, { input }));
      console.log('Post deleted:', result.data.deletePost);
      refresh();
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setModalVisible(!isModalVisible);
    }
  };

  const showMenu = (e) => {
    const { pageX, pageY } = e.nativeEvent;
    const screenHeight = height;
    const menuHeight = 145;

    if (screenHeight - pageY < menuHeight) {
      setModalDirection('up');
      setMenuPosition({ x: pageX, y: pageY - menuHeight });
    } else {
      setModalDirection('down');
      setMenuPosition({ x: pageX, y: pageY });
    }

    toggleModal();
  };

  const [selectedImage, setSelectedImage] = useState(post.image);
  
  const saveImage = async () => {
    if(selectedImage){
      try {
        const { uri } = await FileSystem.downloadAsync(selectedImage, FileSystem.documentDirectory + 'fromRivetspace.jpg');
        Alert.alert('Görüntü başarıyla kaydedildi.', `Dosya yolu: ${uri}`);
        setModalVisible(!isModalVisible);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const moment = require('moment');

  const date = moment.utc(post.createdAt).local();

  const formattedDate = date.format('DD.MM.YYYY - HH:mm');

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.user}>
            <Text style={styles.name}>{post.user.name}</Text>
            <Text style={styles.username}>@{post.user.userName}</Text>
            {/*<Text style={styles.createdAt}>{moment(post.createdAt).startOf('hour').fromNow()}7s</Text>*/}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{right: 20, paddingLeft: 5, paddingRight: 5 }}
          activeOpacity={0.3}
          hitSlop={{ top: 15, left: 15, right: 15 }}
          onPress={showMenu}
        >
          <Text style={{right: 68, fontSize: 10, color: "grey"}}>{formattedDate}</Text>
          <Ionicons name={"ellipsis-horizontal"} color={"grey"} size={15} />
        </TouchableOpacity>
        <Modal isVisible={isModalVisible} style={styles.modal} animationIn="fadeIn">
          <View style={[styles.menu, { top: menuPosition.y, left: width - 150 }]}>
            {selectedImage ?
            <TouchableOpacity activeOpacity={0.6} onPress={saveImage}>
              <Text style={styles.modalText}>Görseli Kaydet</Text>
            </TouchableOpacity> : null
            // <TouchableOpacity disabled={true} onPress={saveImage}>
            //   <Text style={styles.modalTextDisabled}>Görseli Kaydet</Text>
            // </TouchableOpacity>
            }
            {isHome ?  
            (<TouchableOpacity activeOpacity={0.6} onPress={toggleModal}>
              <Text style={[styles.modalText, {color: 'red'}]}>Şikayet Et</Text>
            </TouchableOpacity>) :  
            (<TouchableOpacity activeOpacity={0.6} onPress={removePost}>
              <Text style={[styles.modalText, {color: 'red'}]}>Bu Paylaşımı Sil</Text>
            </TouchableOpacity>)}
            <TouchableOpacity activeOpacity={0.6} onPress={toggleModal}>
              <Text style={styles.modalText}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  )
};

export default TopContainer;
