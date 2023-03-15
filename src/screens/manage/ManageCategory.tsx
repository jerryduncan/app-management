import react, {useState} from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import Text from "../../components/text";
import CustomButton from "../../components/buttons";
import CategoryForm from "../../components/categoryForm";
import { useDispatch } from "react-redux";

const ManageCategory = () => {
  let [showForm, setShowForm] = useState(false);
  let [formCounter, setFormCounter] = useState(1);
  
  const dispatch = useDispatch();

  const handlePress = () => {
    setShowForm(!showForm);
    setFormCounter((prevCounter) => prevCounter + 1);
  };
  
  const handleSubmit = (name: string, field: string) => {
    setShowForm(!showForm);
  };

  const handleDelete = () => {
    setShowForm(!showForm);
  };
  
  return (
    <View style={styles.container}>
      {showForm ? (
        <CategoryForm onSubmit={handleSubmit} onDelete={handleDelete} />
      ) : (
        <View>
          <View style={styles.textContainer}>
            <Text>No categories to display</Text>
          </View>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handlePress} width={350}>
          ADD NEW CATEGORY
        </CustomButton>
      </View>
    </View>
  );
}

export default ManageCategory;

