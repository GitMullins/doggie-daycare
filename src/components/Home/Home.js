import React from 'react';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';

import DogPen from '../DogPen/DogPen';
// import myDogs from '../../App/dogs';

import StaffRoom from '../StaffRoom/StaffRoom';
// import myEmployees from '../../App/employees';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    // this.setState({ dogs: myDogs });
    // this.setState({ employees: myEmployees });
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error(err, 'could not get doggos'));
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err, 'could not get humans'));
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;

    return (
      <div className="Home">
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default Home;
