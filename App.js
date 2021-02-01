import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <SafeAreaView style = {{flex:1,flexDirection:"row"}}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({id},index) =>id}
          renderItem={({ item }) => (
           <Text style = {{fontSize:20,color:"midnightblue",margin:10,fontWeight:"bold",marginLeft:10}}>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </SafeAreaView>  
  );
}
export default App;
