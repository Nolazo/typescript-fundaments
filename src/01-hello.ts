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

   //con type, creas tus propios tipos de datos
   type Size = 'S' | 'M' | 'L' | 'XL'
   let shirtSize: Size
   // solo se podran usar variables del typo Size

   greeting('Hola')
   greeting(123)

   //el : number es para que el retorno sea si o si en number
   const calcTotal = (prices: number[]): number => {
      let total = 0
      prices.forEach((item) => {
         total += item
      })
      return total
   }
   //return void, es para que una funcion no retorne nada
   const printTotal =(prices: number[]): void => {
      const res = calcTotal(prices)
      console.log(`El total es: ${res}`)
   }

   printTotal([1,2,3,4,5])

   //Objetos como tipos de datos
   type Product = {
      name: string,
      createAt: Date,
      stock: number,
      size?: Size
   }
   const products: Product[] = []
   const addProduct = (data: Product) => {
      products.push(data)
   }
   addProduct({
      name: 'P1',
      createAt: new Date(),
      stock: 12,
      size: 'M'
   })
   products.push({
      name: 'P2',
      createAt: new Date(),
      stock: 13,
      size: 'L'
   })
})
