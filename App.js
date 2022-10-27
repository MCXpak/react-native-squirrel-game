import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ImageBackground, Button } from 'react-native';
import Tile from './components/Tile';
import Title from './assets/title2.png'
import CountDown from 'react-native-countdown-component';
// RN Code
const Item = ({ item }) => {
  return(
    <TouchableOpacity style={styles.item}>
      <Image
        style={{ width: '25%', height: '25%' }}
        source={{ uri: item.icon }}
      />
    </TouchableOpacity>
  ) 
};

const itemData = [
  {
    icon: "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
  },
]

export default function App() {

  useEffect(() => {
    
  },[acornCount, seedCount, ])

  const resetGame = () => {
    setAcornCount(0)
    setSeedCount(0)
    setTime(prev => 5)
    setPressStart(false)
    setCountId(prev => prev + 1)
  }

  const [acornCount, setAcornCount] = useState(0);
  const[seedCount, setSeedCount] = useState(0);
  const [pressStart, setPressStart] = useState(false);
  const [time, setTime] = useState(5)                            
  const tiles = Array.apply("", Array(16));
  const [countId, setCountId] = useState()

  function startGame(){
    setPressStart(prev => !prev)
  }

  return (
    <View style={styles.app}>
      <ImageBackground source={{uri: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40684/FreevectorAutumnForestScenery-IllustrationAS0721_generated.jpg"}} resizeMode="cover" style={styles.image}>
        <Image source={Title} style={styles.title}></Image>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.counterView}>
            <Text style={styles.counter}>ACORNS: {acornCount}</Text>
            <Text style={styles.counter}>SEEDS: {seedCount}</Text>
          </View>
          <CountDown
              
              until={time}
              size={30}
              digitStyle={{backgroundColor: '#6e9026'}}
              digitTxtStyle={{color: 'white'}}
              onFinish={() => {
                alert('Ran out of time! Try again!')
                resetGame()}
              }
              timeToShow={['S']}
              timeLabels={{s: 'Time'}}
              running={pressStart}
            />
        </View>
        <View style={styles.grid}>
          {tiles.map((item, idx) => <Tile key={idx} acornCount={acornCount} setSeedCount={setSeedCount} seedCount={seedCount} setAcornCount={setAcornCount} pressStart={pressStart}/> )}
        </View>
        <TouchableOpacity onPress={startGame} >
          <View style={styles.start}>
            <Text style={{color:"white", fontSize: 30, fontWeight: 'bold'}}>START</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

// Styles
const styles = {
  app: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 2,
  },
  grid: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    width: 400, 
    height: 100, 
    resizeMode:'contain',
    marginBottom: 50
  },
  counter: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  start: {
    backgroundColor: '#6e9026',
    // backgroundColor: isActive ? 'red': '',
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  counterView: {
    height: 80,
    width: 200,
    backgroundColor: '#6e9026',
    borderRadius: 7,
    justifyContent: 'center',
  }
};
