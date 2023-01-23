import { View, Button } from 'react-native';
import axios from 'axios';

export default function App() {

  const fetchData = async () => {
    null;
  }

  return (
    <View style={{ marginTop: 40 }}>
      <Button title='Fetch Data' onPress={fetchData} />
    </View>
  );
}
