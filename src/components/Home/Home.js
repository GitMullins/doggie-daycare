import React from 'react';

import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';

import DogPen from '../DogPen/DogPen';

import StaffRoom from '../StaffRoom/StaffRoom';

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

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;

    return (
      <div className="Home container">
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
        <select>
          <option value="Derek">Derek</option>
          <option value="Mugato">Mugato</option>
          <option value="Ace">Ace</option>
          <option value="Ted">Ted</option>
          <option value="Tim">Tim</option>
        </select>
        <select>
          <option value="Tank">Tank</option>
          <option value="Hummer">Hummer</option>
          <option value="Chunky">Chunky</option>
          <option value="Slim">Slim</option>
          <option value="Rio">Rio</option>
      </select>
      </div>
    );
  }
}

export default Home;
