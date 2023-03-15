import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Menu, Divider, Provider} from "react-native-paper";
import CustomButton from "./buttons";
import { colors } from "../constants";
import Text from "./text";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { addField, deleteField } from "../redux/categorySlice";


export type CategoryFormProps = {
  onSubmit: (name: string, field: string) => void;
  onDelete: () => void;
};

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit, onDelete }) => {
  const [categoryName, setCategoryName] = useState("");
  const [typedName, setTypedName] = useState("");
  const [fieldTyped, setFieldTyped] = useState("");
  const [visible, setVisible] = React.useState(false);
  const [fields, setFields] = useState<{ title: string; id: number }[]>([]);
  const dispatch = useDispatch();


  // const handleSubmit = () => {
  //   onSubmit(categoryName, field);
  // };

  useEffect(() => {
    if (visible && !fieldTyped) {
      setFieldTyped(fields[fields.length - 1]?.title ?? "");
    }
  }, [visible]);

  const handleNameChange = (text: string) => {
    setTypedName(text);
    setCategoryName(text);
  };

  const handleFieldChange = (text: string, fieldId: number) => {
    setFields(fields.map((field) => {
      if (field.id === fieldId) {
        return {
          ...field,
          title: text,
        };
      }
      return field;
    }));
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleAddField = (fieldType: string, title: string) => {
    const newField = { title, id: Date.now() };
    setFields([...fields, newField]);
    dispatch(addField(newField));
    setVisible(false);
  };

  const onDeleteField = (id: number) => {
    setFields(fields.filter((field) => field.id !== id));
    dispatch(deleteField(id));
  };

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <Text>{typedName}</Text>
        <TextInput
          label="Category Name"
          value={categoryName}
          mode="outlined"
          onChangeText={handleNameChange}
        />

        {fields.map((field) => (
          <View style={styles.fieldContainer} key={field.id}>
            <TextInput
              label={"Field"}
              mode="outlined"
              style={styles.inputStyle}
              onChangeText={handleFieldChange}
            />
            <View style={styles.iconTextWrapper}>
              <View style={styles.textWarpper}>
                <Text>{field.title}</Text>
              </View>
              <View style={styles.spacing}/>
              <MaterialIcons
                name="delete"
                size={24}
                color={colors.darkBlack}
                onPress={() => onDeleteField(field.id)}
              />
            </View>
          </View>
        ))}

        <View style={styles.spacing}/>
        <CustomButton onPress={false} width={310}>TITLE FIELD: {fieldTyped}</CustomButton>

        <View style={styles.buttonWrapper}>
          <View>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<CustomButton onPress={openMenu} width={150}>Add New field</CustomButton>}>
              <Menu.Item onPress={() => handleAddField("Field", "Text")} title="Text"/>
              <Divider />
              <Menu.Item onPress={() => handleAddField("Field", "Checkbox")} title="Checkbox" />
              <Divider />
              <Menu.Item onPress={() => handleAddField("Field", "Date")} title="Date" />
              <Divider />
              <Menu.Item onPress={() => handleAddField("Field", "Number")} title="Number" />
            </Menu>
          </View>
          <CustomButton onPress={handleDelete} width={150} color={colors.red}>Remove</CustomButton>
        </View>
      </View>
    </View>
    </Provider>
  );
};


const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputStyle: {
    marginVertical: 7,
    width: "50%"
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  containerStyle: {
    backgroundColor: colors.white,
    padding: 20
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textWarpper: {
    borderWidth: 1,
    padding: 10,
    borderColor: colors.blue
  },
  iconTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacing: {
    margin: 10
  }
})

export default CategoryForm;
