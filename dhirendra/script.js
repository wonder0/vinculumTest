
const whatsAppButton = document.querySelectorAll('[whatsapp]')
const mailButton = document.querySelectorAll('[mail]')

whatsAppButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = "https://api.whatsapp.com/send?phone=+917358324216";
        
    })
})

mailButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = "mailto:kmkinglucky@gmail.com";
        
    })
})





//document.querySelectorAll('.whatsapp').forEach(button=>{
//    button.addEventListener('click', ()=>{
//      window.location.href = "http://www.google.com";
//  })
//})


