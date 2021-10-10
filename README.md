# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser": "^1.15.2",
- chance": "^1.0.2",
- md5: "^2.1.0",
- Morgan": "^1.10.0",
- serve-favicon": "^2.5.0"

## Final Product

!["Tweeter Initial Home page"](https://github.com/smplsoln/tweeter/blob/master/docs/Tweeter Initial Home page.png)



## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using one of the  following commands:
  - `npm start := "node server/index.js",`
  - `npm run local := "./node_modules/.bin/nodemon --watch server -e js server/index.js"`

# Tweeter app includes the following
Apart from implementing all the major, minor requirements have additionally completed the stretch requirement of
 - Implementation of the compose tweet toggler icon at top right
 - Go-to-top button at the bottom right
 - Added Favicon support with TWeeter icon for browser tab.

# Possible Future Enhancements
  - Improve observability by adding appropriate logging on server side
  - Add integrated metrics tracking
  - Move the UI esp the views to a better framework having better easier control on components and refactor/componentize it further
  - Add distinct persistence layer: NoSQL/DB/Or a backend PaaS
  - Add automated CI/CD workflow with layered code-review, tests outcome reporting, static analysis reporting, reporting checkpoints, code coverage reporting