const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url){
    const respone = await fetch(url);
    var data = await respone.json();
    console.log(data)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;


}
getquote(apiUrl);