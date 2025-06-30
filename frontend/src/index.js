import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./assets/css/styles.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/drift-basic.min.css";
import "./assets/css/image-compare-viewer.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/fonts/font-icons.css"
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./brewStore/store";
import { OPMainMenuBar } from "./ComponentOP/OPMainMenuBar";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./ComponentOP/Footer";
import App from "./App";

const MainApp = () => {
  const getAppStoreData = useSelector((state) => state.appstate.login_info);

  return (
    <>
      {<OPMainMenuBar />}
      <App />
      {<Footer />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
