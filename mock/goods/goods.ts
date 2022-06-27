import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

const { result_code } = config

const timeout = 1000

const count = 100

let List: {
  id: string
  no: number | string
  image: string
  name: string
  price: number
  type: number
  code: number | string
  newStatus: number
  shelvesStatus: number
  recommendStatus: number
  sort: number
  saleNum: number
  auditStatus: number
  createAt: string | Date
}[] = []

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@id',
      no: '@guid',
      image: "@image('200x200', '#FF6600')",
      name: '@title(5, 10)',
      price: '@float(60, 600, 2)',
      code: '@guid',
      type: '@integer(1, 20)',
      newStatus: '@integer(0, 1)',
      shelvesStatus: '@integer(0, 1)',
      recommendStatus: '@integer(0, 1)',
      sort: '@integer(1, 10)',
      saleNum: '@integer(1, 1000)',
      auditStatus: '@integer(0, 2)',
      createAt: '@datetime("yyyy-MM-dd")' // HH:mm:ss
    })
  )
}

export default [
  // 列表接口
  {
    url: '/goods/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { name, pageIndex, pageSize } = query
      const mockList = List.filter((item) => {
        if (name && item.name.indexOf(name) < 0) return false
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
    url: '/goods/save',
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
    url: '/goods/detail',
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
    url: '/goods/delete',
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
