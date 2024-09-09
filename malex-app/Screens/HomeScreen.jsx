import React from "react";
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";




const HomeScreen = ({navigation}) => {
  

  	return (
    		<View style={styles.homeScreenjoinGame}>
      			<View style={styles.image6Parent}>
    				<Image style={[styles.image6Icon, styles.gamePosition]} resizeMode="cover" source={require('../assets/images/image6.png')} />
        				<View style={styles.frameParent}>
          					<View style={styles.helloJohnParent}>
            						<Text style={[styles.helloJohn, styles.homeTypo]}>Hello John</Text>
    						<Image style={styles.twemojiwavingHandIcon} resizeMode="cover" source={require('../assets/images/twemojiwavinghand.png')}  />
          					</View>
          					<Text style={[styles.letsPlayAnd, styles.letsPlayAndTypo]}>Let’s play and Earn</Text>
        				</View>
        				<View style={[styles.ellipseParent, styles.groupChildLayout]}>
      					<Image style={[styles.groupChild, styles.groupChildLayout]} resizeMode="cover" source={require('../assets/images/Ellipse2.png' )}   />
  					<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" source={require('../assets/images/108.png' )}  />
        				</View>
        				
        				<View style={[styles.frameWrapper, styles.wrapperLayout]}>
          					<View style={[styles.parent, styles.text8Position]}>
            						<Text style={[styles.text1, styles.textTypo1]}>
              							<Text style={styles.joe1Typo}>₦</Text>
              							<Text style={[styles.text3, styles.textTypo]}>5,000.00</Text>
            						</Text>
    						<Image style={styles.icons8plus} resizeMode="cover" source={require('../assets/images/icons8plus.png' )}  />
          					</View>
        				</View>
        				<View style={styles.frameContainer}>
          					<View style={styles.fluenteraserSmall20RegularParent}>
        						<Image style={styles.icons8plus} resizeMode="cover" source={require('../assets/images/fluenterasersmall20regular.png' )} />
            						<Text style={[styles.text4, styles.text4Typo]}>0</Text>
          					</View>
        				</View>
				<Image style={[styles.vuesaxlinearnotificationIcon, styles.iconLayout3]} resizeMode="cover" source={require('../assets/images/notification.png')} />
      			</View>
      			<View style={[styles.groupParent, styles.frameGroupLayout]}>
    				<Image style={styles.frameChild} resizeMode="cover" source={require('../assets/images/Group1000004131.png')} />
        				<View style={[styles.frameItem, styles.frameGroupLayout]} />
                        <View >
              <TouchableOpacity
        style={[styles.joinGameWrapper, styles.wrapperBorder]}
        onPress={() => navigation.navigate('GameScreen')}
                 >
        <Text style={[styles.joinGame, styles.text9Layout]}>Join Game</Text>
      </TouchableOpacity>
    </View>
        				<View style={styles.entryFeeParent}>
          					<Text style={[styles.entryFee, styles.joe1Typo]}>Entry Fee</Text>
          					<View style={styles.group}>
            						<Text style={[styles.text5, styles.textTypo]}>₦</Text>
            						<Text style={[styles.text6, styles.textTypo]}>100.00</Text>
          					</View>
        				</View>
        				<View style={[styles.container, styles.text7Position]}>
                    <Text style={[styles.gamePrize, styles.homeTypo]}>Game Prize</Text>
          					<Text style={[styles.text7, styles.text7Position]}>₦1,000,000</Text>
          					<Text style={[styles.gamePrize, styles.homeTypo]}>Game Prize</Text>
        				</View>
        				<Text style={[styles.nextGameTomorrow, styles.textTypo]}>Next Game: Tomorrow, 8PM </Text>
        				<View style={[styles.wrapper, styles.wrapperShadowBox]}>
          					<Text style={[styles.text8, styles.textTypo]}>?</Text>
            						</View>
            						</View>
            						<View style={[styles.frameGroup, styles.frameGroupLayout]}>
              							<View style={styles.frameView}>
                								<View style={styles.frameParent1}>
                  									<View>
                    										<View style={styles.frameParent2}>
                      											<View style={styles.referEarnWithYourFriendsWrapper}>
                        												<Text style={[styles.referEarn, styles.joe1Typo]}>Refer & Earn with your Friends</Text>
                      											</View>
                      											<Text style={[styles.shareWithYour, styles.shareWithYourClr]}>Share with your friends and loved ones to come and play</Text>
                    										</View>
                  									</View>
                  									<View style={[styles.inviteFriendsWrapper, styles.wrapperBorder]}>
                    										<Text style={[styles.inviteFriends, styles.shareWithYourClr]}>Invite Friends</Text>
                  									</View>
                								</View>
              							</View>
		<Image style={styles.materialSymbolsshareIcon} resizeMode="cover" source={require('../assets/images/materialsymbolsshare.png')} />
            						</View>
            						<View style={styles.topGamersOfTheDayParent}>
              							<Text style={[styles.topGamersOf, styles.joe1Typo]}>Top Gamers of the Day</Text>
              							<View style={styles.joeParent}>
                								<View style={styles.joe}>
                  									<View style={styles.groupLayout}>
                    										<Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source={require ('../assets/images/Ellipse252.png')}/>
                    										<Image style={[styles.icon1, styles.iconLayout1]} resizeMode="cover" source={require ('../assets/images/5811.png')} />
                  									</View>
                  									<View style={styles.joeGroup}>
                    										<Text style={[styles.joe1, styles.joe1Typo]}>Joe</Text>
                    										<View style={styles.frame}>
                      											<Text style={[styles.text9, styles.text9Layout]}>
                        												<Text style={styles.joe1Typo}>₦</Text>
                        												<Text style={styles.text11}>5,000</Text>
                      											</Text>
                    										</View>
                  									</View>
                								</View>
                								<View style={styles.joe}>
                  									<View style={styles.groupLayout}>
                    										<Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source={require ('../assets/images/Ellipse2522.png')} />
                    										<Image style={[styles.icon1, styles.iconLayout1]} resizeMode="cover" source={require ('../assets/images/291.png')}/>
                  									</View>
                  									<View style={styles.joeGroup}>
                    										<Text style={[styles.joe1, styles.joe1Typo]}>Sarah</Text>
                    										<View style={styles.frame}>
                      											<Text style={[styles.text9, styles.text9Layout]}>
                        												<Text style={styles.joe1Typo}>₦</Text>
                        												<Text style={styles.text11}>5,000</Text>
                      											</Text>
                    										</View>
                  									</View>
                								</View>
                								<View style={styles.joe}>
                  									<View style={styles.groupLayout}>
                    										<Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source={require ('../assets/images/Ellipse2523.png')} />
                    										<Image style={[styles.icon1, styles.iconLayout1]} resizeMode="cover" source={require ('../assets/images/2929.png')}  />
                  									</View>
                  									<View style={styles.joeGroup}>
                    										<Text style={[styles.joe1, styles.joe1Typo]}>Hanax</Text>
                    										<View style={styles.frame}>
                      											<Text style={[styles.text9, styles.text9Layout]}>
                        												<Text style={styles.joe1Typo}>₦</Text>
                        												<Text style={styles.text11}>5,000</Text>
                      											</Text>
                    										</View>
                  									</View>
                								</View>
                								<View style={styles.joe}>
                  									<View style={styles.groupLayout}>
                    										<Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source={require ('../assets/images/Ellipse2524.png')} />
                    										<Image style={[styles.icon1, styles.iconLayout1]} resizeMode="cover" source={require ('../assets/images/2913.png')} />
                  									</View>
                  									<View style={styles.joeGroup}>
                    										<Text style={[styles.joe1, styles.joe1Typo]}>Inioluwa</Text>
                    										<View style={styles.frame}>
                      											<Text style={[styles.text9, styles.text9Layout]}>
                        												<Text style={styles.joe1Typo}>₦</Text>
                        												<Text style={styles.text11}>5,000</Text>
                      											</Text>
                    										</View>
                  									</View>
                								</View>
                								<View style={styles.joe}>
                  									<View style={styles.groupLayout}>
                    										<Image style={[styles.groupItem, styles.groupLayout]} resizeMode="cover" source={require ('../assets/images/Ellipse2525.png')} />
                    										<Image style={[styles.icon1, styles.iconLayout1]} resizeMode="cover" source={require ('../assets/images/2914.png')} />
                  									</View>
                  									<View style={styles.joeGroup}>
                    										<Text style={[styles.joe1, styles.joe1Typo]}>Liz</Text>
                    										<View style={styles.frame}>
                      											<Text style={[styles.text9, styles.text9Layout]}>
                        												<Text style={styles.joe1Typo}>₦</Text>
                        												<Text style={styles.text11}>5,000</Text>
                      											</Text>
                    										</View>
                  									</View>
                								</View>
                								
              							</View>
            						</View>
            						<View style={[styles.component1, styles.barsPosition]}>
		<Image style={styles.subtractIcon} resizeMode="cover" source={require('../assets/images/Subtract.png')} />
              							<View style={styles.groupContainer}>
				<Image style={styles.frameInner} resizeMode="cover" source={require('../assets/images/Group1000004150.png')} />
                								<Text style={[styles.home, styles.homeTypo]}>Home</Text>
              							</View>
              							<View style={styles.vuesaxlinearemptyWalletParent}>
				<Image style={styles.iconLayout} resizeMode="cover" source={require('../assets/images/emptywallet.png')} />
                								<Text style={[styles.wallet, styles.text4Typo]}>Wallet</Text>
              							</View>
		<View style={[styles.streamlinestore1Parent]}>
				<Image style={styles.streamlinestore1Icon} resizeMode="cover" source={require('../assets/images/streamlinestore1.png')}/>
                								<Text style={[styles.wallet, styles.text4Typo]}>Store</Text>
              							</View>
              							<View style={styles.fluenttrophy28RegularParent}>
				<Image style={styles.fluenttrophy28RegularIcon} resizeMode="cover" source={require('../assets/images/fluenttrophy28regular.png')} />
                								<Text style={[styles.wallet, styles.text4Typo]}>LeaderBoard</Text>
              							</View>
              							<View style={styles.vuesaxlinearsetting2Parent}>
				<Image style={styles.iconLayout2} resizeMode="cover" source={require('../assets/images/setting2.png')}/>
                								<Text style={[styles.wallet, styles.text4Typo]}>Settings</Text>
              							</View>
            						</View>
            						</View>
                                    );
          					};
          					
          			
          					
          					

