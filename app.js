  const  C4 = new Audio  ('./Sound/C4.mp3') ;
  const  Db4 = new Audio ("./Sound/music1.mp3");
  const  D4 = new Audio ("./Sound/music1.mp3");
  const  Eb4 = new Audio ("./Sound/music1.mp3");
  const  E4 = new Audio ("./Sound/music1.mp3");
  const  F4 = new Audio ("./Sound/music1.mp3");
  const  Gb4 = new Audio ("./Sound/music1.mp3");
  const  G4 = new Audio ("./Sound/music1.mp3");
  const  Ab4 = new Audio ("./Sound/music1.mp3");
  const  A4 = new Audio ("./Sound/music1.mp3");
  const  Bb4 = new Audio ("./Sound/music1.mp3");
  const  B4 = new Audio ("./Sound/music1.mp3");
  const  C5  = new Audio ("./Sound/music1.mp3");
  const  Db5 = new Audio ("./Sound/music1.mp3");
  const  D5 = new Audio ("./Sound/music1.mp3");
  const  Eb5 = new Audio ("./Sound/music1.mp3");
  const  E5 = new Audio ("./Sound/music1.mp3");
 







  var  C4 = new Audio ;  
  var  Db4 = new Audio ;
  var  D4 = new Audio ;
  var  Eb4 = new Audio ;
  var  E4 = new Audio ;
  var  F4 = new Audio ;
  var  Gb4 = new Audio ;
  var  G4 = new Audio ;
  var  Ab4 = new Audio ;
  var  A4 = new Audio ;
  var  Bb4 = new Audio ;
  var  B4 = new Audio ;
  var  C5  = new Audio ;
  var  Db5 = new Audio ;
  var  D5 = new Audio ;
  var  Eb5 = new Audio ;
  var  E5 = new Audio ;
 


  C4.scr = "./Sound/music1.mp3";
  Db4.src = "./Sound/music1.mp3";
  D4.src = "./Sound/music1.mp3";





 function  play(){
     var a = document.getElementById("music");
 }


 


  const playSound = audio =>{
      const clone = audio.cloneNode();
      clone.play();
      setTimeout(() => (clone.volume = 0,8),400)
      setTimeout(() => (clone.volume = 0,6),800)
      setTimeout(() => (clone.volume = 0,4),1200)
      setTimeout(() => (clone.volume = 0,2),1600)
      setTimeout(() => (clone.volume = 0),2000)   
  } 




// // C4
 const C4key = document.querySelector(".C4-key")
 const playC4  = () =>{
     playSound(C4);
     C4key.classList.add('active')
     setTimeout(() => C4key.classList.remove ("active"),200);
 };
 C4key.addEventListener("click" , playC4)





// //Db4
 const Db4key = document.querySelector(".Db4-key")
 const playDb4  = () =>{
     playSound(C4);
     C4key.classList.add('active')
     setTimeout(() => C4key.classList.remove ("active"),200);
 };
 Db4key.addEventListener("click" , playDb4)





// //D4
 const D4key = document.querySelector(".D4-key")
 const playD4  = () =>{
    playSound(D4);
     D4key.classList.add('active')
     setTimeout(() => D4key.classList.remove ("active"),200);
 };
 D4key.addEventListener("click" , playD4)





// //Eb4
 const Eb4key = document.querySelector(".Eb4-key")
 const playEb4  = () =>{
    playSound(Eb4);
     C4key.classList.add('active')
    setTimeout(() => Eb4key.classList.remove ("active"),200);
 };
 Eb4key.addEventListener("click" , playEb4)





// //E4
 const E4key = document.querySelector(".E4-key")
 const playE4  = () =>{
     playSound(E4);
     E4key.classList.add('active')
     setTimeout(() => E4key.classList.remove ("active"),200);
 };
 E4key.addEventListener("click" , playE4)





// //F4
 const F4key = document.querySelector(".F4-key")
 const playF4  = () =>{
     playSound(F4);
     F4key.classList.add('active')
     setTimeout(() => C4key.classList.remove ("active"),200);
 };
 F4key.addEventListener("click" , playF4)





