import React, {Component} from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions'


const mapStateToProps= state =>{
  return{
    searchField:state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToprops= (dispatch)=>{
  return{
  onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
  onRequestRobots:()=> dispatch(requestRobots())
  // "requestRobots action" we're talking about here 
  }
}

class App extends Component{
  // constructor(){
  //   super()
  //   this.state={
  //     robots:[]
     
     
  //     // searchfield:''
  //   }
  // }

  componentDidMount(){
    this.props.onRequestRobots();

    // console.log(this.props.store.getState())
    
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response=> response.json())
    // .then(users=>{this.setState({robots:users})});
  }



  render(){
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending }= this.props;
    const filteredRobots=robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    
    return  isPending ?
    // !robots.length
      <h1>Loading...</h1>:
      (
                <div className='tc'>
                  <h1 className='f2'>RoboFriends</h1>
                  
                  <SearchBox searchChange={onSearchChange} />
                  <Scroll>
                  
                  <CardList robots={filteredRobots}/>
                  
                  </Scroll>
                </div>
            );

    }
    
  }


export default connect(mapStateToProps,mapDispatchToprops)(App);