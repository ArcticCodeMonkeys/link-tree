import React from "react";
import ReactDOM from "react-dom/client";
import { AppRegistry } from "react-native-web";  // Import from react-native-web
import App from "./App";

// Register the app with React Native Web
AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});