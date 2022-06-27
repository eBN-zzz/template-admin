<script setup lang="ts">
import { PropType } from 'vue'
import type { CategoryData } from '@/api/goods/types'
import { Descriptions } from '@/components/Descriptions'

defineProps({
  currentRow: {
    type: Object as PropType<Nullable<CategoryData>>,
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