const styles = StyleSheet.create({
  gamePosition: {
      left: "50%",
      position: "absolute",
      top: 0
  },
  homeTypo: {
      fontFamily: "DMSans-Bold",
      fontWeight: "700"
  },
  letsPlayAndTypo: {
      fontSize: 14,
      lineHeight: 24,
      textAlign: "center",
      display: 'flex',
      right: 10,
      top: -10

  },
  groupChildLayout: {
      width: 40,
      height: 40,
      position: "absolute"
  },
  iconLayout1: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden"
  },
  barsPosition: {
      marginLeft: -115,
      left: "50%",
      width: 430,
      position: "absolute",
      alignItems: "center",
   
  },
  textFlexBox: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
  },
  wrapperLayout: {
      height: 28,
      borderRadius: 24,
      position: "absolute",
      overflow: "hidden"
  },
  text8Position: {
      top: "50%",
      left: "50%",
      position: "absolute"
  },
  textTypo1: {
      fontSize: 12,
      textAlign: "left"
  },
  textTypo: {
      fontWeight: "500",
      fontFamily: "SpaceGrotesk-Medium"
  },
  text4Typo: {
      color: "#e4f1fa",
      fontWeight: "500",
      fontSize: 14,
      
  },
  iconLayout: {
      height: 20,
      width: 24,
      top: -35,
      position: "absolute",
      right: 8,
      
      
  },
  iconLayout3: {
    height: 20,
    width: 24,
    top: 80,
    position: "absolute",
    right: 38,
     
    
},
  iconLayout2: {
    height: 20,
    width: 24,
    top: -35,
    position: "absolute",
    right: 13,
    
},
  frameGroupLayout: {
      width: 382,
      position: "absolute",
      overflow: "hidden"
  },
  wrapperBorder: {
      borderWidth: 1,
      borderStyle: "solid"
  },
  text9Layout: {
      lineHeight: 18,
      fontSize: 12
  },
  joe1Typo: {
      fontFamily: "SpaceGrotesk-Bold",
      fontWeight: "700"
  },
  text7Position: {
      width: 287,
      top: "50%",
      left: "50%",
      position: "absolute"
  },
  wrapperShadowBox: {
      shadowOpacity: 1,
      shadowOffset: {
          width: 4,
          height: 16
      },
      shadowColor: "rgba(0, 0, 0, 0.15)"
  },
  shareWithYourClr: {
      color: "#f2f2f2",
      textAlign: "left"
  },
  groupLayout: {
      height: 60,
      width: 60,
      display: "flex",
      
  },
  image6Icon: {
      marginLeft: -220,
      width: "100%",
      height: "100%",
      opacity: 0.5,
      top: 2
  },
  helloJohn: {
      fontSize: 24,
      lineHeight: 32,
      textAlign: "center",
      color: "#fff"
  },
  twemojiwavingHandIcon: {
      width: 21,
      height: 21,
      overflow: "hidden"
  },
  helloJohnParent: {
      gap: 6,
      alignItems: "center",
      flexDirection: "row",
      

  },
  letsPlayAnd: {
      color: "#f9f9f9",
      fontFamily: "SpaceGrotesk-Regular",
      lineHeight: 24
  },
  frameParent: {
      top: 120,
      left: 23,
      gap: 4,
      position: "absolute"
  },
  groupChild: {
      height: 40,
      left: 0,
      top: 0
  },
  icon: {
      height: "55.25%",
      width: "59.25%",
      top: "19.85%",
      right: "20.76%",
      bottom: "24.9%",
      left: "19.99%"
  },
  ellipseParent: {
      top: 65,
      height: 40,
      left: 24
  },
  batteryIcon: {
      height: "25.81%",
      width: "6.49%",
      top: 16,
      right: "3.91%",
      bottom: "34.84%",
      left: "85%"
  },
  wifiIcon: {
      height: 11,
      width: 18,
      top: 30,
      right: 0,
      bottom: "34.84%",
      left: 300
  },
  mobileSignalIcon: {
      width: 19,
      height: 11,
      top: "10%",
      right: 0,
      bottom: "34.84%",
      left: 307
  },
  text: {
      height: "85.51%",
      top: "10%",
      left: "0%",
      letterSpacing: -0.3,
      fontFamily: "Montserrat-Regular",
      alignItems: "flex-end",
      justifyContent: "center",
      fontSize: 14,
      color: "#fff",
      position: "absolute",
      width: "100%"
  },
  timeStyle: {
      height: "47.7%",
      width: "14.4%",
      top: "10%",
      right: "81.24%",
      bottom: "25.06%",
      left: "4.36%",
      position: "absolute"
  },
  uiBarsStatusBarsBlack: {
      height: "14.05%",
      top: 0,
      bottom: "85.37%"
  },
  text3: {
      fontFamily: "SpaceGrotesk-Medium"
  },
  text1: {
      textAlign: "left",
      color: "#17478b",
      lineHeight: 22
  },
  icons8plus: {
      width: 16,
      height: 16,
      overflow: "hidden"
  },
  parent: {
      marginTop: -11,
      marginLeft: -38.5,
      alignItems: "center",
      flexDirection: "row"
  },
  frameWrapper: {
      left: 267,
      backgroundColor: "#e4f1fa",
      width: 95,
      top: 75,
      height: 28,
      borderRadius: 24
  },
  text4: {
      fontFamily: "SpaceGrotesk-Medium",
      textAlign: "left",
      lineHeight: 22
  },
  fluenteraserSmall20RegularParent: {
      left: 7,
      alignItems: "center",
      flexDirection: "row",
      gap: 4,
      top: 2,
      position: "absolute"
  },
  frameContainer: {
      left: 214,
      borderColor: "#e4f1fa",
      borderWidth: 1.2,
      width: 47,
      borderStyle: "solid",
      height: 28,
      borderRadius: 24,
      top: 75,
      position: "absolute",
      overflow: "hidden"
  },
  vuesaxlinearnotificationIcon: {
      top: 50,
      right: 29,
      position: "absolute",
      
  },
  image6Parent: {
      borderBottomRightRadius: 60,
      height: 309,
      width: 430,
      backgroundColor: "#2364aa",
      shadowOpacity: 1,
      elevation: 40,
      shadowRadius: 40,
      shadowOffset: {
          width: 4,
          height: 16,
          
         
          
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      left: 0,
      top: -2,
      position: "absolute",
      overflow: "hidden"
  },
  frameChild: {
      top: 0,
      left: -7,
      width: 362,
      height: 179,
      opacity: 0.8,
      position: "absolute"
  },
  frameItem: {
      top: 144,
      height: 63,
      backgroundColor: "#2364aa",
      left: 0
  },
  joinGame: {
      marginLeft: -29.5,
      top: 3,
      fontFamily: "SpaceGrotesk-Medium",
      fontWeight: "500",
      color: "#17478b",
      textAlign: "center",
      left: "50%",
      position: "absolute"
  },
  joinGameWrapper: {
      top: 160,
      borderColor: "#fff",
      width: 93,
      backgroundColor: "#fff",
      height: 28,
      borderRadius: 24,
      position: "absolute",
      overflow: "hidden",
      left: 24
  },
  entryFee: {
      textAlign: "left",
      lineHeight: 22,
      fontSize: 12,
      color: "#fff",
      top: -40
  },
  text5: {
      fontFamily: "SpaceGrotesk-Medium",
      textAlign: "left",
      fontSize: 12,
      lineHeight: 24,
      color: "#fff",
      top: -40
  },
  text6: {
      fontFamily: "SpaceGrotesk-Medium",
      textAlign: "left",
      lineHeight: 22,
      fontSize: 12,
      color: "#fff",
      top: -40
  },
  group: {
      gap: 1,
      alignItems: "center",
      flexDirection: "row"
  },
  entryFeeParent: {
      top: 202,
      left: 237,
      gap: 3,
      alignItems: "center",
      flexDirection: "row",
      position: "absolute"
  },
  text7: {
      marginTop: 0,
      marginLeft: -143.5,
      fontSize: 35,
      color: "#17478b",
      justifyContent: "center",
      display: "flex",
      textAlign: "center",
      height: 40,
      lineHeight: 40,
      fontFamily: "DMSans-Bold",
      fontWeight: "700",
      alignItems: "center"
  },
  gamePrize: {
      marginLeft: -55.5,
      fontSize: 20,
      color: "#17478b",
      lineHeight: 24,
      textAlign: "center",
      left: "50%",
      position: "absolute",
      top: -5
  },
  container: {
      marginTop: -75,
      marginLeft: -143,
      height: 37
  },
  nextGameTomorrow: {
      marginLeft: -78,
      top: 90,
      color: "#3b3b3b",
      fontFamily: "SpaceGrotesk-Medium",
      textAlign: "left",
      lineHeight: 22,
      fontSize: 12,
      left: "50%",
      position: "absolute"
  },
  text8: {
      marginTop: -10,
      marginLeft: -4,
      lineHeight: 20,
      fontFamily: "SpaceGrotesk-Medium",
      top: "50%",
      left: "50%",
      position: "absolute",
      fontSize: 14,
      color: "#f9f9f9",
      textAlign: "center"
  },
  wrapper: {
      top: 11,
      left: 342,
      shadowRadius: 5,
      elevation: 5,
      borderRadius: 100,
      backgroundColor: "#51a2e0",
      height: 18,
      width: 18,
      shadowOpacity: 1,
      shadowOffset: {
          width: 4,
          height: 16
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      position: "absolute",
      overflow: "hidden"
  },
  groupParent: {
      top: 205,
      height: 205,
      backgroundColor: "#fff",
      borderRadius: 20,
      marginLeft: -191,
      width: 382,
      left: "50%",
      shadowOpacity: 1,
      shadowOffset: {
          width: 4,
          height: 16
      },
      shadowColor: "rgba(0, 0, 0, 0.15)",
      elevation: 40,
      shadowRadius: 40
  },
  referEarn: {
      fontSize: 18,
      width: 265,
      lineHeight: 20,
      textAlign: "left",
      color: "#f9f9f9",
      top: -9
    
  },
  referEarnWithYourFriendsWrapper: {
      width: 287,
      alignItems: "center",
      flexDirection: "row"
  },
  shareWithYour: {
      width: 267,
      lineHeight: 18,
      fontSize: 10,
      fontFamily: "SpaceGrotesk-Regular",
      top: -9
  },
  frameParent2: {
      gap: 5
  },
  inviteFriends: {
      marginLeft: -32.5,
      top: 0,
      fontSize: 10,
      fontFamily: "SpaceGrotesk-Medium",
      fontWeight: "500",
      lineHeight: 20,
      left: "48%",
      position: "absolute"
  },
  inviteFriendsWrapper: {
      borderColor: "rgba(255, 255, 255, 0.7)",
      width: 91,
      height: 26,
      borderRadius: 20,
      bottom: 20
  },
  frameParent1: {
      gap: 12,
      justifyContent: "center"
  },
  frameView: {
      top: 20,
      left: 24,
      alignItems: "center",
      flexDirection: "row",
      position: "absolute"
  },
  materialSymbolsshareIcon: {
      top: 1,
      left: 270,
      width: 142,
      height: 142,
      position: "absolute",
      overflow: "hidden"
  },
  frameGroup: {
      top: 600,
      height: 140,
      borderRadius: 20,
      marginLeft: -191,
      width: 382,
      left: "50%",
      backgroundColor: "#2364aa"
  },
  topGamersOf: {
      color: "#3b3b3b",
      lineHeight: 15,
      fontSize: 16,
      left: -9
      
  },
  groupItem: {
      left: 0,
      top: 0,
      position: "absolute"
  },
  icon1: {
      height: "83.33%",
      width: "83.33%",
      top: "8.33%",
      right: "10%",
      bottom: "8.33%",
      left: "6.67%"
  },
  joe1: {
      lineHeight: 20,
      color: "#3b3b3b",
      textAlign: "left",
      fontSize: 14
  },
  text11: {
      fontFamily: "SpaceGrotesk-Regular"
  },
  text9: {
      color: "#2364aa",
      textAlign: "left"
  },
  frame: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
  },
  joeGroup: {
      gap: 2,
      justifyContent: "center",
      alignItems: "center"
  },
  joe: {
      alignItems: "center",
      gap: 4
  },
  joe4: {
      display: "none",
      alignItems: "center",
      gap: 4
  },
  joeParent: {
      gap: 18,
      flexDirection: "row",
      left: -12
  },
  topGamersOfTheDayParent: {
      top: 442,
      gap: 20,
      left: 24,
      position: "absolute"
  },
  subtractIcon: {
      width: 434,
      height: 69,
      position: "absolute",
      right: "20%"
  },
  frameInner: {
      width: 50,
      height: 50
  },
  home: {
      color: "#00cbf7",
      lineHeight: 20,
      fontSize: 14,
      textAlign: "center"
  },
  groupContainer: {
      left: -42,
      alignItems: "center",
      top: -13,
      position: "absolute"
  },
  wallet: {
      fontFamily: "DMSans-Medium",
      lineHeight: 20,
      textAlign: "center",
      top: -11,
  },
  vuesaxlinearemptyWalletParent: {
      top: 48,
      left: 27,
      alignItems: "center",
      gap: 4,
      position: "absolute"
  },
  streamlinestore1Icon: {
      width: 20,
      height: 22,
      overflow: "hidden",
      top: -5
  },
  streamlinestore1Parent: {
      right: 105,
      top: 18,
      alignItems: "center",
      gap: 7
  },
  fluenttrophy28RegularIcon: {
      width: 24,
      height: 26,
      overflow: "hidden",
      top: -13,
      left: 32
  },
  fluenttrophy28RegularParent: {
      top: -30,
      left: -28,
    //   alignItems: "center",
    //   gap: 10,
    //   position: "absolute"
  },
  vuesaxlinearsetting2Parent: {
      top: -52,
      left: 60,
    //   alignItems: "center",
    //   gap: 4,
    //   position: "absolute"
  },
  component1: {
      flex: 1,
     
      bottom: -29,
      height: 99,
      width: "100%",
      alignItems: "center",
      
     
  },
  homeScreenjoinGame: {
      backgroundColor: "#f9f9f9",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      
  }
});

export default HomeScreen;


