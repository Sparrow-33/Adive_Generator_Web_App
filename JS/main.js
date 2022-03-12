// const num = document.getElementsByClassName('id');
// const para = document.getElementsByClassName('quote');

   
    const getAdvice = async () => {
         let resp = await fetch('https://api.adviceslip.com/advice')
         let data = await resp.json()
         
         document.getElementById('id').innerHTML = `# ${data.slip.id}`
         document.getElementById('quote').innerHTML = `" ${data.slip.advice} "`

         console.log(data.slip.advice)

                           }

        window.onload(quote())  