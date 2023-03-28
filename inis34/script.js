function createCard(image, title, amount, id) {
  const subtitle = `Available in ${amount} colors`;
  return `
  <div class="card">
    <img src="${image}" alt="${title}">
    <div class="card_content">
      <p class="card_title">${title}</p>
      <p class="card_subtitle">${amount !== 1 ? subtitle : 'Available in one color'}</p>
      <button class="card_button">Quick View</button>
      <button id="shirt-${id}" class="card_button">See Page</button>
    </div>
  </div>
  `;
}

const container = document.getElementById('cardsContainer');

for (let index = 0; index < shirts.length; index++) {
  container.innerHTML += createCard(
    `./${shirts[index].colors.white.front}`,
    shirts[index].name,
    Object.keys(shirts[index].colors).length,
    index
  );
}

const buttons = document.querySelectorAll('.card_button');

buttons.forEach((element) => {
  element.addEventListener('click', (e) => {
    let shirtId = element.id.match(/\d+/)[0];
    sessionStorage.setItem('shirtId', shirtId);
    location.href = './details.html';
  });
});