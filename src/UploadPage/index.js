import react from "react";
import { Form, Divider, Input, InputNumber, Button } from "antd";
import "./index.css";

function UploadPage() {
  return (
    <div id="upload-container">
      <Form name="product-upload" onFinish={function () {}}>
        <Form.Item
          name="upload"
          label={<div className="upload-label label-pic">상품 사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          label={<div className="upload-label">판매자 명</div>}
          rules={[{ required: true, message: "판매자 이름을 등록해 주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="판매자 이름을 입력해 주세요."
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 등록해 주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해 주세요."
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 등록해 주세요." }]}
        >
          <InputNumber className="upload-price" defaultValue={0} size="large" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 설명</div>}
          rules={[{ required: true, message: "상품 설명을 등록해 주세요." }]}
        >
          <Input.TextArea
            className="product-description"
            maxLength={300}
            placeholder="상품 설명을 입력해 주세요."
            showCount
            size="large"
            rows={4}
          />
        </Form.Item>
        <Button className="upload-button" size="large">
          상품 업로드하기
        </Button>
      </Form>
    </div>
  );
}

export default UploadPage;
