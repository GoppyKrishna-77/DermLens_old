import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../Styles/style";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

const SelectionPage = () => {
	const navigation = useNavigation();

	return (
		<ImageBackground
			source={require("../assets/background.jpg")}
			resizeMode="cover"
			style={styles.container_col_flex}
		>
			<Text style={styles.heading_text}> What do you want to Find ?</Text>
			<LinearGradient
				colors={["#df6283", "#d14646"]}
				style={styles.button}
			>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("InputPage", {
							path: "/skin-disease",
						})
					}
				>
					<Text style={styles.buttonText}>Skin Disease</Text>
				</TouchableOpacity>
			</LinearGradient>
			<LinearGradient
				colors={["#df6283", "#d14646"]}
				style={styles.button}
			>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("InputPage", {
							path: "/hair-disorder",
						})
					}
				>
					<Text style={styles.buttonText}>Hair Disorder</Text>
				</TouchableOpacity>
			</LinearGradient>
		</ImageBackground>
	);
};

export default SelectionPage;
