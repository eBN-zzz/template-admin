<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { Dialog } from '@/components/Dialog'
import { useI18n } from '@/hooks/web/useI18n'
import { ElButton, ElImage, ElSwitch, ElTag } from 'element-plus'
import { Table } from '@/components/Table'
import { getTableListApi, saveTableApi, delTableListApi } from '@/api/goods/goods'
import { useTable } from '@/hooks/web/useTable'
import { ManageData } from '@/api/goods/types'
import { ref, unref, reactive } from 'vue'
import Write from './components/Write.vue'
import Detail from './components/Detail.vue'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { schemaData } from './schema'

const { register, tableObject, methods } = useTable<
  {
    total: number
    list: ManageData[]
  },
  ManageData
>({
  getListApi: getTableListApi,
  delListApi: delTableListApi,
  response: {
    list: 'list',
    total: 'total'
  }
})

const { getList, setSearchParams } = methods

getList()

const { t } = useI18n()

const crudSchemas = reactive<CrudSchema[]>(schemaData)

const { allSchemas } = useCrudSchemas(crudSchemas)

const dialogVisible = ref(false)

const dialogTitle = ref('')

const AddAction = () => {
  dialogTitle.value = t('exampleDemo.add')
  tableObject.currentRow = null
  dialogVisible.value = true
}

const delLoading = ref(false)

const delData = async (row: ManageData | null, multiple: boolean) => {
  tableObject.currentRow = row
  const { delList, getSelections } = methods
  const selections = await getSelections()
  delLoading.value = true
  await delList(
    multiple ? selections.map((v) => v.id) : [tableObject.currentRow?.id as string],
    multiple
  ).finally(() => {
    delLoading.value = false
  })
}

const actionType = ref('')

const action = (row: ManageData, type: string) => {
  dialogTitle.value = type === 'edit' ? '编辑' : '详情'
  actionType.value = type
  tableObject.currentRow = row
  dialogVisible.value = true
}

const writeRef = ref<ComponentRef<typeof Write>>()

const loading = ref(false)

const save = async () => {
  const write = unref(writeRef)
  await write?.elFormRef?.validate(async (isValid) => {
    if (isValid) {
      loading.value = true
      const data = (await write?.getFormData()) as ManageData
      const res = await saveTableApi({
        data
      })
        .catch(() => {})
        .finally(() => {
          loading.value = false
        })
      if (res) {
        dialogVisible.value = false
        tableObject.currentPage = 1
        getList()
      }
    }
  })
}
</script>

<template>
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" @reset="setSearchParams" />

    <div class="mb-10px">
      <ElButton type="primary" @click="AddAction">{{ t('exampleDemo.add') }}</ElButton>
      <ElButton :loading="delLoading" type="danger" @click="delData(null, true)">
        {{ t('exampleDemo.del') }}
      </ElButton>
    </div>

    <Table
      v-model:pageSize="tableObject.pageSize"
      v-model:currentPage="tableObject.currentPage"
      :columns="allSchemas.tableColumns"
      :data="tableObject.tableList"
      :loading="tableObject.loading"
      :pagination="{
        total: tableObject.total
      }"
      @register="register"
    >
      <template #image="{ row }">
        <ElImage :src="row.image" fit="cover" style="width: 80px; height: 80px" />
      </template>
      <template #tag="{ row }">
        <div>
          <span class="mr-4">上架:</span>
          <ElSwitch v-model="row.shelvesStatus" :active-value="1" :inactive-value="0" />
        </div>
        <div>
          <span class="mr-4">新品:</span>
          <ElSwitch v-model="row.newStatus" :active-value="1" :inactive-value="0" />
        </div>
        <div>
          <span class="mr-4">推荐:</span>
          <ElSwitch v-model="row.recommendStatus" :active-value="1" :inactive-value="0" />
        </div>
      </template>
      <template #auditStatus="{ row }">
        <ElTag v-if="row.auditStatus === 2" effect="dark">待审核</ElTag>
        <ElTag v-if="row.auditStatus === 1" type="success" effect="dark">审核通过</ElTag>
        <ElTag v-if="row.auditStatus === 0" type="danger" effect="dark">审核失败</ElTag>
      </template>
      <template #action="{ row }">
        <p>
          <ElButton type="primary" link @click="action(row, 'edit')"> 编辑 </ElButton>
          <ElButton type="success" link @click="action(row, 'detail')"> 详情 </ElButton>
        </p>
        <p>
          <ElButton type="primary" link> 审核 </ElButton>
          <ElButton type="danger" link @click="delData(row, false)"> 删除 </ElButton>
        </p>
      </template>
    </Table>
  </ContentWrap>

  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <Write
      v-if="actionType !== 'detail'"
      ref="writeRef"
      :form-schema="allSchemas.formSchema"
      :current-row="tableObject.currentRow"
    />

    <Detail
      v-if="actionType === 'detail'"
      :detail-schema="allSchemas.detailSchema"
      :current-row="tableObject.currentRow"
    />

    <template #footer>
      <ElButton v-if="actionType !== 'detail'" type="primary" :loading="loading" @click="save">
        {{ t('exampleDemo.save') }}
      </ElButton>
      <ElButton @click="dialogVisible = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
