import React, { Component } from 'react';
import axios from 'axios';
import BoxComp from '../BoxComp/';


class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }


  componentDidMount() {
    // fetch data here
    const res = axios.get('https://gorest.co.in/public-api/users');
    res.then(d => {
      const data = d.data.data;
      this.setState({ data : data });
    });
  }


  mapUserDataToContainers = data => {
    let ret = data.map((d, i) => <BoxComp data={d} key={i}/>);
    return ret;
  }


  render() {
    return(
      <div className="user-container">
        {this.mapUserDataToContainers(this.state.data)}
      </div>
    );
  }

}

export default UserContainer;
