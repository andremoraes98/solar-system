import React from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planet } = this.props;
    const { name } = planet;
    const { image } = planet;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { name }
        </p>
        <img src={ image } alt={ `Planeta ${name}` } />
      </div>
    );
  }
}

PlanetCards.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default PlanetCards;
