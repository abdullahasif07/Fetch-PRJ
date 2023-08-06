<template>
  <div>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <div class="d-flex justify-content-center align-items-center" style="margin-top: 10rem;">
      <div class="card" style="width: 30rem; height: 35rem;">
        <img :src="getImgUrl('man_2.jpg')" v-bind:alt="pic" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ $route.query.n }}</h5>
          <p class="card-text">Qualifications: {{ $route.query.desc }}</p>
          <p class="card-text">Age: {{ $route.query.a }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { useRoute } from 'vue-router';

export default {
  methods: {
    getImgUrl(pic) {
    return require('../assets/images/'+pic)
}
  },

  setup() {
    const names = ref([]);
    const error = ref(null);
    const img_app = ref(null);
    const route = useRoute();
    const img = ref(null); 

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/people_array_1");
        if (!data.ok) {
          throw new Error("No data available");
        }
        names.value = await data.json();
        let filter = names.value.filter((item) => item.id === +route.params.id);
        img_app.value = filter[0].img;
        img.value = img_app.value; 
      } catch (err) {
        error.value = err.message;
      }
    };

    load();

    return {
      names,
      error,
      img, // Return the reactive img variable
    };
  },
};
</script>

<style>
.card img {
  height: 35rem;
}
</style>

