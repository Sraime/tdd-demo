*** Settings ***
Library     SeleniumLibrary
Resource    ../steps.robot
Resource    ../steps/navigateur.robot
Resource    ../steps/navigation.robot
Resource    ../steps/forms.robot

*** Test Cases ***

DEBUT
    Ouverture du navigateur

Scenario: Création d'un contact avec echec
    Given je suis sur la page de création d'un contact
    When je renseigne le champ "Nom" avec "TOTO"
    And je renseigne le champ "Prénom" avec "Titi"
    And je renseigne le champ "Téléphone" avec "0102030405"
    And je valide la création du contact
    Then le message de confirmation "Titi TOTO est enregistré"

FIN
    Fermeture du navigateur