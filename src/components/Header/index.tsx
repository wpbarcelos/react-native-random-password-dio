import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="lock-open-outline" size={120} />
      <Text style={styles.title}> Gerador de senha</Text>
    </View>
  );
};
