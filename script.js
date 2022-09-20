const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const newQ=document.getElementById("newQ");
const tweetMe=document.getElementById("tweetMe");
let realData="";
let quotesData="";
const tweetNow=()=>{
  let tweetPost= `https://twitter.com/intent/tweet?text=${quotesData.text}`;
  window.open(tweetPost);
}
const getNewQuotes=()=>{
    let rnum=Math.floor(Math.random()*100);
    console.log(rnum);
    quotesData=realData[rnum];
    quotes.innerText= `${quotesData.text}`;
    quotesData.author==null ?
    author.innerText="unknown":
    author.innerText=`${realData[rnum].author}`;
}
const getQuotes=async()=>{
const api="https://type.fit/api/quotes";
try{
    let data=await fetch(api);
     realData=await data.json();
     getNewQuotes();
    // console.log(realData[0].text);
    // console.log(realData[0].author);
}
catch(error){console.log(error)}
}
newQ.addEventListener("click",getNewQuotes);
tweetMe.addEventListener("click",tweetNow);
getQuotes();