import "./App.css";
import MainPageComponent from "./MainPage/index";
import ProductsPage from "./ProductPage";
import UploadPage from "./UploadPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
        <MainPageComponent />
      </Route>
      <Route exact={true} path={"/products/:id"}>
        <ProductsPage />
      </Route>
      <Route exact={true} path={"/upload"}>
        <UploadPage />
      </Route>
    </Switch>
  );
}

export default App;
