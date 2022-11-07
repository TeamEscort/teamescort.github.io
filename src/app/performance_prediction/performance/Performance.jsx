import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  img: {
    height: 350,
    display: "block",
    width: "100%",
  },
});

export const Performance = () => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const module = [
    {
      label: "CASE STUDIES IN SOFTWARE ENGINEERING",
      desc: "This module provides an overview of developing a software design solution by using case studies and also focuses on different design patterns and software coding standards and best practices.",
      imgPath: "/assets/images/performance/csse.jpg",
    },
    {
      label: "DATABASE SYSTEM",
      desc: "This module aims to provide a comprehensive overview of the various database architectures and to teach the theory and practice of database design.",

      imgPath: "/assets/images/performance/ds.jpg",
    },
    {
      label: "SOFTWARE PROJECT MANAGEMENT",
      desc: "This module defines a process that divides the effort involved in implementing software into discrete phases in order to optimize software design and project management.",

      imgPath: "/assets/images/performance/sp.png",
    },
    {
      label: "USER EXPERIENCE ENGINEERING",
      desc: "This module focuses on developing a profound understanding of people, their needs, values, abilities, and constraints, and gives practice for building and designing digital products like websites and apps while using UX principles.",

      imgPath: "/assets/images/performance/ux.jpg",
    },
  ];

  const classes = useStyles();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = module.length;

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <>
      <Grid>
        {/* Title */}
        <Grid item>
          <Typography
            align="center"
            fontFamily="Playfair Display"
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              mt: "100px",
              color: "#074a6b",
            }}
          >
            GET TO KNOW YOUR PERFORMANCE <br /> & <br />
            LEVEL UP YOUR SKILLS
          </Typography>
        </Grid>

        {/* Pictures */}
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={8}
          mb={8}
          width={"100%"}
        >
          <Grid item>
            <Button
              sx={{ pl: 15 }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft sx={{ width: 70, height: 70 }} />
            </Button>
          </Grid>

          <Grid item sm={8}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {module.map((step, index) =>
                Math.abs(activeStep - index) <= 2 ? (
                  <Stack
                    direction={"row"}
                    spacing={3}
                    justifyContent="space-between"
                    // alignItems="center"
                    //text-align="right"
                    key={step.label}
                    backgroundColor="#f5f5f5"
                    //height={"90%"}
                  >
                    <Box width={"40%"}>
                      <img
                        className={classes.img}
                        alt={step.label}
                        src={step.imgPath}
                      />
                    </Box>
                    <Box width={"60%"}>
                      <Typography
                        fontFamily="lato"
                        sx={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          color: "#404040",
                          mt: 8,
                        }}
                      >
                        {module[activeStep].label}
                      </Typography>
                      <Typography
                        fontFamily="georgia"
                        sx={{ fontSize: "20px", mt: 2, textAlign: "justify" }}
                      >
                        {module[activeStep].desc}
                      </Typography>
                    </Box>
                  </Stack>
                ) : (
                  <></>
                )
              )}
            </AutoPlaySwipeableViews>
          </Grid>
          <Grid item>
            <Button
              sx={{ pr: 15 }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight sx={{ width: 70, height: 70 }} />
            </Button>
          </Grid>
        </Grid>

        <Grid item>
          <Stack
            direction={"row"}
            spacing={3}
            justifyContent="center"
            backgroundColor="#f5f5f5"
            height="100px"
          >
            <Typography
              align="flex-start"
              sx={{
                fontSize: "25px",
                lineHeight: 2,
                ml: 15,
                mr: 15,
                fontWeight: "600",

                color: "#305e75",
              }}
            >
              Escort helps you analyze your performance level in the subject you
              choose. Get recommended learning resources <br></br>that will
              improve your performance. Here you will find jobs based on your
              level of performance.
            </Typography>
          </Stack>
        </Grid>
        {/* 
Module heading */}
        <Grid item>
          <Typography
            align="flex-start"
            sx={{ fontSize: "25px", fontWeight: "bold", ml: 15, mt: "100px" }}
          >
            Select the module you preferred.
          </Typography>
        </Grid>

        {/* Module buttons */}
        <Grid
          container
          direction="row"
          display="flex"
          alignContent="center"
          justifyContent={"space-evenly"}
          mt={8}
          mb={8}
          ml={2}
        >
          <Grid item>
            <Box m={1}>
              <Box
                borderRadius="12px"
                height="290px"
                width="250px"
                p="15px"
                sx={{
                  boxShadow: 2,
                  backgroundColor: "#193847",
                  borderColor: "#101828",
                }}
              >
                <Link
                  to={"/quiz/1"}
                  state={{
                    imgUrl: "/assets/images/performance/ds_qs.jpg",
                    moduleTitle: "Database System",
                    moduleId: 1,
                  }}
                >
                  <Card
                    component="a"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width={150}
                      height={200}
                      image={"/assets/images/performance/ds_qs.jpg"}
                      sx={{
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                  </Card>
                </Link>
                <Grid container justifyContent="center" mt={2.25}>
                  <Typography
                    component="div"
                    variant="body"
                    color="white"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Database System
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            // ml={42}
          >
            <Box m={1}>
              <Box
                borderRadius="12px"
                height="300px"
                width="250px"
                p="20px"
                pb={0}
                sx={{
                  boxShadow: 2,
                  backgroundColor: "#193847",
                  borderColor: "#101828",
                }}
              >
                <Link
                  to="/quiz/2"
                  state={{
                    imgUrl: "/assets/images/performance/csse_qs.jpg",
                    moduleTitle: "Case Studies in Software Engineering",
                    moduleId: 2,
                  }}
                >
                  <Card
                    component="a"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width={180}
                      height={200}
                      image={"/assets/images/performance/csse_qs.jpg"}
                      sx={{
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                  </Card>
                </Link>
                <Grid container justifyContent="center" mt={2.25}>
                  <Typography
                    component="div"
                    variant="body"
                    color="white"
                    sx={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    Case Studies in Software <br /> Engineering
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            // ml={30}
            // mt={3}
          >
            <Box m={1}>
              <Box
                borderRadius="12px"
                height="300px"
                p="20px"
                width="250px"
                pb={0}
                sx={{
                  boxShadow: 2,
                  backgroundColor: "#193847",
                  borderColor: "#101828",
                }}
              >
                <Link
                  to="/quiz/3"
                  state={{
                    imgUrl: "/assets/images/performance/spm_qs.jpg",
                    moduleTitle: "Software Project Management",
                    moduleId: 3,
                  }}
                >
                  <Card
                    component="a"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width={180}
                      height={200}
                      image={"/assets/images/performance/spm_qs.jpg"}
                      sx={{
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                  </Card>
                </Link>
                <Grid container justifyContent="center" mt={2.25}>
                  <Typography
                    component="div"
                    variant="body"
                    color="white"
                    sx={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    Software Project Management
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            // ml={42}
            // mt={3}
          >
            <Box m={1}>
              <Box
                borderRadius="12px"
                height="300px"
                width="250px"
                p="20px"
                pb={0}
                sx={{
                  boxShadow: 2,
                  backgroundColor: "#193847",
                  borderColor: "#104152",
                }}
              >
                <Link
                  to="/quiz/4"
                  state={{
                    imgUrl: "/assets/images/performance/uee_qs.jpg",
                    moduleTitle: "User Experience Engineering",
                    moduleId: 4,
                  }}
                >
                  <Card
                    component="a"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      width={180}
                      height={200}
                      image={"/assets/images/performance/uee_qs.jpg"}
                      sx={{
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                  </Card>
                </Link>
                <Grid container justifyContent="center" mt={2.25}>
                  <Typography
                    component="div"
                    variant="body"
                    color="white"
                    sx={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "700",
                    }}
                  >
                    User Experience Engineering
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        display="flex"
        alignContent="center"
        justifyContent={"space-evenly"}
        mt={15}
        mb={10}
        //ml={2}
      >
        <Grid item sm={10.5}>
          <Stack
            direction={"row"}
            spacing={3}
            justifyContent="space-between"
            backgroundColor="#f5f5f5"
          >
            <Box width={"50%"}>
              <img
                className={classes.img}
                alt="img"
                src="/assets/images/performance/job.webp"
              />
            </Box>
            <Box width={"60%"}>
              <Typography
                fontFamily="lato"
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#404040",
                  mt: 8,
                }}
              >
                GET STARTED TO DISCOVER YOURSELF
              </Typography>
              <Typography
                fontFamily="georgia"
                sx={{ fontSize: "20px", mt: 2, textAlign: "justify" }}
              >
                Specially for students who are looking for internship
              </Typography>
              <Button
                variant="contained"
                href="/assessment"
                sx={{ mt: 8.5, fontSize: "20px", padding: "20px 40px" }}
              >
                {" "}
                Get Started
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Performance;
