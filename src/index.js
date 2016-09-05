import React, { PropTypes } from 'react'
import { Form } from 'antd'
import DynamicForm from './DynamicForm'

function WrapperForm({ onFieldsChange, mapPropsToFields, ...others }) {
  const options = {}
  if (onFieldsChange) options.onFieldsChange = onFieldsChange
  if (mapPropsToFields) options.mapPropsToFields = mapPropsToFields
  const HighOrderForm = Form.create(options)(DynamicForm)
  return (
    <HighOrderForm {...others} />
  )
}

WrapperForm.propTypes = {
  onFieldsChange: PropTypes.func,
  mapPropsToFields: PropTypes.func,
}

export default WrapperForm
