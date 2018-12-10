import React from 'react'
import Menu from '../spa/menu';
import Content from '../spa/content/content';


class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div><Menu/></div>
                <div><Content/></div>
            </div>
         );
    }
}
 
export default App;