import React from 'react'
import '../../style.css'
import {CSSTransition} from 'react-transition-group';

class Home extends React.Component {


    render() { 
        return ( 
            <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
                enter={false}>
            <div  className='border'>I am at Home</div>
            </CSSTransition>
         );
    }
}
 
export default Home;