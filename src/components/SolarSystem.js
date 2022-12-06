import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((planeta) => (
            <PlanetCard
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />
          ))
        }
      </div>
    );
  }
}

PlanetCard.propType = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default SolarSystem;
