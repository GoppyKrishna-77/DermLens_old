import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../Styles/style";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

const GetStartedPage = () => {
	const navigation = useNavigation();

	return (
		<ImageBackground
			source={require("../assets/background.jpg")}
			resizeMode="cover"
			style={styles.container_col_flex}
		>
			<View>
				<Text style={styles.heading_text}>Derm On Demand</Text>
				<Text style={styles.subHeadingPhrase}>
					Let's Check your Skin...
				</Text>
			</View>

			<LinearGradient
				colors={["#df6283", "#d14646"]}
				style={styles.button}
			>
				<TouchableOpacity
					onPress={() => navigation.navigate("SelectionPage")}
				>
					<Text style={styles.buttonText}>Get Started &rarr;</Text>
				</TouchableOpacity>
			</LinearGradient>
		</ImageBackground>
	);
};

export default GetStartedPage;
