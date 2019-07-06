import React from 'react';
import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';

import Walk from '../Walk/Walk';

import './Walks.scss';

class Walks extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    deleteWalk: PropTypes.func.isRequired,
    selectWalkToEdit: PropTypes.func.isRequired,
  }

  render() {
    const { walks, dogs, employees } = this.props;
    const makeWalks = walks.map(walk => (
      <Walk
      key={walk.id}
      walkId={walk.id}
      walk={walk}
      dogs={dogs}
      employees={employees}
      deleteWalk={this.props.deleteWalk}
      selectWalkToEdit={this.props.selectWalkToEdit}
      />
    ));
    return (
      <div className="Walks d-flex flex-nowrap">
        { makeWalks }
      </div>
    );
  }
}

export default Walks;
