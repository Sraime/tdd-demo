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

    Scenario: Je peux enregistrer un contact quand tout les champs sont renseigner
        Given Je suis sur la page d'accueil
        When Je reseigne l'option d'enregistrement "nom" avec "CANARY"
        And Je reseigne l'option d'enregistrement "prenom" avec "Alice"
        And Je reseigne l'option d'enregistrement "tel" avec "0102030405"
        Then Je peux enregistrer le contact