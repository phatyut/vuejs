
<template>
  
 <div class="relative w-screen h-screen   " >
  <div class="relative w-full h-full flex p-4" v-show="showpage">

        <div class="relative w-[20%] h-screen bg-blue-400">
          <Bodyleft></Bodyleft>
        </div>
        <div  class="relative w-[80%] h-screen">
          <Bodyright></Bodyright>
        </div>

      </div>
      <div class=" fixed top-0 w-screen h-screen bg-amber-300/10" v-show="settings">
          <Bodyleft @open-settings="settings = true"></Bodyleft>
      </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
        showpage:true,
        settings:false
    }
  }
}

</script>
<style scoped>
*{
  position:relative  ;
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
</style>