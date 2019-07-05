import React from 'react';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import Walks from '../Walks/Walks';
import AddWalk from '../AddWalk/AddWalk';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error(err, 'could not get doggos'));
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error(err, 'could not get humans'));
    walksData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error(err, 'could not get walks'));
  }

  addWalk = (newWalk) => {
    const dog = this.state.dogs.find(x => x.id === newWalk.dogId);
    const employee = this.state.employees.find(x => x.id === newWalk.employeeId);
    const finalWalk = {
      dogName: dog.name,
      employeeName: employee.name,
      date: newWalk.date,
    };
    console.error(finalWalk);
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    const { walks } = this.state;

    return (
      <div className="Home">
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
        <Walks walks={walks} dogs={dogs} employees={employees} />
        <br/>
        <AddWalk
        walks={walks}
        dogs={dogs}
        employees={employees}
        addWalk={this.addWalk}
        />
      </div>
    );
  }
}

export default Home;
