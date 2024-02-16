# trx-challenge

Live demo: ➡ [https://trx-challenge.vercel.app/](https://trx-challenge.vercel.app/)

This is a project to demonstrate expertise on Vue 3, make API requests, create components, manage state and applying styling.
The main goal was to create a user list with the ability to filter by name and email.

## Technologies 🤖
- VueJS 3
- Vite
- TailwindCSS
- TDD with Jest and Vue Testing Library
- E2E tests with Cypress

## Features 🦾
- Fetch users from the provided API (https://jsonplaceholder.typicode.com/users)
- List users
- Filter users by name and email
- Design aligns with the provided mockup

## Improvements not requested 🔨
- Clear filter button
- Mobile-first design
- E2E tests with Cypress
- Unit tests with Jest and Vue Testing Library

## Project Structure 📂
- `src/components`: Vue components
- `src/services`: API requests
- `*/__tests__`: Unit tests
- `/cypress`: E2E tests

## Decisions
### Design 🎨
> I chose to use the mobile-first approach to make the application responsive. 
Taking benefit from TailwindCSS and its great developer experience I was able to create the layout and components easily.

![Captura de pantalla 2024-02-16 a la(s) 2 47 46 a m](https://github.com/vnponce/trx-challenge/assets/11002279/52b1ee5b-29ec-4269-93eb-fa5bfc089013)


### Tests 🧪
> I chose to use TDD to ensure the quality of the code and the application. I've been a fan of TDD since 2015 so I always try to use it in my projects.
> </br> This time I used Jest and Vue Testing Library for unit tests and Cypress for E2E tests.
> </br> I created the tests before the implementation of the features and then I implemented the features to make the tests pass.
> </br> I was not sure what is the Testing Strategy of the company so I decided to create a few tests to demonstrate my knowledge and experience with different types of strategies like 'unit', 'integration', and 'e2e'.
> </br> My decision to use the `testing library` is because it is more user-friendly and it is the most popular tool for testing. It also was integrated with Cypress tests.

### Run Unit/Integration Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
![Captura de pantalla 2024-02-16 a la(s) 2 48 26 a m](https://github.com/vnponce/trx-challenge/assets/11002279/e9eec51f-9f83-4259-87f9-760c27f12872)

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```
 ![Captura de pantalla 2024-02-16 a la(s) 2 48 50 a m](https://github.com/vnponce/trx-challenge/assets/11002279/1b07837a-d5bb-4174-8f5a-9364541cab76)


### Composition Components 🧩
> I chose to use the Composition API to take advantage of the new features of Vue 3.

### Composable
> I created a composable to make the requests and manage the state of the users.
> Composables are a great way to share logic between components and make the code more reusable.

### Vue Query 📡
> I chose to use the `vue-query` plugin to make requests because it is a modern and realistic way to make requests.
> It is also a great tool to make the code more readable and maintainable.
> It is a great tool to manage the state of the requests and the cache of the data (this time it was not needed but it is a great feature to have in mind for future projects).
> It lives in the `services` folder to make the code more organized and maintainable.

### Filter 🧹
> This filter is case insensitive and it is directly to the local list of users.
> <br /> I implemented the `watchEffect` function to listen to the changes in the filter and update the list of users. 
> <br /> The main reason to implement `wathEffect` against `watch` was because the first one is triggered immediately or some value inside the callback changes, and the second only when the value changes.
> <br /> I decided to not implement `debounce` function because the filter is direct to the local list and the performance is not affected.

### Store 🗄️
> I decided to not use Pinia or Vuex because the application is small and the state is not complex. However, I understand the importance of using a state management library in a real-world application.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

