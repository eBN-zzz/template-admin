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
    label: '订单编号',
    minWidth: '120px',
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
    field: 'receiver',
    label: '收货人',
    table: {
      show: false
    },
    search: {
      show: true,
      componentProps: {
        placeholder: '姓名/手机号码',
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
    field: 'submitDate',
    label: '提交时间',
    minWidth: '140px',
    showOverflowTooltip: false,
    search: {
      show: true,
      component: 'DatePicker'
    },
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'username',
    label: '用户账号',
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
    field: 'amount',
    label: '订单金额',
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
    field: 'payway',
    label: '支付方式',
    form: {
      colProps: {
        span: 12
      },
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '微信',
            value: 1
          },
          {
            label: '支付宝',
            value: 2
          }
        ]
      }
    }
  },
  {
    field: 'origin',
    label: '订单来源',
    search: {
      show: true,
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '小程序',
            value: 1
          },
          {
            label: 'App',
            value: 2
          }
        ]
      }
    },
    form: {
      show: false
    }
  },
  {
    field: 'status',
    label: '订单状态',
    search: {
      show: true,
      component: 'Select',
      dictName: 'orderStatus'
    },
    form: {
      component: 'InputNumber',
      value: 0
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
