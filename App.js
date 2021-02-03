import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();// 위치정보의 허용여부
      const { coords: { latitude, longitude}} = await Location.getCurrentPositionAsync(); // 위치정보를 받아오기 위함.
      this.setState({ isLoading : false });

    } catch(error) {
      Alert.alert("Can't find you", "So sad"); //에러 메세지
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
