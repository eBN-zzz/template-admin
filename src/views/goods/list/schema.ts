import { CrudSchema } from '@/hooks/web/useCrudSchemas'

export const schemaData: CrudSchema[] = [
  {
    field: 'index',
    label: '序号',
    type: 'index',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  },
  {
    field: 'no',
    label: '商品编号',
    minWidth: '120px',
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'image',
    label: '商品图片',
    minWidth: '120px',
    showOverflowTooltip: false,
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'name',
    label: '商品名称',
    minWidth: '160px',
    search: {
      show: true,
      componentProps: {
        style: {
          width: '190px'
        }
      }
    },
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'code',
    label: '商品货号',
    minWidth: '100px',
    search: {
      show: true,
      componentProps: {
        style: {
          width: '190px'
        }
      }
    },
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'type',
    label: '商品分类',
    width: '100px',
    search: {
      show: true,
      component: 'Cascader',
      componentProps: {
        options: [
          {
            label: '类型1',
            value: 1,
            children: [
              {
                label: '小类型1',
                value: 11
              },
              {
                label: '小类型2',
                value: 12
              }
            ]
          },
          {
            label: '类型2',
            value: 2
          }
        ],
        props: {
          multiple: true,
          checkStrictly: true
        },
        showAllLevels: false
      }
    },
    form: {
      colProps: {
        span: 12
      },
      component: 'Cascader',
      componentProps: {
        options: [
          {
            label: '类型1',
            value: 1,
            children: [
              {
                label: '小类型1',
                value: 11
              },
              {
                label: '小类型2',
                value: 12
              }
            ]
          },
          {
            label: '类型2',
            value: 2
          }
        ],
        props: {
          checkStrictly: true
        },
        showAllLevels: false
      }
    }
  },
  {
    field: 'tag',
    label: '标签',
    minWidth: '160px',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  },
  {
    field: 'saleNum',
    label: '销量',
    form: {
      component: 'InputNumber',
      value: 0
    }
  },
  {
    field: 'shelvesStatus',
    label: '上架状态',
    search: {
      show: true,
      component: 'Select',
      dictName: 'shelvesStatus'
    },
    table: {
      show: false
    },
    form: {
      show: true,
      component: 'Switch',
      componentProps: {
        inactiveValue: 0,
        activeValue: 1
      }
    }
  },
  {
    field: 'auditStatus',
    minWidth: '100px',
    label: '审核状态',
    search: {
      show: true,
      component: 'Select',
      dictName: 'auditStatus'
    },
    form: {
      show: false
    }
  },
  {
    field: 'createAt',
    label: '创建时间',
    width: '108px',
    search: {
      show: true,
      component: 'DatePicker',
      componentProps: {
        type: 'daterange',
        valueFormat: 'YYYY-MM-DD',
        placement: 'bottom-start'
      }
    },
    form: {
      show: false
    }
  },
  {
    field: 'action',
    width: '150px',
    label: '操作',
    fixed: 'right',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  }
]
