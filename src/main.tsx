import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AmbientAudioProvider } from "./context/AudioContext";
import "./styles/variables.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AmbientAudioProvider>
      <App />
    </AmbientAudioProvider>
  </React.StrictMode>,
);
