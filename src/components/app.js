import React, { Component } from 'react';
import axios from 'axios';

import CamplerList from './camper_list';

export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    recentCampers: [],
    allTimeCampers: [],
    currentView: 'recentCampers'
  };
}

componentWillMount(){
  //make concurrent requests and set state to response
  axios.all([this.fetchRecentCampers(),this.fetchallTimeCampers()])
    .then(axios.spread((recentCampers , allTimeCampers) => {
      //console.log(recentCampers);
      this.setState({
        recentCampers: recentCampers.data,
        allTimeCampers: allTimeCampers.data
      });
          console.log(this.state);
    }));
}

fetchRecentCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

fetchallTimeCampers(){
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}

changeView(currentView){
  this.setState({ currentView});
}


  render() {
    return (
      <div>
        <h2>{`Viewing Top ${this.state.currentView}`}</h2>
        <button onClick={() => this.changeView('recentCampers')} className="btn btn-primary">Recent</button>
        <button onClick={() => this.changeView('allTimeCampers')} className="btn btn-primary">All Time</button>
        <CamplerList campers={this.state[this.state.currentView]}/>
      </div>
    );
  }
}
