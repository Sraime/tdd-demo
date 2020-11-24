*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${BASE_URL}=            http://localhost:3000

*** Keywords ***

je suis sur la page de création d'un contact
    Go To                   url=${BASE_URL}/add