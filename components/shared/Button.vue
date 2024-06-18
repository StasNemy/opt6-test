<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

export type TProps = {
  class?: string;
  onClick?: (payload: MouseEvent) => void;
  type?: ButtonHTMLAttributes["type"];
  variant?: "primary" | "outline" | "text";
};

const props = withDefaults(defineProps<TProps>(), {
  type: "button",
  variant: "text",
});
</script>

<template>
  <button
    :class="[
      'btn flex items-center gap-1 text-p',
      props.class,
      {
        'bg-primary text-white': props.variant === 'primary',
        'border border-primary': props.variant === 'outline',
      },
    ]"
    :type="props.type"
    @click="onClick"
  >
    <slot name="before" />
    <slot />
    <slot name="after" />
  </button>
</template>
