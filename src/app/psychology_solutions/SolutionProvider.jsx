import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { SpinnerRoundFilled } from 'spinners-react';

import { useStyles } from "./SolutionProvider.styles";
import Psychologist from "../../assets/abarna/psychologist.jpg";
import Idea from "../../assets/abarna/idea.png";
import SadLight from "../../assets/abarna/sad_light.png";
import Light from "../../assets/abarna/light.png";

const BaseURL = 'https://psychology-backend.herokuapp.com'
// const BaseURL = 'http://127.0.0.1:5002'

const SolutionProvider = () => {
  const styles = useStyles();
  const location = useLocation();
  const push = useNavigate();
  const [solutions, setSolutions] = useState([]);
  var title = false

  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    var data = {
      'issue': issue,
    }

    if (location.state.language === "english") {
      axios.post(BaseURL + '/english/submitted', data, {
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      }, setLoading(true))
        .then(res => {
          const data = res.data
          setSolutions(data)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
    else if (location.state.language === "tamil") {
      axios.post(BaseURL + '/tamil/submitted', data, {
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      }, setLoading(true))
        .then(res => {
          const data = res.data
          setSolutions(data)
          setLoading(false)
        })

        .catch(error => console.log(error))
    }
    else if (location.state.language === "sinhala") {
      axios.post(BaseURL + '/sinhala/submitted', data, {
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      }, setLoading(true))
        .then(res => {
          const data = res.data
          setSolutions(data)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
    else if (location.state.language === "thanglish") {
      axios.post(BaseURL + '/thanglish/submitted', data, {
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      }, setLoading(true))
        .then(res => {
          const data = res.data
          setSolutions(data)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
  }
  const [issue, setIssue] = useState('');

  const checkData = () => {
    if (solutions.length > 0) {
      return (
        <div>
          <Typography className={styles.heading}>
            {location.state.language === "english"
              ? "Solutions for your issues"
              : location.state.language === "tamil"
                ? "பரிந்துரைக்கப்பட்ட தீர்வுகள்"
                : location.state.language === "sinhala"
                  ? "ප්රධාන වචන"
                  : "Parinthuraikappatta Theervukal"}
          </Typography>

          {solutions.map((s) => {
            if (s.solution == "No results found" || s.solution == "முடிவுகள் எதுவும் இல்லை" || s.solution == "ප්‍රතිඵල හමු නොවිණි" || s.solution == "Mudivukal ethuvum illai") {
              return <div className={styles.notFound}>
                <div className={styles.sadDiv}>
                  <img src={SadLight} className={styles.sadImg} />
                </div>
                <p>{s.solution}</p>
              </div>
            }
            else {
              return <span className={styles.span}><img src={Idea} className={styles.idea} /><p>{s.solution}</p></span>
            }

          })}

        </div>
      )
    }
    else {
      return null;
    }
  };

  return (
    <Container maxWidth="lg">

      <Grid container spacing={2} className={styles.main}>
        <Grid item xs={5}>
          <img src={Psychologist} alt="sliit" className={styles.imgDiv} />

          <div className={styles.text}>
            <Typography className={styles.heading}>
              {location.state.language === "english"
                ? "We are here to help you"
                : location.state.language === "tamil"
                  ? "உங்களுக்கு உதவ நாங்கள் இருக்கிறோம்"
                  : location.state.language === "sinhala"
                    ? "අපි ඔබට උදව් කිරීමට මෙහි සිටිමු"
                    : "Ungaluku uthava naangal irukinroam"}
            </Typography>

            <Typography className={styles.para}>
              {location.state.language === "english"
                ? "Please describe your issues in the given text box"
                : location.state.language === "tamil"
                  ? "அருகிலுள்ள உரை பெட்டியில் உங்கள் பிரச்சனைகளை விபரிக்கவும்"
                  : location.state.language === "sinhala"
                    ? "කරුණාකර ඔබගේ ගැටළු සපයා ඇති පෙළ කොටුවේ විස්තර කරන්න"
                    : "Aruhilulla urai pettiyil ungal pirachchinaikalai viparikkavum"}
            </Typography>

            <Typography className={styles.para}>
              {location.state.language === "english"
                ? "Click the Search Solution Button"
                : location.state.language === "tamil"
                  ? "தேடல் பொத்தானை அழுத்தவும்"
                  : location.state.language === "sinhala"
                    ? "සෙවුම් බොත්තම ක්ලික් කරන්න"
                    : "Theadu pothaanai azhuththavum"}
            </Typography>

            <img src={Light} className={styles.lightImg} />
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <form className={styles.form} onSubmit={handleSubmit}>

            <TextField
              autoComplete="issue"
              name="issue"
              variant="outlined"
              required
              fullWidth
              rows="13"
              multiline="true"
              id="issue"
              onChange={(e) => setIssue(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
            >
              {location.state.language === "english"
                ? "Search"
                : location.state.language === "tamil"
                  ? "தேடு"
                  : location.state.language === "sinhala"
                    ? "සෙවීම"
                    : "Theadu"}
            </Button>
          </form>

          <div>
            {loading ? <div className={styles.spinner}><SpinnerRoundFilled size="70px" speed="100" color="#14A5C5" /></div> : checkData()}
          </div>
        </Grid>
      </Grid>
      <div>
      </div>


    </Container>
  );
};

export default SolutionProvider;