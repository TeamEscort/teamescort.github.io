import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./ContactUs.styles";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/26984210-5dc0-11ed-b82c-5d75eaa7ccff";

export const ContactUS = () => {
    const classes = useStyles();
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    return (
        <div className={classes.mainDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#14A5C5" fill-opacity="1" d="M0,288L21.8,293.3C43.6,299,87,309,131,288C174.5,267,218,213,262,208C305.5,203,349,245,393,245.3C436.4,245,480,203,524,181.3C567.3,160,611,160,655,176C698.2,192,742,224,785,245.3C829.1,267,873,277,916,272C960,267,1004,245,1047,218.7C1090.9,192,1135,160,1178,165.3C1221.8,171,1265,213,1309,208C1352.7,203,1396,149,1418,122.7L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
            </svg>
            <div className={classes.mainContentDiv}>
                <div className={classes.contentDiv}>
                    <div className={classes.contactCard}>
                        <Typography className={classes.cardText}>We are here - Let's talk</Typography>
                    </div>

                    <div className={classes.mainComponentDiv}>
                        <form
                            action={FORM_ENDPOINT}
                            onSubmit={handleSubmit}
                            method="POST"
                            target="_blank"
                            className={classes.form}
                        >
                            <div className={classes.width}>
                                <TextField className={classes.width} type="text" placeholder="Your name" name="name" required variant="outlined" />
                            </div>
                            <div>
                                <TextField className={classes.width} type="email" placeholder="Email" name="email" required variant="outlined" />
                            </div>
                            <div>
                                <textarea className={classes.texts} placeholder="Your message" name="message" required />
                            </div>
                            <div className={classes.contactButton}>
                                <Button className={classes.button} type="submit"> Send a message </Button>
                            </div>
                        </form>
                        {submitted &&
                            <div className={classes.submit}>
                                <div className="text-2xl">Thank you!</div>
                                <div className="text-md"> We'll be in touch soon.</div>
                            </div>}
                    </div>
                </div>
            </div>

        </div >
    )
}