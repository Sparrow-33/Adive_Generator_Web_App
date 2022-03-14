// const num = document.getElementsByClassName('id');
// const para = document.getElementsByClassName('quote');


    const getAdvice = async () => {
         var resp = await fetch('https://api.adviceslip.com/advice', {
            cache: "no-cache"
          })
         var data = await resp.json()
         
         document.getElementById('id').innerHTML = `# ${data.slip.id}`
         document.getElementById('quote').innerHTML = `" ${data.slip.advice} "`
         console.log(data.slip.advice)


      //   console.log(data.slip.advice) 

    }
    
    getAdvice()