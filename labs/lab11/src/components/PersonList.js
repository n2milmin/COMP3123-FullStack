import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {

    // FROM LAB DOC
    state = {
        persons: []
    }
    
    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    handleDetails = () => {
        console.log(this.state)
    }


    render() {
        return (
            <div className='App'>
                <h1 className='title'>User List</h1>
                {
                    this.state.persons.map(user => (
                        <>
                            <header className='userTitle'>{user.name['title']} {user.name['first']} {user.name['last']} - {user.login['uuid']}</header>

                            <div className='user'>
                                <div className='picNbtn'>
                                    <img className='profilePic' src={user.picture['large']} alt='image'/> <br/>
                                    <button className='button' onClick={this.handleDetails}>Details</button>
                                </div>
                                <div className="detailTypes">
                                    User Name:<br/> 
                                    Gender:<br/> 
                                    Time Zone Description:<br/>
                                    Address:<br/>
                                    Email:<br/>
                                    Birth Date and Age:<br/>
                                    Register Date:<br/>
                                    Phone #:<br/>
                                    Cell #:<br/>
                                </div>
                                <div className='details'>
                                    {user.login['username']} <br/>
                                    {user.gender} <br/>
                                    {user.location.timezone['description']} <br/>
                                    {user.location.street['number']} {user.location.street['name']}, {user.location['city']}, {user.location['state']}, {user.location['country']} - {user.location['postcode']} <br/>
                                    {user.email} <br/>
                                    {user.dob['date']} ({user.dob['age']}) <br/>
                                    {user.registered['date']} <br/>
                                    {user.phone} <br/>
                                    {user.cell}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        )
    }
}
