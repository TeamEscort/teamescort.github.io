import React, { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import { useNavigate } from "react-router";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from "./StressLevel.styles";

import Scale from "../../assets/abarna/scale.jpg";

const StressLevel = () => {
	const push = useNavigate();
	const styles = useStyles();

	const answerOption = [
		{ answerText: 'Never', value: 0 },
		{ answerText: 'Almost Never', value: 1 },
		{ answerText: 'Sometimes', value: 2 },
		{ answerText: 'Fairly Often', value: 3 },
		{ answerText: 'Very Often', value: 4 }
	]

	const questions = [
		{
			questionText: 'In the last month, how often have you been upset because of something that happened unexpectedly?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you felt that you were unable to control the important things in your life?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you felt nervous and stressed?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you not felt confident about your ability to handle your personal problems?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you felt that things were not going your way?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you found that you could not cope with all the things that you had to do?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you been unable to control irritations in your life?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you felt that you were not on top of things?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you been angered because of things that happened that were outside of your control?',
			answerOptions: answerOption,
		},
		{
			questionText: 'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?',
			answerOptions: answerOption,
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (value) => {
		if (value) {
			setScore(score + value);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const reset = (value) => {
		if (value) {
			setScore(score + value);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<Container maxWidth="lg">

			<Grid container spacing={2} className={styles.main}>
				<Grid item xs={5}>
					<img src={Scale} alt="sliit" className={styles.imgDiv} />

					<div className={styles.text}>
						{/* <Typography className={styles.heading}>
             We are here to help you
            </Typography> */}

						<Typography className={styles.para}>
							This method is Called as Perceived Stress Scale
						</Typography>

						<Typography className={styles.para}>
							This quiz will help you to predict your stress level
						</Typography>

						<Typography className={styles.para}>
							There are 10 Multiple Choice Questions
						</Typography>

						<Typography className={styles.para}>
							Select your answers to all the questions honestly
						</Typography>


					</div>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={6}>
					<div className={styles.stressCal}>
						<h1 className={styles.heading}>Calculate Your Stress Level</h1>
						<div className={styles.app}>
							{showScore ? (
								<div className={styles.scoreSection}>
									{/* You scored {score} out of {questions.length} */}
									<ReactSpeedometer
										value={score}
										currentValueText="Stress Level"
										width={400}
										textColor={'black'}
										needleColor={'#1641EC'}
										needleHeightRatio={0.7}
										valueTextFontSize={18}
										height={250}
										segments={3}
										maxValue={40}
										segmentColors={[
											"#96DE2A",
											"#EFC521",
											"#FF471A"
										]}
										customSegmentLabels={[
											{
												text: "Low",
												position: "INSIDE",
												color: "#000000",
												fontSize: "12px",
											},
											{
												text: "Moderate",
												position: "INSIDE",
												color: "#000000",
												fontSize: "12px",
											},
											{
												text: "High",
												position: "INSIDE",
												color: "#000000",
												fontSize: "12px",
											},
										]}
									/>
								</div>

							) : (
								<>
									<div className={styles.questionSection}>
										<div className={styles.questionCount}>
											<span className={styles.span}>Question {currentQuestion + 1}</span>/{questions.length}
										</div>
										<div className={styles.questionText}>{questions[currentQuestion].questionText}</div>
									</div>
									<div className={styles.answerSection}>
										{questions[currentQuestion].answerOptions.map((answerOption) => (

											<button className={styles.btn} onClick={() => handleAnswerOptionClick(answerOption.value)}>{answerOption.answerText}</button>
										))}
									</div>
								</>
							)}
						</div>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}
export default StressLevel;