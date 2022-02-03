import { View, Text, Button, StyleSheet } from "react-native-web";
export default function Question({ pregunta }) {

  return (
    <View>
      <Text style={styles.pregunta}>{pregunta.question.replaceAll("&quot;","'").replaceAll("&#039;","'")}</Text>
   
    </View>
  );
}

const styles = StyleSheet.create({

  pregunta: {
    border: "1px",
    padding: 50,
    margin:20,
    flex: 0.3,
    backgroundColor: "black",
    borderWidth: 5,
    color:"white"
  },
  category: {
      position: "absolute",
      top:0
  }
});
