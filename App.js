import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import {
  Roboto_400Regular_Italic,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { Jost_300Light } from "@expo-google-fonts/jost";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
    Roboto_900Black,
    Jost_300Light,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.h1}>Login</Text>
        <TextInput style={styles.input} placeholder="Your Email Address" />
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          secureTextEntry={true}
        />
       <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  form: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    fontFamily: "Roboto_900Black",
    marginBottom: 40,
  },
  input: {
    width: "90%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "black",
    marginBottom: 40,
    textAlign: "center",
    fontFamily: "Jost_300Light",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#7CB9E8",
  },
});
