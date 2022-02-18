import React from 'react';

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

export default PlanetCards;
