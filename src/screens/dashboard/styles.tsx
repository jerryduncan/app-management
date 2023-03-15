import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textWrapper: {
      fontSize: Math.min(width, height) / 25
    }
});

export default styles;
  