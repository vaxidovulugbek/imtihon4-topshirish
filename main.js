
let massiv = [
  {
    id:1,
    media:[
      "https://i0.wp.com/m.fzmoviesnet.com/wp-content/uploads/2019/10/Transit-17-2019-Mp4.jpg?fit=696%2C585&ssl=1",
      "https://m.media-amazon.com/images/M/MV5BN2Q4OGFhMjUtMzQ3NC00ZmE5LThhZDktM2NmYTYwZGMxZjc1XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_.jpg",
    ],
    name:"movie-1"
  },
  {
    id:2,
    media:[
       "https://fastly.4sqi.net/img/general/600x600/57277944_LajHIx0_rcYwuBeyKspuvMtdn-RBG0S7_H-6nntBKKE.jpg",
       "https://static.toiimg.com/photo/msid-77757581/77757581.jpg?556063",
    ],
    name:"movie-2"
  },

  {
    id:3,
    media:[
       "https://m.media-amazon.com/images/I/81hWmc7eb6L._SL1500_.jpg",
       "https://m.media-amazon.com/images/M/MV5BN2Q4OGFhMjUtMzQ3NC00ZmE5LThhZDktM2NmYTYwZGMxZjc1XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_.jpg",
    ],
    name:"movie-3"
  },

  {
    id:4,
    media:[
       "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_690,w_900/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2020%2F01%2FCLONEWARS_1sheet_15434_L-900x0.jpg",
       "https://static.toiimg.com/photo/msid-77757581/77757581.jpg?556063",
    ],
    name:"movie-4"
  },
]

let idx = 1
let contentt = document.querySelector("#contentt")
let idx2 = 0



massiv.forEach((item) => {
  let div = document.createElement("div")
  div.id = `img${idx}`
  // console.log(li.id);
  // console.log(item);
  // div.setTimeout(myfunc, 1000);
  div.innerHTML = `

  <span class="linya" onclick="setTimeout(myFunction, 3000)"></span>
  <span class="linya2"></span>
  <div class="content-info">
    <div class="content-titles">
      <img class="content-imgs" src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_14664244.jpg?crop=0,34,2000,1328&wid=828&hei=550&scl=2.4154589371980677" alt="">
      <h2 class="content-title">${item.name}</h2>
    </div>
    <ul class="icons">
      <li class="icons__item"><i class='bx bx-play'></i></li>
      <li class="icons__item"><i class='bx bxs-user-voice' ></i></li>
      <li class="icons__item"><i class='bx bx-dots-horizontal-rounded' ></i></li>
    </ul>
  </div>
  <img class="img-pic" src="${item.media[0]}" alt="">
  <form id="form"> 
    <input id="input" type="text" placeholder="search">
    <i class='bx bxl-telegram'></i>
  </form>
  `
  contentt.appendChild(div)
  idx++
})






// setInterval(displayHello, 1000);
// let imgpic = document.querySelectorAll(".img-pic")


let image1 = document.querySelector("#img1");
let image2 = document.querySelector("#img2");
let image3 = document.querySelector("#img3");
let image4 = document.querySelector("#img4");

image4.onclick = function () {
  setTimeout(myFunction, 1000)
  image4.style.top = "-140px";
  image4.style.left = "110px";
  image4.style.width = "380px";
  image4.style.height = "640px";
  // image4.style.boxShadow = "inset 0 0 10px rgba(255, 255, 255, 0.9)";
  image4.style.zIndex = 2;
  image3.style.top = "33px";
  image3.style.left = "-190px";
  image3.style.width = "300px";
  image3.style.height = "334px";
  // image3.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image3.style.zIndex = 1;
  image2.style.top = "33px";
  image2.style.left = "135px";
  image2.style.width = "300px";
  image2.style.height = "334px";
  // image1.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image2.style.zIndex = 1;
  image1.style.top = "33px";
  image1.style.left = "460px";
  image1.style.width = "300px";
  image1.style.height = "334px";
  // image1.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image1.style.zIndex = 1;
};
image3.onclick = function () {
  setTimeout(myFunction, 1000)
  image3.style.top = "-140px";
  image3.style.left = "110px";
  image3.style.width = "380px";
  image3.style.height = "640px";
  // image3.style.boxShadow = "inset 0 0 10px rgba(255, 255, 255, 0.9)";
  image3.style.zIndex = 2;
  image2.style.top = "33px";
  image2.style.left = "-190px";
  image2.style.width = "300px";
  image2.style.height = "334px";
  // image2.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image2.style.zIndex = 1;
  image1.style.top = "33px";
  image1.style.left = "135px";
  // image1.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image1.style.zIndex = 1;
  image4.style.top = "33px";
  image4.style.left = "460px";
  image4.style.width = "300px";
  image4.style.height = "334px";
  // image4.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image4.style.zIndex = 1;
};
image2.onclick = function () {
  setTimeout(myFunction, 1000)
  image2.style.top = "-140px";
  image2.style.left = "110px";
  image2.style.width = "380px";
  image2.style.height = "640px";
  // image2.style.boxShadow = "inset 0 0 10px rgba(255, 255, 255, 0.9)";
  image2.style.zIndex = 2;
  image3.style.top = "33px";
  image3.style.left = "460px";
  image3.style.width = "300px";
  image3.style.height = "334px";
  // image3.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image3.style.zIndex = 1;
  image1.style.top = "33px";
  image1.style.left = "-190px";
  image1.style.width = "300px";
  image1.style.height = "334px";
  // image1.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image1.style.zIndex = 1;
  image4.style.top = "33px";
  image4.style.left = "135px";
  image4.style.width = "300px";
  image4.style.height = "334px";
  // image4.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 1)";
  image4.style.zIndex = 1;
};
image1.onclick = function () {
  setTimeout(myFunction, 1000)
  image1.style.top = "-140px";
  image1.style.left = "110px";
  image1.style.width = "380px";
  image1.style.height = "640px";
  // image1.style.boxShadow = "inset 0 0 10px rgba(255, 255, 255, 1)";
  image1.style.zIndex = 2;
  image2.style.top = "33px";
  image2.style.left = "460px";
  image2.style.width = "300px";
  image2.style.height = "334px";
  // image2.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 0.9)";
  image2.style.zIndex = 1;
  image3.style.top = "33px";
  image3.style.left = "135px";
  image3.style.width = "300px";
  image3.style.height = "334px";
  // image3.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 0.9)";
  image3.style.zIndex = 1;
  image4.style.top = "33px";
  image4.style.left = "-190px";
  image4.style.width = "300px";
  image4.style.height = "334px";
  // image4.style.boxShadow = "inset 0 0 90px rgba(255, 255, 255, 0.9)";
  image4.style.zIndex = 1;
};

let closebtn = document.querySelector("#closebtn")
closebtn.addEventListener("click",() => {
  contentt.classList.add("dn")
})


function myFunction() {
  console.log("helloooo");
}

