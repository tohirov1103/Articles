const query = window.location.search
const overlay = document.querySelector('.overlay')
const articlesContainer =document.querySelector('.article-container')
const id = query.slice(1)
const idEl = document.getElementById('id') 
const img = document.getElementById('img')
//
idEl.textContent=id
const request = new XMLHttpRequest()
request.addEventListener('readystatechange',()=>{
    if(request.readyState == 4 && request.status == 200){
       const data = JSON.parse(request.responseText)
        updateUI(data)
        overlay.classList.add('hidden')
    }
    else if(request.readyState==4){
        console.log('error')
        overlay.classList.add('hidden')
    }
    else{
       overlay.classList.remove('hidden')
    }
})
request.open('get',`http://localhost:3000/articles/${id}`) // Olmoqdamiz
request.send(); // Va jo'natmoqdamiz

// function updateUI(data){
//     console.log(data)
// }
//
function updateUI(data){

    img.innerHTML=`
<br>
<br>
<div class='title' style="display: flex; align-items: center; justify-content: space-between;" >
<h3>Title: ${data.title}</h3>
<a class='btn' style="text-decoration: none; color: black ;border: 2px solid slategray;padding: 10px 15px;border-radius: 8px;" href=${`inex.html`}>Head Page</a>
</div>
<br>
<p class="author">Author: ${data.author}</p>
<br>
<br>
<img  style="border-radius: 10px;" src="https://picsum.photos/id/${id}/1200/350" alt="">
<br>
<br>
<br>
<p class="textP">Body: ${data.body} </p>
<br>
<br>
<br>
<br>

    `
    console.log(data)
  }