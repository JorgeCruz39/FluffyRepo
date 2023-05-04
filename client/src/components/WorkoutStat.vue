
<script setup lang="ts">
import { ref } from 'vue';
import { totalWeight, useSession } from '@/model/session';
const session = useSession();
const user = ref(session.user);
</script>
<template>
    <div class=" box has-text-info ">
        <h2 class="title is-4">Weight Lifting numbers done by {{ session.user?.name }} </h2>
        <div class="columns">
            <div class="column">
                <div class=" has-text is-primary">
                    <h3 class="title is-5">Amount of weight MOVED</h3>
                    <p class="subtitle is-3">
                        {{ totalWeight }}
                    </p>
                </div>
            </div>
            <div class="column">
                <div class=" has-text">
                    <h3 class="title is-5">Amount of workouts by {{ session.user?.name }}</h3>
                    <p class="subtitle is-3">{{ session.user?.workouts.length }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.summary {
    background-color: transparent;
    color: rgb(56, 190, 85);
    padding: 0;
    margin: 0;
}

.subtitle {
    color: rgb(16, 0, 236);
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
}
</style>