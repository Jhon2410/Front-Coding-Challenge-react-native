import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { getData } from './../api-servicio';
export default function Game() {
  const [question, setQuestions]  = useState([])

  useEffect(async()=>{
    const res = await getData()
    console.log(res.results[0].category)
    setQuestions(res.results)
  },[])

  const game = question.map((q, index)=> {
    return  <Text key={index}>{q.category}</Text>
  } ) 



  return (
    <View style={styles.container}>
      <Text>hola world</Text>
      <Text>{game}</Text>
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
