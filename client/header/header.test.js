import Header from './index';

describe('Header', () => {
  test('correct initialization', () => {
    document.body.innerHTML = `
      <header>
        <select id="models-list"></select>
      </header>
    `;
    Header.init();
    expect(Header.$modelsList).toBeTruthy();
  })
})