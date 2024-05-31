let a = document.querySelector('.yo')
    let b = document.querySelector('.ho')

    const intervalid = setInterval(() => {
       
        let num= Math.random() //random no.
        let code= Math.floor(num*0xFFFFFF) //its a specific hexa no. we should multiply
        let hexanum=code.toString(16) // convert number to hexa decimal string 16 represent hexa base16
        let randomcolor= '#'+hexanum // color code
        a.style.backgroundColor = randomcolor
        a.innerHTML = hexanum 
        setTimeout(() => {
            b.style.backgroundColor = randomcolor
        b.innerHTML = hexanum 
            
        },1000);

    }, 1000);

