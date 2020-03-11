  // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBN7k2TLkcXBh4fb925PkPf-CF2Mtmee_k",
  //   authDomain: "airlie-beach-constructio-9e804.firebaseapp.com",
  //   databaseURL: "https://airlie-beach-constructio-9e804.firebaseio.com",
  //   projectId: "airlie-beach-constructio-9e804",
  //   storageBucket: "airlie-beach-constructio-9e804.appspot.com",
  //   messagingSenderId: "656162790825",
  //   appId: "1:656162790825:web:88b9a08558ef48d7ac38b8",
  //   measurementId: "G-XVLXKRJTH2"
  // };

  // // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  
  // mFirestore = FirebaseFirestore.getInstance();

  // let messagesReference = firebase.database().ref("messages");
let url = "hello"
let myIndex = 0;

// admin.firestore().collection('messages').add({
//   to: 'someone@example.com',
//   message: {
//     subject: 'Hello from Firebase!',
//     text: 'This is the plaintext section of the email body.',
//     html: 'This is the <code>HTML</code> section of the email body.',
//   }
// }).then(() => console.log('Queued email for delivery!'));

class HTTP {


    async get(url) {
      const response = await fetch(url);
      const resData = await response.text();

      return resData;
    }
  
}

class UI{

  constructor(){
    
  }

  showMenu(){
    document.querySelector(".nav-list").classList.toggle("show-menu");

  }

  nameValidation(){
    const validationa = document.querySelector(".a")
    console.log(validationa)
    const name = document.querySelector("#name");
    const re = /^[a-zA-Z\s]{2,20}$/;
    if(!re.test(name.value)){
      validationa.classList.remove("is-valid")
      validationa.classList.add("is-invalid")
    } else{
      validationa.classList.remove("is-invalid")
      validationa.classList.add("is-valid")
    }
  }

   phoneValidation(){
    const validationb = document.querySelector(".b")
    const phone = document.querySelector("#phone");
    const re = /^[0-9\s]{2,15}$/;
  
    if(!re.test(phone.value)){
      validationb.classList.remove("is-valid")
      validationb.classList.add("is-invalid")
    } else{
      validationb.classList.remove("is-invalid")
      validationb.classList.add("is-valid")
    }
   }

   emailValidation(){
    const validationc = document.querySelector(".c")
  const email = document.querySelector("#email");
  const re = /^([0-9a-z_\-\.]+)@([0-9a-z_\-\.]+)\.([a-z]{2,5})$/;

    if(!re.test(email.value)){
      validationc.classList.remove("is-valid")
      validationc.classList.add("is-invalid")
    } else{
      validationc.classList.remove("is-invalid")
      validationc.classList.add("is-valid")
    }
}

  messageValidation(){
  const validationd = document.querySelector(".d")
  const message = document.querySelector("#message");

  if(!message.value.length > 0){
    validationd.classList.remove("is-valid")
    validationd.classList.add("is-invalid")
  } else{
    validationd.classList.remove("is-invalid")
    validationd.classList.add("is-valid")
  }
}

formValid(e){


    const validInputs = document.querySelectorAll(".is-valid");
    const formValues = document.querySelectorAll("input");
    
    const textArea = document.querySelector("textarea");
    let valid = true;

    if(validInputs.length !== 4 || textArea.value === ""){
      
      valid = false;
      console.log(valid)

      if(document.querySelector(".failedmessage")){

      } else {

        const failedMessage = document.createElement("div");
        failedMessage.className = "failedmessage"
  
        failedMessage.appendChild(document.createTextNode("Enter the correct details"));
  
        //get parent element 
        const parent = document.querySelector("#contact-form");
        const lastElement = document.querySelector("#lastone")
  
        const inputs = document.querySelectorAll("input")
        const textArea = document.querySelector("textarea")
        const validInputs = document.querySelectorAll(".validation")
  
       
        parent.insertBefore(failedMessage, lastElement)

        setTimeout(function(){
        
   
          failedMessage.remove()

  
  
        },2000)




      }






      e.preventDefault();
    } else {

      ui.formsubmitted(e); 

    }




  }

