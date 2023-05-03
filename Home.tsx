import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./App";
import { FC } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { response } from "./server";

type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FC<Props> = ({ navigation: { navigate } }) => {
  const { top: safeAreaTop, bottom: safeAreaBottom } = useSafeAreaInsets();
  return (
    <FlatList
      style={{
        flex: 1,
        backgroundColor: "#111111",
      }}
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: safeAreaTop + 16,
        paddingBottom: safeAreaBottom,
      }}
      data={response}
      numColumns={2}
      ListHeaderComponent={() => (
        <Text
          numberOfLines={1}
          style={{
            color: "#ffffff",
            fontSize: 28,
            fontWeight: "600",
            padding: 16,
          }}
        >
          Your Playlists
        </Text>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigate("Playlist", { ...item })}
          style={{
            flex: 1,
            padding: 8,
          }}
        >
          <SharedElement id={`playlist-${item.id}`}>
            <Image
              source={{
                uri: item.images[0].url,
              }}
              style={{
                flex: 1,
                aspectRatio: 1,
                borderRadius: 8,
              }}
            />
          </SharedElement>
        </TouchableOpacity>
      )}
    />
  );
};

export { Home };
