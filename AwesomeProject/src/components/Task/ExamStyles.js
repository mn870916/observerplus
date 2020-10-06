import { StyleSheet } from 'react-native';//全球流呼叫CSS*

export const ExamStyles = StyleSheet.create({
  container: {
    resizeMode:'contain',
    justifyContent:'center',
    flex:1,
  },
  questionbox:{
    width:'75%',  
    height:"20%",
    left:"12.5%",
    top:"20%",
    position: 'absolute', 
    //backgroundColor:"#d9cfc5",
  },
  toptext:{  
    fontFamily:'nunito-bold',
    borderRadius:10,
    //marginVertical:"2%",
    padding:'5%',
    textAlign: 'center',
    color:'#333',
    shadowOffset:{width:1,height:1},
    shadowRadius:2,
    shadowOpacity:6,
    elevation:3,
    backgroundColor:'#fbfadf',
    borderColor: "black",
    borderWidth:1,
    width:'75%',  
    height:"80%",     
    marginHorizontal:"13%",
    top:"15%",
    //position: 'absolute',
  },
  circle:{
    width:100,
    height:100,
    backgroundColor:'#fbfadf',
    borderRadius:200,
    borderWidth:1,
    borderColor:"black",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    top:"-15%",
    left:"37%",
    position: 'absolute', 
  },
  textbox1:{
    justifyContent:'center',
    fontFamily:'nunito-bold',
    borderRadius:10,
    textAlign: 'center',
    color:'#333',
    //shadowOffset:{width:1,height:1},
    shadowRadius:2,
    shadowOpacity:6,
    elevation:3,
    backgroundColor:'#fbfadf',
    borderColor: "black",
    borderWidth:1,
    width:'70%',  
    height:"10%",
    top:"42%",
    left:"15%",
    position: 'absolute',
  },
    textbox2:{
    justifyContent:'center',
    fontFamily:'nunito-bold',
    borderRadius:10,
    textAlign: 'center',
    color:'#333',
    shadowOffset:{width:1,height:1},
    shadowRadius:2,
    shadowOpacity:6,
    elevation:3,
    backgroundColor:'#fbfadf',
    borderColor: "black",
    borderWidth:1,
    width:'70%',  
    height:"10%",
    top:"55%",
    left:"15%",
    position: 'absolute',
  },
    textbox3:{
    justifyContent:'center',
    fontFamily:'nunito-bold',
    borderRadius:10,
    textAlign: 'center',
    color:'#333',
    shadowOffset:{width:1,height:1},
    shadowRadius:2,
    shadowOpacity:6,
    elevation:3,
    backgroundColor:'#fbfadf',
    borderColor: "black",
    borderWidth:1,
    width:'70%', 
    height:"10%",
    top:"68%",
    left:"15%",
    position: 'absolute',
  },
  textbox4:{
    justifyContent:'center',
    fontFamily:'nunito-bold',
    borderRadius:10,
    textAlign: 'center',
    color:'#333',
    shadowOffset:{width:1,height:1},
    shadowRadius:2,
    shadowOpacity:6,
    elevation:3,
    backgroundColor:'#fbfadf',
    borderColor: "black",
    borderWidth:1,
    width:'70%', 
    height:"10%",
    top:"81%",
    left:"15%",
    position: 'absolute',
  },
  toptextN:{
    fontFamily:'nunito-bold',
    fontSize: 50,
    top:'6%',
    left:'42.5%',
    color:'#333',   
    position: 'absolute',
  },
  textN:{
    fontFamily:'nunito-bold',
    fontSize: 25,
    color:'#333',  
  },
  numberN:{
    fontFamily:'nunito-bold',
    fontSize: 25,
    color:'#333',  
    //top:'10%',
    left:'5%',
    //position: 'absolute',
  },
  imagesize:{
  //width:'75%',  
  //padding:'5%',
  height:"100%",
  width:"100%",
  //backgroundColor:'#333',
  },
  Lback:{
    top:'92%',
    left:'15%',
    height:"6%",
    width:"9%",
    resizeMode:'stretch',
    //backgroundColor:'#333',
    position:'absolute',
  },
  Rback:{
    top:'92%',
    left:'75%',
    height:"6%",
    width:"9%",
    resizeMode:'stretch',
    //backgroundColor:'#333',
    position:'absolute',
    transform:[{rotate: '180deg'}],
  },
  Examtext:{
    top:"15%",
    left:"15%",
    height:"50%",
    width:"70%",
    backgroundColor:'#fbfadf',
    borderRadius:30,
    },
    answer:{
    justifyContent:'center',
    fontFamily:'nunito-bold',
    },
    ANSnumberN:{
    textAlign: 'center',
    fontFamily:'nunito-bold',
    fontSize: 35,
    color:'#333',  
    },
    ANSbox:{
    justifyContent:'center',
    fontFamily:'nunito-bold',
    borderRadius:10,
    textAlign: 'center',
    color:'#333',
    shadowOffset:{width:1,height:1},
    shadowRadius:2,
    shadowOpacity:6,
    elevation:3,
    backgroundColor:'#fbfadf',
    borderColor: "black",
    borderWidth:1,
    width:'70%', 
    height:"70%",
    top:"120%",
    left:"15%",
    position: 'absolute',
    },
});