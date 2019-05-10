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

When('Je valide l\'enregistrement du contact', () => {
  I.click('#form-enregistrement .btn-save');
});

Then('Le message {string} s\'affiche', (message) => {
  I.see(message);
});

Then('La fonctionnalité d\'enregitrement est dans son état initial', () => {
  I.seeInField('nom', '');
  I.seeInField('prenom', '');
  I.seeInField('tel', '');
});
