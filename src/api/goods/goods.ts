import { useAxios } from '@/hooks/web/useAxios'
import type { ManageData } from './types'

const request = useAxios()

export const getTableListApi = ({ params }) => {
  return request.get<{
    total: number
    list: ManageData[]
  }>({ url: '/goods/list', params })
}

export const saveTableApi = ({ data }) => {
  return request.post<ManageData>({ url: '/goods/save', data })
}

export const getTableDetApi = ({ params }) => {
  return request.get<ManageData>({ url: '/goods/detail', params })
}

export const delTableListApi = ({ data }) => {
  return request.post({ url: '/goods/delete', data })
}
