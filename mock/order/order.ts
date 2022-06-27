import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

const { result_code } = config

const timeout = 1000

const count = 100

let List: {
  id: string
  no: number | string
  submitDate: string
  username: string
  amount: number | string
  payway: string
  origin: number | string
  status: number
}[] = []

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@id',
      no: '@guid',
      submitDate: '@datetime("yyyy-MM-dd  HH:mm:ss")', // HH:mm:ss
      username: '@title(5, 10)',
      amount: '@float(60, 600, 2)',
      payway: '@integer(1, 3)',
      origin: '@integer(1, 3)',
      status: '@integer(1, 5)'
    })
  )
}

export default [
  // 列表接口
  {
    url: '/order/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { name, pageIndex, pageSize } = query
      const mockList = List.filter((item) => {
        if (name && item.username.indexOf(name) < 0) return false
        return true
      })
      const pageList = mockList.filter(
        (_, index) => index < pageSize * pageIndex && index >= pageSize * (pageIndex - 1)
      )
      return {
        code: result_code,
        data: {
          total: mockList.length,
          list: pageList
        }
      }
    }
  },
  // 保存接口
  {
    url: '/order/save',
    method: 'post',
    timeout,
    response: ({ body }) => {
      if (!body.id) {
        List = [
          Object.assign(
            body,
            Mock.mock({
              id: '@id'
            })
          )
        ].concat(List)
        return {
          code: result_code,
          data: 'success'
        }
      } else {
        List.map((item) => {
          if (item.id === body.id) {
            for (const key in item) {
              item[key] = body[key]
            }
          }
        })
        return {
          code: result_code,
          data: 'success'
        }
      }
    }
  },
  // 详情接口
  {
    url: '/order/detail',
    method: 'get',
    response: ({ query }) => {
      const { id } = query
      for (const example of List) {
        if (example.id === id) {
          return {
            code: result_code,
            data: example
          }
        }
      }
    }
  },
  // 删除接口
  {
    url: '/order/delete',
    method: 'post',
    response: ({ body }) => {
      const ids = body.ids
      if (!ids) {
        return {
          code: '500',
          message: '请选择需要删除的数据'
        }
      } else {
        let i = List.length
        while (i--) {
          if (ids.indexOf(List[i].id) !== -1) {
            List.splice(i, 1)
          }
        }
        return {
          code: result_code,
          data: 'success'
        }
      }
    }
  }
] as MockMethod[]
