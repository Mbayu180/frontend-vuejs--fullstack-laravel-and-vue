<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Add new Task -->
                    <NewTask @added="handleAddedTask" />
                    <!-- List Uncompleted Tasks -->
                    <Tasks :tasks="UnCompleted" />

                    <!-- Show Button Toggle -->
                    <div class="text-center my-3" v-show="showToggleCompletedBtn">
                        <div class="btn btn-sm btn-secondary" @click="$event => showCompletedTask = !showCompletedTask">
                            <span v-if="!showCompletedTask">Show completed</span>
                            <span v-else>Hide completed</span>
                        </div>

                    </div>

                    <!-- List Completed Tasks -->
                    <Tasks :tasks="Completed" :show="completedTasksIsVisible && showCompletedTask" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue'
import { allTasks, createTask } from '../http/tasks-api'
import Tasks from '../components/tasks/Tasks.vue'
import NewTask from '../components/tasks/NewTask.vue'
const tasks = ref([])

onMounted(async () => {
    const { data } = await allTasks()
    tasks.value = data.data
})

const UnCompleted = computed(() => tasks.value.filter(task => !task.is_completed))

const Completed = computed(() => tasks.value.filter(task => task.is_completed))

const showToggleCompletedBtn = computed(() => UnCompleted.value.length > 0 && Completed.value.length > 0)

const completedTasksIsVisible = computed(() => UnCompleted.value.length == 0 || Completed.value.length > 0)

const showCompletedTask = ref(false)

// Handle New Task
const handleAddedTask = async (newTask) => {
    const { data: createdTask } = await createTask(newTask)
    tasks.value.unshift(createdTask.data)
}


</script>