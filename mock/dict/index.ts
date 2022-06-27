import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'

const { result_code } = config

const timeout = 1000

const dictObj: Recordable = {
  auditStatus: [
    { label: '待审核', value: 2 },
    { label: '审核通过', value: 1 },
    { label: '审核失败', value: 0 }
  ],
  shelvesStatus: [
    { label: '未上架', value: 0 },
    { label: '已上架', value: 1 }
  ],
  orderStatus: [
    { label: '待付款', value: 1 },
    { label: '待发货', value: 2 },
    { label: '已发货', value: 3 },
    { label: '已完成', value: 4 },
    { label: '已关闭', value: 5 }
  ]
}

export default [
  // 字典接口
  {
    url: '/dict/list',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: result_code,
        data: dictObj
      }
    }
  },
  // 获取某个字典
  {
    url: '/dict/one',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: result_code,
        data: [
          {
            label: 'test1',
            value: 0
          },
          {
            label: 'test2',
            value: 1
          },
          {
            label: 'test3',
            value: 2
          }
        ]
      }
    }
  }
] as MockMethod[]
