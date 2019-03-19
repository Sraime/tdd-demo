Feature: création d'un contact
    En tant qu'utilisateur de l'application
    Je souhaite créer un nouveau contact dans mon carnet
    Afin de De le sauvegarder et de le réutiliser plus tard

    Scenario: Le formulaire apparait sur la page d'accueil
        When Je suis sur la page d'accueil
        Then La fonctionnalité d'enregitrement est présente
        And La fonctionnalité d'enregitrement est dans son état initial

    Scenario: Immpossible d'enregistrer si un champs est manquant
        Given Je suis sur la page d'accueil
        When Je reseigne l'option d'enregistrement "nom" avec "BABOUCHE"
        Then Je ne peux pas enregistrer le contact