const I = actor();

Given('je vais sur la home page', () => {
  I.amOnPage('https://www.fr.sogeti.com/');
});

Then('le titre de la page est {string}', () => {
  I.seeInTitle("Sogeti France | Gérez la transformation numérique de votre entreprise avec Sogeti");
});

Then('la navigation a droite est accessible', () => {
  I.seeElement('.navbar-right');
});

When('je click sur l icon de recherche', () => {
  I.click('.navbar-right > .navbar-search');
});

Then('le formulaire de recherche s affiche', () => {
  I.seeElement('#SearchFormHeader');
});

When('je click sur l icon de pays', () => {
  I.click('.navbar-right > .navbar-global');
});

Then('la liste des pays s affiche', () => {
  I.seeElement('.country-list');
});
