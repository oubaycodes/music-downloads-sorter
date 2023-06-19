import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sexyText}>bitch</Text>
      <Button title="click">click me</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 64,
  },
  sexyText: {
    color: "#f1f3f5",
  },
});
