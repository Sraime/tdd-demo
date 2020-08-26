*** Settings ***
Library     SeleniumLibrary


*** Variables ***
${BASE_URL}=        http://localhost:3000/
${BTNSAVE}=         css:#btn-enregistrer

*** Keywords ***

je suis sur la page de création d'un contact
    Go To               url=${BASE_URL}/add

je renseigne le champ "${field}" avec "${value}"
    ${idInput}=	Get Element Attribute	locator=xpath://label[.//text() = '${field}']	attribute=for
    Input Text              ${idInput}  ${value}

je valide la création du contact
    Click Element           ${BTNSAVE}

le message de confirmation "${msg}"
    Page Should Contain    ${msg} 

*** Test Cases ***

DEBUT
    Open Browser        url=${BASE_URL}   browser=gc

Scenario: Création d'un contact avec echec
    Given je suis sur la page de création d'un contact
    When je renseigne le champ "Nom" avec "TOTO"
    And je renseigne le champ "Prénom" avec "Titi"
    And je renseigne le champ "Téléphone" avec "0102030405"
    And je valide la création du contact
    Then le message de confirmation "Titi TOTO est enregistré"

FIN
    Close Browser