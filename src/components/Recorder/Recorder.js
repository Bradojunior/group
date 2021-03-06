import rec from "./Recorder.module.css";
import RecorderItem from "../RecorderItem/RecorderItem";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import questions from "../../questions.json";
import { useState, useEffect } from "react";
import axios from "axios";
import Timer from "simple-circle-timer";
import React from "react";
import {
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

const Recorder = () => {
  const [timerExists, setTimerExists] = useState(true);
  const [running, setRunning] = useState(true);
  const [reset, setReset] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const mountPaused = () => {
    setTimerExists(true);
    setRunning(false);
  };

  const mountRunning = () => {
    setTimerExists(true);
    setRunning(true);
  };

  const [setTimeout, setsetTimeout] = useState(0);
  let numberOfQuestions = [];
  for (let i = 1; i <= 50; i++) {
    numberOfQuestions.push(i);
  }

  const questionObj = questions.map((question) => {
    return { isAnswered: false, userAnswer: "" };
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionState, setQuestionState] = useState([...questionObj]);

  const handleAnsweredQuestion = (event, questionNumber) => {
    setQuestionState((prevState) => {
      prevState[questionNumber].userAnswer = event.target.value;
      console.log(questionState);
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
        if (questionState[questionIndex].userAnswer) {
          let index = questionIndex - 1;
          setQuestionIndex((prevState) => ++prevState);
          setQuestionState((prevState) => {
            prevState[questionIndex].isAnswered = true;
            return [...prevState];
          });
        }
        setQuestionIndex((prevState) => ++prevState);
        break;

      case "previous":
        if (questionIndex === 0) return;
        setQuestionIndex((prevState) => --prevState);
        break;

      default:
        break;
    }
  };

  const pop = { fontSize: "6rem", backgroundColor: "white" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(``);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={rec.recorder}>
        <div className={rec.firstrec}>
          <img src="images/logo.png" alt="" />
          <h3>{questions[questionIndex].question}</h3> 
          <div className={rec.choose}>
            {questions[questionIndex].options.map((option) => (
              <div>
                <input
                  key={option.id}
                  type="radio"
                  name="radio"
                  value={option}
                  onClick={(event) =>
                    handleAnsweredQuestion(event, questionIndex)
                  }
                />
                <label htmlFor="">{option}</label>
                <br />
              </div>
            ))}
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
          <div className={rec.peace}>
            <div>
              {" "}
              <CgProfile pop={pop} />{" "}
            </div>
            <div className={rec.base}>
              <select name="select" id="">
                <option value="">Hallilu</option>
                <option value="">Logout</option>
              </select>
            </div>
          </div>
          <div>
            <div className={rec.timer}>
              {timerExists ? (
                <Timer
                  running={running}
                  setRunning={setRunning}
                  reset={reset}
                  setReset={setReset}
                />
              ) : null}
            </div>
          </div>

          <div className={rec.questions}>
            <h2>Questions Answered</h2>
            <div className={rec.questionNumbers}>
              {numberOfQuestions.map((question, index) => (
                <RecorderItem
                  key={index}
                  isAnswered={questionState[questionIndex].isAnswered}
                  number={question}
                />
              ))}

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
                  <Link to="/QuizComplete">
                    <Button colorScheme="red" ml={3}>
                      Yes
                    </Button>
                  </Link>
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
