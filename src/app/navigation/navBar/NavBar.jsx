import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Grid,
  SwipeableDrawer,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Escort from "../../../assets/logo.png";
import { useStyles } from "./NavBar.styles";

export const NavBar = () => {
  const styles = useStyles();
  const push = useNavigate();

  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDrawerActivate(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setDrawerActivate(true);
      } else {
        setDrawerActivate(false);
      }
    });
  }, [drawerActivate, drawer]);

  //Small Screens
  const createDrawer = () => {
    return (
      <>
        <div className={styles.mainDiv}>
          <AppBar className={styles.appBar}>
            <Toolbar className={styles.toolBar}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <MenuIcon
                  className={styles.sideBarIcon}
                  onClick={() => {
                    setDrawer(true);
                  }}
                />
                <img src={Escort} alt="logo" className={styles.image} />
                <Button
                  variant="text"
                  className={styles.title}
                  color="inherit"
                  onClick={() => push("/")}
                >
                  Escort
                </Button>
                <Typography color="inherit" variant="headline"></Typography>
              </Grid>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
            open={drawer}
            onClose={() => {
              setDrawer(false);
            }}
            onOpen={() => {
              setDrawer(true);
            }}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                setDrawer(true);
              }}
              onKeyDown={() => {
                setDrawer(true);
              }}
            >
              <List className={styles.list}>
                <ListItem key={1} button divider>
                  <Button
                    variant="text"
                    className={styles.mobPadding}
                    color="inherit"
                    onClick={() => push("/administration")}
                  >
                    Administration
                  </Button>
                </ListItem>
                <ListItem key={2} button divider>
                  <Button
                    variant="text"
                    className={styles.mobPadding}
                    color="inherit"
                    onClick={() => push("/career-guidance")}
                  >
                    Career Guidance
                  </Button>
                </ListItem>
                <ListItem key={3} button divider>
                  <Button
                    variant="text"
                    className={styles.mobPadding}
                    color="inherit"
                    onClick={() => push("/psychology_home")}
                  >
                    Psychological Solution
                  </Button>
                </ListItem>
                <ListItem key={3} button divider>
                  <Button
                    variant="text"
                    className={styles.mobPadding}
                    color="inherit"
                    onClick={() => push("/performance")}
                  >
                    Performance Analysis
                  </Button>
                </ListItem>

              </List>
            </div>
          </SwipeableDrawer>
        </div>
      </>
    );
  };

  //Larger Screens
  const destroyDrawer = () => {
    return (
      <>
        <div className={styles.mainDiv}>
          <AppBar className={styles.appBar}>
            <Toolbar className={styles.toolBar}>
              <img src={Escort} alt="logo" className={styles.image} />
              <div className={styles.topDiv}>
                <Button
                  variant="text"
                  className={styles.title}
                  color="inherit"
                  onClick={() => push("/")}
                >
                  Escort
                </Button>
                <div className={styles.nav}>
                  <Button
                    variant="text"
                    className={styles.padding}
                    color="inherit"
                    onClick={() => push("/administration")}
                  >
                    Administration
                  </Button>
                  <Button
                    variant="text"
                    className={styles.padding}
                    color="inherit"
                    onClick={() => push("/career-guidance")}
                  >
                    Career Guidance
                  </Button>
                  <Button
                    variant="text"
                    className={styles.padding}
                    color="inherit"
                    onClick={() => push("/psychology_home")}
                  >
                    Psychological Solution
                  </Button>
                  <Button
                    variant="text"
                    className={styles.padding}
                    color="inherit"
                    onClick={() => push("/performance")}
                  >
                    Performance Analysis
                  </Button>

                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </>
    );
  };

  return <div>{drawerActivate ? createDrawer() : destroyDrawer()}</div>;
};
