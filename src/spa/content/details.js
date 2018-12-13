import React from 'react'
import axios from 'axios'
import '../../style.css'
import UserDetail from './userdetail';

class Details extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.renderUserDetail=this.renderUserDetail.bind(this)
    }


    getRemoteData(){
        axios.get("http://localhost:3030/getall")
                                                        .then((received)=>{
                                                            console.log(received)
                                                                this.setState({users:received.data})
                                                               console.log(this.state.users)
                                                        })
    }

    
    componentWillMount() {
        this.getRemoteData()
    }


   
    renderUserDetail() {
        return this.state.users.map((user) => {
            return (<UserDetail
                key={user._id}
                id={user._id}
                name={user.name}
                location={user.location}
                year={user.year}>
            </UserDetail>)
        })
    }

    render() {
        return (
            <div>
            <hr></hr>
            <h1>Fetching Data!!!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>{ this.renderUserDetail()}</tbody>
            </table> 
            </div >
         );
    }
}
export default Details;