import React from 'react';

// import dogShape from '../../helpers/propz/dogShape';

import './Walk.scss';

class Walk extends React.Component {
  // static propTypes = {
  //   dog: dogShape.dogShape,
  // }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk col-2">
      <div className="card">
        <div className="card-body">
          <div className="walk-text">
          <h5 className="card-title">{walk.date}</h5>
          <p>{walk.dogId}</p>
          <p>{walk.employeeId}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Walk;
