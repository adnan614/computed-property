new Vue({
   
    el: "#app",

    data:{
      
       a: 0,
       b: 0,
       salary: 10

    },

   computed:{
       addToA(){
           console.log("Add a");
           return this.a + this.salary;
       },
       addToB(){
        console.log("Add b");
           return this.b + this.salary;
       }
   }
  

});