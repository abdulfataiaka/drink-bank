import React from 'react';
const image = "https://images.punkapi.com/v2/2.png";

const Main = (props) => (
  <div className="second-level">
    <div className="image">
      <img src={image} />
    </div>
    <div className="details">
      <h5>Trashy Blonde</h5>
      <h6>You Know You Shouldn't</h6>
      <div className="line" />
      <div className="stats">
        <span className="key">IBU:</span>
        <span className="value">14.5</span>

        <span className="key">ABV:</span>
        <span className="value">4.1%</span>

        <span className="key">EBC:</span>
        <span className="value">15</span>

        <p>
          This is the section that describe the drink, though it is something
          becoming normal which it is not supposed to be and that is a bad thing
          that needs to be fixed.
          This is the section that describe the drink, though it is something
          becoming normal which it is not supposed to be and that is a bad thing
          that needs to be fixed.
          This is the section that describe the drink, though it is something
          This is the section that describe the drink, though it is something
          This is the section that describe the drink, though it is something
          This is the section that describe the drink, though it is something
        </p>

        <div className="best-served">
          <div>Best served with:</div>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Main;




     