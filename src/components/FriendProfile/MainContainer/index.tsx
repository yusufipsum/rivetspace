import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import styles from "./styles";
/*import moment from 'moment';*/

import { ProfileType } from "../../../types";
import { Ionicons } from "@expo/vector-icons";

import Modal from 'react-native-modal';
import { API, graphqlOperation } from "aws-amplify";
import { deleteFriend } from "../../../graphql/mutations";

export type MainContainerProps = {
  profiles: ProfileType;
  refresh: () => void;
};

const { width, height } = Dimensions.get('window');

const MainContainer = ({ profiles, refresh }: MainContainerProps) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [modalDirection, setModalDirection] = useState('down');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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

  const removeFriend = async () => {
    try {
      const input = {
        id: profiles.id,
      };
      const result = await API.graphql(graphqlOperation(deleteFriend, { input }));
      console.log("DELETED FF:: ", result);
      refresh();
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setModalVisible(!isModalVisible);
    }
  };
  
  return (
  <View style={styles.container}>
    <View style={styles.profilesHeaderContainer}>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.profilesHeaderNames}>
          <Text style={styles.name}>{profiles.user.name}</Text>
          <Text style={styles.username}>{profiles.user.username}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>{profiles.user.biography}</Text>
      </View>
      <TouchableOpacity
          style={{position: "absolute", right: 0, paddingLeft: 5, paddingRight: 5 }}
          activeOpacity={0.3}
          hitSlop={{ top: 15, left: 15, right: 15 }}
          onPress={showMenu}
        >
          <Ionicons name={"ellipsis-horizontal"} color={"grey"} size={15} />
        </TouchableOpacity>
        <Modal isVisible={isModalVisible} style={styles.modal} animationIn="fadeIn">
          <View style={[styles.menu, { top: menuPosition.y, left: width - 150 }]}>
            <TouchableOpacity activeOpacity={0.6} onPress={removeFriend}>
              <Text style={[styles.modalText, {color: 'red'}]}>Arkadaşı Çıkar</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={toggleModal}>
              <Text style={styles.modalText}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  </View>
)};

export default MainContainer;
