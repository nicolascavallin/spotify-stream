import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./App";
import { FC } from "react";

type Props = StackScreenProps<RootStackParamList, "Artist">;

const Artist: FC<Props> = ({
  navigation: { navigate },
  route: { params: artist },
}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#111111",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
          color: "white",
        }}
      >
        {artist.name}
      </Text>
      <Text>{JSON.stringify(artist)}</Text>
    </SafeAreaView>
  );
};

export { Artist };
