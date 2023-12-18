<template>
    <div class="task-actions">
        <div class="task-actions">
        <button class="btn btn-sm btn-circle btn-outline-secondary me-1" @click="$event => emit('edit')">
            <IconPencil />
        </button>
        <button class="btn btn-sm btn-circle btn-outline-danger" @click="$event => emit('remove')">
            <IconTrash />
        </button>
    </div>
        </div>
</template>
  
<script setup>

import IconPencil from "../icon/IconPencil.vue";
import IconTrash from "../icon/IconTrash.vue";

const emit = defineEmits(['edit', 'remove'])
</script>