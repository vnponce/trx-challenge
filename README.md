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
- Design align with the provided mockup

## Improvements not requested 🔨
- Clear filter button
- Mobile first design
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
Taking benefit from TailwindCSS and its great developer experience I was able to create the layout and componets easly.

![Captura de pantalla 2024-02-16 a la(s) 2.12.52 a.m..png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fnf%2F4_y84ygj2yj37d806ybjbyzw0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_YDRUeZ%2FCaptura%20de%20pantalla%202024-02-16%20a%20la%28s%29%202.12.52%E2%80%AFa.m..png)

### Tests 🧪
> I chose to use TDD to ensure the quality of the code and the application. I'm a fan of TDD since 2015 so I always try to use it in my projects.
> </br> This time I used Jest and Vue Testing Library for unit tests and Cypress for E2E tests.
> </br> Basically I created the tests before the implementation of the features and then I implemented the features to make the tests pass.
> </br> I was not sure what is the Testing Strategy of the company so I decided to create a few tests to demonstrate my knowledge and experience with different type of strategies like 'unit', 'integration' and 'e2e'.
> </br> My decision to use testing library instead of Vue Test Utils is because it is more user-friendly and it is the most popular tool for testing. It also was integrated with Cypress tests.

### Run Unit/Integration Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
![Captura de pantalla 2024-02-16 a la(s) 2.17.09 a.m..png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fnf%2F4_y84ygj2yj37d806ybjbyzw0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_hxaBzN%2FCaptura%20de%20pantalla%202024-02-16%20a%20la%28s%29%202.17.09%E2%80%AFa.m..png)

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```
![Captura de pantalla 2024-02-16 a la(s) 2.16.36 a.m..png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fnf%2F4_y84ygj2yj37d806ybjbyzw0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_UuYEEl%2FCaptura%20de%20pantalla%202024-02-16%20a%20la%28s%29%202.16.36%E2%80%AFa.m..png)
 

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
> Tht filter is case insensitive and it is directly to the local list of users.
> <br /> I implemented the `watchEffect` function to listen to the changes of the filter and update the list of users. 
> <br /> The main reason to implement `wathEffect` against `watch` was because the first one is triggered immediately or some value inside the callback changes, and the second only when the value changes.
> <br /> I decided to not implement `debounce` function because the filter is directly to the local list and the performance is not affected.

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

### Compile and Minify for Production

```sh
npm run build
```


