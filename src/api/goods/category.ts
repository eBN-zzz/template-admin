import { useAxios } from '@/hooks/web/useAxios'
import type { CategoryData } from './types'

const request = useAxios()

export const getTableListApi = ({ params }) => {
  return request.get<{
    total: number
    list: CategoryData[]
  }>({ url: '/category/list', params })
}

export const saveTableApi = ({ data }) => {
  return request.post<CategoryData>({ url: '/category/save', data })
}

export const getTableDetApi = ({ params }) => {
  return request.get<CategoryData>({ url: '/category/detail', params })
}

export const delTableListApi = ({ data }) => {
  return request.post({ url: '/category/delete', data })
}
