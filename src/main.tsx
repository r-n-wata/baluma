import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes.tsx";
import { init } from "./lang/i18n.tsx";

init().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
});
