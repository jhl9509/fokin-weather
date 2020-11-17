import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import {Alert} from "react-native";
import axios from "axios"; 
const API_KEY = "6fc488eae040ad7e1460094356bcb0e8"

export default class extends React.Component {
  state ={ 
    isLoading : true
  };
  getWeather = async (latitude,longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      );
      console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude)
      console.log(latitude, longitude)
      this.setState({isLoding : false});
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    }
    
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoding } = this.state;
    return isLoding ? <Loading /> : null;
  }
}

