const bodybgColor = document.querySelector('body').style.backgroundColor
const bodybg = document.querySelector('body').style.background
const bodyColor = document.querySelector('body').style.color
const divbgColor = document.querySelector('div').style.backgroundColor
const divbg = document.querySelector('div').style.background
const divColor = document.querySelector('div').style.color

// import sound from 'Christmas.mp3'
// let mySound = new Audio('chrome-extension-hackathon/Christmas.mp3')
// let mySound = new Audio(sound)
// let mySound = document.createElement("audio");
// mySound.setAttribute('src', '/Users/gregd/Codesmith/chrome-extension-hackathon/Christmas.mp3')


window.addEventListener('keydown', (e) => {
    

    if (e.code === 'ArrowLeft') {
        
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('body').style.background = "black";
        document.querySelector('body').style.color = "orange";
        document.querySelector('div').style.backgroundColor = "black";
        document.querySelector('div').style.background = "black";
        document.querySelector('div').style.color = "orange";
    }
    if (e.code === 'ArrowRight') {
        // mySound.play()
        // let mySound = document.createElement("audio");
        // mySound.setAttribute('src', 'file://Users/gregd/Codesmith/chrome-extension-hackathon/Christmas.mp3')
        // mySound.autoplay=true
        // document.body.appendChild(mySound);
        // mySound.play();
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('body').style.background = "green";
        document.querySelector('body').style.color = "red";
        document.querySelector('div').style.backgroundColor = "green";
        document.querySelector('div').style.background = "green";
        document.querySelector('div').style.color = "red";
    }
    if (e.code === 'ArrowDown') {
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('body').style.background = "red";
        document.querySelector('body').style.color = "blue";
        document.querySelector('div').style.backgroundColor = "red";
        document.querySelector('div').style.background = "red";
        document.querySelector('div').style.color = "blue";
    }
    if (e.code === 'ArrowUp') {
        document.querySelector('body').style.backgroundColor = "purple";
        document.querySelector('body').style.background = "purple";
        document.querySelector('body').style.color = "gold";
        document.querySelector('div').style.backgroundColor = "purple";
        document.querySelector('div').style.background = "purple";
        document.querySelector('div').style.color = "gold";
    }
    if(e.code === 'KeyS') {
        console.log('hit S key');
        document.querySelector('body').style.backgroundColor = bodybgColor;
        document.querySelector('body').style.background = bodybg;
        document.querySelector('body').style.color = bodyColor;
        document.querySelector('div').style.backgroundColor = divbgColor;
        document.querySelector('div').style.background = divbg;
        document.querySelector('div').style.color = divColor;
    }
});

window.addEventListener('click', (e) => {
    const pic = document.createElement('img');
    pic.setAttribute('src', "https://img1.wsimg.com/isteam/ip/0b14ba68-b224-4294-8dd8-e360f8bf3cfd/101138578_167212421502972_1443206056242053120_.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280");
    pic.style.display = "block";
    pic.style.marginLeft = "auto";
    pic.style.marginRight = "auto";
    pic.style.width = '20%'
    document.querySelector('body').prepend(pic);
    const text = document.createElement('p')
    text.innerHTML = "Hello from Quokkort 42!"
    text.style.textAlign = 'center';
    text.style.fontSize = '42px';
    document.querySelector('body').prepend(text)
    

    // document.querySelector('body').prepend('<img src= "https://decider.com/wp-content/uploads/2023/03/mandalorian-grogu-armor.jpg?quality=75&strip=all&w=1200"/>')
})