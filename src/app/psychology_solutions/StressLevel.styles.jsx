import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(({ breakpoints, spacing }) => ({

    heading: {
        marginTop: spacing(2),
        marginBottom: 40,
        display: "flex",
        justifyContent: "center",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Trajon"
    },

    imgDiv: {
        width: "100%"
    },

    submit: {
        backgroundColor: "#14A5C5",
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        width: "200px",
    },

    form: {
        textAlign: "center"
    },

    text: {
        textAlign: "center"
    },

    para: {
        marginTop: spacing(2),
        marginBottom: spacing(1),
        display: "flex",
        justifyContent: "center",
        fontSize: spacing(2),
        fontWeight: "bold",
    },

    main: {
        marginTop: 120,
        marginBottom: 50
    },

    app: {
        backgroundColor: "#fffff",
        minHeight: 250,
        height: "min-content",
        borderRadius: 15,
        padding: 20,
        boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
        display: "flex",
        justifyContent: "space-evenly",
        fontFamily: "Verdana, cursive, sans-serif",
        color: "#00000",
        margin: "0 auto"

    },

    stressCal: {
        marginTop: 20,
        marginBottom: 50

    },

    scoreSection: {
        fontSize: 24,
        alignItems: "center"
    },

    questionSection: {
        width: "70%",
        position: "relative"
    },

    questionCount: {
        marginBottom: 35
    },

    span: {
        fontSize: 28
    },

    questionText: {
        marginBottom: 12
    },

    answerSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    btn: {
        backgroundColor: "#14A5C5",
        width: 150,
        fontSize: 16,
        color: "#ffffff",
        borderRadius: 15,
        padding: 5,
        alignItems: "center",
        border: "5px solid #14A5C5",
        justifyContent: "flex-start",
        cursor: "pointer",
    },
}));


