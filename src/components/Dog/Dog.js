import React from 'react';

import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-2">
      <div className="card">
        <img src={dog.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="dog-text">
          <h5 className="card-title">{dog.name}</h5>
          <p className="card-text">{dog.favoriteActivity}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Dog;
