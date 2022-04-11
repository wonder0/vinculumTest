
const whatsAppButton = document.querySelectorAll('[whatsapp]')
const mailButton = document.querySelectorAll('[mail]')
const instaButton = document.querySelectorAll('[insta]')
const fbButton = document.querySelectorAll('[fb]')

whatsAppButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = "https://api.whatsapp.com/send?phone=+918840056261";
        
    })
})

mailButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = "mailto:sssdhirendrad93@gmail.com";
        
    })
})

instaButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = "https://www.instagram.com/mr_dhirendra_dubey/?igshid=YmMyMTA2M2Y=";
        
    })
})


fbButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = "https://www.facebook.com/dhirendra.dubey.71216";
        
    })
})





//document.querySelectorAll('.whatsapp').forEach(button=>{
//    button.addEventListener('click', ()=>{
//      window.location.href = "http://www.google.com";
//  })
//})


