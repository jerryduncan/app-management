import { View } from "react-native";
import styles from "./styles";
import CustomButton from "../../components/buttons";
import Text from "../../components/text";


const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textWrapper}>No categories found</Text>
    </View>
  );
}

export default Categories;

