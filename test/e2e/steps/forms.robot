*** Settings ***
Library     SeleniumLibrary

*** Keywords ***

je renseigne le champ "${field}" avec "${value}"
    ${idInput}=	Get Element Attribute	locator=xpath://label[.//text() = '${field}']	attribute=for
    Input Text              ${idInput}  ${value}