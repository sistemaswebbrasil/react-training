import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { credit: 0, debt: 0 };
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/billingCycles/summary`).then(resp => this.setState(resp.data));
  }

  render() {
    const { credit, debt } = this.state;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Testando
        </Typography>
        <div>{this.props.user.name || ''}</div>
        <h1>{credit}</h1>
        <h1>{debt}</h1>
      </div>
    );
  }
}

export default Home;
