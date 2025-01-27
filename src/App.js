import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to My Personal Page</Text>
      <Text style={styles.subtitle}>Here are some useful links:</Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/carter-reid-a98443254/")}
        >
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://github.com/ArcticCodeMonkeys")}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("/Resume.pdf")}
        >
          <Text style={styles.buttonText}>Resume</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
    minHeight: "100vh", // Ensure it takes up the full height
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  linksContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#007BFF", // Blue background
    paddingVertical: 15,        // Vertical padding for button height
    paddingHorizontal: 30,      // Horizontal padding for button width
    marginVertical: 10,        // Vertical margin for spacing between buttons
    borderRadius: 5,           // Rounded corners
    width: "80%",              // Button width
    alignItems: "center",      // Center text inside button
  },
  buttonText: {
    color: "#fff",             // White text color
    fontSize: 18,              // Text size
    fontWeight: "bold",        // Bold text
  },
});

export default App;