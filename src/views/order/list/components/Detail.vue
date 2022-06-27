<script setup lang="ts">
import { PropType } from 'vue'
import type { OrderData } from '@/api/order/types'
import { Descriptions } from '@/components/Descriptions'

defineProps({
  currentRow: {
    type: Object as PropType<Nullable<OrderData>>,
    default: () => null
  },
  detailSchema: {
    type: Array as PropType<DescriptionsSchema[]>,
    default: () => []
  }
})
</script>

<template>
  <Descriptions :schema="detailSchema" :data="currentRow || {}" />
</template>
