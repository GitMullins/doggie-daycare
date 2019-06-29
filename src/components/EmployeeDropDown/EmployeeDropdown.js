import React from 'react';

import employeeShape from '../../helpers/propz/employeeShape';

import './EmployeeDropdown.scss';

class Employee extends React.Component {
  static propTypes = {
    employeeDropdown: employeeShape.employeeShape,
  }

  render() {
    const { employeeDropdown } = this.props;
    console.error(employeeDropdown);
    return (
//       <div className="dropdown">
//   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Dropdown button
//   </button>
//   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <p className="dropdown-item" href="#">123{employeeDropdown}</p>
//   </div>
// </div>
    );
  }
}

export default Employee;
