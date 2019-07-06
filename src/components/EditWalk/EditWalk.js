import React from 'react';

class EditWalk extends React.Component {
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
    this.props.updateWalk(this.state);
    this.setState({ date: '' });
  }

  render() {
    const loadComponent = () => {
      const { walkEditing } = this.props;
      // const dogObj = this.props.dogs.find(x => x.id === this.props.walkEditing.dogId);
      // const employeeObj = this.props.employees.find(x => x.id === this.props.walkEditing.employeeId);
      if (Object.keys(walkEditing).length > 0) {
        return (
          <form onSubmit={this.onSubmit}>
            <br/>
            <h3>Edit Walk</h3>
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
            Date of walk:
            <input type="text" placeholder="Enter date" onChange={this.dateChange}></input>
          </label>
          <input type="submit" value="Save Edit" />
        </form>
        );
      }
      return <div />;
    };
    return (
    <div className="EditWalk">
      {loadComponent()}
    </div>
    );
  }
}

export default EditWalk;
