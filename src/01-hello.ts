(()=>{
   //Union Types
   let user: string | number
   user = 'XXXX'
   user = 1234

   //permite tomar deciciones en base a los tipos de datos
   function greeting(myText: string | number){
      if(typeof myText === 'string'){
         console.log(`string ${myText.toLowerCase()}`)
      }else{
         console.log(`number ${myText.toFixed(1)}`)
      }
   }

   greeting('Hola')
   greeting(123)
})
