import React from 'react'
import '../../style.css'

class UserDetail extends React.Component {

  render() {
    return (
      
        
            <tr>
              <td >{this.props.id}</td>
              <td>{this.props.name}</td>
              <td>{this.props.location}</td>
              <td>{this.props.year}</td>
            </tr>
      
    
    );
  }
}

export default UserDetail;