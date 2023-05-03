import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Playlist } from "./Playlist";
import { Home } from "./Home";
import { Owner, Playlist as PlaylistType } from "./types";
import { Artist } from "./Artist";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

type RootStackParamList = {
  Home: undefined;
  Playlist: PlaylistType;
  Artist: Owner;
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Playlist"
          component={Playlist}
          sharedElements={(route) => [
            {
              id: `playlist-${route.params.id}`,
              animation: "fade",
            },
          ]}
        />
        <Stack.Screen name="Artist" component={Artist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

export type { RootStackParamList };
