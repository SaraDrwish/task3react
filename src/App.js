import React , {Component} from "react";
import Users from "./Users";

class App extends Component {

  state = {
      task: "",
      id: "",
      changeTask: "",
      isRender: false ,
  } ;

  handleChange = (e) => {
    this.setState({
      // [] عشان تكون الداتا ستاتيك
      [e.target.id] :e.target.value,
      isRender: false ,

    });

  } ;

  handelsubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.task)
    this.setState({
    
      isRender: true,
      changeTask:this.state.task,

      task: " ",
 
    });

  }

render(){

  return (


    <div className="App">
   


       <form onSubmit={this.handelsubmit} >

         <p>Your Tasks for Today is: </p>
         <input type="text" id="task" value={this.state.task} placeholder="enter your task "  onChange ={this.handleChange}/>
          <input  type="submit"   />

       </form>

       
     
             {this.state.isRender ? ( <p> {this.state.changeTask} </p>) : " "}

 
    </div>

  );
}
}

export default App;
