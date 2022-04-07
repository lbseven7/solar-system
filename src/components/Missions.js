import React from 'react';
import PropTypes from 'prop-types';
import missions from '../data/missions';
import Title from '../components/Title';
import PlanetCard from './PlanetCard';

class Missions extends React.Component {
    render() {
        return (
            <div data-testid='missions'>
                <Title headline='Missões'/>
            </div>
        );
    }
}

// PlanetCard.propType = {
//     missionName: PropTypes.object,
//     missionYear: PropTypes.object,
//     missionCountry: PropTypes.object,
//     missionDestination: PropTypes.object,
// }.isRequired;

export default Missions;