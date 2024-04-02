import { useEffect, useState } from "react";
import AntInput from "../Components/AntInput";
import AntCard from "../Components/AntCard";
import { Col, Row } from "antd";

const WeatherApp = () => {
  const [city, setCity] = useState("karachi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "1f76360a2e7e9ae7080bfe14e23b20fe";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData({
          temperature: Math.round(data.main.temp) + " °C",
          humidity: Math.round(data.main.humidity) + " %",
          windSpeed: Math.round(data.wind.speed) + " km/h",
          name: data.name,
        });
        setError(null);
      } else {
        setError("City not found");
        setWeatherData(null);
      }
    } catch (error) {
      setError("Failed to fetch weather data");
      setWeatherData(null);
    }
  };

  const handleSubmit = () => {
    fetchWeatherData();
    return false;
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <Row gutter={[16, 24]} justify="center" className="UI__DISPLAY">
      <Col sx={24} sm={24} md={24} lg={24} xl={24}>
        <AntInput
          onFinish={handleSubmit}
          country={[city, setCity]}
          placeholder="Enter City Name"
        />
        {error && <p>{error}</p>}
      </Col>
      <Col sx={24} sm={24} md={18} lg={18} xl={18}>
        {weatherData && (
          <AntCard
            title={`Weather of ${weatherData.name}`}
            temperature={weatherData.temperature}
            humidity={weatherData.humidity}
            windSpeed={weatherData.windSpeed}
            location={weatherData.name}
          />
        )}
      </Col>
    </Row>
  );
};

export default WeatherApp;
