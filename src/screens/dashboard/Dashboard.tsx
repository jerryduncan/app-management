import { View } from "react-native";
import styles from "./styles";
import CustomButton from "../../components/buttons";
import Text from "../../components/text";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ManageCategory");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textWrapper}>No categories found</Text>
      <CustomButton onPress={handlePress} width={300}>ADD A CATEGORY</CustomButton>
    </View>
  );
}

export default Dashboard;

