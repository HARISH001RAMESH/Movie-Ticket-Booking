let moviedetails=[
{posterlink:"https://images.indianexpress.com/2023/09/leo2.jpg",
  moviename:'Leo',
  reviewlink:'https://www.imdb.com/title/tt15654328/reviews?ref_=tt_urv'    
},
{posterlink:"https://i.pinimg.com/originals/91/46/e3/9146e3b77ce3ee2f5b47618578336c4a.jpg",
moviename:'Jawan',
reviewlink:'https://www.imdb.com/title/tt15354916/reviews?ref_=tt_urv'  
},
{posterlink:"https://wallpapercave.com/wp/wp11855142.jpg",
  moviename:'John Wick 4',
  reviewlink:'https://www.imdb.com/title/tt15354916/reviews?ref_=tt_urv'    
},
{posterlink:"https://images4.alphacoders.com/132/1326785.jpeg",
  moviename:'Oppenheimer',
  reviewlink:'https://www.imdb.com/title/tt15398776/reviews?ref_=tt_urv'    
},
{posterlink:"https://static.toiimg.com/photo/105099671.cms?imgsize=52785",
  moviename:"The Marvels",
  reviewlink:'https://www.imdb.com/title/tt10676048/reviews?ref_=tt_urv'  
},
{posterlink:"https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
  moviename:"Spider-Man: Across the Spider-Verse",
  reviewlink:'https://www.imdb.com/title/tt9362722/reviews?ref_=tt_urv'
}
]


function loadMoviePoster()
{
let HTMLcontent=''
moviedetails.forEach((value,index) => {HTMLcontent+=`
<div id="${value.moviename}" class="movieposter" >
<a href="final.html"><img  class='ps' src="${value.posterlink}"></a>
<div class='caption'>
<p class='moviename'>${value.moviename}</p>
<button class='review' onclick="goToReviewPage(${index})">reviews</button>
</div>
</div>`
})
document.querySelector('.content').innerHTML=HTMLcontent
}

function goToReviewPage(index)
{

  window.location.href=moviedetails[index].reviewlink
}