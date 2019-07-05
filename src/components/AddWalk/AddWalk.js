import React from 'react';

class AddWalk extends React.Component {
  state = {
    date: '',
    employeeId: '',
    dogId: '',
  }

  employeeChange = (e) => {
    this.setState({ employeeId: e.target.value });
  }

  dogChange = (e) => {
    this.setState({ dogId: e.target.value });
  }

  dateChange = (e) => {
    this.setState({ date: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addWalk(this.state);
    this.setState({ date: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <select value={this.state.employeeValue} onChange={this.employeeChange}>
          <option value="Employee">Employee</option>
          {this.props.employees.map(employee => (
            <option key={employee.id} value={employee.id}>{employee.name}</option>
          ))}
        </select>
        <select value={this.state.dogValue} onChange={this.dogChange}>
          <option value="Dog">Dog</option>
          {this.props.dogs.map(dog => (
            <option key={dog.id} value={dog.id}>{dog.name}</option>
          ))}
        </select>
        <br/>
        <label>
          Date of walk: {' '}
          <input type="text" placeholder="Enter date" value={this.state.date} onChange={this.dateChange}></input>
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default AddWalk;
