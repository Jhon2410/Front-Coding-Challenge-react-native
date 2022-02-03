import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Question from "./components/Question";
import axios from "axios";
import { connect } from "react-redux";



const Game = ({ navigation, puntos })=> {
  const [question, setQuestions] = useState([]);
  const [indice, setIndice] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [score, setScore] = useState([]);
  useEffect(async () => {
    const res = await axios.get(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    setQuestions(res.data.results);
    setCategoria(res.data.results[0].category);
  }, []);

  const game = question.map((q, index) => {
    if (indice == 10) {
      return <Text>Error{navigation.navigate("results")}</Text>;
    } else if (indice == index) {
      return <Question key={index} pregunta={q}></Question>;
    }
  });

  const nextQuestion = () => {
    return (
      <Question
        key={indice}
        pregunta={question[indice]}
        props={setCategoria}
      ></Question>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{categoria}</Text>

      <View>{game}    {puntos}</View>

      <View style={styles.options}>
        <Button
          title="True"
          color="#0f0"
          onPress={() => {
            let idx = indice;
            score.push(true);
            setCategoria(question[indice].category);
            setIndice((idx += 1));
          }}
        />
        <Button
          title="False"
          color="#f00"
          onPress={() => {
            let idx = indice;
            score.push(false);
            setCategoria(question[indice].category);
            setIndice((idx += 1));
          }}
        />
      </View>
      <Text style={styles.indice}>Question {indice} / 10</Text>

      <StatusBar style="auto" />
    </View>
  );
}

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
  respuestas:state.respuestas
});

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch({
      type: "reset_notify",
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);