  formsubmitted(e){


    e.preventDefault()
    
    if(document.querySelector(".is-invalid")){



    } else {
      let to = "nathanbritten@airliebeachconstructions.com.au"
      let name = getInputVal("name");
      let phone = getInputVal("phone");
      let email = getInputVal("email");
      let content = getInputVal("message");

  
      // save message
      // ui.saveMessageToFireBase(name, phone, email, content, to);


      const successMessage = document.createElement("div");
      successMessage.className = "submittedmessage"


 


      successMessage.appendChild(document.createTextNode("Email Sent"));

      //get parent element 
      const parent = document.querySelector("#contact-form");
      const lastElement = document.querySelector("#lastone")

      const inputs = document.querySelectorAll("input")
      const textArea = document.querySelector("textarea")
      const validInputs = document.querySelectorAll(".validation")

     
      parent.insertBefore(successMessage, lastElement)

      setTimeout(function(){
        
        for(let i = 0; i < inputs.length; i++){

          validInputs[i].classList.remove("is-valid")
          inputs[i].value = ""
        }
        successMessage.remove()
        textArea.value = ""
       document.querySelector(".d").classList.remove("is-valid")


      },2000)





    }



      // const message = document.createElement("div");
      // message.className = "submittedmessage"

      // message.appendChild(document.createTextNode("Email Sent"));

      // //get parent element 
      // const parent = document.querySelector("#contact-form");
      // const lastElement = document.querySelector("#lastone")

      // const inputs = document.querySelectorAll("input")
      // const textArea = document.querySelector("textarea")
      // const validInputs = document.querySelectorAll(".validation")

     
      // parent.insertBefore(message, lastElement)

      // setTimeout(function(){
        
      //   for(let i = 0; i < inputs.length; i++){

      //     validInputs[i].classList.remove("is-valid")
      //     inputs[i].value = ""
      //   }
      //   message.remove()
      //   textArea.value = ""
      //  document.querySelector(".d").classList.remove("is-valid")


      // },3000)
      

  }

  // saveMessageToFireBase(name, phone, email, content, to){
  //   let newMessageRef = messagesReference.push();
  //   newMessageRef.set({
  //     to: to,
  //     message: {
  //       name: name,
  //       content: content,
  //       email: email,
  //       phone: phone

  //     }
 
  //   });
  // }

  insertFocus(){
  
    const firstFocus = document.querySelector(".foc");

    const cards = document.querySelectorAll(".foc");

    const introPosition = firstFocus.getBoundingClientRect().top;
    // console.log(introPosition)
    const screenPosition = window.innerHeight;

    if(introPosition < screenPosition){

    cards.forEach(function(card, index){

      card.style.transition = `${(index + 2)/ 3}s ease-in`

      card.classList.add("from-left");
    })
  }
  }

  insertserv(){
  
    const firstServs = document.querySelector(".serv");

    const servs = document.querySelectorAll(".serv");

    const introPosition = firstServs.getBoundingClientRect().top;
    // console.log(introPosition)
    const screenPosition = window.innerHeight;

    if(introPosition < screenPosition){

      servs.forEach(function(serv, index){

        serv.style.transition = `${(index + 2)/ 3}s ease-in`
  
        serv.classList.add("from-left");
      })
    }


  }

  insertourwork(){
  
    const firstwork = document.querySelector(".gallery-preview-item");

    const works = document.querySelectorAll(".gallery-preview-item");



    const introPosition = firstwork.getBoundingClientRect().top;
    // console.log(introPosition)
    const screenPosition = window.innerHeight;

    if(introPosition < screenPosition){

      works.forEach(function(serv, index){

        serv.style.transition = `${(index + 5)/ 3}s ease-in`;
  
        serv.classList.add("fade-left");
      })
    }


  }

  expandImages(e){

    // console.log(e.target)
    const bigImages = document.querySelectorAll(".big-img")
    const smallImages = document.querySelectorAll(".small-img-port")
    const emptyDisplay = document.getElementById("bigOne");





    if(e.target.classList.contains("big-img") || e.target.classList.contains("small-img") ||e.target.classList.contains("small-img-port")){

      let displayImage = e.target.src;
      let dataLocation = e.target.dataset.location
      emptyDisplay.alt = e.target.id;
      emptyDisplay.dataset.location = dataLocation
      


      displayImage = displayImage.substring(0, displayImage.length - 8);
      console.log(displayImage);

      displayImage += ".jpg"







      emptyDisplay.src = displayImage;
      console.log(emptyDisplay.alt)
      
      let tar = document.querySelector(".img-displayer")
      tar.classList.add("display");
      // console.
      // e.target.classList.add("expanded-img")
    }
  }

  closeExpandedImage(){
    let tar = document.querySelector(".img-displayer")
    tar.classList.remove("display");
  }

  createOurwork(data){
    console.log(typeof data.id)
    let output ="";

    const numberOfImages = data.newData.length;
    console.log(data.location)
    // let rand1 = Math.floor(Math.random() * numberOfImages)
    // let rand2 = Math.floor(Math.random() * numberOfImages)
    // let rand3 = Math.floor(Math.random() * numberOfImages)
    // let rand4 = Math.floor(Math.random() * numberOfImages)
    // console.log(rand2)
    // <img class="small-img-port funnel" id="${i}" src="/images/${data.location}/${data.newData[i]}">

 

    for(let i = 0; i < numberOfImages; i++){


      // yangaro-13/yangaro-13_6_-res.jpg

        output += `
      
        <img class="small-img-port funnel" id="${i}" data-location="${data.location}" src="https://res.cloudinary.com/doxnenpyp/image/upload/${data.location}/${data.newData[i]}">
        `  

    } 

    if(data.id === 0){
      document.querySelector("#lot1").innerHTML = output;
    }  if (data.id === 1){
      document.querySelector("#yangaro2").innerHTML = output;
    }  if(data.id === 2){
      document.querySelector("#yangaro13").innerHTML = output;

    }

   


  }

