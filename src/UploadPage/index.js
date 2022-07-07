import react from "react";
import { Form, Divider, Upload } from "antd";
import "./index.css";

function UploadPage() {
  return (
    <div>
      <Form name="product-upload" onFinish={function () {}}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
      </Form>
    </div>
  );
}

export default UploadPage;
