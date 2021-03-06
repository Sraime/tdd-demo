# Sujet
L'objectif de ce projet est de démontrer la réalisation d'un projet express en TDD. Comme s'il s'agissait d'un véritable projet, nous partirons des besoins fonctionnelles formalisée sous forme de User Stories (US). 

L'application à réaliser est un carnet de contacts qui se présente sous la forme d'une application web. Il devra permettre :
1. La création d'un contact
2. L'affichage de la liste des contacts
3. La suppression d'un contact

La téchnologie utilisée est le framework express et les tests seront à réalisés avec :
* Tests Unitaires (TU) : mocha, chai, sinon
* Tests End To End (E2E) : codeceptjs, cucumber, puppeteer

A noter que :
* La réalisation se fera dans l'ordre des US (1, 2, 3). 
* Le TDD sera appliqué selon la méthode Red/Green/Refactor/Commit

Ce TP proposera une solution pour la réalisation de la première US. Libre à vous de le continuer pour vous exercer (rédac tion des US, identification des scénarios, réalisation).

Bon Courage !

# User Stories


## US 1
| | |
|-|-|
| Titre                 | Création d'un contact |
| En tant que           | Utilisateur de l'application |
| Je souhaite           | Créer un nouveau contact |
| Afin de               | sauvegarder ses informations |

### Règles de gestion
| Numéro | Description |
|-|-|
| RG1 | Un contact se compose de trois informations obligatoires : le nom, le prénom et le téléphone | 
| RG2 | Deux contacts ne peuvent pas avoir le même nom/prénom |

### Lexique
- Etat initial : Les options d'enregistrement sont à vides


### Règles d'acceptance

<table>
    <thead>
        <tr>
            <th>Given</th>
            <th>When</th>
            <th>Then</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td valign="top">
                <ul>
                    <li>
                        Je suis sur la page d'accueil
                    </li>
                </ul>
            </td>
            <td  valign="top">
                <ul>
                    <li>
                        Je reseigne l'option d'enregistrement "nom" avec "BABOUCHE"
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul>
                    <li>
                        Je ne peux pas enregistrer le contact
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <ul>
                    <li>
                        Je suis sur la page d'accueil
                    </li>
                </ul>
            </td>
            <td  valign="top">
                <ul>
                    <li>
                        Je reseigne l'option d'enregistrement "nom" avec "CANARY"
                    </li>
                    <li>
                        Je reseigne l'option d'enregistrement "prenom" avec "Alice"
                    </li>
                    <li>
                        Je reseigne l'option d'enregistrement "téléphone" avec "0102030405"
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul>
                    <li>
                        Je peux enregistrer le contact
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <ul>
                    <li>
                        Je suis sur la page d'accueil
                    </li>
                </ul>
            </td>
            <td  valign="top">
                <ul>
                    <li>
                        Je reseigne l'option d'enregistrement "nom" avec "CANARY"
                    </li>
                    <li>
                        Je reseigne l'option d'enregistrement "prenom" avec "Alice"
                    </li>
                    <li>
                        Je reseigne l'option d'enregistrement "téléphone" avec "0102030405"
                    </li>
                    <li>
                        Je valide l'enregistrement du contact
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul>
                    <li>
                        Le message "Alice CANARY est enregistrée" s'affiche
                    </li>
                    <li>
                        La fonctionnalité d'enregitrement est dans son état initial
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <ul>
                    <li>
                        Le contact nom : "BABOUCHE" / prenom : "Bob" / téléphone : "0102030406" est enregistré
                    </li>
                    <li>
                        Je suis sur la page d'accueil
                    </li>
                </ul>
            </td>
            <td  valign="top">
                <ul>
                    <li>
                        Je reseigne l'option d'enregistrement "nom" avec "BABOUCHE"
                    </li>
                    <li>
                        Je reseigne l'option d'enregistrement "prenom" avec "Bob"
                    </li>
                    <li>
                        Je reseigne l'option d'enregistrement "téléphone" avec "0102030405"
                    </li>
                    <li>
                        Je valide l'enregistrement du contact
                    </li>
                </ul>
            </td>
            <td valign="top">
                <ul>
                    <li>
                        Le message "Bob BABOUCHE existe déjà" s'affiche
                    </li>
                    <li>
                        La fonctionnalité d'enregitrement est dans son état initial
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>