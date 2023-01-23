import React, { useState } from 'react';
import { View, Button, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

import UserCard from './components/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

export default function App() {

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderUser = ({ item }) => <UserCard name={item.name} email={item.email} username={item.username} />

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);
  }

  return (
    <View style={{ marginTop: 40 }}>
      {
        loading
          ? <ActivityIndicator size="large" />
          : <FlatList
            data={userList}
            renderItem={renderUser}
          />
      }
      <Button title='Fetch Data' onPress={fetchData} />
    </View>
  );
}

