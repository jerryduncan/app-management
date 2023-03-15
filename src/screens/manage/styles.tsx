import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flex: 1
    },
    textContainer: {
        alignItems: "center"
    },
    buttonContainer: {
        bottom: 10,
        left: 30,
        right: 30,
        position: "absolute"
    },
    card: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 16,
        marginVertical: 10,
        width: "80%",
      },
      input: {
        marginBottom: 10,
      },
});

export default styles;
  