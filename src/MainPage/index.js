import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get(
        "https://e83242d5-8b7b-4fb4-9895-f1f56b52e253.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        console.log(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  });
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            <div className="product-card">
              <div>
                <img
                  className="product-img"
                  src="/images/products/basketball1.jpeg"
                />
              </div>
              <div className="product-contents">
                <div className="product-name">농구공</div>
                <div className="product-price">100000원</div>
              </div>
              <div className="product-footer">
                <div className="product-seller">
                  <img
                    className="product-avatar"
                    src="/images/icons/avatar.png"
                  />
                  <span>규호</span>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
