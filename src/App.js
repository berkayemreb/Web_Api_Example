import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import axios from 'axios';

import UserCard from './components/UserCard';

export default function App() {

  const [userList, setUserList] = useState([]);

  const renderUser = ({ item }) => <UserCard name={item.name} />

  const fetchData = async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("deneme");
    setUserList(response.data)

  }

  return (
    <View style={{ marginTop: 40 }}>
      <FlatList
        data={userList}
        renderItem={renderUser}
      />
      <Button title='Fetch Data' onPress={fetchData} />
    </View>
  );
}
