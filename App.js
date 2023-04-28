import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
  const [numbers, setNumbers] = useState(null);

  return (
    <View style={styles.container}>
      <Image source={require("./assets/image.png")} style={styles.image} />
      <Button
        title="Generate numbers"
        onPress={() => {
          str = "";
          let arr = [];
          while (arr.length < 6) {
            do {
              number = Math.floor(Math.random() * 45) + 1;
            } while (arr.indexOf(number) !== -1);
            arr.push(number);
          }
          console.log(arr);
          arr.sort(function (a, b) {
            if (a > b) return -1;
            if (a === b) return 0;
            else return 1;
          });
          console.log(arr);
          while (arr.length > 0) {
            if (arr.length == 1) str += arr.pop();
            else str += `${arr.pop()}, `;
          }
          setNumbers(str);
        }}
      />
      <Text style={styles.head}>Your lucky numbers are ...</Text>
      <Text style={styles.numbers}>{numbers}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 300,
  },
  numbers: {
    fontSize: 40,
    fontWeight: "700",
  },
  head: {
    fontSize: 25,
    paddingTop: 15,
  },
});
