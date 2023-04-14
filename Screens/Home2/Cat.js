import React from 'react';
import { StyleSheet, Text, Pressable, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import global from '../../Components/global';
import { Pets } from '../../Components/Pets';
import { Petss } from '../../Components/Petss';
import { globalStyles } from '../../Components/styles';
import bg from '../../assets/bg.png'

const SCREEN_HEIGHT = 500
const SCREEN_WIDTH = Dimensions.get('window').width

const Pests = [

  { id: "14", uri: require('../../assets/14.jpg') },
  { id: "16", uri: require('../../assets/16.jpg') },
  { id: "18", uri: require('../../assets/18.jpg') },
  { id: "20", uri: require('../../assets/20.jpg') },
  { id: "22", uri: require('../../assets/22.jpg') },
  { id: "24", uri: require('../../assets/24.jpg') },
]

const Desc = [

  { id: "14", type: "Puspin"},
  { id: "16", type: "Puspin"},
  { id: "18", type: "Puspin"},
  { id: "20", type: "Puspin"},
  { id: "22", type: "Puspin"},
  { id: "24", type: "Puspin"},

]



export default class Cat extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: global.catState
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
              global.catState=this.state.currentIndex
              global.catidnum=this.state.currentIndex
              Petss.push(Pets[11+(global.catidnum*2)])
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
              global.catState=this.state.currentIndex
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
        global.catState=this.state.currentIndex
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
          <View style={globalStyles.heartView}>
          {this.renderNames()}
          </View>   
        <View style={globalStyles.heartView}> 
        <Pressable onPress={() => {this.setState({currentIndex: this.state.currentIndex + 1,})} }>
          <Image source = {require('../../assets/heart2.png')} style = {globalStyles.logoHearts}/>
        </Pressable>
        
        <Pressable onPress={() => {this.setState({currentIndex: this.state.currentIndex + 1, },() => {
              global.catidnum=this.state.currentIndex
              Petss.push(Pets[11+(global.catidnum*2)])
            })} }>
          <Image source = {require('../../assets/heart1.png')} style = {globalStyles.logoHearts}/>
        </Pressable>
        </View>
        
      </View>
      </ImageBackground>    
    );
  }
}





