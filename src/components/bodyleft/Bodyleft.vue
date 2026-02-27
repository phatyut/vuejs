<template>
    <div>
        <router-link  to="/">evaluate</router-link>  
        <div >
            <button @click="clicksetting">setting</button>

        </div>      
    </div>
</template>
<script>
export default{
    data(){
        return {

        }
    },methods:{
        clicksetting(){
            this.$emit('open-settings')
        }
    }
}
</script>