import cipher from './cipher.js';

document.getElementById('root').innerHTML = `
  <div id="main-card">
  <div id="card-title" class="main-text text"><h1>Lista de convocados Selección Colombia ⚽  🇨🇴</h1></div>
  <div id="card-description" class="main-text text"><h2>El Director técnico de la selección Colombia de fútbol necesita enviar el listado de jugadores convocados para el siguiente partido, tu misión es cifrar los nombres de los jugadores,  para evitar que la lista se filtre en la prensa y los nombres se sepan antes de tiempo.</h2> </div>

  <div id="cipher-container">
    <div id="encode-container" class="box-container">
      <div id="encode-text-container" >
        <textarea id="encode-text" rows="4" placeholder="texto a cifrar"></textarea>
      </div>
      <div id="encode-button-container">
        <button id="encode-button" class="button">Cifrar</button>
      </div>
      <div id="offset-container" class="text">
        <label for="offset">desplazamiento/rotaciones</label>
        <input id="offset" type="number" value="3">
      </div>
    </div>

    <div id="decode-container" class="box-container">
      <div id="decode-text-container" >
        <textarea id="decode-text" rows="4" placeholder="texto a descifrar"></textarea>
      </div>
      <div id="decode-button-container">
        <button id="decode-button" class="button">Descifrar</button>
      </div>
    </div>
  </div>
  </div>

  <footer class="text"><h3>Cipher © 2021 - todos los derechos reservados - <a href="https://github.com/santiaguf/cipher" target="_blank">código fuente</a></h3></footer>
`;

const encodeText = () => {
  const text = document.getElementById('encode-text').value.toUpperCase();
  const offset = parseInt(document.getElementById('offset').value);
  const result = cipher.encode(offset, text);

  document.getElementById('decode-text').value = result;
};

const decodeText = () => {
  const text = document.getElementById('decode-text').value.toUpperCase();
  const offset = parseInt(document.getElementById('offset').value);
  const result = cipher.decode(offset, text);

  document.getElementById('encode-text').value = result;
};

const encodeButton = document.getElementById('encode-button');
encodeButton.addEventListener('click', () => {
  encodeText();
});

const decodeButton = document.getElementById('decode-button');
decodeButton.addEventListener('click', () => {
  decodeText();
});