# _Animal Helper_

## Planning

Configuration/dependencies
  * npm, gulp, bower
  * defined in gulpfile/package.json
  * npm = lets us run JS from the command licenses
  * gulp = automates development tasks
  * bower = frontend package manager
  * Angular
  * TypeScript

Specs
  * Spec 1: 'add new animals to application'.
  * Spec 2: 'add new animal with information on species, age, diet, zoo location, amount of caretakers needed, sex, one like and one dislike'.
  * Spec 3: 'display list of animals'.
  * Spec 4: 'able to view all animals'.
  * Spec 5: 'able to view only young animals'.
  * Spec 6: 'able to view only mature animals
  * Spec 7: 'able to edit animals name, age and caretakers'.

#### _An application to track animals and their tendencies at a local zoo._

#### By _**Kate Trahan**_

## Description

_This is an application that uses TypeScript and Angular to display information about animals and their habits at a local zoo. The application is used to add, display and edit information about specific animals. It is user friendly and will also add specific needs, likes, and dislikes of the animal. Created 2/23/2018._

### Specs
| Behavior | Input | Output |
| :-------------     | :------------- | :-------------
| **Adds animal**| "Species: Goat" | "Species: Goat" |
| **Adds animal with information**| "Species: "Goat", Name: "Goatie", Age: "1", Diet: "Grass", Location: "Portland", Caretakers: "1", Sex: "Female", Likes: "Sunshine", Dislikes: "Being petted" " | "Species: "Goat", Name: "Goatie", Age: "3", Diet: "Grass", Location: "Portland", Caretakers: "1", Sex: "Female", Likes: "Sunshine", Dislikes: "Being petted" |

| **Displays list of animals**| "View" | "Goat, Cow, Deer"|
| **Display only young animals (under age 2)** |"View young animals"| "Goat"|
| **Display only mature animals** |"View old animals(over age 2)"|"Cow, Deer"|
| **Edit animals' age** |"Age: 1"| "Age: 2"|
| **Edit animals' name** | "Goatie" | "Mrs. Goatie"|
| **Edit animals' caretakers| "Caretakers needed: 1" | "Caretakers needed: 2" |

## Ambitions to be implemented in the future
* _Track animals' happiness levels by tracking if they are eating enough, playing enough, overall mood._
* _Track living condition of animals: last cleaned, plant/enclosure conditions_
* _Track sleep patterns_

## Setup/Installation Requirements

* _Clone repository to your machine from GitHub_
* _Open cloned repository in text editor_
* _```$ npm install```_
* _```$ bower install```_
* _``` $ gulp build```_
* _``` $ gulp serve```_

## Known Bugs

_No known issues._

## Support and contact details

_If you have any issues or have questions, ideas or concerns please email kathrynceciliatrahan@gmail.com or contribute to the code_

## Technologies Used

* _JavaScript_
* _Atom_
* _Node_
* _Gulp_
* _Bower_
* _Jasmine_
* _Karma_
* _TypeScript_
* _Angular_

### License
Copyright (C) 2017 Kate Trahan

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
