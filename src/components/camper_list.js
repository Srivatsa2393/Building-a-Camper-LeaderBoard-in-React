import React, { Component } from 'react';

const CamplerList = ({ campers }) => {
  //console.log('these are the props', props);
  //campers; //props.campers
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Last 30 days</th>
            <th>All time high points</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    )
  }

export default CamplerList;
