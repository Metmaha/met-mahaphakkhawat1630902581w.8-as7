<template>
  <Navbar />
  <section class="home">

    <div class="image">
        <img src="images/123.jpg" alt="">
    </div>

    <div class="content">
        <h3>hi,{{name}}</h3>
        <span>{{motto}}</span>
        <p>{{content}}</p>
        <a href="about.html" class="btn"> about me <i class="fas fa-user"></i> </a>
    </div>

</section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return{
      name: 'met mahaphakkhawat 1630902581',
      motto:'Belive the Impossible is Possible.',
      content: 'More 5 Years of Experienced Developer with Front-end and Back-end .NET programming in the information technology and service industry. Skilled in HTML, CSS, Javascript, Angular, React, MVC, C# and ORACLE, SQL database tools. A strong engineering professional with a Bachelor of Engineering (BE) focused on Computer Engineering from Bangkok University.',
    
    }
  }

}
</script>

<style>

</style>