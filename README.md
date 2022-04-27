[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Employee Command

This project demonstrates proficiency in building a MySQL database from scratch and then building all the queries to run a command line application through Node.js. This app builds a database of employees and tracks their salaries, roles, departments, and managers. It has the ability to view, add, and update the employees' information all from the command line using npm inquirer.

In this project, I learned how to fully handle MySQL database creation and querying, as well as combining the database with Node packages by implementing inquirer, dotenv, and console.table. My main challenge was keeping all the field names and database names consistent across the application. 

***Also to note, from my testing it was discovered that there was an issue with the npm inquirer package that will only show the first option in a list type of prompt. If the user tries to move up and down the option list, the other options "ghost" (disappear), but can still be selected and used.***

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)

## Installation

The application is strictly back-end software, so the user will need to have Node.js and MySQL installed in order to run the application. Upon download of the application, they will need to run `npm i` to install all of the required packages and dependencies. After everything is installed and the database has been created on the local machine with mysql, be sure to execute `npm start` to start the server before testing the functionality.

## Usage
##### [Back to Table of Contents](#table-of-contents)

1. The first thing the user will need to do to use/test the code is execute `npm i` to install all dependencies. They will also need to make sure that they have a .env file at the root of their directory to store their MySQL password.

2. Next, boot mysql using the command `mysql -u root -p`. Fill in the password, if applicable and then mysql will start.

3. In mysql, run `source db/schema.sql` in order to create the database. Additionally, if you want to use the premade data that I have provided to test the application, also run `source db/seed.sql` to populate the database with data. Finally, quit out of mysql by typing `quit`.

4. Lastly, type `npm start` into the command line to start the application and start testing. The last option in the list is "Exit" and will exit out of the application for you when you are done.

## Credits
##### [Back to Table of Contents](#table-of-contents)

For this project, I mainly referenced the documentation for [Node.js](https://nodejs.org/api/) and [MySQL](https://www.npmjs.com/package/mysql2), as well as [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [inquirer](https://www.npmjs.com/package/inquirer), and [console.table](https://www.npmjs.com/package/console.table).

## Questions
##### [Back to Table of Contents](#table-of-contents)

You can view my other projects on GitHub: [cynogriffin](https://github.com/cynogriffin)

If you have any questions or comments, please feel free to contact me via email at griffinc6@gmail.com.

Connect with me on [LinkedIn](https://www.linkedin.com/in/cody-griffin-0a74b1222/) and catch me on my develper blog [The Cozy Coding Corner](https://cynogriffin.hashnode.dev/)!

---
Copyright &copy; 2022 Cody Griffin. All rights reserved.

Licensed under the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).  