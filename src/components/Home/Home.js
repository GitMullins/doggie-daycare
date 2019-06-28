import React from 'react';

import DogPen from '../DogPen/DogPen';
import myDogs from '../../App/dogs';

import StaffRoom from '../StaffRoom/StaffRoom';
import myEmployees from '../../App/employees';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees });
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
