import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import Admin from "./routes/Admin";
import ProtectedUser from "./routes/ProtectedUser";

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="me" element={<ProtectedUser />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
