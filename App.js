import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";

import Login from "./screens/Login";

export default function App() {
	let [fontsLoaded] = useFonts({
		"Cereal-Regular": require("./assets/fonts/AirbnbCerealMedium.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	} else {
		return (
			<View style={styles.container}>
				<Login />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginTop: Constants.statusBarHeight,
		fontFamily: "Cereal-Regular",
	},
});
