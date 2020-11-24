*** Settings ***
Library     SeleniumLibrary

*** Keywords ***

Ouverture du navigateur
    Open Browser            url=${BASE_URL}     browser=gc

Fermeture du navigateur
    Close Browser