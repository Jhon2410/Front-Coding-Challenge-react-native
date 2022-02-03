import { View, Text } from "react-native-web";
import { connect } from "react-redux";
 const Results =  ({puntos})=>{
    return (
        <View>
            <Text>juego terminado resultados : {puntos}</Text>
        </View>
    )
}

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


export default connect(mapStateToProps, mapDispatchToProps)(Results);
