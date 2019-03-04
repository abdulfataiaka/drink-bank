import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearchResult } from '../../actions/search';
import { toNum } from '../../utils';

class Fields extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.update = this.update.bind(this);
    this.cleanParams = this.cleanParams.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.dateField = this.dateField.bind(this);

    this.state = {
      minIbu: '',
      maxIbu: '',
      minAbv: '',
      maxAbv: '',
      minEbc: '',
      maxEbc: '',
      brewedBefore: '',
      brewedAfter: ''
    }
  }

  cleanParams(props) {
    const result = {};
    const nonNum = [ ];

    Object.entries(props).forEach(([key, value]) => {
      if (!nonNum.includes(key)) {
        result[key] = toNum(value);
      }

      else { result[key] = value; }
    });

    return result;
  }

  search(params) {
    let { beers } = this.props;
    let { minIbu, maxIbu, minAbv, maxAbv, minEbc, maxEbc } = params;

    beers = Object.values(beers);

    const ibuchk = minIbu !== null && maxIbu !== null && maxIbu < minIbu;
    const abvchk = minAbv !== null && maxAbv !== null && maxAbv < minAbv;
    const ebcchk = minEbc !== null && maxEbc !== null && maxEbc < minEbc;

    if (ibuchk) { maxIbu = null; }
    if (abvchk) { maxAbv = null; }
    if (ebcchk) { maxEbc = null; }

    return beers.filter(beer => !(
      (minIbu !== null && beer.ibu < minIbu) ||
      (minAbv !== null && beer.abv < minAbv) ||
      (minEbc !== null && beer.ebc < minEbc) ||

      (maxIbu !== null && beer.ibu > maxIbu) ||
      (maxAbv !== null && beer.abv > maxAbv) ||
      (maxEbc !== null && beer.ebc > maxEbc)
    ));
  }

  update(params) {
    const { beers } = this.props;
    params = this.cleanParams(params);
    const check = !beers || !Object.values(params).some(value => value !== null);
    const result = check ? null : this.search(params);
    this.props.updateSearchResult(result);
  }

  onChange(event) {
    const { target: { name, value }} = event;
    const newParams = { ...this.state, [name]: value };
    this.setState({ [name]: value });
    this.update(newParams);
  }

  dateChange(event) {
    const { target: { name, value }} = event;
    this.setState({ [name]: value });
  }

  inputField(name) {
    return (
      <input
        type="text"
        name={name}
        value={this.state[name]}
        onChange={this.onChange}
      />
    );
  }

  dateField(name) {
    return (
      <input
        name={name}
        type="date"
        pattern="[0-9]{2} / [0-9]{4}"
        onChange={this.dateChange}
        value={this.state[name]}
      />
    );
  }

  render() {
    return (
      <div id="fields">
        { this.dateField('brewedBefore') }
        { this.dateField('brewedAfter') }

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

const mapDispatchToProps = { updateSearchResult };
export default connect(null, mapDispatchToProps)(Fields);

