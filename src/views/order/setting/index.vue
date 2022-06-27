<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { ElForm, ElFormItem, ElInputNumber, ElButton } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { ref, reactive } from 'vue'
import { required } from '@/utils/formRules'

const formRef = ref<FormInstance>()

const form = reactive({
  seckillMin: undefined,
  normalMin: undefined,
  deliveryDay: undefined,
  finishDay: undefined,
  finishRate: undefined
})

const rules = reactive<FormRules>({
  seckillMin: [required],
  normalMin: [required],
  deliveryDay: [required],
  finishDay: [required],
  finishRate: [required]
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <ContentWrap>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="110px">
      <el-form-item label="秒杀订单超过：">
        <el-input-number v-model="form.seckillMin" :precision="0" controls-position="right" />
        <span class="ml-4 text-color">分未付款，订单自动关闭</span>
      </el-form-item>
      <el-form-item label="正常订单超过：">
        <el-input-number v-model="form.normalMin" :precision="0" controls-position="right" />
        <span class="ml-4 text-color">分未付款，订单自动关闭</span>
      </el-form-item>
      <el-form-item label="发货超过：">
        <el-input-number v-model="form.deliveryDay" :precision="0" controls-position="right" />
        <span class="ml-4 text-color">天未收货，订单自动完成</span>
      </el-form-item>
      <el-form-item label="订单完成超过：">
        <el-input-number v-model="form.finishDay" :precision="0" controls-position="right" />
        <span class="ml-4 text-color">天自动结束交易，不能申请售后</span>
      </el-form-item>
      <el-form-item label="订单完成超过：">
        <el-input-number v-model="form.finishRate" :precision="0" controls-position="right" />
        <span class="ml-4 text-color">天自动五星好评</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formRef)"> 提 交 </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>
</template>
