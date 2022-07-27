import rec from "./Recorder.module.css";
import RecorderItem from "../RecorderItem/RecorderItem";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Timer from "simple-circle-timer";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import {
  Spinner,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

import Countdown from "react-countdown";

const Recorder = () => {
  const quizCode = localStorage.getItem("quizCode");
  const email = localStorage.getItem("email");
  const [timerExists, setTimeAllowedExists] = useState(true);
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionNo, setQuestionNo] = useState(1);
  const [questionState, setQuestionState] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeAllowed, setTimeAllowed] = useState("");
  const [timeInMilliSecs, setTimeInMilliSecs] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://evening-dusk-96253.herokuapp.com/api/quiz/test/${quizCode}`
        );
        setQuestions(res.data.data);
        const time = res.data.message.split(" ");
        setTimeAllowed(time[time.length - 1]);
        setTimeInMilliSecs(getTimeInSecs(timeAllowed));
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      console.log("questions have arrived");
      let arr = [];
      const questionObj = questions.map((question) => {
        arr.push(undefined);
        return { isAnswered: false, userAnswer: "" };
      });
      setQuestionState(questionObj);
      setUserAnswers(arr);
    }
  }, [questions]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const submit = await axios.post(
        `https://evening-dusk-96253.herokuapp.com/api/quiz/${quizCode}/${email}`,
        { array: userAnswers }
      );
      console.log(submit);
      localStorage.setItem("message", submit.data.message);
      navigate('/QuizComplete')
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  // const mountPaused = () => {
  //   setTimeAllowedExists(true);
  //   setRunning(false);
  // };

  // const mountRunning = () => {
  //   setTimeAllowedExists(true);
  //   setRunning(true);
  // };

  let numberOfQuestions = [];
  for (let i = 1; i <= questions.length; i++) {
    numberOfQuestions.push(i);
  }

  const handleAnsweredQuestion = (event, questionNumber) => {
    setQuestionState((prevState) => {
      prevState[questionNumber].userAnswer = event.target.value;
      prevState[questionNumber].isAnswered = true;
      return [...prevState];
    });
    setUserAnswers((prevState) => {
      prevState[questionNumber] = questionState[questionNumber].userAnswer;
      return [...prevState];
    });
  };

  const checkIfAnswered = (questionNo) => {
    if (questionState[questionNo].isAnswered) return true;
    else return false;
  };

  const handleClick = (action) => {
    switch (action) {
      case "next":
        if (questionIndex === questionState.length - 1) return;
        setQuestionIndex((prevState) => ++prevState);
        setQuestionNo((prevState) => ++prevState);
        break;

      case "previous":
        if (questionIndex === 0) return;
        setQuestionNo(questionIndex);
        setQuestionIndex((prevState) => --prevState);
        break;

      default:
        break;
    }
  };

  const handleQuestionNo = (questionNumber) => {
    const index = questionNumber - 1;
    setQuestionIndex(index);
    setQuestionNo(questionNumber);
  };

  const getTimeInSecs = (time) => {
    let arr = time.split(":");
    let secs = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr.length === 3) {
        if (i === 0) secs += +arr[i] * 3600;
        else if (i === 1) secs += +arr[i] * 60;
        else secs += +arr[i];
      }
    }
    return secs * 1000;
  };

  const showAnswers = () => {
    console.log(userAnswers);
    console.log(timeAllowed);
    console.log(timeInMilliSecs);
  };

  const pop = { fontSize: "6rem", backgroundColor: "white" };

  return (
    <>
      <div className={rec.recorder}>
        <div className={rec.firstrec}>
          <img src="images/logo.png" alt="" onClick={showAnswers} />
          <div className={rec.question}>
            {questions.length > 0 && (
              <h2 className={rec.questionNo}>{questionNo}</h2>
            )}
            <h3>
              {questions.length > 0 ? (
                questions[questionIndex].question
              ) : (
                <Spinner size="md" />
              )}
            </h3>
          </div>
          <div className={rec.choose}>
            {questions.length > 0 ? (
              questions[questionIndex].options.map((option, index) => (
                <div className={rec.radio}>
                  <input
                    key={index}
                    type="radio"
                    name="radio"
                    value={option}
                    checked={
                      questionState[questionIndex]?.userAnswer === option
                        ? true
                        : false
                    }
                    onChange={(event) =>
                      handleAnsweredQuestion(event, questionIndex)
                    }
                  />
                  <label className={rec.label} htmlFor="">
                    {option}
                  </label>
                  <br />
                </div>
              ))
            ) : (
              <Spinner size="md" />
            )}
          </div>
          <div className={rec.next}>
            <div onClick={() => handleClick("previous")}>
              <button>Previous</button>
            </div>
            <div onClick={() => handleClick("next")}>
              <button>Next</button>
            </div>
          </div>
        </div>
        <div className={rec.secondrec}>
          <div>
            <div className={rec.timer}>
              {/* {timerExists ? (
                <Timer
                  running={running}
                  setRunning={setRunning}
                  reset={reset}
                  setReset={setReset}
                  minutes={50}
                />
              ) : null} */}
              <CircularProgressbarWithChildren
                value={50}
                maxValue={100}
                strokeLinecap="round"
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${50 / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              >
                {questions.length > 0 ? (
                  <Countdown date={Date.now() + timeInMilliSecs} />
                ) : (
                  <Spinner size="md" />
                )}
              </CircularProgressbarWithChildren>
            </div>
          </div>

          <div className={rec.questions}>
            <h2>Questions Answered</h2>
            <div className={rec.questionNumbers}>
              {questionState.length > 0 ? (
                questionState.map((question, index) => (
                  <RecorderItem
                    key={index}
                    number={++index}
                    isAnswered={question.isAnswered}
                    handleQuestionNo={handleQuestionNo}
                  />
                ))
              ) : (
                <Spinner size="md" />
              )}

              <div className={rec.map}></div>
            </div>
            <button onClick={onOpen}>Submit</button>
            <AlertDialog
              motionPreset="slideInBottom"
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isOpen={isOpen}
              isCentered
            >
              <AlertDialogOverlay />

              <AlertDialogContent>
                <AlertDialogHeader>Submit Test?</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  Are you sure you want to submit your test?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    No
                  </Button>
                
                  {!loading ? 
                  (<Button
                    colorScheme="red"
                    type="submit"
                    ml={3}
                    onClick={handleSubmit}
                  >
                    Yes
                  </Button>)
                  :
                  (<Button
                    colorScheme="red"
                    type="submit"
                    ml={3}
                    onClick={handleSubmit}
                  >
                   <Spinner size="md" />
                  </Button>)
                  }
                 
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </>
  );
};
export default Recorder;
