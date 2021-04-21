import './App.css';
import React from 'react';
import Navbar from './component/layout/Navbar';
import User from './component/users/User';
import Search from './component/users/Search';
import axios from 'axios';

class App extends React.Component{
  state={
    users:[],
    loading: false
  }
  // async componentDidMount(){
  //   this.setState({loading: true});
  //   const res= await axios.get('https://api.github.com/users');
  //   this.setState({users: res.data, loading: false});
  // }
  searchUsers=async text=>{
    const res= await axios.get('https://api.github.com/search/users?q=${text}');
    this.setState({users: res.data.items, loading: false});
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className='container'>
          < Search searchUsers={this.searchUsers}/>
        <User loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
