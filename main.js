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