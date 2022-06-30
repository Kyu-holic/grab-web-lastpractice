import "./index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://e83242d5-8b7b-4fb4-9895-f1f56b52e253.mock.pstmn.io/products/${id}`
      )
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((err) => {
        console.error("에러 발생 : ", err);
      });
  }, []);
  console.log(product);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <div id="product-seller">{product.seller}</div>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2022년 6월 30일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
