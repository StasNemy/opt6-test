<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

defineProps<{
  modelValue: string;
  error?: string;
  id: string;
  label?: string;
  type: InputHTMLAttributes["type"];
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="block text-label mb-[5px]" v-if="label" :for="id">{{
    label
  }}</label>
  <input
    class="w-full block border border-gray rounded-[5px] p-[7px] leading-6"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :type="type"
    :id="id"
  />
  <span class="text-caption text-error" v-if="error">{{ error }}</span>
</template>
