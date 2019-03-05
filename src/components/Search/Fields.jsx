import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchBeers } from '../../actions/beers';
import { toNum, advancedSearch } from '../../utils';
import BrewedDate from './BrewedDate';

class Fields extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.update = this.update.bind(this);
    this.cleanParams = this.cleanParams.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.fieldChange = this.fieldChange.bind(this);

    this.state = {
      query: '',
      minIbu: '',
      maxIbu: '',
      minAbv: '',
      maxAbv: '',
      minEbc: '',
      maxEbc: '',
      brewedBefore: null,
      brewedAfter: null
    }
  }

  cleanParams(props) {
    const result = {};
    const nonNum = [ 'brewedBefore', 'brewedAfter' ];

    Object.entries(props).forEach(([key, value]) => {
      if (key === 'query') {
        result[key] = (
          value && value.trim().length
            ?  value.trim() : null
        );
      }
      
      else if (!nonNum.includes(key)) {
        result[key] = toNum(value);
      }

      else { result[key] = value; }
    });

    return result;
  }

  update(params) {
    const { beers } = this.props;
    params = this.cleanParams(params);
    const check = !beers || !Object.values(params).some(value => value !== null);
    const result = check ? null : advancedSearch(beers, params);
    this.props.updateSearchBeers(result);
  }

  onChange(name, value) {
    const newParams = { ...this.state, [name]: value };
    this.setState({ [name]: value });
    this.update(newParams);
  }

  fieldChange() {
    const { target: { name, value }} = event;
    this.onChange(name, value);
  }

  dateChange(name, value) {
    const { month, year } = value;
    let  date = null;

    if (month && year) {
      date = `${month < 10 ? `0${month}` : month}/${year}`;
    }

    this.onChange(name, date);
  }

  inputField(name) {
    return (
      <input
        type="text"
        placeholder={name}
        name={name}
        value={this.state[name]}
        onChange={this.fieldChange}
      />
    );
  }

  render() {
    return (
      <div id="fields">
        <input
          type="text"
          value={this.state.query}
          name="query"
          onChange={this.fieldChange}
        />

        <BrewedDate
          name="brewedBefore"
          onChange={this.dateChange}
        />
        
        <BrewedDate
          name="brewedAfter"
          onChange={this.dateChange}
        />

        { this.inputField('minEbc') }
        { this.inputField('maxEbc') }

        { this.inputField('minAbv') }
        { this.inputField('maxAbv') }

        { this.inputField('minIbu') }
        { this.inputField('maxIbu') }
      </div>
    );
  }
}

const mapDispatchToProps = { updateSearchBeers };
export default connect(null, mapDispatchToProps)(Fields);

