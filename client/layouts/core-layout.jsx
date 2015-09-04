import React, { PropTypes }  from 'react';
import './core-layout.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div className="page-container">
        <div className="view-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
