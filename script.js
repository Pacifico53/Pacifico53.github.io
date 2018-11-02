const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'apitest');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    const card = document.createElement('div');
    card.setAttribute('class', 'apitest');

    const p = document.createElement('p');
    p.textContent = `${data.setup}`;

    const pp = document.createElement('p');
    pp.textContent = `${data.punchline}`;

    container.appendChild(card);
    card.appendChild(p);
    card.appendChild(pp);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
