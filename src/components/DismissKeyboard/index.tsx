import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";


const DismissKeyboard = ({ children }) => {

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          {children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
   };

export default DismissKeyboard;