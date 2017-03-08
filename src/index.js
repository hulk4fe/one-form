import { Form } from 'antd';
import DynamicForm from './DynamicForm';

export default (options) => (
  Form.create(options)(DynamicForm)
);


