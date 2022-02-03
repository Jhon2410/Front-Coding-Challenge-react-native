import { View, Text, StyleSheet } from "react-native-web";
import { connect } from "react-redux";

function Question({ pregunta }) {

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
      type:"restar_puntos"
    })
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Question);

