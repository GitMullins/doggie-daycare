import React from 'react';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';

import DogPen from '../DogPen/DogPen';

import StaffRoom from '../StaffRoom/StaffRoom';

import AddWalk from '../AddWalk/AddWalk';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error(err, 'could not get doggos'));
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err, 'could not get humans'));
  }

  addClickEvent = (e) => {
    const { employeeSelected } = this.props;
    e.preventDefault();
    // addFishToOrder(employeeSelected.value);
    console.error(employeeSelected.value);
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;

    return (
      <div className="Home">
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
        <AddWalk dogs={dogs} employees={employees}/>
      </div>
    );
  }
}

export default Home;
