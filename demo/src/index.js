import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import 'wz-colorpick/asset/index.css'

import Form from '../../src'
import { inline, horizontal } from './forms'

const Demo = () => (
  <div
    style={{
      padding: 20,
    }}
  >
    <h1>wz-form Demo</h1>
    <h2>横向表单</h2>
    <Form
      option={inline}
      onFieldsChange={(props, values) => { console.log(values) }}
    />
    <h2 className="styleguide-mt-20">竖向经典表单</h2>
    <Form
      option={horizontal}
      onFieldsChange={(props, values) => { console.log(values) }}
    />
  </div>
)

render(<Demo />, document.querySelector('#demo'))
