import { Button, Card, Typography } from "@material-ui/core";
import admin from '../../assets/admin.jpg';
import psychological from '../../assets/psychological.jpg';
import recommendation from '../../assets/recomendation.jpg';
import career from '../../assets/career.png';
import HomeSlider from "./HomeSlider";
import { useStyles } from "./Home.styles";
import { home } from "./data";
import { useNavigate } from "react-router";

export const Home = () => {
    const classes = useStyles();
    const push = useNavigate();

    return (
        <div className={classes.mainDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#14A5C5" fill-opacity="1" d="M0,320L8,288C16,256,32,192,48,181.3C64,171,80,213,96,245.3C112,277,128,299,144,298.7C160,299,176,277,192,272C208,267,224,277,240,256C256,235,272,181,288,181.3C304,181,320,235,336,250.7C352,267,368,245,384,208C400,171,416,117,432,128C448,139,464,213,480,213.3C496,213,512,139,528,144C544,149,560,235,576,256C592,277,608,235,624,224C640,213,656,235,672,213.3C688,192,704,128,720,96C736,64,752,64,768,101.3C784,139,800,213,816,208C832,203,848,117,864,112C880,107,896,181,912,202.7C928,224,944,192,960,160C976,128,992,96,1008,80C1024,64,1040,64,1056,58.7C1072,53,1088,43,1104,69.3C1120,96,1136,160,1152,186.7C1168,213,1184,203,1200,202.7C1216,203,1232,213,1248,213.3C1264,213,1280,203,1296,176C1312,149,1328,107,1344,112C1360,117,1376,171,1392,181.3C1408,192,1424,160,1432,144L1440,128L1440,0L1432,0C1424,0,1408,0,1392,0C1376,0,1360,0,1344,0C1328,0,1312,0,1296,0C1280,0,1264,0,1248,0C1232,0,1216,0,1200,0C1184,0,1168,0,1152,0C1136,0,1120,0,1104,0C1088,0,1072,0,1056,0C1040,0,1024,0,1008,0C992,0,976,0,960,0C944,0,928,0,912,0C896,0,880,0,864,0C848,0,832,0,816,0C800,0,784,0,768,0C752,0,736,0,720,0C704,0,688,0,672,0C656,0,640,0,624,0C608,0,592,0,576,0C560,0,544,0,528,0C512,0,496,0,480,0C464,0,448,0,432,0C416,0,400,0,384,0C368,0,352,0,336,0C320,0,304,0,288,0C272,0,256,0,240,0C224,0,208,0,192,0C176,0,160,0,144,0C128,0,112,0,96,0C80,0,64,0,48,0C32,0,16,0,8,0L0,0Z"></path>
            </svg>
            <div className={classes.mainContentDiv}>
                <div className={classes.contentDiv}>
                    <Card elevation={3} className={classes.contactCard}>
                        <Typography className={classes.textFont}>{home.cardHeading}</Typography>
                        <Typography className={classes.textFont}>{home.cardHeadingLine}</Typography>
                        <div className={classes.contactButton}>
                            <Button variant="contained" className={classes.button} onClick={() => push("/contact-us")}>{home.button}</Button>
                        </div>
                    </Card>
                    <div className={classes.mainEscortDiv}>
                        <div className={classes.escortDiv}>
                            <Typography className={classes.escortHeading}>{home.escortHeading}</Typography>
                            <Typography className={classes.textFont}>{home.escortSubHeading1}</Typography>
                            <Typography className={classes.textFont}>{home.escortSubHeading2}</Typography>
                            <Typography className={classes.textFont}>{home.escortSubHeading3}</Typography>
                            <Typography className={classes.textFont}>{home.escortSubHeading4}</Typography>
                        </div>
                    </div>
                    <div className={classes.mainComponentDiv}>
                        <div className={classes.componentDiv}>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={admin} alt="admin" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.administrationHeading}</Typography>
                                    <Typography className={classes.textFont}>{home.administrationData}</Typography>
                                </div>
                            </div>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={psychological} alt="psychological" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.psychologicalHeading}</Typography>
                                    <Typography className={classes.textFont}>{home.psychologicalData}</Typography>
                                </div>
                            </div>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={career} alt="career" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.careerHeading}</Typography>
                                    <Typography className={classes.textFont}>{home.careerData}</Typography>
                                </div>
                            </div>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={recommendation} alt="recommendation" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.recommendHeading}</Typography>
                                    <Typography className={classes.textFont}>{home.recommendData}</Typography>
                                </div>
                            </div>
                        </div>
                        <Card elevation={3} className={classes.slider}>
                            <HomeSlider />
                        </Card>
                    </div>
                </div>
            </div>

        </div >
    )
}