// //Gb4
 const Gb4key = document.querySelector(".Gb4-key")
 const playGb4  = () =>{
     playSound(Gb4);
     C4key.classList.add('active')
     setTimeout(() => Gb4key.classList.remove ("active"),200);
 };
 Gb4key.addEventListener("click" , playGb4)



// //G4
 const G4key = document.querySelector(".G4-key")
 const playG4  = () =>{
     playSound(G4);
     G4key.classList.add('active')
     setTimeout(() => C4key.classList.remove ("active"),200);
 };
 G4key.addEventListener("click" , playG4)



// //Ab4
 const Ab4key = document.querySelector(".Ab4-key")
 const playAb4  = () =>{
     playSound(Ab4);
     Ab4key.classList.add('active')
     setTimeout(() => C4key.classList.remove ("active"),200);
 };
 Ab4key.addEventListener("click" , playAb4)



// //A4
 const A4key = document.querySelector(".A4-key")
 const playA4  = () =>{
     playSound(A4);
    A4key.classList.add('active')
    setTimeout(() => C4key.classList.remove ("active"),200);
 };
 A4key.addEventListener("click" , playA4)



// //Bb4
 const Bb4key = document.querySelector(".Bb4-key")
 const playBb4  = () =>{
     playSound(Bb4);
     Bb4key.classList.add('active')
     setTimeout(() => C4key.classList.remove ("active"),200);
 };
 Bb4key.addEventListener("click" , playBb4)




// //B4
 const B4key = document.querySelector(".B4-key")
 const playB4  = () =>{
     playSound(B4);
     B4key.classList.add('active')
     setTimeout(() => B4key.classList.remove ("active"),200);
 };
 B4key.addEventListener("click" , playB4)




// //C5
 const C5key = document.querySelector(".C5-key")
 const playC5  = () =>{
     playSound(C5);
     C5key.classList.add('active')
     setTimeout(() => C5key.classList.remove ("active"),200);
 };
 C5key.addEventListener("click" , playC5)





// //Db5
const Db5key = document.querySelector(".Db5-key")
 const playDb5  = () =>{
     playSound(Db5);
    Db5key.classList.add('active')
     setTimeout(() => Db5key.classList.remove ("active"),200);
 };
 Db5key.addEventListener("click" , playDb5)





// //D5
 const D5key = document.querySelector(".D5-key")
 const playD5  = () =>{
     playSound(D5);
     D5key.classList.add('active')
     setTimeout(() => D5key.classList.remove ("active"),200);
 };
 D5key.addEventListener("click" , playD5)





// //Eb5
 const Eb5key = document.querySelector(".Eb5-key")
 const playEb5  = () =>{
     playSound(Eb5);
     Eb5key.classList.add('active')
     setTimeout(() => Eb5key.classList.remove ("active"),200);
 };
 C4key.addEventListener("click" , playEb5)





// //E5
 const E5key = document.querySelector(".E5-key")
 const playE5  = () =>{
     playSound(E5);
     E5key.classList.add('active')
     setTimeout(() => E5key.classList.remove ("active"),200);
 };
 E5key.addEventListener("click" , playE5)


 el.removeEventListener('click', foo);



 addEventListener("keydown" , ({keyCode}) =>{
     // press Q
     if (keyCode === 81)return playC4();
    
     //press 2
    if(keyCode === 50) return playDb4();

     //press W
     if (keyCode === 87) return playD4();

//     //press 3
     if(keyCode === 51) return playEb4();

//     //press E
    if (keyCode === 69) return playE4();

//     //press R
     if(keyCode === 82)return palyF4();

//     //press 5
    if(keyCode === 53)return palyGb4();

//     //press T
     if(keyCode === 84)return playG4();

//     //press 6
     if (keyCode === 54)return playAb4();

//     //press Y
     if (keyCode ===  89)return playA4();

//     //press 7
    if (keyCode === 55 )return palyBb4(); 

//     //press U
     if(keyCode === 85)return palyB4();

//     //press I
    if(keyCode === 75)return palyCs();
    
//     //press 9
     if(keyCode === 57 )return playDb5();

//     //press O
     if(keyCode === 79)return palyD5();

//   //  press 0
   if(keyCode === 48)return playEb5();


//   // press P
  if(keyCode === 80 )return playES();
 })







