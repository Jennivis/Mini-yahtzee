import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from '../style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCOREBOARD_KEY } from '../constants/Game';

export default Scoreboard = ({ navigation }) => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getScoreboardData();
        });
        return unsubscribe;
    }, [navigation]);

    const getScoreboardData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
            if (jsonValue !== null) {
                let tmpScores = JSON.parse(jsonValue);
                setScores(tmpScores.sort((a, b) => parseFloat(b.points) - parseFloat(a.points)));
            }
        }
        catch (error) {
            console.log('Read error: ' + error.message);
        }
    }

    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return (
        <View style={styles.scoreboard}>
            <Entypo
                name="trophy"
                size={100}
                color="#E4B848"
                style={styles.info}
            />
            <Text style={styles.top}>
                Top Seven
            </Text>
            <View>
                {scores.slice(0, 7).map((player, i) => (
                    <View style={styles.results}>
                        <Text style={styles.playername} key={i}>{i + 1}. {player.name}    {player.date} {player.time}    <B>{player.points}</B></Text>
                    </View>
                ))}
            </View>
        </View>
    )
}