/* eslint no-undef: 0 */
const I = actor();

Given('Je suis sur la page d\'accueil', () => {
  I.amOnPage('http://localhost:3000');
});

Then('La fonctionnalité d\'enregitrement est présente', () => {
  I.seeElement('#form-enregistrement');
});

Then('La fonctionnalité d\'enregitrement est dans son état initial', () => {
  I.seeInField('nom', '');
  I.seeInField('prenom', '');
  I.seeInField('tel', '');
});
