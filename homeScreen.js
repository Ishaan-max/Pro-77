import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={
              styles.container
            }> 
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground source={require("../assets/space.gif")}>
               <View style={styles.titleBar}> <Text style={styles.titleText}>ISS Tracker App</Text></View >
               <TouchableOpacity  style={styles.routeCart}>
                   <Text style={styles.titleText}>Stellar App</Text>
                   <Image source={require("../assets/main-icon.png")}></Image>
               </TouchableOpacity>

               <TouchableOpacity  style={styles.routeCart}>
                   <Text style={styles.titleText}>SpaceCraft </Text>
                   <Image source={require("../assets/space_crafts.png")}></Image>
               </TouchableOpacity>

               <TouchableOpacity  style={styles.routeCart}>
               <Image source={require("../assets/daily_pictures.png")}></Image>
                   <Text style={styles.titleText}>DailyPictures</Text>
               </TouchableOpacity>

               <TouchableOpacity  style={styles.routeCart}>
               <Image source={require("../assets/star_map.png")}></Image>
                   <Text style={styles.titleText}>Star Map</Text>
               </TouchableOpacity>



               </ImageBackground>
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    droidSafeArea: {
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },

    titleBar: {
        flex: 0.1,

        alignItems: 'center',
        justifyContent: 'center',
      },
      titleText:{
          fontSize:35,
          fontWeight:"bold",
          color:"black",
          marginTop:75,
          paddingLeft:30

      },
      routeCart: {
        flex: 0.25,
        backgroundColor: 'white',
       marginLeft:50,
       marginRight:50,
       MarginTop:50,
       borderRadius:30
      },
  });