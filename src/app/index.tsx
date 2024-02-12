import { Header } from "@/components/header";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <Header title="Cardápio" cartQuatityItems={10} />
    </View>
  );
}
