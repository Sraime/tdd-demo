/* eslint no-undef: 0 */
const I = actor();

Given('Je suis sur la page d\'accueil', () => {
  I.amOnPage('http://localhost:3000');
});