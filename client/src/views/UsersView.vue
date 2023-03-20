<script setup lang="ts">
import { ref } from 'vue'
import { getUsers, type User } from '../model/users'
const users = ref(getUsers());





</script>

<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Admin</a></li>
            <li><a href="#">Users</a></li>
        </ul>
    </nav>
    <div>
        <button class="button is-primary">
            <span><i class="fas fa-plus"></i></span>
            <span>        Add User</span>
        </button>
        
        <table class="table is-bordered is-striped is-fullwidth">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>UserName</th>
                <th>Delete and edit</th>

            </tr>
            <tr v-for="user in users">
                <td><img :src="user.photo" alt="avatar"></td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.username }}</td>
                <td>
                    <button class="button">
                            <i class="fas fa-trash">

                            </i>
                    </button>
                    <button class="button">
                        <i class="fas fa-edit">
                            
                        </i>
                       </button>
                </td>
                
            </tr>
        </table>
        
       

    </div>
</template>


<style scoped>

img{
    width: 50px;
    height: 50px;

}

</style>