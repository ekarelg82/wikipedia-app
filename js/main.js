const api_url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDfIn7RA5_zH3lwRMm-Rb_lcHZl_HBm1YY&cx=017576662512468239146:omuauf_lfve&q='
const google_link = 'https://www.googleapis.com/customsearch/v1?parameters'

const findContainer = document.querySelector('.find-container')

function getFind(searchTerm) {
  $.ajax({
    url: api_url + searchTerm,
    dataType: 'jsonp'
  }).done(function(response) {
    console.log(response);


    for (let i = 0; i < response.query.search.length; i++) {
      const title = response.query.search[i].title
      const snippet = response.query.search[i].snippet

      findContainer.innerHTML += `
  <a class="find" href="${google_link}/${title}" target="_blank" rel="noopener">
  <h3 class="find-title">${title}</h3>
  <p class="find-snippet">${snippet}</p>
  </a>
  `
    }
  })
}


searchForm.addEventListener('submit', function(event) {
  event.preventDefault()
  findContainer.innerHTML = ''
  getFind(search.value)
})
