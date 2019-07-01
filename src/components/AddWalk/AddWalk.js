import React from 'react';

class AddWalk extends React.Component {
  // state = {
  //   name: '',
  //   date: '',
  // }

  render() {
    return (
      <div className="AddWalk">
        <select className="employeeSelected">
          <option value="Employee">Employee</option>
          {this.props.employees.map(employee => (
            <option value={employee.name}>{employee.name}</option>
          ))}
        </select>
        <select className="dogSelected">
          <option value="Dog">Dog</option>
          {this.props.dogs.map(dog => (
            <option value={dog.name}>{dog.name}</option>
          ))}
        </select>
        <label>
          Date of walk:
          <input type="text" placeholder="Enter date"></input>
        </label>
        <button onClick={this.addClickEvent} type="button" className="btn btn-success">Save</button>
      </div>
    );
  }
}

export default AddWalk;
