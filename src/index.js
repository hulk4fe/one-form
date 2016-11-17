import { Form } from 'antd';
import DynamicForm from './DynamicForm';

export default (
  onFieldsChange,
  mapPropsToFields
) => (
  Form.create({ onFieldsChange, mapPropsToFields })(DynamicForm)
);



