import React , {Component} from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/users
    
class Users extends Component {

state = {
    todos:[ ],
    loading: null,
    err: null,
}

//الميثود او الكومبوننت المسؤولة عن بعت الريكوستات وكدا
componentDidMount(){
    this.setState({
        loading:true,
    })
    axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) =>{
        console.log(res.data);
        this.setState({
            loading:false,
            todos : res.data,
//map

        });

    })
    .catch( (err)=>{
        console.log(err.message);
        this.setState({
            loading:false , err:"errorrrr !!!"
        });

})
}

    render(){

        return(

            <div>

               {/* { this.todos.map((todos)=>{
                 return <h4> res.data </h4> } ) } */}
                

            {  this.state.loading ? "Loading .... " :  " "} 
            { this.state.todos.length > 0 ? "Data ...." : " "} 
            {  this.state.err ? "Error!! " : " "}

            </div>

        )
    }

}

export default Users ;