const { faker } = await import("https://esm.sh/@faker-js/faker");

const CLAVE_NUMERO_ALEATORIO = Math.ceil(Math.random() * 1000);

const VALUE_NUEVO_CARD = {
  alt: faker.science.chemicalElement().name,
  titulo: faker.hacker.adjective(),
  texto: faker.food.description(),
  img: faker.image.avatar(),
};

const valueNuevoCardString = JSON.stringify(VALUE_NUEVO_CARD);

localStorage.setItem(`Cards_${CLAVE_NUMERO_ALEATORIO}`, valueNuevoCardString);

for (let i = 0; i < localStorage.length; i++) {
  const keyLocalStore = localStorage.key(i);
  if (!keyLocalStore.startsWith("Cards_")) {
    continue;
  }
  const valueCard = JSON.parse(localStorage.getItem(keyLocalStore));
  const contenedorCards = document.getElementById("cards");

  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `<div class="card">
          <img src=${valueCard.img} alt=${valueCard.alt} />
          <div class="card-content">
            <h3>${valueCard.titulo}</h3>
            <p>${valueCard.texto}</p>
            <a href="#" class="btn">Leer más</a>
          </div>
        </div>`;

  nuevoDiv.classList.add("card");

  contenedorCards.appendChild(nuevoDiv);
}
