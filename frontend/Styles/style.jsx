import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container_row: {
		backgroundColor: "transparent",
		alignItems: "center",
		justifyContent: "space-around",
		flexDirection: "row",
		gap: 20,
	},
	container_col: {
		gap: 20,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "col",
	},
    container_col_flex: {
        flex: 1,
		gap: 20,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "col",
	},
    container_col_flex_mt50: {
        flex: 1,
		gap: 20,
        marginTop: "25%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "col",
	},
    inputs_container: {
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "col",
        gap: 20,
	},
	statusBarContent: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
        width: "100%",
		marginBottom: 80,
		height: 50,
		backgroundColor: "#23272e",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	statusBarText: {
		marginLeft: 10,
		color: "#f1f1f1",
		fontSize: 30,
	},
	button: {
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 10,
		backgroundColor: "#ef9595",
		borderRadius: 5,
	},
	buttonL: {
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 5,
		backgroundColor: "#ef9595",
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		alignContent: "center",
		marginLeft: 3,
	},
	button_disabled: {
		padding: 10,
		backgroundColor: "#ccc",
		fontSize: 20,
		borderRadius: 5,
	},
	buttonL_disabled: {
		padding: 5,
		backgroundColor: "#ccc",
		fontSize: 20,
		borderRadius: 5,
	},
	image: {
		width: 240,
		height: 180,
		borderRadius: 10,
		resizeMode: "contain",
	},
    image_Sml: {
		width: 160,
		height: 120,
		borderRadius: 10,
        marginTop: 30,
		resizeMode: "contain",
        alignSelf: "center",
	},
	logo: {
		marginLeft: 10,
		marginTop: 10,
		width: 40,
		height: 40,
	},
    input: {
        borderColor: "#000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 5,
        minWidth: 200,
    },
    inputMultiLine: {
        borderColor: "#000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 5,
        minWidth: 200,
        minHeight: 70,
        maxHeight: 70,
        maxWidth: 200,
        textAlignVertical: "top",
    },
    picker: {
        borderColor: "#000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        minWidth: 200,
    },
    heading_text: {
        color: "#662549",
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
    },
    subHeadingPhrase: {
        color: "#ef9595",
		textAlign: "center",
        width: 250,
        alignSelf:"center",
        fontSize: 20,
    },
    subHeading: {
        color: "#ef9595",
		textAlign: "justify",
        width: 250,
        alignSelf:"center",
        fontSize: 20,
    },
    paragraph: {
        color: "#ef9595",
		textAlign: "justify",
        width: 250,
        alignSelf:"center",
        marginTop: 5,
    },
    listHeading: {
        color: "#ef9595",
		textAlign: "center",
        alignSelf:"flex-start",
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5,
    },
    list: {
		textAlign: "left",
        marginBottom: 3,
        marginRight: 3,
    },
    listContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginHorizontal: 40,
    },
    warningText: {
        color: "#f78022",
        fontSize: 18,
        fontWeight: "bold",
        margin: 15,
    },
    disclaimerText: {
        color: "red",
        marginTop: 20,
        marginBottom: 20,
        fontWeight: "bold",
        width: "70%",
        marginHorizontal: "15%",
        alignContent: "center",
        textAlign: "justify"
    },
    buttonHome: {
		padding: 10,
		backgroundColor: "#ef9595",
		borderRadius: 5,
        width: 50,
        alignSelf: "center",
    },
    buttonTextL: {
        color: "#fff",
		alignContent: "center",
        justifyContent: "center",
		marginLeft: 1,
        fontSize: 12,
        verticalAlign: "top",
    }
});

export default styles;