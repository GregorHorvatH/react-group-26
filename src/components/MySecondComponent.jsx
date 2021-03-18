import { Component } from 'react';

class MySecondComponent extends Component {
  render() {
    return (
      <div className="second-component">
        <h4>second component</h4>
        <p>jkhdfg djfghdsjlgs kljgs ss</p>
        <p>user name: {this.props.user.name}</p>
      </div>
    );
  }
}

export default MySecondComponent;
