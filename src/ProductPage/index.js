import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function ProductsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(function () {
    axios
      .get(
        `https://8b082113-69ec-4b32-a01b-8e8ce6a0a6d9.mock.pstmn.io/products/${id}`
      )
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(product);

  if (product === null) {
    return <h4>상품 정보를 받아오고 있습니다...</h4>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={`${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span id="product-seller">{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="product-name">{product.name}</div>
        <div id="product-price">{product.price}</div>
        <div id="createdAt">2022년 6월 26일</div>
        <div id="product-description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductsPage;
