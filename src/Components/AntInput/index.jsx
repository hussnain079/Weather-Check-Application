import { Form, Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import AntButton from "../AntButton";

const AntInput = ({ onFinish, country, placeholder }) => {
  const [city, setCity] = country;

  return (
    <Form
      layout="inline"
      className="Form_Layout"
      name="weather"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please enter city name",
          },
        ]}
      >
        <Input
          placeholder={placeholder}
          size="large"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <AntButton
          size="large"
          type="primary"
          htmlType="submit"
          icon={<AiOutlineSearch />}
          className="searchInput"
          shape='circle'
        />
      </Form.Item>
    </Form>
  );
};
export default AntInput;
