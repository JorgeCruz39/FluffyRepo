<script setup lang="ts">
import { useSession } from '@/model/session';
import { ref } from 'vue';
import { getWorkout } from '@/model/workout';



const workout = getWorkout();
const session = useSession();
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
                <form class="modal " :class="{ 'is-active': isFormActive }" >
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head"> 
                            Add A Workout
                        </header>
                        <section class="modal-card-body">
                            <div class="field">
                                <label class="label"><Title></Title></label>
                                <div class="control">
                                    <input class="input" type="Text" placeholder="Date" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Distance</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Distance" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Duration</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Duration" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Pace</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Pace" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">type</label>
                                <div class="select is-full-width">
                                    <select>
                                        <option value="Run">Run</option>
                                        <option value="Bike">Bike</option>
                                        <option value="Swim">Swim</option>
                                    </select>
                                </div>
                            </div>
                                
                        </section>
                        <footer class="modal-card-foot">
                            <RouterLink to="/MyActivity" class="button is-success"  @click="toggleForm" >Save changes</RouterLink>
                            <RouterLink to="/MyActivity" class="button"  @click="toggleForm">Cancel</RouterLink>
                        </footer>
                    </div>

                </form>
                <div v-for="workouts in workout" >
                <div v-if="session.user?.username == workouts.username"  >
                    <article class="media box"  >
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong class="space"> {{ workouts.username }} </strong>
                                     <small class="space"> {{  workouts.username }}   </small>
                                     <small class="space"> {{ workouts.workoutDate }}</small>
                                     <br>
                                      <small>31m</small>
                                      <div class="columns">
                                        <div class="column has-text-centered" style="display: flex; justify-content: space-around; align-items: center;">
                                            <div>
                                                <h1 class=" has-text has-text-weight-bold" style="margin: 0px;"> {{ workouts.workoutDistance }}</h1>
                                                <caption class="caption is-half">Distance</caption>
                                            </div>
                                            <div>
                                                <h1 class=" has-text has-text-weight-bold" style="margin: 0px;"> {{ workouts.workoutDuration }}</h1>
                                                <caption class="caption">Duration</caption>
                                            </div>
                                        </div>
                                        <div class="column">
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
                <div>

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
              content: " ";
              white-space: pre;
          }

h1{
    font-size: 32px;
}
</style>