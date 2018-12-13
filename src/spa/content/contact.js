import React from 'react'
import axios from 'axios'
import '../../style.css'
import {CSSTransition , TransitionGroup} from 'react-transition-group';

class Contact extends React.Component {

    constructor(props){
        super(props)
        this.state= {
                name:"",
                location:"",
                year:"",
                submitstatus:""
        }
        this.captureInputName=this.captureInputName.bind(this)
        this.captureInputLoc=this.captureInputLoc.bind(this)
        this.captureInputYear=this.captureInputYear.bind(this)
        this.userSubmit=this.userSubmit.bind(this)
    }

    userSubmit(){
        console.log("From Submitted")
        axios.post("http://localhost:3030/add",this.state)
                                                        .then((data)=>{
                                                                this.setState({submitstatus:data.status})
                                                        })
    }

    captureInputName(e){
     this.setState({name:e.target.value})
    }

    captureInputLoc(e){
        this.setState({location:e.target.value})
       }


    captureInputYear(e){
     this.setState({year:e.target.value})
    }



    render() { 
        return ( 
            <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
            enter={false}>
           <div>
               <form onSubmit={this.userSubmit}>      
                        Name:
                        <input type="text" onChange={this.captureInputName}></input><br></br><br></br>
                        Location:
                        <input type="text" onChange={this.captureInputLoc}></input><br></br><br></br>
                        Year:
                        <input type="number" onChange={this.captureInputYear}></input><br></br><br></br>
                        <br></br><br></br>
                        <input type="submit" value="Submit"></input>
               </form>
                {this.state.submitstatus}
           </div>
            </CSSTransition>
         );
    }
}
 
export default Contact;