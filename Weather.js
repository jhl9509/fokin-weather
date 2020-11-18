import React from "react";
import PropTypes from "prop-types";
import { View,Text,StyleSheet,StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ["#373B44","#4286f4"],
        title : "태둥이당",
        subtitle : "휘리릭"
        
    },
    Mist : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"],
        title : "이게머야",
        subtitle : "??"
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ["#00C6FB","#005BEA"],
        title : "비온당",
        subtitle : "우산필요"
    },
    Drizzle : {
        iconName : "weather-hail",
        gradient : ["#89F7FE","#66A6FF"],
        title : "이게머냐",
        subtitle : "??"
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ["#7DE2FC","#B9B6E5"],
        title : "왕 눈온당",
        subtitle : "펑펑"
    },
    Atmosphere : {
        iconName : "weather-hail",
        gradient : ["#89F7FE","#66A6FF"],
        title : "고요",
        subtitle : "하구먼"
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ["#D7D2CC","#304352"],
        title : "흐려흐려",
        subtitle : "구질구질"
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ["#FF7300","#FEF253"],
        title : "맑은날씨",
        subtitle : "아주좋아욘"
    },
    Dust : {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"],
        title : "ㅗ",
        subtitle : "뿌옇군"
    }
}

export default function Weather({ temp,condition }){
    return ( 
     <LinearGradient
        // Button Linear Gradients
        colors={weatherOptions[condition].gradient}
        style = {styles.container}
        >
            <StatusBar barStyle = "light-content"/>
            <View style = {styles.halfContainer}>
                <MaterialCommunityIcons size = {96} name = {weatherOptions[condition].iconName} color = "white"/>
                <Text style = {styles.temp}> {temp}° </Text>
            </View>
            <View style = {{...styles.halfContainer,...styles.textContainer}}>
                <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
                <Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clouds",
        "Clear",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    temp:{
        fontSize : 42,
        color : "white"
    },
    halfContainer:{
        flex:1,
        justifyContent : "center",
        alignItems : "center"
    },
    title:{
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle :{
        color : "white",
        fontWeight : "600",
        fontSize : 24
    },
    textContainer:{
        paddingHorizontal : 20,
        alignItems :"flex-start"
    }
});

