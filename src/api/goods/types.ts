export type ManageData = {
  id: string
  no: number | string
  image: string
  name: string
  price: number
  type: number | string
  code: number | string
  newStatus: number
  shelvesStatus: number
  recommendStatus: number
  sort: number
  saleNum: number
  auditStatus: number
  createAt: string | Date
}

export type CategoryData = {
  id: string
  name: string
  lv: number
  num: number
  unit: string
  menuStatus: number
  showStatus: number
  sort: number
  children?: CategoryData[]
}
