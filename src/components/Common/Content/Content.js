import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Content.scss';

const propTypes = {
  children: PropTypes.any.isRequired,
};

class Content extends Component {
  render() {
    return (
      <div className="Content">{this.props.children}</div>
    );
  }
}

Content.propTypes = propTypes;

export default Content;
