import React from 'react';
import firebase from 'firebase/app';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Home from '../components/Home/Home';

// import fbConnection from '../helpers/data/connection';

// fbConnection();

// import DogPen from '../components/DogPen/DogPen';
// import myDogs from './dogs';

// import StaffRoom from '../components/StaffRoom/StaffRoom';
// import myEmployees from './employees';

// class App extends React.Component {
//   state = {
//     dogs: [],
//     employees: [],
//   }

//   componentDidMount() {
//     this.setState({ dogs: myDogs });
//     this.setState({ employees: myEmployees });
//   }

//   render() {
//     const { dogs } = this.state;
//     const { employees } = this.state;

//     return (
//       <div className="App">
//         <div>Doggo Daycare</div>
//         <DogPen dogs={dogs} />
//         <StaffRoom employees={employees} />
//       </div>
//     );
//   }
// }

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return (
          <Home />
        );
      }
      return <Auth />;
    };
    return (
    <div className="App">
      <MyNavbar authed={authed} />
      {loadComponent()}
    </div>
    );
  }
}

export default App;
