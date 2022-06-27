import { CrudSchema } from '@/hooks/web/useCrudSchemas'

export const schemaData: CrudSchema[] = [
  {
    field: 'no',
    label: '服务单号',
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
      show: false
    }
  },
  {
    field: 'applyTime',
    label: '申请时间',
    minWidth: '140px',
    showOverflowTooltip: false,
    search: {
      show: true,
      component: 'DatePicker',
      componentProps: {
        type: 'datetime'
      }
    },
    form: {
      colProps: {
        span: 22
      }
    }
  },
  {
    field: 'username',
    label: '用户账号',
    minWidth: '140px',
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
        span: 22
      }
    }
  },
  {
    field: 'refundAmount',
    label: '退款金额',
    minWidth: '160px',
    form: {
      colProps: {
        span: 22
      }
    }
  },
  {
    field: 'status',
    label: '申请状态',
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
        span: 22
      }
    }
  },
  {
    field: 'dealTime',
    label: '处理时间',
    minWidth: '140px',
    showOverflowTooltip: false,
    search: {
      show: true,
      component: 'DatePicker',
      componentProps: {
        type: 'datetime'
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