  previous(){

    // const allImages = document.querySelectorAll(".funnel");
    const currentImage = document.getElementById("bigOne");

    let imageLocation = currentImage.alt;

    let dataLocation = currentImage.dataset.location

    const allImages = document.querySelectorAll(`[data-location="${dataLocation}"]`);
    console.log(allImages)

    console.log(imageLocation)
    let previousImage = allImages[imageLocation - 1].src;

    previousImage = previousImage.substring(0, previousImage.length - 8);
    // console.log(displayImage);

    previousImage += ".jpg"



    currentImage.alt -= 1
    currentImage.src = previousImage;

    // let displayImage = e.target.src;
    //   emptyDisplay.alt = e.target.id;
      
    //   console.log(emptyDisplay.alt)

  }

  next(){

    
    let currentImage = document.getElementById("bigOne");

    let imageLocation = currentImage.alt;
    let dataLocation = currentImage.dataset.location

    const allImages = document.querySelectorAll(`[data-location="${dataLocation}"]`);
    console.log(allImages)


    console.log(dataLocation)
    console.log(imageLocation)
    imageLocation = parseInt(imageLocation)

    let nextImage = allImages[imageLocation + 1].src;
    console.log(nextImage)

    nextImage = nextImage.substring(0, nextImage.length - 8);
    // console.log(displayImage);

    nextImage += ".jpg"


    let altLoc = parseInt(currentImage.alt)
    currentImage.alt =  altLoc + 1
    currentImage.src = nextImage;




  }


}


const http = new HTTP;
const ui = new UI;




if(document.querySelector("body").id === "home"){
    document.querySelector("#name").addEventListener("blur", ui.nameValidation)

    document.querySelector("#phone").addEventListener("blur", ui.phoneValidation)

    document.querySelector("#email").addEventListener("blur", ui.emailValidation)

    document.querySelector("#message").addEventListener("blur", ui.messageValidation)

    document.querySelector("#submitbutton").addEventListener("click", ui.formValid)

    testimonialCarousel();



    window.addEventListener("scroll", ui.insertourwork);

    window.addEventListener("scroll", ui.insertserv);
window.addEventListener("scroll", ui.insertFocus);




// reference messages collection



document.querySelector(".next").classList.add("none");

document.querySelector(".previous").classList.add("none");
}

document.addEventListener("click", ui.expandImages)

document.querySelector(".close-img-displayer").addEventListener("click", ui.closeExpandedImage)





function getImages(){

  http.get("/images/lot-one-funnel-bay/print.txt")
  .then(function(data){
    let newData = data.split("\n");
    // console.log(newData)
    data = {
      newData: newData,
      id: 0,
      location: "lot-one-funnel-bay"
    }
    ui.createOurwork(data);
  })

  http.get("/images/yangaro-2/print.txt")
  .then(function(data){
    let newData = data.split("\n");
    console.log(newData)
    data = {
      newData: newData,
      id: 1,
      location: "yangaro-2"
    }
    ui.createOurwork(data);
  })
  http.get("/images/yangaro-13/print.txt")
  .then(function(data){
    let newData = data.split("\n");
    // console.log(newData)
    data = {
      newData: newData,
      id: 2,
      location: "yangaro-13"
    }
    ui.createOurwork(data);
  })






}


function testimonialCarousel() {
  var i;
  var x = document.querySelectorAll(".testimonial-card");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "inline-block";
  x[myIndex-1].classList.add("fade");
  setTimeout(testimonialCarousel, 5000); 
}

fetch("./header.html")
  .then(function(res){
    return res.text()
  })
  .then(function(data){
    // console.log(data)
    document.querySelector("header").innerHTML = data;
      //event listenrs 
      document.querySelector(".fa-bars").addEventListener("click", ui.showMenu)
  })




if(document.querySelector("body").id === "portpage"){

getImages()




  document.querySelector(".previous").addEventListener("click", ui.previous)
  document.querySelector(".next").addEventListener("click", ui.next)

}

// fetch footer
fetch("./footer.html")
  .then(function(res){
    return res.text()
  })
  .then(function(data){

    document.querySelector("footer").innerHTML = data;
  })
  .then(function(){


      user = "info";
      domain = "airliebeachconstructions.com.au";
    
      document.querySelector(".first-email").innerHTML = 
    '<a href=\"mailto:' + user + '@' + domain + '\">' + 
            user + '@' + domain + '</a>'
    

            user = "admin";
            domain = "airliebeachconstructions.com.au";
          
            document.querySelector(".second-email").innerHTML = 
          '<a href=\"mailto:' + user + '@' + domain + '\">' + 
                  user + '@' + domain + '</a>'
 
  })


function getInputVal(id){
  return document.getElementById(id).value;
}






// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);