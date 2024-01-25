import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
  text: string;
  onPress: Function;
};

export const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
