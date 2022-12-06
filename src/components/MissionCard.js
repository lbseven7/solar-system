import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { key, name, year, country, destination } = this.props;
    return (
      <div className="missionCard" key={ key } data-testid="mission-card">
        <div className="missoes">
          <p className="paragrafo1" data-testid="mission-name">
            Nome:
            {' '}
            {name}
          </p>
          <p className="paragrafo2" data-testid="mission-year">
            Ano:
            {' '}
            {year}
          </p>
          <p className="paragrafo3" data-testid="mission-country">
            País:
            {' '}
            {country}
          </p>
          <p className="paragrafo4" data-testid="mission-destination">
            Local:
            {' '}
            {destination}
          </p>
        </div>
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

export default MissionCard;
