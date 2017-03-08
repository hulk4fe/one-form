import React, { Component } from 'react';
import { render } from 'react-dom';

import form from '../../src';
import { inline } from './option';

const Form = form();

class Demo extends Component {

  state = {
    options: { ...inline },
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <Form
          options={this.state.options}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
