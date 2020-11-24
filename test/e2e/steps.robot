*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BASE_URL}=            http://localhost:3000
${BTNSAVE}=             css:#btn-enregistrer
&{FILEDS}=              Nom=css:#input-nom   Prénom=css:#input-prenom  Téléphone=css:#input-tel

*** Keywords ***

je valide la création du contact
    Click Element           ${BTNSAVE}

le message de confirmation "${msg}"
    Page Should Contain     ${msg}