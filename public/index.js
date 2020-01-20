/* global VIRTUO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
          <label>${actor.who}</label>
          <label>${actor.type}</label>
          <label>${actor.amount}</label>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const car = VIRTUO.getCar();
    const begin = document.querySelector('#form .js-begin').value;
    const end = document.querySelector('#form .js-end').value;
    const distance = document.querySelector('#form .js-distance').value;
    const option = document.querySelector('#form .js-option').checked;
    const actors = VIRTUO.payActors(car, begin, end, distance, option);

    render(actors);

    return;
  });
})();
