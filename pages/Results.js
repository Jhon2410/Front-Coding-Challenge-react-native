import { View, Text, StyleSheet, Button } from "react-native-web";
import { connect } from "react-redux";

const Results = ({ puntos, respuestas, navigation }) => {
  const renderResponses = respuestas.map((res, indx) => {
    let myColor = "red";
    let score = res.estado == res.question.correct_answer.toLowerCase()
    if (score) {
      myColor = "green";
    }
    console.log(res);
    return (
      <View style={myColor == "green" ? styles.green : styles.red} key={indx}>
        <Text style={{position:"absolute", left:10, fontWeight: 'bold'}}>{res.question.category}</Text>
        <Text style={{position:"absolute", right:15,fontSize:"17px", fontWeight: 'bold'}}>{score? "+1 point" :"+0 point"}</Text>

        <Text style={styles.nQuestion}> {("question #" +  res.idx).toUpperCase()}   </Text>
        <Text style={styles.question}>
          {res.question.question
            .replaceAll("&quot;", "'")
            .replaceAll("&#039;", "'")
            .replaceAll(" &ldquo;","'")
            }
        </Text>
        <Text>Correct answer : {res.question.correct_answer}</Text>
        <Text>Incorrect answes : {res.question.incorrect_answers}</Text>
        <Text>Level of difficulty : {res.question.difficulty}</Text>
        <Text>My answer : {res.estado}</Text>
      </View>
    );
  });

  return (
    <View style={
        styles.nQuestion
    }>
      <Text style={{fontWeight: 'bold', fontSize: '30px'}}>Game over, your score : {puntos} </Text>
      <Text style={{ fontSize: '20px'}}>
        {" "}
         {(puntos * 100) / 10} % Good {" "}
        {100 - (puntos * 100) / 10} % Wrong
      </Text>
      {renderResponses}
      <Button
        onPress={()=>window.location.reload()}
        title="Play again?"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0f0",
    padding: 20,
    margin: 15,
  },
  nQuestion:{
    textAlign: "center",
    fontWeight: 'bold'

  },
  green: {
    backgroundColor: "#4f4",
    padding: 20,
    margin: 15,
    textAlign:"center"
  },
  red: {
    backgroundColor: "#f44",
    padding: 20,
    margin: 15,
    textAlign:"center"

  },
  question:{
      backgroundColor:"#000",
      color: 'white',
      padding:15
    }
});

const mapStateToProps = (state) => ({
  puntos: state.puntos,
  respuestas: state.respuestas,
});

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch({
      type: "reset_notify",
    });
  },
  agregar() {
    dispatch({
      type: "agregar_puntos",
    });
  },
  restar() {
    dispatch({
      type: "restar_puntos",
    });
  },
  respuestasAdd() {
    dispatch({
      type: "agregar_respuestas",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
