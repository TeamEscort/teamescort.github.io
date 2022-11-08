import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    heading: {
        marginTop: spacing(2),
        marginBottom: spacing(1),
        display: "flex",
        justifyContent: "center",
        fontSize: 35,
        fontFamily: "Garamond",
        fontWeight: "bold",
    },

    ButtonText: {
        fontSize: spacing(1.6),
        fontWeight: "bold",
    },

    imgDiv: {
        width: "100%",
        height: 285
    },

    submit: {
        backgroundColor: "#14A5C5",
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        width: "200px",
    },

    stressBtn: {
        backgroundColor: "#14A5C5",
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        width: "250px",
        marginBottom: 20,
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
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Trajon"
    },

    main: {
        marginTop: 120,
        marginBottom: 50
    }
}));
