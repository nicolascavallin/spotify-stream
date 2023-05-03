import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./App";
import { FC } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { response } from "./server";

type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#111111",
        flex: 1,
        padding: 16,
      }}
    >
      <FlatList
        data={response}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigate("Playlist", { ...item })}
          >
            <SharedElement id={`playlist-${item.id}`}>
              <Image
                source={{
                  uri: item.images[0].url,
                }}
                style={{
                  width: 150,
                  height: 150,
                  margin: 16,
                  borderRadius: 8,
                }}
              />
            </SharedElement>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export { Home };
