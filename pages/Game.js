import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Question from "./components/Question";
import axios from "axios";
import { connect } from "react-redux";

const Game = ({ navigation, puntos, agregar, setRespuestas}) => {

  const [question, setQuestions] = useState([]);
  const [indice, setIndice] = useState(0);
  const [categoria, setCategoria] = useState("");
  useEffect(async () => {
    const res = await axios.get(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    setQuestions(res.data.results);
    setCategoria(res.data.results[0].category);
  }, []);

  const game = question.map((q, index) => {
    if (indice == index) {
      return <Question key={index} pregunta={q}></Question>;
    }
  });


  return (
    <View style={styles.container}>
      <Text style={styles.category}>{categoria}</Text>
      <Text> aciertos  {puntos * 100  / 10 } %</Text>
      <View>
        <Text>{game}</Text>
      </View>
        {indice == 10 ? <Text>Error{navigation.navigate("results")}</Text>: null }
      <View style={styles.options}>
        <Button
          title="True"
          color="#0f0"
          onPress={() => {
            let idx = indice;
            setCategoria(question[indice].category);
            setIndice((idx += 1));
            if(question[indice].correct_answer === "True"){
              agregar()
              setRespuestas({estado:"true", idx, question:question[indice] })
            }else{
              setRespuestas({estado:"true", idx, question:question[indice] })
            }
          }}
        />
        <Button
          title="False"
          color="#f00"
          onPress={() => {
            let idx = indice;
            setCategoria(question[indice].category);
            setIndice((idx += 1));

            if(question[indice].correct_answer == "False"){
            setRespuestas({estado:"false", idx, question:question[indice] })
            agregar()
            }else{
              setRespuestas({estado:"false", idx, question:question[indice] })
            }
          }}
        />
      </View>
      <Text style={styles.indice}>Question {indice + 1} / 10</Text>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  indice: {
    position: "absolute",
    bottom: 0,
    fontSize: 22,
  },
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
  agregar(){
    dispatch({
      type:"agregar_puntos"
    })
  },
  restar(){
    dispatch({
      type:"restar_puntos",

    })
  },
  setRespuestas(state){
    dispatch({
      type:"agregar_respuestas",
      state: state
    })
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);
