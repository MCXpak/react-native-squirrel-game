import { useState, useEffect } from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

export default function Tile({acornCount, setAcornCount, seedCount, setSeedCount, pressStart}) {

    const bush = require('../assets/bush.png')
    const seeds = require('../assets/seeds.png')
    const acorn = require('../assets/acorn.png')

    const [image, setImage] = useState(bush)

	const [isPressed, setIsPressed] = useState(false);

    const randomNum = () => {
        const num = Math.floor(Math.random()*5)
		return num;
    }

	useEffect(() => {
		const timer = setTimeout(() => {
			setImage(bush);
		}, 1000);
		return () => clearTimeout(timer);

	}, [isPressed]); 


    const handlePress = () => {
        if(randomNum() == 1){
            setAcornCount(count => count + 1)
            setImage(acorn)
        } else {
            setSeedCount(count => count + 1)
            setImage(seeds)
        }
		setIsPressed(prev => !prev);
    }

    return (
        <TouchableOpacity onPress={handlePress} disabled={!pressStart}>
            <Image source={image} style={{width: 100, height: 100}}/>
        </TouchableOpacity>
    )
}


