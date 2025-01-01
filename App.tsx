import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { login, signup } from "./auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      setMessage(`Welcome, ${user.email}`);
    } catch (error) {
      setMessage("Login failed.");
    }
  };

  const handleSignup = async () => {
    try {
      const user = await signup(email, password);
      setMessage(`Account created for: ${user.email}`);
    } catch (error) {
      setMessage("Signup failed.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={handleSignup} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
});
