import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import axios from "axios";
import * as Location from "expo-location";
import Weather from "./Weather";

const API_KEY = "100cc894a4d95e26e16e6a46dadbb19c";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();// 위치정보의 허용여부
      const { coords: { latitude, longitude}} = await Location.getCurrentPositionAsync(); // 위치정보를 받아오기 위함.
      this.getWeather(latitude, longitude)
    } catch(error) {
      Alert.alert("Can't find you", "So sad"); //에러 메세지
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading,temp, condition} = this.state;
    return isLoading ? ( <Loading /> ) : (<Weather temp={Math.round(temp)} condition={condition} />);
  }
}
