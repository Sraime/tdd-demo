Feature: création d'un contact
    En tant utilisateur de l'application
    Je veux créer un contact
    Afin de sauvegarder ses informations

    Scenario: création impossible
        Given Je suis sur le formulaire de création de contact
        When Je saisis le champ "Prénom" avec la valeur "<valPrenom>"
        And Je saisis le champ "Nom" avec la valeur "<valNom>"
        And Je saisis le champ "Téléphone" avec la valeur "<valTel>"
        And Je clique sur le bouton d'ajout de contact
        Then Un message d'erreur "Contact non créé : le <invalidField> est invalide"

            Examples:
                | invalidField | valNom | valPrenom | valTel | 
                | nom | Romain | aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa | 0660000000 |
                | nom | Roooooooooooooooooooooooooooooooooooooooooooooooomain | CATTEAU | 0660000000 |
                | nom | Romain | CATTEAU | 0 |