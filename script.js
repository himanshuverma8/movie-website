//search api
let movieTitle=document.querySelectorAll(".movie-title");
let cardText=document.querySelectorAll(".card-text");
let cardImage=document.querySelectorAll(".card-image");
let cardRating=document.querySelectorAll(".text-body-secondary");
let trailerBox=document.querySelectorAll("iframe");
let playOnYoutube=document.querySelectorAll(".play-on-youtube");
let changeTrailerButton=document.querySelectorAll(".change-trailer");
let cardIMGVid=document.querySelectorAll(".hoverplay-switch");
let columnsBox=document.querySelectorAll(".col");
let showmoreButton=document.querySelector("#show-more");
let searchText=document.querySelector(".form-control");
let searchButton=document.querySelector(".search-button");
let searchAPI="";
showmoreButton.addEventListener("click",function(){
  showmoreButton.style.display="none";
  for(let j=3; j<18; j++){
    // if(j>2){
      columnsBox[j].style.display="block";
    // }
  }
});

function getRndInteger(min, max) {
  let number = Math.floor(Math.random() * (max - min) + min);
  return number;
}
searchButton.addEventListener("click",function(e){
  e.preventDefault();
  let searchTextContent=searchText.value;
  console.log(searchTextContent);
  searchAPI="https://api.themoviedb.org/3/search/movie?api_key=7390c31e7d4f58c4b9afbc61a12f010e&query=";
searchAPI+=searchTextContent;

mainf(searchAPI);
showmoreButton.style.display="block";
for(let j=0; j<18; j++){
  if(j>2){
    columnsBox[j].style.display="none";
  }
}
});
//home button
let homeButton=document.querySelector("#home-button");
homeButton.addEventListener("click",function(){
 location.reload();
});
//top-rated button
let topratedButton=document.querySelector("#top-rated");
topratedButton.addEventListener("click",function(){
  let topratedAPI=`https://api.themoviedb.org/3/movie/top_rated?api_key=7390c31e7d4f58c4b9afbc61a12f010e`;
  for(let i=0; i<18; i++){
    cardImage[i].style.display="block";
    trailerBox[i].style.display="none";
    trailerBox[i].setAttribute("src","");
  }
  mainf(topratedAPI);
});
// popular
// let popularButton=document.querySelector("#popular");
// popularButton.addEventListener("click",function(){
//   let popularAPI=`https://api.themoviedb.org/3/trending/tv/day?api_key=7390c31e7d4f58c4b9afbc61a12f010e`;
//   mainf(popularAPI);
// });
//dark mode
let darkmodeButton=document.querySelector(".darkmode-button");
darkmodeButton.addEventListener("click",function(){
  var element = document.body;
  if(element.dataset.bsTheme=="light"){
    element.dataset.bsTheme ="dark";
    darkmodeButton.textContent="Light Mode";
  }else{
    element.dataset.bsTheme ="light";
    darkmodeButton.textContent="Dark Mode";
  }
});
const baseapiURL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7390c31e7d4f58c4b9afbc61a12f010e&page=1`;
mainf(baseapiURL);
function trailerf(trailerapi,i){
fetch(trailerapi)
        .then(function (response) {
          return response.json();
        })
        
        .then(function (trailerData) {
          if(trailerData.results.length===0){
           videoID="";
          }else{
            let rndIndex=getRndInteger(0,trailerData.results.length-1);
            if(trailerData.results[rndIndex].site=="YouTube"){
              videoID=trailerData.results[rndIndex].key;
            }
          }
         let yturl="";
         let playurl="";
       if(videoID.length){
        yturl="https://www.youtube.com/embed/"+videoID;
        playurl="https://www.youtube.com/watch?v=";
          playurl+=videoID;
       }
            console.log(playurl);
            // console.log(i+1);
        
          
            cardIMGVid[i].addEventListener("mouseover",function(){
              let videoID="";
              let rndIndexbtn=getRndInteger(0,trailerData.results.length-1);
              if(trailerData.results.length && trailerData.results[rndIndexbtn].site=="YouTube"){
                videoID=trailerData.results[rndIndexbtn].key;
              }
              let yturl="https://www.youtube.com/embed/"+videoID;
              if(videoID.length){
                cardImage[i].style.display="none";
                  trailerBox[i].style.display="block";
                  trailerBox[i].setAttribute("src",yturl+"?autoplay=1");
              }else{
                cardImage[i].style.display="block";
                trailerBox[i].style.display="none";
                trailerBox[i].setAttribute("src","");
              }
  
            });
          cardIMGVid[i].addEventListener("mouseout",function(){
            trailerBox[i].style.display="none";
            cardImage[i].style.display="block";
            trailerBox[i].setAttribute("src","");
          });
        document.querySelector("#trailer-button").addEventListener("click",function(){
          let videoID="";
          let rndIndexbtn=getRndInteger(0,trailerData.results.length-1);
          if(trailerData.results.length && trailerData.results[rndIndexbtn].site=="YouTube"){
            videoID=trailerData.results[rndIndexbtn].key;
          }
          let yturl="https://www.youtube.com/embed/"+videoID;
          let playurl="https://www.youtube.com/watch?v=";
          playurl+=videoID;
          if(videoID.length){
            cardImage[i].style.display="none";
            trailerBox[i].style.display="block";
            trailerBox[i].setAttribute("src",yturl);
            playOnYoutube[i].setAttribute("href",playurl);
            playOnYoutube[i].style.color="red";
          }else{
            cardImage[i].style.display="block";
            trailerBox[i].style.display="none";
            trailerBox[i].setAttribute("src","");
            playOnYoutube[i].setAttribute("href","javascript:void(0)");
            playOnYoutube[i].style.color="#6C757D";
          }
        });
       
          changeTrailerButton[i].addEventListener("click",function(){
            let videoID="";
            let rndIndexbtn=getRndInteger(0,trailerData.results.length-1);
            if(trailerData.results.length && trailerData.results[rndIndexbtn].site=="YouTube"){
              videoID=trailerData.results[rndIndexbtn].key;
            }
            let yturl="https://www.youtube.com/embed/"+videoID;
            let playurl="https://www.youtube.com/watch?v=";
            playurl+=videoID;
            if(videoID.length){
              cardImage[i].style.display="none";
              trailerBox[i].style.display="block";
              trailerBox[i].setAttribute("src",yturl+"?autoplay=1");
              playOnYoutube[i].setAttribute("href",playurl);
              playOnYoutube[i].style.color="red";
            }else{
              cardImage[i].style.display="block";
              trailerBox[i].style.display="none";
              trailerBox[i].setAttribute("src","");
              playOnYoutube[i].setAttribute("href","javascript:void(0)");
              playOnYoutube[i].style.color="#6C757D";
            }
          });
        });

}
function mainf(baseapiURL){
  fetch(baseapiURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    if(data.results.length==0){
      return null;
    }
    for(let i=0; i<18; i++){ 
        trailerBox[i].setAttribute("src","");
        playOnYoutube[i].style.color="#6C757D";
        playOnYoutube[i].setAttribute("href","javascript:void(0)");
        cardImage[i].style.opacity=0;
      movieTitle[i].textContent=data.results[i].original_title;
        let imbdRating=data.results[i].vote_average;
        let imagePath="https://image.tmdb.org/t/p/w1280";
        if(data.results[i].backdrop_path==null){
          imagePath+= data.results[i].poster_path;
        }else{
          imagePath+= data.results[i].backdrop_path;
        }
        cardText[i].textContent=data.results[i].overview;
        cardImage[i].setAttribute("src",imagePath);
        cardImage[i].style.display="block";
        trailerBox[i].style.display="none";
        setTimeout(function(){
          cardImage[i].style.opacity=1;
         },1000);
        cardRating[i].innerHTML="IMDb Rating: "+imbdRating;
        let trailerapi = "https://api.themoviedb.org/3/movie/";
        trailerapi+=data.results[i].id;
        trailerapi+="/videos?";
        trailerapi+="api_key=7390c31e7d4f58c4b9afbc61a12f010e";
        console.log(trailerapi);
        trailerf(trailerapi,i);
    }
});
}




