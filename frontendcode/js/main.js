let image=['makaut1.jpeg','makaut3.jpeg','makaut4.jpeg','makaut5.jpeg','makaut2.jpg','m1.jpg','m2.jpg','m3.jpeg','makaut2.jpg'];
let container=document.querySelector(".container");
let h1=document.querySelector("h1");
setInterval(()=>{

 let random_img=Math.floor((Math.random()*image.length));
 console.log(random_img);
 
    container.style.background=`linear-gradient(rgb(0, 0, 0,0.3),rgb(0, 0, 0,0.3)),url(${image[random_img]})`;
    container.style.backgroundPosition=`center`;
    container.style.backgroundSize=`100% 100%`;
},8000);