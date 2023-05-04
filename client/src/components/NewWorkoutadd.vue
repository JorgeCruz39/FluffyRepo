<script setup lang="ts">
import { useSession, useWorkout, addWorkout, updateUser, type User } from '@/model/session';
import { ref } from 'vue';

const session = useSession();
const toggle = ref(false);



function addWorkoutToUser(workoutName: string, workoutWeight: number) {
    addWorkout(workoutName, workoutWeight);
}
function saveWrk(workoutName: string, workoutWeight: number) {
    addWorkoutToUser(workoutName, workoutWeight);
    updateUser(session.user as User);
}
const workoutName = ref('');
const workoutWeight = ref(0);
</script>
<template>
    <div>

        <div class="model-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title strong">Add Workout</p>
                <button @click="$emit('close')">x</button>
                <div v-if="toggle">
                </div>
            </header>
            <section class="modal-card-body">

                <div class="field">
                    <label class="strong">Weight</label>
                    <div class="control">
                        <input type="number" required v-model="workoutWeight">
                    </div>
                </div>
                <div class="field">
                    <label class="strong">Choose Workout</label>
                    <div class="control">
                        <div class="select">
                            <select type="workout" required v-model="workoutName">
                                <option>Bench</option>
                                <option>Squat</option>
                                <option>Deadlift</option>
                                <option>Overhead Press</option>
                                <option>Barbell Row</option>
                                <option>Barbell Curl</option>
                                <option>Tricep Extension</option>
                                <option>Leg Press</option>
                                <option>Leg Curl</option>
                                <option>Leg Extension</option>
                                <option>Lat Pulldown</option>

                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="saveWrk(workoutName, workoutWeight), $emit('close')">Add</button>
                <button class="button is-danger" @click="$emit('close')">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<style scoped>


.modal-card{
    border-radius: 10%;

}
.control{
    margin-left: 1rem;
    width: 100%;
    display: block;
}
.box {
    padding: 1rem;
    margin-right: 5rem;
    margin-left: 5rem;
    background-color: #360c5e invert(100%);
    color: white;

    

}

.strong{
    font-weight: bold;
    color: black;
}
.modal-background {
    padding: 1rem;
    margin-right: 5rem;
    margin-left: 5rem;
    background-color: #360c5e invert(100%);
    color: white;




}


.select{
    display: block;
}
</style>