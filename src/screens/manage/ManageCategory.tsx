import react, {useState} from "react";
import { View } from "react-native";
import styles from "./styles";
import Text from "../../components/text";
import CustomButton from "../../components/buttons";
import CategoryForm from "../../components/categoryForm";

const ManageCategory = () => {
  const [showForm, setShowForm] = useState(false);

  const handlePress = () => {
    setShowForm(true);
  };

  const handleSubmit = (name: string, field: string) => {
    // Do something with the form data
    setShowForm(false);
  };

  const handleDelete = () => {
    setShowForm(false);
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

