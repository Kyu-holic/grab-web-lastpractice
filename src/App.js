import "./App.css";
import MainPageComponent from "./MainPage/index";
import ProductPage from "./ProductPage";
import UploadPage from "./UploadPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
