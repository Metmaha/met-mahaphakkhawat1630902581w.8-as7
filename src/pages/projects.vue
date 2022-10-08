<template>
  <navbar/>
   <section class="projects">
        <h1 class="heading"> <span>my</span> projects </h1>
        <h3>{{project_name}}</h3>
        <p>{{project_detail}}</p>
        <div class="box-container">
            <iframe width="720" height="405" src="https://www.youtube.com/embed/603Hc7ycIS0"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
    data() {
    return{
      project_name:'Electrical appliances in smart hotel by web application', 
      project_detail:'การออกแบบและสร้างอุปกรณ์เครื่องมือควบคุมเครื่องใช้ไฟฟ้าในแต่ละส่วนของห้องโรงแรมโดยสามารถควบคุมได้จากภายในห้องและจากส่วนกลาง', 
    
    }
  }


}
</script>

<style>

</style>