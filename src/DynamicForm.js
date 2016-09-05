import React, { PropTypes } from 'react'
import { Form, Row, Col, Tooltip, Icon } from 'antd'
import getItem from './item'

const FormItem = Form.Item

function getChildren(items, children, getFieldProps) {
  return children.map((item, index) => items[item.type](item, index, getFieldProps))
}

const items = {
  row(item, index, getFieldProps) {
    return (
      <Row
        key={`row-${index}`}
        {...item.attrs}
      >
        {getChildren(this, item.children, getFieldProps)}
      </Row>
    )
  },
  col(item, index, getFieldProps) {
    return (
      <Col
        key={`col-${index}`}
        {...item.attrs}
      >
        {getChildren(this, item.children, getFieldProps)}
      </Col>
    )
  },
  formitem(formitem, index, getFieldProps) {
    const { explain, ...other } = formitem.attrs || {}
    const item = formitem.item
    let props = {}
    if (item.type !== 'button') {
      props = {
        ...getFieldProps(item.key, {
          ...item.props,
        }),
      }
    }
    if (other.label && explain) {
      if (!explain.icon) explain.icon = 'question-circle-o'
      other.label = (
        <span>
          {other.label}&nbsp;
          <Tooltip title={explain.title}><Icon type={explain.icon} /></Tooltip>
        </span>
      )
    }
    const attrs = {
      ...item.attrs,
      ...props,
    }
    return (
      <FormItem
        key={`formitem-${index}`}
        {...other}
      >
        {getItem(item.type, attrs, item.opts)}
        {formitem.text &&
          <span className="ant-form-text">&nbsp;{formitem.text}</span>
        }
      </FormItem>
    )
  },
}

function DynamicForm({ form, option, submit }) {
  const { getFieldProps } = form
  return (
    <Form
      {...option.attrs}
      onSubmit={(e) => {
        e.preventDefault()
        form.validateFieldsAndScroll((errors, values) => {
          if (errors) return
          submit(values)
        })
      }}
    >
      {getChildren(items, option.children, getFieldProps)}
    </Form>
  )
}

DynamicForm.propTypes = {
  form: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired,
  submit: PropTypes.func,
}

DynamicForm.defaultProps = {
  submit: (values) => {
    console.warn('未注册提交事件', values)
  },
}

export default DynamicForm
