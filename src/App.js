import { View, Button } from 'react-native';
import axios from 'axios';

export default function App() {

  const fetchData = () => {

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => console.log(response))
      .catch(error => console.log(error))
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

                               -Then && Catch yapısı-
Sunucuya istek atma işlemi (axios.get) yapıldıktan sonra kod sırası then ve catchi görmeden kaldığı yerden devam eder. Ne zaman istek cevabı gelirse o zaman then veya catch kısmı sıraya dahil edilir ve calısır (asenkron islemi)
Eğer ki istek sonucu bir cevap gelirse (her sey yolunda) then bloğu calısır
Eğer ki istek esnasında bir problem varsa (internetten kaynaklı, sunucudan kaynaklı vs.) catch kısmı calısır ve hata mesajını yakalayabiliriz.  
*/