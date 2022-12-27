 var obj={
   created(){
    this.$store.commit("hide")
},
    unmounted(){
   this.$store.commit("show")  
    }

}
export default obj