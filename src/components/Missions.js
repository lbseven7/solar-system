import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    // const { name, year, country, destination } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((element) => (
          <MissionCard
            key={ element.name }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
          />
        ))}
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default Missions;
