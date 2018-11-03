
# Hockey Pool Generator


Web application to help poolers to build the perfect pool according to selected parameters such as salary cap and number of players for each position. It generates a complete and balanced team selection based on players statistics and salary. The application also provides numerous useful information like players profiles, games score and teams statistics.

---

## Index

- [Stack](#stack)
- [Design Goals](#design-goals)
- [API](#api)
- [Available Pages](#available-pages)
- [Getting Started](#getting-started)
- [Local Commands](#local-commands)
    - [Development](#development)
    - [Build](#build)
    - [JavaScript Lint](#javascript-lint)
    - [Test](#test)
- [Contributing](#contributing)
- [Rules](#rules)
- [Have a question or suggestion?](#have-a-question-or-suggestion)
- [License](#license)

---


## Stack

* [Node.js](https://nodejs.org) (8.11.3)
* [npm](https://www.npmjs.com) (6.4.1)
* [Angular](https://angular.io/) (7.0.0)
* [Angular CLI](https://cli.angular.io/) (7.0.2)
* [Typescript](https://www.typescriptlang.org/) (3.1.1) for a static type checker for Javascript
* [My Sports Feed API](https://www.mysportsfeeds.com/) (2.0)
* [TSLint](https://palantir.github.io/tslint/) (5.11.0) to checks TypeScript code for readability and maintainability
* [Standard JS](https://standardjs.com/) (12.0.1) to maintain a consistent code style
* SCSS as CSS extension language

---

## Design Goals

- Use Cutting-Edge Technologies
- Best Programming Techniques
- Use [Typescript](https://www.typescriptlang.org/) to obtain a safe Javascript environment
- Focus on application maintenability and code readability
- Fast testing with [Karma](https://karma-runner.github.io/latest/index.html) and [Jasmine](https://jasmine.github.io/)
- Use only modern native CSS features to style the whole application.

---

## API

This application consumes data from the following services:

* [My Sports Feed API](https://www.mysportsfeeds.com/) (2.0)

---

## Available Pages

|    Page    |    URL        |                          Description                        |
|:----------:|:-------------:|:-----------------------------------------------------------:|
|    Home    |     /         |  Main page of application to show Hockey latest news          |

---

## Getting Started

### Install NVM (Node Version Manager)
We use NVM to manage our Node verions to keep a consistent environment across developers.

[Follow install instructions here](https://github.com/creationix/nvm#install-script)

After the install, `cd` into the `hockey-pool-generator-frontend` directory and run `nvm use`. This will use the Node version defined in the `.nvm` file.

### Install yarn to a better package management

```sh
$ npm install --global yarn
```

Install application dependencies

```sh
$ yarn install
```

---

## Local Commands

In this current section you can find all commands to run the application in your machine. All the commands also are  in the `scripts` section of [package.json](package.json).

### Development

```sh
$ ng serve
```

Navigate to **http://localhost:3000/** to view the app.

### Build

```sh
$ ng build
```

The above command is used to build the production files.

**Input:** `src/`

**Output:** `dist`

### TSLint

```sh
$ ng lint
```

This above command is used to identifying and reporting on patterns in Typescript on the specified directory.


### Test

```sh
$ ng test
```

This above command is used to run all test in the entire project.

---

## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

## Rules
### Branch naming convention:
- For a feature : `features/{Trello-story-number}`
- For a bug : `bugs/{Trello-story-number}`
- For a hotfix : `hotfix/{Trello-story-number}`
- Example: features/HOC-01

### Commit messages should always start with: 
- `{Trello-story-number}`
- This gives us a quick reference point between our Git history and Trello
- Example: HOC-01: short description

### Feature branch history and merge : 
- Always keep your feature branch up to date with whatever base branch you've stemmed from.
- Merge the base branch into your feature branch at least once daily.

---

## Contributors

* Paxton Eicher ([pxtnpxtn](https://github.com/pxtnpxtn))
* Lauriane Michaud ([lmicho](https://github.com/lmicho))


---

## Have a question or suggestion?
Contact [Paxton](https://www.linkedin.com/in/paxton-eicher/) or [Lauriane](https://www.linkedin.com/in/laurianemichaud/) on LinkedIn, send us an email to jpaxton.w.eicher@gmail.com and  lauriane.b.michaud@gmail.com, or create a pull request on this project.


---


## License

This project is licensed under the terms of the **The MIT License** license.
>You can check out the full license [here](https://opensource.org/licenses/MIT)

---