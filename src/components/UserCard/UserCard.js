import React from "react";
import { View, Text } from 'react-native';
import styles from './UserCard.style';

const UserCard = ({ name, email, username }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.username}>{username}</Text>
            </View>
        </View>
    )
}

export default UserCard;