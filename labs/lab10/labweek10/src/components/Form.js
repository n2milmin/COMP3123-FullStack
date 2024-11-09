import React from 'react';
import '../App.css';

export default class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'email' : '',
            'name' : '',
            'address': '',
            'address2': '',
            'city': '',
            'province': '',
            'postalcode': ''
        }

        this.state.show = false;
        this.provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory']
    }

    handleInput = e =>{
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({ show: !this.state.show });
    }


    render() {
        return (
            <div>
                <form className='form' onSubmit={ this.handleSubmit }>
                    <div class='side-by-side'>
                        <div class='side-by-side'>
                            Email <br/>
                            <input className='emailname' type='text' name='email' value={ this.state.email } onChange={this.handleInput} placeholder='Enter email'/>
                        </div>
                        <div class='side-by-side'>
                            Name <br/>
                            <input className='emailname' type='text' name='name' value={ this.state.name } onChange={this.handleInput} placeholder='Full name'/>
                        </div>
                    </div> <br/>

                    <div class='side-by-side'>
                        Address <br/>
                        <input className='address' type='text' name='address' value={ this.state.address } onChange={this.handleInput} placeholder='1234 Main St'/> <br/>
                    </div> <br/>

                    <div class='side-by-side'>
                        Address 2 <br/>
                        <input className='address' type='text' name='address2' value={ this.state.address2 } onChange={this.handleInput} placeholder='Appartment, studio, or floor'/> <br/>
                    </div> <br/>

                    <div class='side-by-side'>
                        <div class='side-by-side'>
                            City <br/>
                            <input type='text' name='city' value={ this.state.city } onChange={this.handleInput} />
                        </div>
                        <div class='side-by-side'>
                            Province <br/>
                            <select name='province' onChange={this.handleInput} placeholder='Choose...'> 
                                {
                                    this.provinces.map(cnm => (
                                        <option key={cnm}>{cnm}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div class='side-by-side'>
                            Postal Code <br/>
                            <input type='text' name='postalcode' value={ this.state.postalcode } onChange={this.handleInput} />
                        </div>
                    </div> <br/>

                    <button onClick={this.handleSubmit}>Submit</button> <br/>
                </form>


                { /* Display */ }
                {this.state.show && 
                    <div className='display'>
                        <div className='left'>
                            Email: <br/>
                            Full Name:<br/>
                            Address: <br/>
                            Address 2:<br/>
                            City:<br/>
                            Province:<br/>
                            Postal Code<br/>
                        </div>
                        <div className='right'>
                            {this.state.email} <br/>
                            {this.state.name } <br/>
                            { this.state.address} <br/>
                            {this.state.address2} <br/>
                            {this.state.city} <br/> 
                            {this.state.province} <br/>
                            {this.state.postalcode} <br/>
                        </div>

                    </div>
                }
            </div>
        )
    }
}