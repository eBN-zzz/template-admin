import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { result_code } = config

const timeout = 1000

const adminList = [
  {
    path: '/dashboard',
    component: '#',
    redirect: '/dashboard/analysis',
    name: 'Dashboard',
    meta: {
      title: 'router.dashboard',
      icon: 'ant-design:dashboard-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'analysis',
        component: 'views/Dashboard/Analysis',
        name: 'Analysis',
        meta: {
          title: 'router.analysis',
          noCache: true
        }
      },
      {
        path: 'workplace',
        component: 'views/Dashboard/Workplace',
        name: 'Workplace',
        meta: {
          title: 'router.workplace',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/goods',
    component: '#',
    redirect: '/goods/list',
    name: 'Goods',
    meta: {
      title: 'router.goods',
      icon: 'ant-design:rest-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'goods-list',
        component: 'views/goods/list/index',
        name: 'GoodsList',
        meta: {
          title: 'router.goodsList',
          noCache: true
        }
      },
      {
        path: 'category',
        component: 'views/goods/category/index',
        name: 'Category',
        meta: {
          title: 'router.category',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/order',
    component: '#',
    redirect: '/order/list1',
    name: 'Order',
    meta: {
      title: 'router.order',
      icon: 'ant-design:appstore-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'order-list',
        component: 'views/order/list/index',
        name: 'OrderList',
        meta: {
          title: 'router.orderList',
          noCache: true
        }
      },
      {
        path: 'setting',
        component: 'views/order/setting/index',
        name: 'Setting',
        meta: {
          title: 'router.orderSetting',
          noCache: true
        }
      },
      {
        path: 'refund',
        component: 'views/order/refund/index',
        name: 'Refund',
        meta: {
          title: 'router.orderRefund',
          noCache: true
        }
      },
      {
        path: 'refund-reason',
        component: 'views/order/refund-reason/index',
        name: 'RefundReson',
        meta: {
          title: 'router.orderRefundReson',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/external-link',
    component: '#',
    meta: {},
    name: 'ExternalLink',
    children: [
      {
        path: 'https://element-plus-admin-doc.cn/',
        name: 'DocumentLink',
        meta: {
          title: 'router.document',
          icon: 'clarity:document-solid'
        }
      }
    ]
  },
  {
    path: '/guide',
    component: '#',
    name: 'Guide',
    meta: {},
    children: [
      {
        path: 'index',
        component: 'views/Guide/Guide',
        name: 'GuideDemo',
        meta: {
          title: 'router.guide',
          icon: 'cib:telegram-plane'
        }
      }
    ]
  },
  {
    path: '/components',
    component: '#',
    redirect: '/components/icon',
    name: 'ComponentsDemo',
    meta: {
      title: 'router.component',
      icon: 'bx:bxs-component',
      alwaysShow: true
    },
    children: [
      {
        path: 'form',
        component: '##',
        name: 'Form',
        meta: {
          title: 'router.form',
          alwaysShow: true
        },
        children: [
          {
            path: 'default-form',
            component: 'views/Components/Form/DefaultForm',
            name: 'DefaultForm',
            meta: {
              title: 'router.defaultForm'
            }
          },
          {
            path: 'use-form',
            component: 'views/Components/Form/UseFormDemo',
            name: 'UseForm',
            meta: {
              title: 'UseForm'
            }
          },
          {
            path: 'ref-form',
            component: 'views/Components/Form/RefForm',
            name: 'RefForm',
            meta: {
              title: 'RefForm'
            }
          }
        ]
      },
      {
        path: 'table',
        component: '##',
        name: 'TableDemo',
        meta: {
          title: 'router.table',
          alwaysShow: true
        },
        children: [
          {
            path: 'default-table',
            component: 'views/Components/Table/DefaultTable',
            name: 'DefaultTable',
            meta: {
              title: 'router.defaultTable'
            }
          },
          {
            path: 'use-table',
            component: 'views/Components/Table/UseTableDemo',
            name: 'UseTable',
            meta: {
              title: 'UseTable'
            }
          },
          {
            path: 'ref-table',
            component: 'views/Components/Table/RefTable',
            name: 'RefTable',
            meta: {
              title: 'RefTable'
            }
          }
        ]
      },
      {
        path: 'editor-demo',
        component: '##',
        name: 'EditorDemo',
        meta: {
          title: 'router.editor',
          alwaysShow: true
        },
        children: [
          {
            path: 'editor',
            component: 'views/Components/Editor/Editor',
            name: 'Editor',
            meta: {
              title: 'router.richText'
            }
          }
        ]
      },
      {
        path: 'search',
        component: 'views/Components/Search',
        name: 'Search',
        meta: {
          title: 'router.search'
        }
      },
      {
        path: 'descriptions',
        component: 'views/Components/Descriptions',
        name: 'Descriptions',
        meta: {
          title: 'router.descriptions'
        }
      },
      {
        path: 'image-viewer',
        component: 'views/Components/ImageViewer',
        name: 'ImageViewer',
        meta: {
          title: 'router.imageViewer'
        }
      },
      {
        path: 'dialog',
        component: 'views/Components/Dialog',
        name: 'Dialog',
        meta: {
          title: 'router.dialog'
        }
      },
      {
        path: 'icon',
        component: 'views/Components/Icon',
        name: 'Icon',
        meta: {
          title: 'router.icon'
        }
      },
      {
        path: 'echart',
        component: 'views/Components/Echart',
        name: 'Echart',
        meta: {
          title: 'router.echart'
        }
      },
      {
        path: 'count-to',
        component: 'views/Components/CountTo',
        name: 'CountTo',
        meta: {
          title: 'router.countTo'
        }
      },
      {
        path: 'qrcode',
        component: 'views/Components/Qrcode',
        name: 'Qrcode',
        meta: {
          title: 'router.qrcode'
        }
      },
      {
        path: 'highlight',
        component: 'views/Components/Highlight',
        name: 'Highlight',
        meta: {
          title: 'router.highlight'
        }
      },
      {
        path: 'infotip',
        component: 'views/Components/Infotip',
        name: 'Infotip',
        meta: {
          title: 'router.infotip'
        }
      },
      {
        path: 'input-password',
        component: 'views/Components/InputPassword',
        name: 'InputPassword',
        meta: {
          title: 'router.inputPassword'
        }
      },
      {
        path: 'sticky',
        component: 'views/Components/Sticky',
        name: 'Sticky',
        meta: {
          title: 'router.sticky'
        }
      }
    ]
  },
  {
    path: '/hooks',
    component: '#',
    redirect: '/hooks/useWatermark',
    name: 'Hooks',
    meta: {
      title: 'hooks',
      icon: 'ic:outline-webhook',
      alwaysShow: true
    },
    children: [
      {
        path: 'useWatermark',
        component: 'views/hooks/useWatermark',
        name: 'UseWatermark',
        meta: {
          title: 'useWatermark'
        }
      }
    ]
  },
  {
    path: '/level',
    component: '#',
    redirect: '/level/menu1/menu1-1/menu1-1-1',
    name: 'Level',
    meta: {
      title: 'router.level',
      icon: 'carbon:skill-level-advanced'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: '##',
        redirect: '/level/menu1/menu1-1/menu1-1-1',
        meta: {
          title: 'router.menu1'
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu11',
            component: '##',
            redirect: '/level/menu1/menu1-1/menu1-1-1',
            meta: {
              title: 'router.menu11',
              alwaysShow: true
            },
            children: [
              {
                path: 'menu1-1-1',
                name: 'Menu111',
                component: 'views/Level/Menu111',
                meta: {
                  title: 'router.menu111'
                }
              }
            ]
          },
          {
            path: 'menu1-2',
            name: 'Menu12',
            component: 'views/Level/Menu12',
            meta: {
              title: 'router.menu12'
            }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2Demo',
        component: 'views/Level/Menu2',
        meta: {
          title: 'router.menu2'
        }
      }
    ]
  },
  {
    path: '/error',
    component: '#',
    redirect: '/error/404',
    name: 'Error',
    meta: {
      title: 'router.errorPage',
      icon: 'ci:error',
      alwaysShow: true
    },
    children: [
      {
        path: '404-demo',
        component: 'views/Error/404',
        name: '404Demo',
        meta: {
          title: '404'
        }
      },
      {
        path: '403-demo',
        component: 'views/Error/403',
        name: '403Demo',
        meta: {
          title: '403'
        }
      },
      {
        path: '500-demo',
        component: 'views/Error/500',
        name: '500Demo',
        meta: {
          title: '500'
        }
      }
    ]
  }
]

export default [
  // ????????????
  {
    url: '/role/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { roleName } = query
      return {
        code: result_code,
        data: {
          list: roleName === 'admin' ? adminList : []
        }
      }
    }
  }
] as MockMethod[]
