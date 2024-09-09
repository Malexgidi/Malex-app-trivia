import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const ResultsScreen = ({ route, navigation }) => {
  const { correctAnswers, wrongAnswers } = route.params;
  const totalCorrect = correctAnswers.length;

  return (
    <View style={styles.gameScreenQuestion}>
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

      {/* Header for the results */}
      <Text style={styles.resultsheader}>Results</Text>

      {/* Section to display the number of correct and incorrect answers */}
      <View style={styles.resultsdisplay}>
      <Text style={styles.totaltime}> Total Time Used: 01:00 </Text>
        <View style={styles.totalresultdisplay}>
          {/* Correct Answers Display */}
          <View style={styles.correct}>
            <Text style={styles.text}>{totalCorrect} Correct</Text>
            <Image
              style={styles.correctlogo}
              source={require('../assets/images/correct.png')}
            />
          </View> 
          
          {/* Divider Line */}
          <View>
            <Image
              style={styles.line}
              source={require('../assets/images/Line16.png')}
            />
          </View>

          {/* Incorrect Answers Display */}
          <View style={styles.incorrect}>
            <Text style={styles.text}>{wrongAnswers.length} Incorrect</Text>
            <Image
              style={styles.incorrectlogo}
              source={require('../assets/images/wrong.png')}
            />
          </View>
        </View>
      </View>

      {/* Message Section */}
      <View style={styles.message}>
       

        {/* Conditional rendering of the message based on the number of correct answers */}
        {totalCorrect >= 5 ? (
          <>
           <Image 
          style={styles.Animation}
          source={require('../assets/images/Animation.png')}
        />
            <Text style={styles.luck}>Better luck next time</Text>
            <Text style={styles.won}>Congratulations You Won 🎉</Text>
          </>
        ) : (
          <>
           <Image 
          style={styles.Animation}
          source={require('../assets/images/Animation2.png')}
        />
            <Text style={styles.luck}>Better luck next time</Text>
            <Text style={styles.won}> Sorry you Didn’t win </Text>
          </>
        )}
      </View>

      {/* Go Home Button */}
      <View>
        <LinearGradient
          colors={['#FEE65E', '#ED7B2B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.linear}
        />
        <TouchableOpacity style={styles.gohome} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.hometext}>Go Home</Text>
          <LinearGradient style={styles.secMobileWoIcon} locations={[0, 1]} colors={['#fee65e', '#ed7b2b']} useAngle={true} angle={211.18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreenQuestion: {
    backgroundColor: "#17478b",
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  resultsheader: {
    alignItems: "center",
   
    top: 100,
    fontSize: 24,
lineHeight: 44,
fontWeight: "700",
fontFamily: "DMSans-Bold",
color: "#f9f9f9",
textAlign: "center"

  },
  line:{
    left:-16,
    height: 25,
    top: -4
  },
  resultsdisplay: {
    backgroundColor: "#DFF9FF",
     top: 150,
     width: "85%",
     height: 86,
     left: "8%",
     borderColor: "#00CBF7",
     borderWidth: 2,
     borderRadius: 10,
     alignItems: "center",
     justifyContent: "center"
  },
  totalresultdisplay:{
    flexDirection: "row",
    gap: 20,
    top: 6,
    left: 15
  },
  totaltime:{
    fontSize: "12px",
    bottom: 8
  },
  correctlogo:{
    height: "65%",
    width: "16%",
    top: 0
  },
  correct:{
    flexDirection: "row",
    
  },
  incorrectlogo:{
    height: "65%",
    width: "16%",
    top: 0
  },
  incorrect:{
    flexDirection: "row"
  },
  text: {
    fontSize: "14px",
    marginBottom: 10,
    fontWeight: "700",
    fontFamily: "SpaceGrotesk-Bold",
    alignItems: "center",
    justifyContent: "center",
    
  },
  message:{
    backgroundColor: "#DFF9FF",
    top: 170,
    width: "85%",
    height: 260,
    left: "8%",
    borderColor: "#00CBF7",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  Animation:{
    top: -60,
    width: "35%",
    height: 100
  },
  luck:{
    top: -55,
    fontFamily: "SpaceGrotesk-Medium",
    fontWeight: "500",
  },
  won:{
    top: -35,
    fontSize: 18,
    fontWeight: "500",
  },

  hometext:{
    fontWeight: "700",
  },  
  gohome:{
    top: 380,
    backgroundColor: "#00CBF7",
    color: "#3b3b3b",
   textAlign: "center",
 
    fontSize: 14,
    width: "80%",
    backgroundColor: "#00CBF7",
    overflow: "hidden",
    position: "absolute",
    borderRadius: 30,
    left: "10%",
    height: 58,
    alignItems: "center",
    justifyContent: "center"
   
  },
  linear:{
    top: 385,
    width: "78%",
    height: 58,
    borderRadius: 30,
    left: "11%",
  },

  image6Parent: {
    top: -34,
    left: -18,
    position: "absolute",
  },
  image6Icon: {
    height: 492,
  },
  image7Icon: {
    height: 508,
  },
  iconLayout: {
    opacity: 0.3,
  },
});

export default ResultsScreen;