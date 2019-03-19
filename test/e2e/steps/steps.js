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

When('Je reseigne l\'option d\'enregistrement {string} avec {string}', (name, value) => {
  I.fillField(name, value);
});

Then('Je ne peux pas enregistrer le contact', () => {
  I.seeElement('#form-enregistrement .btn-save:disabled');
});

Then('Je peux enregistrer le contact', () => {
  I.seeElement('#form-enregistrement .btn-save:not(:disabled)');
});
