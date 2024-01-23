import React from "react";
import Navigation from "./src/navigation/Navigator";
import { View, Text, useColorScheme } from "react-native";
import DarkTheme from './src/components/themes/appDarkTheme';
import DefaultTheme from './src/components/themes/appLightTheme';
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const App: React.FC = () => {
    const scheme = useColorScheme();
    console.log(scheme)
return (
    <View style={{flex: 1, justifyContent: "center", alignContent: "center"}} >
        <Navigation  />
    </View>
)
}
export default App;