import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    deleteWalk: PropTypes.func.isRequired,
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  }

  selectWalk = (e) => {
    e.preventDefault();
    const { walk, selectWalkToEdit } = this.props;
    selectWalkToEdit(walk.id);
  }

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
          <button className="btn btn-sm btn-warning" onClick={this.selectWalk}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={this.deleteWalkEvent}>Delete</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Walk;
