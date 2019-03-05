import React, { Component } from 'react';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];

const nowYear = parseInt((new Date()).getFullYear()) || 0;

class BrewedDate extends Component {
  constructor(props) {
    super(props);
    this.dateChange = this.dateChange.bind(this);
    this.state = {
      month: null,
      year: null
    }
  }

  dateChange(event) {
    const { name: fieldName, onChange } = this.props;
    const { target: { name, value }} = event;
    let reformed = parseInt(value) || 0;
    reformed = reformed === 0 ? null : reformed;
    const newState = { ...this.state, [name]: reformed };
    this.setState({ [name]: reformed });
    onChange(fieldName, newState);
  }

  render() {
    const { month, year } = this.state;
    const monArr = Array(12).fill(1);
    const yearArr = Array(50).fill(1);

    return (
      <div>
        <select
          name="month"
          onChange={this.dateChange}
          value={!month ? 0 : month }
        >
          <option value={0}>MM</option>
          { monArr.map((_, index) => (
            <option
              key={index}
              value={index+1}
            >
              {months[index]}
            </option>
          )) }
        </select>

        <select
          name='year'
          onChange={this.dateChange}
          value={!year ? 0 : year}
        >
          <option value="0">YYYY</option>
          { yearArr.map((_, index) => (
            <option
              key={index}
              value={nowYear - index}
            >
              {nowYear - index}
            </option>
          )) }
        </select>
      </div>
    );
  }
}

export default BrewedDate;
