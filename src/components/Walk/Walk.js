import React from 'react';

// import dogShape from '../../helpers/propz/dogShape';

import './Walk.scss';

class Walk extends React.Component {
  // static propTypes = {
  //   dog: dogShape.dogShape,
  // }

  render() {
    const { walk } = this.props;
    const dogObj = this.props.dogs.find(x => x.id === this.props.walk.dogId);
    const EmployeeObj = this.props.employees.find(x => x.id === this.props.walk.employeeId);
    return (
      <div className="Walk col-2">
      <div className="card">
        <div className="card-body">
          <div className="walk-text">
          <h5 className="card-title">{walk.date}</h5>
          <p>{dogObj.name}</p>
          <p>{EmployeeObj.name}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Walk;
