import { Text, SafeAreaView, View } from "react-native";
import * as Clipboard from "expo-clipboard";

import Slider from "@react-native-community/slider";

import { styles } from "./styles";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { useState } from "react";
import { passwordGenerator } from "@/utils/passwordGenerator";

export default function IndexScreen() {
  const [password, setPassword] = useState("");

  const [lenPassword, setLenPassword] = useState(10);

  const [copyText, setCopyText] = useState("");

  function createPassword() {
    setPassword(passwordGenerator(lenPassword));
    setCopyText("");
    Clipboard.setStringAsync("");
  }

  async function copyPassword() {
    await Clipboard.setStringAsync(password);

    setCopyText(
      `A senha ${password} foi copiada para a área de transferência.`
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={{ width: "100%", paddingHorizontal: 30, marginTop: 30 }}>
        <Text style={{ marginLeft: 15 }}>Quantidade de letras:</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Slider
            minimumValue={6}
            step={1}
            maximumValue={20}
            value={lenPassword}
            onValueChange={setLenPassword}
            style={{ flex: 1 }}
          />
          <Text>{lenPassword}</Text>
        </View>
      </View>
      <View style={{ gap: 10, width: "100%", alignItems: "center" }}>
        <Text style={{ textAlign: "center" }}>{password}</Text>

        <Button text="GERAR SENHA" onPress={createPassword}></Button>
        <Button text="COPIAR" onPress={copyPassword}></Button>
        <Text
          style={{
            color: "gray",
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          {copyText}
        </Text>
      </View>
    </SafeAreaView>
  );
}
