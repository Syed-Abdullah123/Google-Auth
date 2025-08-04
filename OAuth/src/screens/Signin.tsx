import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useGoogleAuth } from "../utils/googleAuth";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const navigation = useNavigation();

  const { promptAsync, request } = useGoogleAuth(() => {
    navigation.navigate("Home");
  });

  return (
    <View style={styles.container}>
      <Text>Welcome to SigninScreen</Text>
      <Button
        title="Signin with Google"
        onPress={() => promptAsync()}
        disabled={!request}
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    gap: 10,
  },
});
