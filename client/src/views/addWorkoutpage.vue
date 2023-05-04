<script setup lang="ts">

import { ref } from 'vue';
import NewWorkoutadd from '@/components/NewWorkoutadd.vue';
import { useSession } from '@/model/session';
import WorkoutSocial from '@/components/WorkoutsSocial.vue';
const isWorkoutActive = ref(false);
const session = useSession();
const isCadrioActive = ref(false);
function toggleWorkout() {
    isWorkoutActive.value = !isWorkoutActive.value;
    console.log(isWorkoutActive);
}
</script>


<template>
    <div v-if="session.user">
        <div class="container">
            <div class="column is-quarter"></div>
            <div class="column">
                <div v-if="isWorkoutActive == true" class="modal is-active">
                    <div class="modal-content">
                        <NewWorkoutadd @close="isWorkoutActive = false" />
                    </div>
                </div>
                <div class="moveplease">
                    <div class="column">
                        <h2 class="title">Workouts done by {{ session.user.name }}!</h2>
                        <div v-for="workie in session.user?.workouts.slice().reverse()" :key="workie.workout">
                            <WorkoutSocial :workout="workie" @close="$emit('close')" />
                        </div>
                    </div>
                </div>
                <div class="button is-primary" @click="toggleWorkout"> Add Workout</div>
            </div>
        </div>
    </div>
    <div class="notLoggedin " v-else>
        You are not Logged in!
    </div>
</template>
<style scoped>
.button {
    background-color: #3aaf40;
    color: white;
    padding: 2.5rem;
    margin: 12rem;
    border-radius: 10%;
    font-size: 30px;
    font-weight: bold;
    text-decoration: solid;
    box-shadow: 10px 10px rgb(0, 0, 0);
    border-radius: 10px;
    transition: all 1s;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: 'Montserrat', sans-serif;
}

.button:hover{
    background-color: #000000;
    color: white;
    padding: 2.5rem;
    margin: 12rem;
    border-radius: 10%;
    font-size: 30px;
    font-weight: bold;
    text-decoration: solid;
    box-shadow: 10px 10px rgb(0, 0, 0);
    border-radius: 10px;
    transition: all 1s;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: 'Montserrat', sans-serif;
}

.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 120%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.column {
    display: flex;
    flex-direction: column;
    background-color: transparent;
}

.moveplease {
    margin-top: 5rem;
    margin-left: 28rem;
}


.notLoggedin {
    margin-top: 5rem;
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-align: center;
    color: black;
}
</style>