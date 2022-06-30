import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    axios
      .get(
        "https://e83242d5-8b7b-4fb4-9895-f1f56b52e253.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
        console.log(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <Link className="product-link" to={`/products/${product.id}`}>
                <div className="product-card">
                  <div>
                    <img className="product-img" src={`${product.imageUrl}`} />
                  </div>
                  <div className="product-contents">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">{product.price}</div>
                  </div>
                  <div className="product-footer">
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="/images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
