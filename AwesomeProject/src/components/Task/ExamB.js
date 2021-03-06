import React from 'react';
import {Text, View,navigation,ImageBackground,TouchableOpacity,Image,ActivityIndicator } from 'react-native';
import { ExamStyles } from '../Task/ExamStyles';
import '../../data/GlobalVariable.js';


export default class ExamB extends React.Component {
  constructor(props) 
        {
        super(props);   
        this.state = {
           task2:"",
           answer:"",
           rightanswer:"",
           isLoading:true,
           content: false,
        }   
      }
  componentDidMount()
  {
      var queryURL = 'https://observerplus.club/API/Exam.aspx';
      let parameters = new FormData();
      parameters.append("Dailey_Exam_ID",this.props.navigation.getParam('Dailey_Exam_ID'));
      parameters.append("EXid",2);
  fetch(queryURL,{
    method: 'POST',
    body: parameters
  })
    // response.json() => 把 response 的資料轉成 json
    // 如果你想要原封不動的接到 response 的資料，可以用 response.text()
    .then((response) => response.json() )
    .then((responseData) => { 
      this.setState({task2:responseData})
      this.setState({isLoading:false})
      console.log(this.state.task2);
      
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();
  }

  Send = (task) => 
  {
        var queryURL = 'https://observerplus.club/API/Answer.aspx';
        let parameters = new FormData();
        if(task == 1)
        {
         parameters.append("account", global.GlobalVariable.account);
         parameters.append("password", global.GlobalVariable.password);
         parameters.append("EXid", 2);
         parameters.append("answer",1);
         parameters.append("Dailey_Exam_ID",this.props.navigation.getParam('Dailey_Exam_ID'));
         parameters.append("mis_ID",this.props.navigation.getParam('mis_ID'));
        }
        if(task == 2)
        {
         parameters.append("account", global.GlobalVariable.account);
         parameters.append("password", global.GlobalVariable.password);
         parameters.append("EXid", 2);
         parameters.append("answer",2);
         parameters.append("Dailey_Exam_ID",this.props.navigation.getParam('Dailey_Exam_ID'));
         parameters.append("mis_ID",this.props.navigation.getParam('mis_ID'));
        }
        if(task == 3)
        {
         parameters.append("account", global.GlobalVariable.account);
         parameters.append("password", global.GlobalVariable.password);
         parameters.append("EXid", 2);
         parameters.append("answer",3);
         parameters.append("Dailey_Exam_ID",this.props.navigation.getParam('Dailey_Exam_ID'));
         parameters.append("mis_ID",this.props.navigation.getParam('mis_ID'));
        }
        if(task == 4)
        {
         parameters.append("account", global.GlobalVariable.account);
         parameters.append("password", global.GlobalVariable.password);
         parameters.append("EXid", 2);
         parameters.append("answer",4);
         parameters.append("Dailey_Exam_ID",this.props.navigation.getParam('Dailey_Exam_ID'));
         parameters.append("mis_ID",this.props.navigation.getParam('mis_ID'));
        }
  fetch(queryURL,{
    method: 'POST',
    body: parameters
  })
    .then((response) => response.json() )
    .then((responseData) => { 
      this.setState({answer:responseData})
      console.log(this.state.answer); 
      this.setState({content:true})     
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();  
  }

  task1_change()
  {
      let task = 1;
      this.Send(task);
  }
  task2_change()
  {
      let task = 2;
      this.Send(task);
  }
  task3_change()
  {
      let task = 3;
      this.Send(task);
  }
  task4_change()
  {
      let task = 4;
      this.Send(task);
  }
  Next()
  {
      let Dailey_Exam_ID = this.props.navigation.getParam('Dailey_Exam_ID');
      let mis_ID = this.props.navigation.getParam('mis_ID');
      let Examount1 = this.props.navigation.getParam('Examount1');
      let Examount3 = this.props.navigation.getParam('Examount3');
      if(Examount1 == true && Examount3 == true){
        if(this.state.content == true){
        this.props.navigation.navigate("Menu2")
        }
        else{
        this.props.navigation.navigate("Task")
        }
      }
      else if(Examount1 == true){
        if(this.state.content == true){
        this.props.navigation.navigate("ExamC",{"Dailey_Exam_ID":Dailey_Exam_ID,"mis_ID":mis_ID,"Examount2":true})
        }
        else{
        this.props.navigation.navigate("ExamC",{"Dailey_Exam_ID":Dailey_Exam_ID,"mis_ID":mis_ID})
        }
      }
  }
  Back()
  {
      let Dailey_Exam_ID = this.props.navigation.getParam('Dailey_Exam_ID');
      let mis_ID = this.props.navigation.getParam('mis_ID');
      let Examount1 = this.props.navigation.getParam('Examount1');
      let Examount3 = this.props.navigation.getParam('Examount3');
      if(Examount1 == true && Examount3 == true){
        if(this.state.content == true){
        this.props.navigation.navigate("Menu2")
        }
        else{
        this.props.navigation.navigate("Task")
        }
      }
      else if(Examount1 == true){
        this.props.navigation.navigate("Task")
      }
      else{
      this.props.navigation.navigate("ExamA",{"Dailey_Exam_ID":Dailey_Exam_ID,"mis_ID":mis_ID})
      }
  }
  Answer = (index) =>
  {
    if(index == true)
    {
      return (
      <View style = {ExamStyles.answer}>
      <Text style = {ExamStyles.ANSnumberN}>You Are Right!</Text>
      </View>
      )
    }
    else if(index == false)
    { 
      switch(this.state.answer.answer){
      case 1:
      return (
      <View style = {ExamStyles.answer}>
      <Text style = {ExamStyles.ANSnumberN}>You Are Wrong!</Text>
      <Text style = {ExamStyles.ANSnumberN}>{"The answer is A !"}</Text>
      <View style ={(ExamStyles.ANSbox)}>
      <Text style ={(ExamStyles.numberN)}>{"A:"+(this.state.task2.option1)} </Text>
      </View>
      </View>
      )
      break;
      case 2:
      return (
      <View style = {ExamStyles.answer}>
      <Text style = {ExamStyles.ANSnumberN}>You Are Wrong!</Text>
      <Text style = {ExamStyles.ANSnumberN}>{"The answer is B !"}</Text>
      <View style ={(ExamStyles.ANSbox)}>
      <Text style ={(ExamStyles.numberN)}>{"B:"+(this.state.task2.option2)} </Text>
      </View>
      </View>
      )
      break;
      case 3:
      return (
      <View style = {ExamStyles.answer}>
      <Text style = {ExamStyles.ANSnumberN}>You Are Wrong!</Text>
      <Text style = {ExamStyles.ANSnumberN}>{"The answer is C !"}</Text>
      <View style ={(ExamStyles.ANSbox)}>
      <Text style ={(ExamStyles.numberN)}>{"C:"+(this.state.task2.option3)} </Text>
      </View>
      </View>
      )
      break;
      case 4:
      return (
      <View style = {ExamStyles.answer}>
      <Text style = {ExamStyles.ANSnumberN}>You Are Wrong!</Text>
      <Text style = {ExamStyles.ANSnumberN}>{"The answer is D !"}</Text>
      <View style ={(ExamStyles.ANSbox)}>
      <Text style ={(ExamStyles.numberN)}>{"D:"+(this.state.task2.option4)} </Text>
      </View>
      </View>
      )
      break;
    }
    }
  }
   render() {
      if(this.state.isLoading){
        return(
          <View style ={ExamStyles.container}>
            <ActivityIndicator size="large" color="#0000ff"/>
          </View>
        )
      }
      else if(this.state.content){
        return(
          <ImageBackground source={require('../../images/exambackground.png')} style = {(ExamStyles.container)}>
          <View style ={ExamStyles.container}> 
          <Text style ={(ExamStyles.toptextN)}> 2 </Text> 
            {this.Answer(this.state.answer.result)}
            <TouchableOpacity onPress ={() => this.Next()} style = {ExamStyles.Rback}>
            <Image source={require('../../images/retune.png')} style = {ExamStyles.imagesize}>
            </Image>
          </TouchableOpacity> 
          </View>
          </ImageBackground>
        )
      }
               /* <TouchableOpacity onPress ={() => this.Back()} style = {ExamStyles.Lback}>
            <Image source={require('../../images/retune.png')} style = {ExamStyles.imagesize}>
            </Image>
          </TouchableOpacity>  
          <TouchableOpacity onPress ={() => this.Next()} style = {ExamStyles.Rback}>
            <Image source={require('../../images/retune.png')} style = {ExamStyles.imagesize}>
            </Image>
          </TouchableOpacity>            
          */
      else{
        return(
        <ImageBackground source={require('../../images/exambackground.png')} style = {(ExamStyles.container)}>   
          <Text style ={(ExamStyles.toptextN)}> 2 </Text> 
          <View style ={(ExamStyles.questionbox)}>
          <Text style ={(ExamStyles.textN)}> {"Q:"+(this.state.task2.Exam)} </Text> 
          </View>
          <TouchableOpacity onPress= {() =>this.task1_change()} style ={(ExamStyles.textbox1)}>
            <Text style ={(ExamStyles.numberN)}>{"A:"+(this.state.task2.option1)} </Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress= {() =>this.task2_change()} style ={(ExamStyles.textbox2)}>
            <Text style ={(ExamStyles.numberN)}>{"B:"+(this.state.task2.option2)}</Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress= {() =>this.task3_change()} style ={(ExamStyles.textbox3)}>
            <Text style ={(ExamStyles.numberN)}>{"C:"+(this.state.task2.option3)} </Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress= {() =>this.task4_change()} style ={(ExamStyles.textbox4)}>
            <Text style ={(ExamStyles.numberN)}>{"D:"+(this.state.task2.option4)} </Text> 
          </TouchableOpacity>   
        </ImageBackground>
      )
    }
  }
}