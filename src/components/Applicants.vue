<template>
  <div>
    <h1>Here you will find a list of applicants</h1>
    <div v-if="error">
      <p>Error: {{ error }}</p>
    </div>
    <div v-else>
      <div v-for="applicant in names" :key="applicant.id">
        <router-link
          :to="{
            name: 'Applicant_info',
            params: {
              id: applicant.id,
            },
            query: {
              desc: applicant.qualifications, 
              img: applicant.img, 
              n:applicant.name,
              a:applicant.age.toString(),
            },
          }"
        >
          <h2>{{ applicant.name }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "applicants",
  setup() {
    const names = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/people_array_1");
        if (!data.ok) {
          throw new Error("No data available");
        }
        names.value = await data.json();
      } catch (err) {
        error.value = err.message;
      }
    };

    load();

    return {
      names,
      error,
    };
  },
};
</script>

<style></style>

  
