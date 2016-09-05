import React from 'react'
import ColorPick from 'wz-colorpick'
import {
  Input,
  Select,
  InputNumber,
  Switch,
  Slider,
  Cascader,
  Radio,
  Checkbox,
  DatePicker,
  TimePicker,
  Icon,
  Button,
  Upload,
  Transfer,
  Rate,
  TreeSelect,
 } from 'antd'

const Option = Select.Option
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const CheckboxGroup = Checkbox.Group
const MonthPicker = DatePicker.MonthPicker
const RangePicker = DatePicker.RangePicker

function getItem(type, attrs, opts) {
  let item = null
  switch (type) {
    // 数字
    case 'number':
      item = (
        <InputNumber {...attrs} />
      )
      break
    // select
    case 'select':
      item = (
        <Select style={{ minWidth: '188px' }} {...attrs}>
          {opts.map((opt, idx) => (
            <Option key={idx} value={opt.value}>{opt.label || opt.value}</Option>
          ))}
        </Select>
      )
      break
    // 开关
    case 'switch':
      item = (
        <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="cross" />}
          {...attrs}
        />
      )
      break
    // 滑动输入
    case 'slider':
      item = (
        <Slider {...attrs} />
      )
      break
    // 级联选择
    case 'cascader':
      item = (
        <Cascader
          {...{
            options: opts,
            expandTrigger: 'hover',
            ...attrs,
          }}
        />
      )
      break
    // 单选 radio
    case 'radio':
      item = (
        <RadioGroup {...attrs}>
          {opts.map((opt, idx) => (
            <Radio key={idx} value={opt.value}>{opt.label || opt.value}</Radio>
          ))}
        </RadioGroup>
      )
      break
    // 单选 radio
    case 'radioButton':
      item = (
        <RadioGroup {...attrs}>
          {opts.map((opt, idx) => (
            <RadioButton key={idx} value={opt.value}>{opt.label || opt.value}</RadioButton>
          ))}
        </RadioGroup>
      )
      break
    // checkbox
    case 'checkbox':
      item = (
        <Checkbox {...attrs}>{attrs.title}</Checkbox>
      )
      break
    // 多选 checkboxGroup
    case 'checkboxGroup':
      item = (
        <CheckboxGroup
          {...attrs}
          options={opts}
        />
      )
      break
    // 日期
    case 'date':
      item = (
        <DatePicker {...attrs} />
      )
      break
    // 月份选择
    case 'month':
      item = (
        <MonthPicker {...attrs} />
      )
      break
    // 日期区间
    case 'range':
      item = (
        <RangePicker {...attrs} />
      )
      break
    // 时间
    case 'time':
      item = (
        <TimePicker format="yyyy-MM-dd HH:mm:ss" {...attrs} />
      )
      break
    // 按钮
    case 'button':
      item = (
        <Button {...attrs}>{attrs.title}</Button>
      )
      break
    // 上传
    case 'upload':
      item = (
        <Upload {...attrs}>
          <Button type="ghost">
            <Icon type="upload" /> 点击上传
          </Button>
        </Upload>
      )
      break
    // 穿梭框
    case 'transfer':
      item = (
        <Transfer
          {...{
            dataSource: opts,
            render(o) { return o.label },
            ...attrs,
          }}
        />
      )
      break
    // rate
    case 'rate':
      item = (
        <Rate {...attrs} />
      )
      break
    // TreeSelect
    case 'treeSelect':
      item = (
        <TreeSelect {...attrs} treeData={opts} />
      )
      break
    // 颜色选择器
    case 'color':
      item = (<ColorPick {...attrs} />)
      break
    // 默认 text input
    default:
      item = (<Input {...attrs} />)
      break
  }
  return item
}

export default getItem
