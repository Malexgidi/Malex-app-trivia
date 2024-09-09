import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const GameScreen = ({ route, navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986')
      .then(response => {
        const decodedQuestions = response.data.results.map(question => ({
          ...question,
          question: decodeURIComponent(question.question),
          correct_answer: decodeURIComponent(question.correct_answer),
          incorrect_answers: question.incorrect_answers.map(ans => decodeURIComponent(ans)),
        }));
        setQuestions(decodedQuestions);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev === 1) {
            clearInterval(interval);
            handleNextQuestion();
            return 10;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, currentQuestionIndex, questions]);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.correct_answer) {
      setScore(prev => prev + 1);
      setCorrectAnswers(prev => [...prev, currentQuestion]);
    } else {
      setWrongAnswers(prev => [...prev, currentQuestion]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswer(null);
      setCurrentQuestionIndex(prev => prev + 1);
      setTimer(10);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    navigation.navigate('ResultsScreen', {
      score,
      correctAnswers,
      wrongAnswers,
    });
  };

  if (questions.length === 0) {
    return <View style={{
      backgroundColor: 'white',
      position: 'absolute', 
      top: 0, left: 0, 
      right: 0, bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center'}}>
  <Text > Loading...</Text>
  </View>
  }

  if (currentQuestionIndex >= questions.length) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <View style={styles.gameScreenQuestion}>
      {/* Status bar section */}
      <View style={styles.uiBarsStatusBarsBlack}></View>

      {/* Image Section */}
      <View style={styles.image6Parent}>
        <Image
          style={[styles.image6Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/images/image6.png')}
        />
        <Image
          style={[styles.image7Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/images/image6.png')}
        />
      </View>

      {/* Question Section */}
      <View style={styles.gameScreenQuestionChild} />
      <View style={styles.questionScreen}>
        <View style={[styles.question1Parent, styles.parentFlexBox]}>
          <Text style={styles.question1}>Question {currentQuestionIndex + 1}</Text>
          <Text style={[styles.whoWasThe, styles.bTypo1]}>
            {currentQuestion.question}
          </Text>
        </View>
      </View>

      {/* Answer Options Section */}
      <View style={styles.correctBarParent}>
        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).sort().map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.correctBar,
              {
                backgroundColor: selectedAnswer === answer ? (answer === currentQuestion.correct_answer ? 'green' : 'red') : 'white',
                // color : selectedAnswer === answer ? (answer === currentQuestion.correct_answer ? '#F9F9F9' 'black' ) : 'black',
              }
            ]}
            onPress={() => handleAnswer(answer)}
          >
            <Text style={styles.a}>{String.fromCharCode(65 + index)}.</Text>
            <Text style={styles.georgeWashington}>{answer}</Text>

            {/* Conditional icon rendering */}
            {selectedAnswer === answer && (
              <Image
                style={styles.answerIcon}
                resizeMode="contain"
                source={
                  answer === currentQuestion.correct_answer
                    ? require('../assets/images/correct.png')
                    : require('../assets/images/icroundcancel.png')
                }
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Section */}
      <View>
        <Text style={[styles.chooseCorrectOption, styles.textClr]}>
          Choose Correct Option
        </Text>
      </View>

      {/* Timer Section */}
      <View style={[styles.octiconstopwatch24Parent, styles.parentLayout]}>
        <Image
          style={[styles.octiconstopwatch24, styles.octiconstopwatch24Layout]}
          resizeMode="cover"
          source={require('../assets/images/octiconstopwatch24.png')}
        />
        <View style={[styles.ellipseParent, styles.parentLayout]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/images/Ellipse326.png')}
          />
          <Text style={[styles.text1, styles.textClr]}>{timer}s</Text>
        </View>
        <Text style={[styles.text2, styles.textClr]}>00.00.40</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({


  textTypo: {
    fontSize: 14,
    textAlign: "center",
  },
  iconLayout: {
    opacity: 0.3,
    width: 492,
  },
  parentFlexBox: {
    gap: 24,
    alignItems: "center",
    position: "absolute",
  },
  bTypo1: {
    fontFamily: "SpaceGrotesk-Medium",
    fontWeight: "500",
  },
  octiconstopwatch24Layout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  aTypo: {
    fontSize: 18,
    textAlign: "left",
    fontFamily: "SpaceGrotesk-Medium",
    fontWeight: "500",
  },
  whoWasTheTypo: {
    fontSize: 16,
    color: "#1b1b1b",
  },
  parentBorder: {
    borderWidth: 1,
    borderColor: "#b5b5b5",
    width: 373,
    backgroundColor: "#f9f9f9",
    borderRadius: 101,
    borderStyle: "solid",
    overflow: "hidden",
  },
  bTypo: {
    lineHeight: 18,
    textAlign: "left",
    fontSize: 18,
    color: "#1b1b1b",
    position: "absolute",
  },
  textClr: {
    color: "#fff",
    position: "absolute",
  },
  parentLayout: {
    height: 45,
    position: "absolute",
  },
  textload:{
     alignItems:'center',
        justifyContent:'center'
  },
  batteryIcon: {
    height: "25.83%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.77%",
    left: "89.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    width: 18,
    height: 12,
  },
  mobileSignalIcon: {
    width: 19,
    height: 12,
  },
  text: {
    height: "85.59%",
    top: "9.53%",
    left: "0%",
    letterSpacing: -0.3,
    fontFamily: "Montserrat-Regular",
    color: "#f9f9f9",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.71%",
    width: "14.4%",
    top: "27.27%",
    right: "81.24%",
    bottom: "25.02%",
    left: "4.36%",
    position: "absolute",
  },
  uiBarsStatusBarsBlack: {
    height: "5.15%",
    marginLeft: -215,
    top: "0%",
    bottom: "94.85%",
    width: 430,
    left: "50%",
    position: "absolute",
  },
  image6Icon: {
    height: 492,
  },
  image7Icon: {
    height: 508,
  },
  image6Parent: {
    top: -34,
    left: -32,
    position: "absolute",
  },
  gameScreenQuestionChild: {
    top: 376,
    width: 382,
    height: 172,
    left: 24,
    position: "absolute",
  },
  question1: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "SpaceGrotesk-Bold",
    color: "#000",
    textAlign: "center",
  },
  whoWasThe: {
    lineHeight: 24,
    width: 336,
    color: "#1b1b1b",
    fontSize: 16,
    textAlign: "center",
  },
  question1Parent: {
    marginTop: -60,
    top: "50%",
    left: 24,
  },
  questionScreen: {
    marginLeft: -199,
    top: 152,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 4,
      height: 16,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#00cbf7",
    borderWidth: 8,
    width: 378,
    height: 198,
    borderStyle: "solid",
    left: "52%",
    position: "absolute",
    overflow: "hidden",
  },
  iconParkSolidcheckOne: {
    left: 295,
    top: 22,
  },
  a: {
    textAlign: "left",
    lineHeight: 20,
    color: "#1b1b1b",
    top: 20,
    left: 35,
    fontWeight: 500,
    
  },
  georgeWashington: {
    fontFamily: "Space Grotesk",
    textAlign: "left",
    lineHeight: 20,
   
    color: "#1b1b1b",
    left: 80,
 
  },
  aParent: {
    flexDirection: "row",
    left: 35,
    top: 22,
    justifyContent: "center",
  },
  correctBar: {
    color: "#F9F9F9",
    height: 66,
    width: 370,
    backgroundColor: "#f9f9f9",
    borderRadius: 101,
    overflow: "hidden",
  },
  nelsonMandela: {
    marginTop: -9.95,
    left: 76,
    fontFamily: "SpaceGrotesk-Regular",
    top: "50%",
  },
  b: {
    top: 23,
    left: 35,
    fontFamily: "SpaceGrotesk-Medium",
    fontWeight: "500",
  },
  nelsonMandelaParent: {
    height: 66,
  },
  johnFKennedy: {
    marginTop: -9.45,
    left: 82,
    fontFamily: "SpaceGrotesk-Regular",
    top: "50%",
  },
  c: {
    top: 26,
    left: 36,
    fontFamily: "SpaceGrotesk-Medium",
    fontWeight: "500",
  },
  johnFKennedyParent: {
    height: 65,
  },
  correctBarParent: {
    top: 435,
    gap: 20,
    left: 14,
    position: "absolute",
    width: "90%",
    color: "#F9F9F9"
  },
  chooseCorrectOption: {
    top: 393,
    lineHeight: 30,
    textAlign: "left",
    fontSize: 18,
    fontFamily: "SpaceGrotesk-Medium",
    fontWeight: "500",
    left: 12,
    color: "white"
  },
  octiconstopwatch24: {
    top: 8,
    left: 0,
  },
  frameChild: {
    top: 1,
    left: 3,
    width: 43,
    height: 43,
    position: "absolute",
  },
  text1: {
    top: 13,
    left: 19,
    fontSize: 10,
    lineHeight: 20,
    fontFamily: "SpaceGrotesk-Medium",
    fontWeight: "500",
    textAlign: "center",
  },
  ellipseParent: {
    marginLeft: 59.5,
    top: 0,
    width: 49,
    left: "50%",
  },
  text2: {
    top: 11,
    left: 25,
    fontFamily: "SpaceGrotesk-Regular",
    lineHeight: 20,
    textAlign: "center",
    fontSize: 14,
  },
  octiconstopwatch24Parent: {
    top: 83,
    left: 22,
    width: 217,
  },
  gameScreenQuestion: {
    backgroundColor: "#17478b",
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
  answerIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 30,
    height: 30,
    color: "white"
  }

});

export default GameScreen;
