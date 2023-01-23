import React from "react";
import { View, Text } from 'react-native';
import styles from './UserCard.style';

const UserCard = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default UserCard;