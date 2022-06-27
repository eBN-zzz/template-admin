import { CrudSchema } from '@/hooks/web/useCrudSchemas'

export const schemaData: CrudSchema[] = [
  {
    field: 'name',
    label: '分类名称',
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
    },
    detail: {
      span: 2
    }
  },
  {
    field: 'lv',
    label: '分类级别',
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'num',
    label: '商品数量',
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'unit',
    label: '数量单位',
    form: {
      colProps: {
        span: 12
      }
    }
  },
  {
    field: 'menuStatus',
    label: '首页菜单',
    form: {
      colProps: {
        span: 12
      },
      component: 'Switch',
      componentProps: {
        activeValue: 1,
        inactiveValue: 0
      }
    },
    table: {
      show: true
    }
  },
  {
    field: 'showStatus',
    label: '是否显示',
    form: {
      colProps: {
        span: 12
      },
      component: 'Switch',
      componentProps: {
        activeValue: 1,
        inactiveValue: 0
      }
    }
  },
  {
    field: 'sort',
    label: '排序',
    form: {
      colProps: {
        span: 12
      }
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
