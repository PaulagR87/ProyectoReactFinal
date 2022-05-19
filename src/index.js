import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCsvoLz6J1nCqchC8gOwCaS6ICexBXl5AA",
  authDomain: "final-react-coder.firebaseapp.com",
  projectId: "final-react-coder",
  storageBucket: "final-react-coder.appspot.com",
  messagingSenderId: "748300988688",
  appId: "1:748300988688:web:29ecf57336950bdf703595"
};


const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
