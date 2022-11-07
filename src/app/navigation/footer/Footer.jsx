import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./Footer.styles";
import { useNavigate } from "react-router";

import Logo from "../../../assets/logo.png";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

export const Footer = () => {
  const styles = useStyles();
  const push = useNavigate();

  return (
    <div className={styles.mainDiv}>
      <div className={styles.footerDiv}>
        <img src={Logo} alt="Logo" className={styles.img} />
        <div className={styles.textDiv}>
          <Typography className={styles.heading}>Escort</Typography>
          <Typography className={styles.details}>
            ESCORT is a system developed mainly for SLIIT students to make their university life more easier. In ESCORT we students can ask administrative related question, identify and  get solutions for their psychological issues, get career guidance, and identify their weakness module and get recommendations for that. ESCORT will make your uni life more efficient.
          </Typography>
        </div>
        <div className={styles.lastDiv}>
          <div className={styles.buttonDiv}>
            <Button
              variant="text"
              className={styles.mobPadding}
              color="inherit"
              onClick={() => push("/contact-us")}
            >
              Contact Us
            </Button>
            <Button
              variant="text"
              className={styles.mobPadding}
              color="inherit"
              onClick={() => push("/about-us")}
            >
              About Us
            </Button>
          </div>
          <div className={styles.buttonDiv}>
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
          <div className={styles.copy}>
            <Typography className={styles.copyright}>
              Copyright 2022 © Escort. All Rights Reserved.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
