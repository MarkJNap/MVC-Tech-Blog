# Model-View-Controller: Tech Blog
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

This Tech Blog application is my very first Full Stack project combining everything I've learnt into one application. This realy challenged me as it took a lot of thought and was hard to make progress at times, doing half of something led to needing the creation of something else and so on. Keeping everything neat was another challenge, but I am happy with the final result. There is some ideas I would improve such as having comments only have delete buttons for the user who made them. The experience from building this is monumental and helped solidify concepts I had less of an understanding about.

## Installation

No installation is required if visiting the applications deployed page at: https://gentle-beach-96121.herokuapp.com/

If you wish to run it locally:
After cloning the repository and navigating to the correct folder in GitBash the user needs to run `npm install` to ensure it downloads all needed packages/dependencies.

It will require the following:
* Node.js v16
* GitBash or equivalent
* MySQL 

Be sure to modify the .env.EXAMPLE file to have MySQL work properly.

1. Run `mysql -u root -p` and enter your password
2. Run `SOURCE db/schema.sql` then quit out of MySQL with the command `quit`
3. Run `npm run seed` to seed the data

Then if you run `npm start` and open a browser window at `http://localhost:3001/` you will be up and running.

## Usage

This application will open with a homepage with clickable Blog titles, a Homepage and Login button.
The User is able to view blogs without logging in but must log in to leave a comment.
The User can create an account or Login on the Login screen.
They will be directed to their profile page after logging in,
allowing them to create a new blog, update their existing blogs or delete them.

Heroku Deployment Link: 
https://gentle-beach-96121.herokuapp.com/

Webpage Demo: 

[<img src="/assets/Tech-Blog-Demo.gif" alt="Tech Blog Demo"/>](/assets/Tech-Blog-Demo.gif)

## Credits

Mark Napolitano

## License

ISC License 
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---
