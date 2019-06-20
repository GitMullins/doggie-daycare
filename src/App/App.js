import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import DogPen from '../components/DogPen/DogPen';
import myDogs from './dogs';

import StaffRoom from '../components/StaffRoom/StaffRoom';
import myEmployees from './employees';

class App extends React.Component {
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
      <div className="App">
        <div>Doggie Daycare</div>
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
      </div>
    );
  }
}

export default App;
