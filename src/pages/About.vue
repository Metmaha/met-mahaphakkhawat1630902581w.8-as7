<template>
  <navbar />
  <section class="about">
    <h1 class="heading">about <span>me</span></h1>

    <div class="row">
      <div class="info-container">
        <h1>personal info</h1>

        <div class="box-container">
          <div class="box">
            <h3><span>name : </span> {{ name }}</h3>
            <h3><span>age : </span> {{ age }}</h3>
            <h3><span>email : </span> {{ email }}</h3>
            <h3><span>address : </span> {{ adress }}</h3>
          </div>

          <div class="box">
            <h3><span>freelance : </span> available</h3>
            <h3><span>skill : </span> Full Stack Engineer</h3>
            <h3><span>experience : </span> 6 years</h3>
            <h3><span>language : </span> thai</h3>
          </div>
        </div>

        <a href="/profilewithcss/files/resume.pdf" class="btn">
          download CV <i class="fas fa-download"></i>
        </a>
      </div>

      <div class="count-container">
        <div class="box">
          <h3>5+</h3>
          <p>years of experience</p>
        </div>

        <div class="box">
          <h3>10+</h3>
          <p>happy clients</p>
        </div>

        <div class="box">
          <h3>20+</h3>
          <p>project completed</p>
        </div>

        <div class="box">
          <h3>5+</h3>
          <p>Certificates</p>
        </div>
      </div>
    </div>
  </section>

  <!-- about section ends -->

  <!-- skills section starts  -->

  <section class="skills">
    <h1 class="heading"><span>my</span> skills</h1>

    <div class="box-container">
      <div class="box" v-for="s in skill" :key="s.name">
        <img src="s.imaga" />
        <h3>{{s.name}}</h3>
      </div>
    </div>
  </section>

  <!-- skills section ends -->

  <!-- education section starts  -->

  <section class="education">
    <h1 class="heading"><span>my</span> experience</h1>

    <div class="box-container">
      <div class="box" v-for="e in experaince" :key="e.years">
        <i class="fas fa-briefcase"></i>
        <span>{{ e.years }}</span>
        <h3>{{ e.company }}</h3>
        <p>{{ e.jobs }}.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  components: { Navbar },
  methods: {
    async fetchExperience() {
      try {
        let res = await axios.get(
          "https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/experiences"
        );
        this.experaince = res.data;
      } catch (error) {}
    },
    async fetchskil() {
      try {
        let res = await axios.get(
          "https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/skills "
        );
        this.skill = res.data;
      } catch (error) {}
    },
  },

  data() {
    return {
      name: "met mahaphakkhawat 1630902581",
      age: "24",
      email: "abhisit@ukham.com",
      adress: "mahasarakham, Thailand 44000",
      experaince: [],
      skill: [],
    };
  },
  beforeMount() {
    this.fetchExperience();
    this.fetchskill();
  },
};
</script>

<style>
</style>