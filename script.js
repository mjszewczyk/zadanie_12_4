var paragraph = document.getElementById('joke');
var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
window.onload = function () {
    button.addEventListener('click', function () {
        getJoke();
    });
    getJoke();
};

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = 'id:  ' + response.value.id + ' ' + response.value.joke;
    });
    xhr.send();
}