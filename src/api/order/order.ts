import { useAxios } from '@/hooks/web/useAxios'
import type { OrderData } from './types'

const request = useAxios()

export const getTableListApi = ({ params }) => {
  return request.get<{
    total: number
    list: OrderData[]
  }>({ url: '/order/list', params })
}

export const saveTableApi = ({ data }) => {
  return request.post<OrderData>({ url: '/order/save', data })
}

export const getTableDetApi = ({ params }) => {
  return request.get<OrderData>({ url: '/order/detail', params })
}

export const delTableListApi = ({ data }) => {
  return request.post({ url: '/order/delete', data })
}
