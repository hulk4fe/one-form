import React, { Component } from 'react';
import { render } from 'react-dom';

import form from '../../src';
import { inline } from './option';

const Form = form((props, fields) => {
  console.log(fields);
});

class Demo extends Component {

  state = {
    option: { ...inline },
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <Form
          option={this.state.option}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
