import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView, Image, Platform } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDropbox } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume_Carter.pdf";
    link.click();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to My Personal Page</Text>
      <Text style={styles.subtitle}>Here are some useful links:</Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/carter-reid-a98443254/")}
        >
          <FontAwesomeIcon icon={faLinkedin} size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://github.com/ArcticCodeMonkeys")}
        >
          <FontAwesomeIcon icon={faGithub} size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleResumeDownload}>
          <FontAwesomeIcon icon={faDropbox} size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Download Resume</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>
          I'm Carter, a passionate developer with experience in multiple programming languages, including JavaScript, Python, and C++. I'm always striving to learn new technologies and work on impactful projects. Feel free to reach out to me if you'd like to collaborate!
        </Text>
      </View>

      {/* Display an avatar or profile image */}
      <Image
        source={require('./assets/profile.jpeg')} // Reference the local image here
        style={styles.profileImage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f8ff", // Soft blue background
    minHeight: "100vh", // Ensure it takes up the full height
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    color: "#1a1a1a",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Roboto", // Modern font
  },
  subtitle: {
    fontSize: 20,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  linksContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#007BFF", // Blue background
    paddingVertical: 15,        // Vertical padding for button height
    paddingHorizontal: 30,      // Horizontal padding for button width
    marginVertical: 10,        // Vertical margin for spacing between buttons
    borderRadius: 10,          // Rounded corners
    width: "80%",              // Button width
    alignItems: "center",      // Center text inside button
    flexDirection: "row",      // Ensure the icon and text are aligned in a row
    justifyContent: "center",  // Ensure the text is centered with the icon
    shadowColor: "#000",       // Shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,              // iOS/Android shadow
    transition: "all 0.3s ease-in-out",
  },
  buttonText: {
    color: "#fff",             // White text color
    fontSize: 18,              // Text size
    fontWeight: "bold",        // Bold text
    marginLeft: 10,            // Space between icon and text
    fontFamily: "Roboto",      // Modern font
  },
  icon: {
    marginRight: 10,           // Space between icon and text
  },
  aboutContainer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "80%",
    maxWidth: 600,
  },
  aboutText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "Roboto",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Circular image
    marginTop: 30,
    marginBottom: 40,
    borderWidth: 5,
    borderColor: "#fff", // White border
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
});

export default App;