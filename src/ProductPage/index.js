import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function ProductsPage() {
  const { id } = useParams();
  useEffect(function () {
    axios
      .get(
        "https://8b082113-69ec-4b32-a01b-8e8ce6a0a6d9.mock.pstmn.io/products/1"
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div>상세페이지 {id}</div>;
}

export default ProductsPage;
