const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'catfact');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://geek-jokes.sameerkumar.website/api', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    const card = document.createElement('div');
    card.setAttribute('class', 'catfact');

    const p = document.createElement('p');
    p.textContent = `${data}...`;

    container.appendChild(card);
    card.appendChild(p);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
