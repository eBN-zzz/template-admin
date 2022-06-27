import { config } from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

const { result_code } = config

const timeout = 1000

const count = 30

let List: {
  id: string
  name: string
  lv: number
  num: number
  unit: string
  menuStatus: number
  showStatus: number
  sort: number
  pid: number
}[] = []

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@id',
      name: '@title(5, 10)',
      lv: '@integer(0, 2)',
      num: '@integer(0, 1000)',
      unit: '@word(1, 3)',
      menuStatus: '@integer(0, 1)',
      showStatus: '@integer(0, 1)',
      sort: '@integer(1, 10)',
      children: [
        {
          id: '@id',
          name: '@title(5, 10)',
          lv: '@integer(0, 2)',
          num: '@integer(0, 1000)',
          unit: '@word(1, 3)',
          menuStatus: '@integer(0, 1)',
          showStatus: '@integer(0, 1)',
          sort: '@integer(1, 10)'
        },
        {
          id: '@id',
          name: '@title(5, 10)',
          lv: '@integer(0, 2)',
          num: '@integer(0, 1000)',
          unit: '@word(1, 3)',
          menuStatus: '@integer(0, 1)',
          showStatus: '@integer(0, 1)',
          sort: '@integer(1, 10)'
        }
      ]
    })
  )
}

export default [
  // 列表接口
  {
    url: '/category/list',
    method: 'get',
    timeout,
    response: ({ query }) => {
      const { goodsName, pageIndex, pageSize } = query
      const mockList = List.filter((item) => {
        if (goodsName && item.name.indexOf(goodsName) < 0) return false
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
    url: '/category/save',
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
    url: '/category/detail',
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
    url: '/category/delete',
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
