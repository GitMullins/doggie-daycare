import React from 'react';
import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';

import EmployeeDropdown from '../EmployeeDropDown/EmployeeDropdown';

import './SelectEmployee.scss';

class SelectEmployee extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <EmployeeDropdown key={employee.id} employee={employee} />
    ));
    return (
      <div className="SelectEmployee d-flex flex-wrap">
        { makeEmployees }
      </div>
    );
  }
}

export default SelectEmployee;
