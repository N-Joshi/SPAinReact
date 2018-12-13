import React from 'react'
import '../../style.css'
import {CSSTransition} from 'react-transition-group';

class About extends React.Component {
    state = {  }
    render() { 
        return ( 
            <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
                enter={false}>
            <div  className='border'>
                Hi!!! I am Naman
            </div>
            </CSSTransition>
         );
    }
}
 
export default About;