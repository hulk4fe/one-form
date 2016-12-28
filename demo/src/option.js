export default {
  inline: {
    horizontal: true,
    rows: [{
      type: 'flex',
      cols: [{
        span: 8,
        offset: 8,
        formitems: [{
          type: 'autoComplete',
          label: 'autoComplete',
          id: 'name',
          description: 'a description',
          options: {
            rules: [{
              required: true,
              message: '必填',
            }],
          },
          item: {
            dataSource: ['12345', '23456', '34567'],
          },
        }, {
          label: 'text',
          id: 'age',
        }, {
          type: 'select',
          label: 'select',
          id: 'education',
          options: {
            initialValue: '2',
          },
          item: {
            options: ['1', '2', '3'],
            style: {
              width: 200,
            },
          },
        }, {
          type: 'switch',
          label: 'switch',
          id: 'switch',
          options: {
            valuePropName: 'checked',
          },
        }, {
          type: 'checkbox',
          id: 'checkbox',
          item: {
            label: 'checkbox',
          },
        }, {
          type: 'checkboxGroup',
          id: 'checkboxGroup1',
          item: {
            options: [
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' },
            ],
          },
        }, {
          type: 'checkboxGroup',
          id: 'checkboxGroup2',
          item: {
            options: ['Apple', 'Pear', 'Orange'],
          },
        }, {
          type: 'cascader',
          id: 'cascader',
          item: {
            placeholder: '级联选择',
            options: [{
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                  value: 'xihu',
                  label: 'West Lake',
                }],
              }],
            }, {
              value: 'jiangsu',
              label: 'Jiangsu',
              disabled: true,
              children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                }],
              }],
            }],
          },
        }, {
          type: 'datePicker',
          id: 'datePicker',
        }, {
          type: 'monthPicker',
          id: 'monthPicker',
        }, {
          type: 'rangePicker',
          id: 'rangePicker',
        }, {
          type: 'timePicker',
          id: 'timePicker',
        }, {
          type: 'mention',
          id: 'mention',
          item: {
            suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
          },
        }, {
          type: 'radioGroup',
          id: 'radioGroup',
          item: {
            options: [{
              label: '选项一',
              value: '1',
            }, {
              label: '选项二',
              value: '2',
            }],
          },
        }, {
          type: 'radioGroup',
          id: 'radioGroup2',
          item: {
            type: 'button',
            size: 'small',
            options: [{
              label: '选项一',
              value: '1',
            }, {
              label: '选项二',
              value: '2',
            }],
          },
        }, {
          type: 'rate',
          id: 'rate',
          item: {
            count: 10,
          },
        }, {
          type: 'slider',
          id: 'slider',
        }, {
          type: 'transfer',
          id: 'transfer',
          item: {
            titles: ['Source', 'Target'],
            render: item => item.title,
            dataSource: [{
              key: 1,
              title: '标题',
              description: 'sadsad',
            }, {
              key: 2,
              title: '标题',
              description: 'sadsad',
            }],
          },
        }, {
          type: 'treeSelect',
          id: 'treeSelect',
          item: {
            treeData: [{
              label: 'Node1',
              value: '0-0',
              key: '0-0',
              children: [{
                label: 'Child Node1',
                value: '0-0-1',
                key: '0-0-1',
              }, {
                label: 'Child Node2',
                value: '0-0-2',
                key: '0-0-2',
              }],
            }, {
              label: 'Node2',
              value: '0-1',
              key: '0-1',
            }],
          },
        }, {
          type: 'upload',
          id: 'upload',
          item: {
            label: '点击上传文件',
          },
        }, {
          type: 'dragger',
          id: 'dragger',
        }, {
          type: 'button',
          item: {
            title: '查询',
            type: 'primary',
            htmlType: 'submit',
          },
        }],
      }],
    }],
  },
};
