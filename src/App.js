import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./MainPage/index";
import ProductsPage from "./ProductPage";
import UploadPage from "./UploadPage";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            icon={<DownloadOutlined />}
            onClick={function () {
              history.push("/upload");
            }}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
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
        </Switch>{" "}
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
