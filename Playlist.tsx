import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Animated, {
  useAnimatedStyle,
  interpolate,
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { FC, useCallback } from "react";
import { Item } from "./types";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./App";

import MoreIcon from "./components/icons/more";
import BackIcon from "./components/icons/back";

import { SharedElement } from "react-navigation-shared-element";

const { width: screenWidth } = Dimensions.get("screen");

const safeArea = {
  top: 64,
  bottom: 24,
};

const coverSize = screenWidth - 32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: coverSize + 16 + safeArea.top,
    paddingBottom: safeArea.bottom,
  },
  dataContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "600",
  },
  info: {
    color: "#ffffff99",
    fontSize: 14,
    fontWeight: "500",
  },
});

type Props = StackScreenProps<RootStackParamList, "Playlist">;

const Playlist: FC<Props> = ({
  navigation: { push, goBack },
  route: { params: playlist },
}) => {
  const scrollHandler = useSharedValue(0);

  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollHandler.value = event.contentOffset.y;
    },
  });

  const coverAnimatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    top: safeArea.top,
    left: 16,
    right: 16,
    width: coverSize,
    height: coverSize,
    opacity: interpolate(scrollHandler.value, [200, 200, 350], [1, 1, 0]),
    transform: [
      {
        scale: interpolate(
          scrollHandler.value,
          [0, 0, 200, 350, 350],
          [1, 1, 0.6, 0.45, 0.45],
        ),
      },
      {
        translateY: -interpolate(
          scrollHandler.value,
          [-100, 0, 200, 350, 350],
          [-50, 0, 180, 480, 480],
        ),
      },
    ],
  }));

  const navigationBarAnimatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: safeArea.top + 60,
    // backgroundColor: playlist.primary_color,
    backgroundColor: "#1A202C",
    opacity: interpolate(scrollHandler.value, [250, 340], [0, 1]),
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollHandler.value, [335, 372], [0, 1]),
    transform: [
      {
        translateY: interpolate(
          scrollHandler.value,
          [335, 372, 372],
          [16, 0, 0],
        ),
      },
    ],
    bottom: 12,
    left: 16 + 46,
    position: "absolute",
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "600",
  }));

  const renderItem = useCallback(
    ({ item, index }: { index: number; item: Item }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            console.log("play", item.track.name);
          }}
          key={item.track.id + index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 8,
            marginLeft: 12,
            marginRight: 6,
          }}
        >
          <Image
            style={{ width: 50, height: 50, marginRight: 12 }}
            source={{
              uri: item.track.album.images[0].url,
            }}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ color: "white", fontSize: 15, marginBottom: 3 }}
            >
              {item.track.name}
            </Text>
            <TouchableOpacity
              onPress={() => push("Artist", item.track.artists[0])}
            >
              <Text
                numberOfLines={1}
                style={{ color: "#FFFFFF88", fontSize: 13 }}
              >
                {item.track.album.artists.map((a) => a.name).join(", ")}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => console.log("open options")}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 6,
            }}
          >
            <MoreIcon />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={handler}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        data={playlist.tracks.items}
        renderItem={renderItem}
        scrollEventThrottle={16}
        ListHeaderComponent={() => (
          <View style={styles.dataContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {playlist.name}
            </Text>
            <Text numberOfLines={1} style={styles.info}>
              {playlist.followers.total === 1
                ? `1 like`
                : `${playlist.followers.total} likes`}
              ,{" "}
              {playlist.tracks.total === 1
                ? `1 song`
                : `${playlist.tracks.total} songs`}
              .
            </Text>
          </View>
        )}
      />
      <Animated.View style={coverAnimatedStyle}>
        <SharedElement id={`playlist-${playlist.id}`} style={{ flex: 1 }}>
          <Image
            source={{
              uri: playlist.images[0].url,
            }}
            style={{ flex: 1, borderRadius: 12 }}
          />
        </SharedElement>
      </Animated.View>
      <Animated.View style={navigationBarAnimatedStyle}>
        <Animated.Text style={titleAnimatedStyle}>
          {playlist.name}
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 78,
          left: 16,
          height: 36,
          width: 36,
          borderRadius: 36,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        }}
      >
        <TouchableOpacity
          onPress={goBack}
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BackIcon />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export { Playlist };
