import { Card, Row, Typography } from "antd";
import { MdWaves } from "react-icons/md";
import { GiSpeedBoat } from "react-icons/gi";

const { Title, Text } = Typography;

const AntCard = ({ title, temperature, humidity, windSpeed, location }) => (
  <Card
    title={
      <Title level={2} className="Card__Title">
        {title}
      </Title>
    }
    bordered={false}
    className="UI__CARD"
  >
    <Title level={2} className="Card__UI">
      {temperature}
    </Title>
    <Title level={3} className="Card__UI">
      {location}
    </Title>
    <Row gutter={[16, 24]} justify="space-between" className="HUM__SPEED">
      <Text className="Color">
        <MdWaves /> {humidity} <br />
        <b>Humidity</b>
      </Text>
      <Text className="Color">
        <GiSpeedBoat />
        {windSpeed} <br />
        <b>Wind Speed</b>
      </Text>
    </Row>
  </Card>
);
export default AntCard;
