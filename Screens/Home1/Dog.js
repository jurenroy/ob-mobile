import React from 'react';
import { StyleSheet, Text, Pressable, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import global from '../../Components/global';
import { Pets } from '../../Components/Pets';
import { Petss } from '../../Components/Petss';
import { globalStyles } from '../../Components/styles';


const SCREEN_HEIGHT = 500
const SCREEN_WIDTH = Dimensions.get('window').width



const Pests = [
  { id: "13", uri: require('../../assets/13.jpg') },
  { id: "15", uri: require('../../assets/15.jpg') },
  { id: "17", uri: require('../../assets/17.jpg') },
  { id: "19", uri: require('../../assets/19.jpg') },
  { id: "21", uri: require('../../assets/21.jpg') },
  { id: "23", uri: require('../../assets/23.jpg') },
  { id: "25", uri: require('../../assets/25.jpg') },
]

const Desc = [
  { id: "13", type: "Japanese spitz"},
  { id: "15", type: "Hakdog"},
  { id: "17", type: "Aspin"},
  { id: "19", type: "Aspin"},
  { id: "21", type: "Aspin"},
  { id: "23", type: "Shitzooo"},
  { id: "25", type: "Japanese Spitz"},

]


export default class Dog extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: global.dogState
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
              global.dogState=this.state.currentIndex
              global.dogidnum=this.state.currentIndex
              Petss.push(Pets[10+(global.dogidnum*2)])
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
              global.dogState=this.state.currentIndex
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
        global.dogState=this.state.currentIndex
        return(
        <Text style={globalStyles.title}>{item.type}</Text>
        )
        }
      }
      )}
  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 0 }}>
          </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
          </View>
        <View style={{ height: 0 }}>
          </View>
          <View style={globalStyles.heartView}>
          {this.renderNames()}
          </View>   
        <View style={globalStyles.heartView}> 
        <Pressable onPress={() => {this.setState({currentIndex: this.state.currentIndex + 1,})} }>
          <Image source = {require('../../assets/heart2.png')} style = {globalStyles.logoHearts}/>
        </Pressable>
        
        <Pressable onPress={() => {this.setState({currentIndex: this.state.currentIndex + 1, },() => {
              global.dogidnum=this.state.currentIndex
              Petss.push(Pets[10+(global.dogidnum*2)])
            })} }>
          <Image source = {require('../../assets/heart1.png')} style = {globalStyles.logoHearts}/>
        </Pressable>
        </View>
        
      </View>

    );
  }
}




