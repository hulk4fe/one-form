import React from 'react'
import { Select } from 'antd'

const Option = Select.Option

const selectAfter = (
  <Select defaultValue=".com" style={{ width: 70 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
)

const cascaderOptions = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}]

const treeData = [{
  label: '节点一',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '子节点一',
    value: '0-0-0',
    key: '0-0-0',
  }],
}, {
  label: '节点二',
  value: '0-1',
  key: '0-1',
  children: [{
    label: '子节点三',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: '子节点四',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    label: '子节点五',
    value: '0-1-2',
    key: '0-1-2',
  }],
}]

export const inline = {
  attrs: {
    inline: true,
  },
  children: [{
    type: 'formitem',
    attrs: {
      label: '用户：',
    },
    item: {
      key: 'user',
      attrs: {
        placeholder: '输入用户名',
      },
    },
  }, {
    type: 'formitem',
    attrs: {
      label: '密码：',
    },
    item: {
      key: 'password',
      attrs: {
        type: 'password',
        placeholder: '输入密码',
      },
    },
  }, {
    type: 'formitem',
    item: {
      type: 'checkbox',
      key: 'remember',
      attrs: {
        title: '记住我',
      },
    },
  }, {
    type: 'formitem',
    item: {
      type: 'button',
      attrs: {
        title: '提交',
        type: 'primary',
        htmlType: 'submit',
      },
    },
  }],
}

export const horizontal = {
  attrs: {
    horizontal: true,
  },
  children: [{
    type: 'row',
    attrs: {
      type: 'flex',
      gutter: 10,
    },
    children: [{
      type: 'col',
      attrs: {
        md: 12,
      },
      children: [{
        type: 'formitem',
        attrs: {
          label: '用户',
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        },
        item: {
          key: 'user',
          attrs: {
            placeholder: '输入用户名',
          },
          props: {
            rules: [{
              required: true,
              message: '参数标签必填',
            }],
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '密码',
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        },
        item: {
          key: 'password',
          attrs: {
            type: 'password',
            placeholder: '输入密码',
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '您的性别',
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        },
        item: {
          type: 'radio',
          key: 'gender',
          opts: [{
            label: '男',
            value: 'male',
          }, {
            label: '女',
            value: 'female',
          }, {
            label: '保密',
            value: 'none',
          }],
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '您的性别',
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        },
        item: {
          type: 'radioButton',
          key: 'genderButton',
          opts: [{
            label: '男',
            value: 'male',
          }, {
            label: '女',
            value: 'female',
          }, {
            label: '保密',
            value: 'none',
          }],
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '备注',
          explain: {
            title: '这是说明啊',
          },
          help: '随便写点什么事',
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        },
        item: {
          key: 'remark',
          attrs: {
            type: 'textarea',
            rows: 3,
            placeholder: '随便写点什么',
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          wrapperCol: { offset: 6, span: 14 },
        },
        item: {
          type: 'checkbox',
          key: 'remember',
          attrs: {
            title: '记住我',
          },
        },
      }],
    }, {
      type: 'col',
      attrs: {
        md: 12,
      },
      children: [{
        type: 'formitem',
        attrs: {
          label: '标签输入',
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        },
        item: {
          key: 'tag',
          attrs: {
            placeholder: '输入标签',
            addonBefore: 'Http://',
            addonAfter: '.com',
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '标签输入',
          labelCol: { span: 6 },
          wrapperCol: { span: 10 },
        },
        item: {
          key: 'tags',
          attrs: {
            placeholder: '输入标签',
            addonAfter: selectAfter,
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '机器数',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        text: '台机器',
        item: {
          type: 'number',
          key: 'nums',
          attrs: {
            placeholder: '输入机器数',
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '静态项',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          key: 'static',
          attrs: {
            disabled: true,
          },
          props: {
            initialValue: '我不可编辑',
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: 'Switch 开关',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'switch',
          key: 'switch',
          props: {
            valuePropName: 'checked',
            initialValue: true,
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '滑动输入',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'slider',
          key: 'slider',
          attrs: {
            marks: { 0: '0%', 100: '100%' },
            tipFormatter: (value) => `${value}%`,
            icon: ['frown', 'smile'],
          },
        },
      }],
    }, {
      type: 'col',
      attrs: {
        md: 12,
      },
      children: [{
        type: 'formitem',
        attrs: {
          label: '日期',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'date',
          key: 'date',
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '日期时间',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'date',
          key: 'dateTime',
          attrs: {
            showTime: true,
            format: 'yyyy-MM-dd HH:mm:ss',
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '日期区间',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'range',
          key: 'dateRange',
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '日期时间区间',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'range',
          key: 'dateTimeRange',
          attrs: {
            showTime: true,
            format: 'yyyy-MM-dd HH:mm:ss',
          },
        },
      }, {
        type: 'formitem',
        attrs: {
          label: 'checkbox 多选',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'checkboxGroup',
          key: 'checkboxGroup',
          opts: [{
            label: '选项一',
            value: '1',
          }, {
            label: '选项二',
            value: '2',
          }, {
            label: '选项三',
            value: '3',
          }],
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '上传文件',
          help: '支持 jpeg、jpg、png，文件大小为 0MB ～ 5MB',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'upload',
          key: 'upload',
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '颜色选择',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'color',
          key: 'color',
        },
      }],
    }, {
      type: 'col',
      attrs: {
        md: 12,
      },
      children: [{
        type: 'formitem',
        attrs: {
          label: '穿梭框',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'transfer',
          key: 'transfer',
          attrs: {
            showSearch: true,
          },
          props: {
            valuePropName: 'targetKeys',
          },
          opts: [{
            key: '1',
            label: '选项一',
          }, {
            key: '2',
            label: '选项二',
          }],
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '普通单选',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'select',
          key: 'select',
          attrs: {
            placeholder: '请选择',
          },
          opts: [{
            label: '选项一',
            value: '1',
          }, {
            label: '选项二',
            value: '2',
          }, {
            label: '选项三',
            value: '3',
          }],
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '普通多选',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'select',
          key: 'multipleSelect',
          attrs: {
            multiple: true,
            placeholder: '请选择',
          },
          opts: [{
            label: '选项一',
            value: '1',
          }, {
            label: '选项二',
            value: '2',
          }, {
            label: '选项三',
            value: '3',
          }],
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '级联选择',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'cascader',
          key: 'cascader',
          attrs: {
            placeholder: '请选择',
          },
          opts: cascaderOptions,
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '标签',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'select',
          key: 'tags',
          attrs: {
            tags: true,
            placeholder: '请选择',
          },
          opts: [{
            label: '选项一',
            value: '1',
          }, {
            label: '选项二',
            value: '2',
          }, {
            label: '选项三',
            value: '3',
          }],
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '评分',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'rate',
          key: 'rate',
        },
      }, {
        type: 'formitem',
        attrs: {
          label: '树形选择',
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        },
        item: {
          type: 'treeSelect',
          key: 'treeSelect',
          attrs: {
            multiple: true,
            treeCheckable: true,
            placeholder: '请选择',
          },
          opts: treeData,
        },
      }],
    }],
  }],
}
