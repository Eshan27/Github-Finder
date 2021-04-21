import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text:''
    }

    onSubmit= e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
    }

    onchange= e=> {
        this.setState({ [e.target.name]: e.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input 
                    type='text' 
                    name='text' 
                    placeholder='Search Users...'
                    onChange={this.onChange}
                    value={this.state.text}
                    />
                    <input 
                    type='submit' 
                    value='Search' 
                    className='btn btn-dark btn-block'
                    />
                </form>
            </div>
        )
    }
}

export default Search
