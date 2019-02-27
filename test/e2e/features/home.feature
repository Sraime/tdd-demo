Feature: Home Page
  En tant qu utilisateur
  Je souhaite acceder a la home page
  Afin d acceder aux fonctionnalites principales

  Scenario: Le titre et correct
    Given je vais sur la home page
    Then le titre de la page est "Sogeti France | Gérez la transformation numérique de votre entreprise avec Sogeti"

  Scenario: le formulaire de recherche est accessible
    Given je vais sur la home page
    Then la navigation a droite est accessible
    When je click sur l icon de recherche
    Then le formulaire de recherche s affiche

  Scenario: le changement de pays est accessible
    Given je vais sur la home page
    Then la navigation a droite est accessible
    When je click sur l icon de pays
    Then la liste des pays s affiche