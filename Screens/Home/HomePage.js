import React from 'react';
import { StyleSheet, Text, Pressable, View, Dimensions, Image, Animated, PanResponder, ImageBackground } from 'react-native';
import { Conv } from '../../Components/Conv';
import global from '../../Components/global';
import { Pets } from '../../Components/Pets';
import { Petss } from '../../Components/Petss';
import { globalStyles } from '../../Components/styles';
import bg from '../../assets/bg.png'


const SCREEN_HEIGHT = 500
const SCREEN_WIDTH = Dimensions.get('window').width



const Pests = [
  { id: "1", uri: require('../../assets/1.jpg') },
  { id: "2", uri: require('../../assets/2.jpg') },
  { id: "3", uri: require('../../assets/3.jpg') },
  { id: "4", uri: require('../../assets/4.jpg') },
  { id: "5", uri: require('../../assets/5.jpg') },
  { id: "6", uri: require('../../assets/6.jpg') },
  { id: "7", uri: require('../../assets/7.jpg') },
  { id: "8", uri: require('../../assets/8.jpg') },
  { id: "9", uri: require('../../assets/9.jpg') },
  { id: "10", uri: require('../../assets/10.jpg') },
  { id: "11", uri: require('../../assets/11.jpg') },
  { id: "12", uri: require('../../assets/12.jpg') },
]

const Desc = [
  { id: "1",  type: "Shih Tzu"},
  { id: "2",  type: "Puspin" },
  { id: "3",  type: "Aspin" },
  { id: "4",  type: "Puspin"},
  { id: "5",  type: "Dogshit"},
  { id: "6",  type: "Puspin"},
  { id: "7",  type: "Aspin"},
  { id: "8",  type: "Puspin"},
  { id: "9",  type: "Pontoy"},
  { id: "10", type: "Puspin"},
  { id: "11", type: "Chawi"},
  { id: "12", type: "Puspin"},
  
]


export default class HomePage extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: global.state
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
              global.state=this.state.currentIndex
              global.idnum=this.state.currentIndex
              Petss.push(Pets[global.idnum-1])
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
              global.state=this.state.currentIndex
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = () => {

    return Pests.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 150, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-20deg' }], position: 'absolute', top: 10, left: 40, zIndex: 1000 }}>
                <Image source = {require('../../assets/heart1.png')} style = {globalStyles.logoHearts}/>
            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '20deg' }], position: 'absolute', top: 10, right: 40, zIndex: 1000 }}>
            <Image source = {require('../../assets/heart2.png')} style = {globalStyles.logoHearts}/>
            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />


          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 150, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-20deg' }], position: 'absolute', top: 10, left: 40, zIndex: 1000 }}>
            <Image source = {require('../../assets/heart1.png')} style = {globalStyles.logoHearts}/>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '20deg' }], position: 'absolute', top: 10, right: 40, zIndex: 1000 }}>
                <Image source = {require('../../assets/heart2.png')} style = {globalStyles.logoHearts}/>

            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />

          </Animated.View>
        )
      }
    }).reverse()
  }

  renderNames = () => {

    return Desc.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {
        global.state=this.state.currentIndex
        return(
        <Text style={globalStyles.title}>{item.type}</Text>
        )
        }
      }
      )}
  

  render() {
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 0 }}>
          </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
          </View>
        <View style={{ height: 0 }}>
          </View>
          <View style={globalStyles.heartViewew}>
          {this.renderNames()}
          </View>   
        <View style={globalStyles.heartView}> 
        <Pressable onPress={() => {this.setState({currentIndex: this.state.currentIndex + 1,})} }>
          <Image source = {require('../../assets/heart2.png')} style = {globalStyles.logoHearts}/>
        </Pressable>
        
        <Pressable onPress={() => {this.setState({currentIndex: this.state.currentIndex + 1, },() => {
              global.idnum=this.state.currentIndex
              Petss.push(Pets[global.idnum-1])
            })} }>
          <Image source = {require('../../assets/heart1.png')} style = {globalStyles.logoHearts}/>
        </Pressable>
        </View>
        
      </View>
      </ImageBackground>

    );
  }
}




