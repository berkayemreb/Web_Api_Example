import { View, Button } from 'react-native';
import axios from 'axios';

export default function App() {

  const fetchData = () => {

    const response = axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response);

  }

  return (
    <View style={{ marginTop: 40 }}>
      <Button title='Fetch Data' onPress={fetchData} />
    </View>
  );
}

/*            
                            -- AXIOS ile ilgili not --  
axios.get islemi end point'ten (server) data çeker, axios.post ise end point'e data gönderir.
axios.get islemi yaparken gelen veri bir PROMISE yapısı olarak gelir.

                                -Nedir bu Promise-
Promise yapıları asenkron yapılardır. Yani sunucuya istek atarız ve geri yanıt gelene kadar bu işlemin bitmesini beklemeyiz ( süresi ne zaman biterde veri gelir belli değiş çünkü)
veriler gelene kadar kullanıcıyı baska bir arayüzde karsılarız. Bu olaya asenkron yapılar denir ve promise yapıları buna örnektir.

*/