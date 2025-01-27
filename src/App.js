import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView, Image, Animated } from "react-native";
import { Easing } from "react-native-reanimated";

const App = () => {
  const fadeIn = new Animated.Value(0);  // For fade-in animation

  // Trigger fade-in animation when the component mounts
  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume_Carter.pdf";
    link.click();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={{ ...styles.headerContainer, opacity: fadeIn }}>
        <Image
          source={{ uri: 'https://your-profile-image-url.jpg' }} // Add your profile image URL here
          style={styles.profileImage}
        />
        <Text style={styles.header}>Carter Reid</Text>
        <Text style={styles.subHeader}>Software Engineer | Problem Solver | Creator</Text>
      </Animated.View>

      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          I'm a passionate software engineer with experience in building applications
          using modern tech stacks. I am always striving to learn new technologies and
          improve my skills.
        </Text>
      </View>

      <Text style={styles.subtitle}>Here are some useful links:</Text>

      <View style={styles.linksContainer}>
        {/* LinkedIn Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/carter-reid-a98443254/")}
        >
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>

        {/* GitHub Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://github.com/ArcticCodeMonkeys")}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        {/* Resume Button */}
        <TouchableOpacity style={styles.button} onPress={handleResumeDownload}>
          <Text style={styles.buttonText}>Download Resume</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.sectionText}>Email: carter.reid@example.com</Text>
        <Text style={styles.sectionText}>Phone: +1 (555) 123-4567</Text>
      </View>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f4f8",
    minHeight: "100vh", // Ensure it takes up the full height
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#007BFF",
  },
  header: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  aboutContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
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
    elevation: 3,              // Subtle shadow for buttons
  },
  buttonText: {
    color: "#fff",             // White text color
    fontSize: 18,              // Text size
    fontWeight: "bold",        // Bold text
  },
  contactContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default App;