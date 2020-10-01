import React from 'react';
import axios from 'axios';
import '../styles/Beers.css';


class RandomBeer extends React.Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((response) => {
      this.setState({ beer: response.data });
    });
  }

  render() {
    return <div className="row" key={this.state.beer._id}>
    <div className="col-sm-6">
      <div className="card">
        <img
          className="card-img-top mx-auto beers"
          src={this.state.beer.image_url}
          alt={this.state.beer.name}
        ></img>
        <h5 className="card-title">{this.state.beer.name}</h5>
        <p className="card-text">{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>
          <small>
            <strong>Created by:</strong> {this.state.beer.contributed_by}
          </small>
        </p>
      </div>
    
    </div>
  </div>
    
  }
}

export default RandomBeer;
