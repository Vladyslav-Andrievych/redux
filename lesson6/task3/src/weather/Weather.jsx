import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions.js';
import { citiesListSelector } from './weather.selectors.js';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }
  render() {
    const { citiesList } = this.props;

    if (!citiesList) {
      return null;
    }

    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {citiesList.map((city) => (
            <li key={city.id} className="city">
              <span className="city__name">{city.name}</span>
              <span className="city__temperature">{`${city.temperature} F`}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapState = (state) => ({
  citiesList: citiesListSelector(state),
});

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
