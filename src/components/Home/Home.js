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
      .then((dogs) => {
        employeesData.getEmployees()
          .then((employees) => {
            walksData.getWalks()
              .then((walks) => {
                this.setState({ dogs, employees, walks });
              });
          })
          .catch(err => console.error(err, 'could not get data from Home.js'));
      });
  }

  addWalk = (newWalk) => {
    const dog = this.state.dogs.find(x => x.id === newWalk.dogId);
    const employee = this.state.employees.find(x => x.id === newWalk.employeeId);
    const walkObj = {
      dogId: dog.id,
      employeeId: employee.id,
      date: newWalk.date,
    };
    walksData.postWalk(walkObj)
      .then(() => {
        walksData.getWalks()
          .then(allWalks => this.setState({ walks: allWalks }));
      });
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    const { walks } = this.state;

    return (
      <div className="Home">
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
        <Walks dogs={dogs} employees={employees} walks={walks} />
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
