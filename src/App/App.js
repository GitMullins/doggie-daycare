import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import DogPen from '../components/DogPen/DogPen';
import myDogs from './dogs';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
  }

  render() {
    const { dogs } = this.state;

    return (
      <div className="App">
        <div>Doggie Daycare</div>
        <DogPen dogs={dogs} />
      </div>
    );
  }
}

export default App;
