import React from 'react'
import {Switch ,Route} from "react-router-dom"
import Home from './home';
import About from './about';
import Contact from './contact';
import Details from './details';


class Content extends React.Component {
   
    render() { 
        return ( 
         <Switch>
             <Route exact path="/" component={Home}></Route>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/Details" component={Details}/>
         </Switch>
         );
    }
}
 
export default Content;