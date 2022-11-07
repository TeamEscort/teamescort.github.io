import { Card, Typography } from "@material-ui/core";
import admin from '../../../assets/admin.jpg';
import psychological from '../../../assets/psychological.jpg';
import recommendation from '../../../assets/recomendation.jpg';
import career from '../../../assets/career.png';
import team from '../../../assets/team.jpeg';
import all from '../../../assets/staff.jpg';
import { useStyles } from "./AboutUs.styles";
import { home } from "./data";

export const AboutUS = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#14A5C5" fill-opacity="1" d="M0,288L21.8,293.3C43.6,299,87,309,131,288C174.5,267,218,213,262,208C305.5,203,349,245,393,245.3C436.4,245,480,203,524,181.3C567.3,160,611,160,655,176C698.2,192,742,224,785,245.3C829.1,267,873,277,916,272C960,267,1004,245,1047,218.7C1090.9,192,1135,160,1178,165.3C1221.8,171,1265,213,1309,208C1352.7,203,1396,149,1418,122.7L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
            </svg>
            <div className={classes.mainContentDiv}>
                <div className={classes.contentDiv}>
                    <div className={classes.contactCard}>
                        <Typography className={classes.cardText}>GET TO KNOW US</Typography>
                    </div>
                    <div className={classes.mainEscortDiv}>
                        <div className={classes.escortDiv}>
                            <Typography className={classes.escortHeading}>{home.escortHeading}</Typography>
                            <Typography className={classes.textFont}>{home.escortSubHeading1}</Typography>
                            <Typography className={classes.textFont}>{home.escortSubHeading2}</Typography>
                            <Typography className={classes.textFont}>{home.escortSubHeading3}</Typography>
                        </div>
                    </div>
                    <div className={classes.mainComponentDiv}>
                        <div className={classes.componentDiv}>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={admin} alt="admin" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.administrationHeading}</Typography>
                                </div>
                            </div>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={psychological} alt="psychological" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.psychologicalHeading}</Typography>
                                </div>
                            </div>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={career} alt="career" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.careerHeading}</Typography>
                                </div>
                            </div>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={recommendation} alt="recommendation" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.recommendHeading}</Typography>
                                    <Typography className={classes.textFont}>{home.recommendData}</Typography>
                                </div>
                            </div>
                            <div className={classes.components}>
                                <div className={classes.componentImg}><img src={all} alt="recommendation" className={classes.image} /></div>
                                <div>
                                    <Typography className={classes.textFontBold}>{home.lastHeading}</Typography>
                                    <Typography className={classes.textFont}>{home.lastData}</Typography>
                                </div>
                            </div>
                        </div>
                        <Card elevation={3} className={classes.slider}>
                            <img src={team} alt="career" className={classes.slideImage} />
                        </Card>
                    </div>
                </div>
            </div>

        </div >
    )
}