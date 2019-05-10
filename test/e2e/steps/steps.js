/* eslint no-undef: 0 */
const I = actor();

Given('Je suis sur la page d\'accueil', () => {
  I.amOnPage('http://localhost:3000');
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
