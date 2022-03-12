let action = document.querySelector('.action');
const num = document.getElementsByClassName('id');
let para = document.getElementsByClassName('quote');

    // action.addEventListener('click', async ()=>{
    //      let responce = await fetch('https://api.adviceslip.com/advice')
    //      let data = await responce.json()

    //      console.log(data)
       
    // })
console.log(num)
    const quote = async ()=> {
         let responce = await fetch('https://api.adviceslip.com/advice')
         let data = await responce.json()
         
         num[0].innerHTML = data.slip.id
         para[0].innerHTML = data.slip.advice
        console.log(data)

                           }

    quote()