import React, { Component, PropTypes } from 'react';
import {
  Row, Col, Form, Input, InputNumber, Select, Switch,
  AutoComplete, Checkbox, Cascader, DatePicker, TimePicker, Mention, Radio,
  Rate, Slider, Transfer, TreeSelect, Upload, Button, Icon,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const { MonthPicker, RangePicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Dragger = Upload.Dragger;

class DynamicForm extends Component {

  rows(rows) {
    return rows.map((row, i) => {
      const { cols, ...other } = row;
      return (
        <Row key={i} {...other}>
          {this.cols(cols)}
        </Row>
      );
    });
  }

  cols(cols) {
    return cols.map((col, i) => {
      const { formitems, ...other } = col;
      return (
        <Col key={i} {...other}>
          {this.formitems(formitems)}
        </Col>
      );
    });
  }

  formitems(formitems) {
    const { getFieldDecorator } = this.props.form;
    return formitems.map((formitem, i) => {
      const { type, id, options, item, ...other } = formitem;
      return (
        <FormItem key={i} {...other}>
          {
            getFieldDecorator(id, options)(
              this.item(type, item)
            )
          }
        </FormItem>
      );
    });
  }

  item(type, item = {}) {
    switch (type) {
      case 'number':
        return (<InputNumber {...item} />);
      case 'select': {
        const { options, ...other } = item;
        return (
          <Select {...other}>
            {options.map((option, idx) => {
              if (option.value) {
                return (
                  <Option key={idx} value={option.value}>{option.label || option.value}</Option>
                );
              }
              return (<Option key={idx} value={option}>{option}</Option>);
            })}
          </Select>
        );
      }
      case 'switch':
        return (
          <Switch
            {...item}
          />
        );
      case 'autoComplete':
        return (
          <AutoComplete
            {...item}
          />
        );
      case 'checkbox': {
        const { label, ...other } = item;
        return (
          <Checkbox {...other}>{label}</Checkbox>
        );
      }
      case 'checkboxGroup':
        return (
          <CheckboxGroup {...item} />
        );
      case 'cascader':
        return (
          <Cascader {...item} />
        );
      case 'datePicker':
        return (
          <DatePicker {...item} />
        );
      case 'monthPicker':
        return (
          <MonthPicker {...item} />
        );
      case 'rangePicker':
        return (
          <RangePicker {...item} />
        );
      case 'timePicker':
        return (
          <TimePicker {...item} />
        );
      case 'mention':
        return (
          <Mention {...item} />
        );
      case 'radioGroup': {
        const { type, options, ...other } = item;
        return (
          <RadioGroup {...other}>
            {options.map((option, i) => {
              if (type === 'button') {
                return (
                  <RadioButton key={i} value={option.value}>{option.label}</RadioButton>
                );
              }
              return (
                <Radio key={i} value={option.value}>{option.label}</Radio>
              );
            })}
          </RadioGroup>
        );
      }
      case 'rate':
        return (
          <Rate {...item} />
        );
      case 'slider':
        return (
          <Slider {...item} />
        );
      case 'transfer':
        return (
          <Transfer {...item} />
        );
      case 'treeSelect':
        return (
          <TreeSelect {...item} />
        );
      case 'upload': {
        const { label, ...other } = item;
        return (
          <Upload {...other}>
            <Button type="ghost">
              <Icon type="upload" /> {label}
            </Button>
          </Upload>
        );
      }
      case 'dragger':
        return (
          <div style={{ width: 246, height: 140 }}>
            <Dragger {...item}>
              <Icon type="plus" />
            </Dragger>
          </div>
        );
      default:
        return (<Input {...item} />);
    }
  }

  render() {
    const { form, submit } = this.props;
    const { rows, formitems, ...other } = this.props.option;
    return (
      <Form
        {...other}
        onSubmit={(e) => {
          e.preventDefault();
          form.validateFieldsAndScroll((errors, values) => {
            if (errors || !submit) return;
            submit(values);
          });
        }}
      >
        {rows ? this.rows(rows) : this.formitems(formitems)}
      </Form>
    );
  }
}

DynamicForm.propTypes = {
  form: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired,
  submit: PropTypes.func,
};

export default DynamicForm;
