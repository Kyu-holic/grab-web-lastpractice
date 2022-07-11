import react from "react";
import { Form, Divider, Input, InputNumber, Button, Upload } from "antd";
import { useState } from "react";
import "./index.css";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (values) => {
    console.log(values);
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };

  return (
    <div id="upload-container">
      <Form name="product-upload" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label label-pic">상품 사진</div>}
        >
          <Upload
            name="image"
            action="http://localhost:8080/image"
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-image" src={`http://localhost:8080/${imageUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="images/icons/camera.png" />
                <span>이미지를 업로드해주세요.</span>
              </div>
            )}
          </Upload>
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
        <Button className="upload-button" size="large" htmlType="submit">
          상품 업로드하기
        </Button>
      </Form>
    </div>
  );
}

export default UploadPage;
