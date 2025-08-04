import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useGoogleAuth } from "../utils/googleAuth";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();

  const { promptAsync, request } = useGoogleAuth(() => {
    navigation.navigate("Home");
  });

  return (
    <View style={styles.container}>
      <Text>Welcome to SignupScreen</Text>
      <Button
        title="Signup with Google"
        onPress={() => promptAsync()}
        disabled={!request}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    gap: 10,
  },
});
