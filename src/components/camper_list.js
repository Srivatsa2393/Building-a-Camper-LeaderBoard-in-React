import React, { Component } from 'react';
import CamperListItem from './camper_list_item';

const CamplerList = ({ campers }) => {
  console.log(campers);
  const Items = campers.map((camper, index) => {
    return <CamperListItem key={index} camper={camper} number={index + 1} />
  })

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
          {Items}
        </tbody>
      </table>
    )
  }

export default CamplerList;
