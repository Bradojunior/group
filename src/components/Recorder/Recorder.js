import rec from "./Recorder.module.css";
import RecorderItem from "../RecorderItem/RecorderItem";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

import CountDown from "../CountDown/CountDown";

const Recorder = () => {
  const quizCode = localStorage.getItem("quizCode");
  const email = localStorage.getItem("email");
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionNo, setQuestionNo] = useState(1);
  const [questionState, setQuestionState] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeAllowed, setTimeAllowed] = useState(0);
  const [timeInMilliSecs, setTimeInMilliSecs] = useState(0);
  // const [countDown, setCountDown] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  let countDown = useRef(0);
  const [timeUp, setTimeUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://evening-dusk-96253.herokuapp.com/api/quiz/test/${quizCode}`
        );
        console.log(res);
        setQuestions(res.data.data.questions);
        const time = res.data.data.time;
        // setTimeAllowed("1:00");
        let arr = [];
        const questionObj = res.data.data.questions.map((question) => {
          arr.push(undefined);
          return { isAnswered: false, userAnswer: "" };
        });
        setQuestionState(questionObj);
        setUserAnswers(arr);
        getTimeInMs("1:00").then((response) => {
          setTimeAllowed(response / 1000);
          const day = new Date();
          const examTime = new Date();
          const time = examTime.getTime();
          const examTimeInMilliSecs = time + response;
          examTime.setTime(examTimeInMilliSecs);
          const futureTime = examTime.getTime();
          countDown.current = response / 1000;
          // setCountDown(response / 1000);
          setTimeInMilliSecs(futureTime);
        });
        // setTimeAllowed(time[time.length - 1]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let i;
    if (timeAllowed > 0) {
      if (!timeUp) {
        i = setInterval(handleCountDown, 1000);
      } else {
        console.log("time up");
        clearInterval(i);
        handleSubmit();
      }
    }
  }, [timeAllowed, timeUp]);

  const handleCountDown = () => {
    if (countDown.current >= 0) {
      setProgressBar(countDown.current);
      countDown.current = --countDown.current;
    } else {
      setTimeUp(true);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const submit = await axios.post(
        `https://evening-dusk-96253.herokuapp.com/api/quiz/${quizCode}/${email}`,
        { array: userAnswers }
      );
      console.log(submit);
      localStorage.setItem("message", submit.data.message);
      navigate("/QuizComplete");
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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

  const getTimeInMs = (time) => {
    return new Promise((resolve, reject) => {
      let arr = time.split(":");
      let secs = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr.length === 3) {
          if (i === 0) secs += +arr[i] * 3600;
          else if (i === 1) secs += +arr[i] * 60;
          else secs += +arr[i];
        } else if (arr.length === 2) {
          if (i === 0) secs += +arr[i] * 60;
          else if (i === 1) secs += +arr[i];
        }
      }
      resolve(secs * 1000);
    });
  };

  const showAnswers = () => {
    console.log(userAnswers);
    console.log(timeAllowed);
    console.log(timeInMilliSecs);
    console.log("countDown value is: " + countDown.current);
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
              {questions.length > 0 && timeInMilliSecs > 0 ? (
                <CircularProgressbarWithChildren
                  value={progressBar}
                  minValue={0}
                  maxValue={timeAllowed}
                  strokeLinecap="butt"
                  styles={{
                    path: {
                      stroke: `rgba(62, 152, 199, ${
                        (progressBar / timeAllowed) * 100
                      })`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transformOrigin: "center center",
                    },
                    trail: {
                      stroke: "#d6d6d6",
                      strokeLinecap: "butt",
                      transformOrigin: "center center",
                    },
                  }}
                >
                  <CountDown timeAllowed={timeInMilliSecs} />
                </CircularProgressbarWithChildren>
              ) : (
                <Spinner size="md" />
              )}
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

                  {!loading ? (
                    <Button
                      colorScheme="red"
                      type="submit"
                      ml={3}
                      onClick={handleSubmit}
                    >
                      Yes
                    </Button>
                  ) : (
                    <Button
                      colorScheme="red"
                      type="submit"
                      ml={3}
                      onClick={handleSubmit}
                    >
                      <Spinner size="md" />
                    </Button>
                  )}
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
