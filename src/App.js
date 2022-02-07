import React , {Component} from "react";

class App extends Component {

  state = {
      task: "",
      id: "",
      changeTask: "",
      isRender: false ,
  } ;

  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value,
      isRender:true,
    });

  } ;

  handelsubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.task)
    
  }

render(){

  return (

    <div className="App">
   
       {this.state.isRender} ?  <p> {this.state.task} </p> : " " ;


       <form onSubmit={this.handelsubmit} >

         <p>Your Tasks for Today is: </p>
         <input type="text" id="task" placeholder="enter your task "  onChange ={this.handleChange}/>
          <input  type="submit"   />

       </form>

    </div>

  );
}
}

export default App;
