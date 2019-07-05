import React from 'react';
// import PropTypes from 'prop-types';

// import dogShape from '../../helpers/propz/dogShape';

import Walk from '../Walk/Walk';

import './Walks.scss';


class Walks extends React.Component {
  // static propTypes = {
  //   dogs: PropTypes.arrayOf(dogShape.dogShape),
  // }

  render() {
    const { walks, dogs, employees } = this.props;
    const makeWalks = walks.map(walk => (
      <Walk key={walk.id} walk={walk} dogs={dogs} employees={employees}/>
    ));
    return (
      <div className="Walks d-flex flex-nowrap">
        { makeWalks }
      </div>
    );
  }
}

export default Walks;
