var form = document.getElementById('shorten-form');
var urlBox = form.elements[0];
var link = document.getElementById('link');
var shrtBox = document.getElementById('shortened');

// Callback function passed to Axios
function displayShortenedUrl(response) {
  link.textContent = response.data.shortUrl;
  link.setAttribute(
    'href', response.data.shortUrl
  );
  shrtBox.style.opacity = '1';
  urlBox.value = '';
}

// Axios error handling
function alertError(error) {
    alert('Are you sure the URL is correct? Make sure it has http:// at the beginning.');
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Send the POST request to the backend
  axios.post('/new', {url: urlBox.value})
        .then(displayShortenedUrl)
        .catch(alertError);
});
