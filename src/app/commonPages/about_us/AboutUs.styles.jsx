import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    mainDiv: {

        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        [breakpoints.down("md")]: {
            marginTop: '-5%',
        },
        [breakpoints.up("lg")]: {
            marginTop: '-2%',
        },
    },
    mainContentDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
        marginTop: '-13%'
    },
    contentDiv: {
        width: '90%',
        padding: spacing(1.2),
        [breakpoints.down("md")]: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
    },
    contactCard: {
        borderRadius: spacing(1.2),
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    cardText: {
        fontFamily: "Garamond",
        fontSize: spacing(5.5),
        fontWeight: 'bold'

    },
    contactButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%'
    },
    button: {
        backgroundColor: '#14A5C5'
    },
    mainEscortDiv: {
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'center'
    },
    escortDiv: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: '2%'
    },
    escortHeading: {
        fontFamily: "Garamond",
        fontSize: spacing(3),
        display: 'flex',
        alignSelf: 'center',
        marginBottom: spacing(0.8)
    },
    mainComponentDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: spacing(4),
        [breakpoints.down("sm")]: {
            flexDirection: 'column'
        },
        [breakpoints.up("md")]: {
            flexDirection: 'row'
        },
    },
    componentDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '60%'
    },
    components: {
        display: 'flex',
        backgroundColor: 'white',
        marginTop: '2%',
        flexDirection: 'row',
        gap: spacing(2.8)
    },
    componentImg: {
        height: '65px',
        width: '65px',
        backgroundColor: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        objectFit: 'cover',
        border: '1px solid gray',
        alignSelf: 'center'
    },
    image: {
        height: '65px',
        width: '65px',
        borderRadius: '50%',
    },
    slider: {
        [breakpoints.down("sm")]: {
            width: '100%',
        },
        [breakpoints.up("md")]: {
            width: '65%',
            height: '30%'
        },
    },
    slideImage: {
        [breakpoints.down("sm")]: {
            width: '100%',
        },
        [breakpoints.up("md")]: {
            width: '100%',
        },
    },
    textFont: {
        fontFamily: "Garamond",
        fontSize: spacing(2.5)
    },
    textFontBold: {
        fontFamily: "Garamond",
        fontSize: spacing(2.5),
        fontWeight: 'bold'
    }
}));
