<script setup lang="ts">
import { useSession } from '@/model/session';
import { ref } from 'vue';
import { addToWorkout, getWorkout, useWorkout, type Workout } from '@/model/workout';



const workout = getWorkout();
const session = useSession();
const workouts1 = useWorkout();
const newWorkout : Workout = ({} as any) as Workout;
var date = new Date();
function toggleForm() {
  isFormActive.value = !isFormActive.value;
}
const isFormActive = ref(false);





</script>


<template>
    
        <h1><strong>My Activity</strong></h1>
        <div class="columns " v-if="session.user">
            <div class="column is-half is-offset-one-quarter media">
                <button class="button is-info is-fullwidth"  @click="toggleForm">Add Workout</button>
                <br>
                <form @submit.prevent="addToWorkout(newWorkout,date,session.user?.username,)" class="modal " :class="{ 'is-active': isFormActive }" >
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head"> 
                            Add A Workout
                        </header>
                        <section class="modal-card-body">
                            <div class="field">
                                <label class="label">Date</label>
                                <div class="control">
                                    <input v-model="date" class="input" type="Date" placeholder="Date" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Distance</label>
                                <div class="control">
                                    <input v-model="newWorkout.workoutDistance" class="input" type="text" placeholder="Distance" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Duration</label>
                                <div class="control">
                                    <input v-model="newWorkout.workoutDuration" class="input" type="text" placeholder="Duration" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">type</label>
                                <div class="select is-full-width">
                                    <select v-model="newWorkout.workoutType" >
                                        <option value="Run">Run</option>
                                        <option value="Bike">Bike</option>
                                        <option value="Swim">Swim</option>
                                    </select>
                                </div>
                            </div>
                                
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success" type="submit" @click="toggleForm" >Save changes</button>
                            <RouterLink to="/MyActivity" class="button"  @click="toggleForm">Cancel</RouterLink>
                        </footer>
                    </div>

                </form>

                <div v-for="workoutss1 in workouts1.slice().reverse() ">
                    <article class="media box" div v-if="session.user?.username == workoutss1.username">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img :src="session.user.photo">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong class="space"> {{ workoutss1.username }} </strong>
                                     <small class="space"> {{  workoutss1.username }}   </small>
                                     <small class="space"> {{ workoutss1.workoutDate }}</small>
                                     <br>
                                     <p class="down"> <strong> Excecise done : {{ workoutss1.workoutType }}</strong></p>
                                      <div class="columns">
                                        <div class="column has-text-centered" style="display: flex; justify-content: space-around; align-items: center;">
                                            <div>
                                                <h1 class=" has-text has-text-weight-bold" style="margin: 0px;"> {{ workoutss1.workoutDistance }}</h1>
                                                <caption class="caption is-half">Distance</caption>
                                            </div>
                                            <div>
                                                <h1 class=" has-text has-text-weight-bold" style="margin: 0px;"> {{ workoutss1.workoutDuration }}</h1>
                                                <caption class="caption">Duration</caption>
                                            </div>
                                        </div>
                                        <div class="column" v-if="workoutss1.workoutType== 'Run' " >
                                            <img src="https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.668xw:1.00xh;0.260xw,0&resize=1200:*" style=" height: 100%;">

                                        </div>
                                        <div class="column" v-else-if="workoutss1.workoutType== 'Bike' " >
                                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/60f32f8188683.560b8c8ec2614.jpg" style=" height: 100%;">

                                      </div>
                                        <div class="column" v-else-if="workoutss1.workoutType== 'Swim' " >
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Amphibious%2C_Recon_Marines_prepare_for_Dive_School_170307-M-ZL982-128.jpg" style=" height: 100%;">
                                        </div>
                                        <div class="column" v-else>
                                            <img src="https://bulma.io/images/placeholders/128x128.png" style=" height: 100%;">
                                        </div>
                                    </div>
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                    </a>
                                    <a roclass="level-item">
                                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                    </a>
                                </div>
                            </nav>

                        </div>
                    </article>
            </div>
            </div>
            </div>
            <div>

            </div>

</template>



<style scoped>

.caption{
    font-size: 12px;
    color: #7a7a7a;
    font-weight: 400;
    padding-left: 50px;
}
.space {
              padding: 4px;
              white-space: pre;
          }

h1{
    font-size: 32px;
}

.down{
    padding-top: 10px;
}
</style>