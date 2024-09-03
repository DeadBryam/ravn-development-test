# RAVN FRONT END CHALLENGE

This app is a technical test for Ravn, made with React and TypeScript and Vite as a bundler.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Screenshots](#screenshots)
7. [Demo](#demo)
8. [Stack](#stack)

## Introduction

This application simulates a task manager similar to Trello, where you can create, edit, delete and move tasks between columns.

## Prerequisites

To run this app you need to use Pnpm and Node with the next versions:

- Node: 20.12.2
- Pnpm: 9.9.0

We recommend to use Volta.

## Installation

Follow these steps to install the application:

1. Clone the repository: `git clone https://github.com/DeadBryam/ravn-development-test.git`.
2. Install dependencies: `npm install` or `pnpm install`, we recommend to use `pnpm`.

## Usage

1. Create a `.env` file in the root of the project with the following content (check the `.env.example` file):

```env
VITE_API_TOKEN=
VITE_API_URL=
```

2. Install all the dependencies.
3. Run the application in development mode: `npm run dev` or `pnpm dev`
4. Open your browser at `http://localhost:5000` (or specified port).

## Project Structure

```
app/
├── public/
├── src/
│ ├── __generated__/ <- GraphQL codegen output.
│ ├── apollo/ <- Apollo Client configuration.
│ ├── components/ <- Reusable components.
│ ├── config/ <- Configuration files, colors, fonts, etc.
│ ├── graphql/ <- GraphQL queries and mutations.
│ ├── hooks/ <- Custom hooks, like useQuery custom hooks.
│ ├── layouts/ <- Layouts for the app.
│ ├── pages/ <- Pages for the app.
│ ├── providers/ <- Context providers, like RouterProvider.
│ ├── schemas/ <- Form schemas.
│ ├── stores/ <- Application state management.
│ ├── styles/ <- Global styles and custom styles.
│ ├── tests/ <- Unit tests.
│ ├── types/ <- Custom types.
│ ├── utils/ <- Utility functions.
│ ├──── const/ <- Useful constants.
│ ├── main.tsx <- Entry point for the app.
├── .gitignore
├── package.json
└── README.md
```

## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img width="1200" alt="Screenshot 2024-09-02 at 11 08 21 PM" src="https://github.com/user-attachments/assets/0014e972-20d8-4696-9db8-3dfd607ee14d" style="width: 49%;"/>
  <img width="1200" alt="Screenshot 2024-09-02 at 11 04 10 PM" src="https://github.com/user-attachments/assets/6aafb576-5258-498c-81ae-c58bc85fb308" style="width: 49%;">
  <img width="1200" alt="Screenshot 2024-09-02 at 11 04 00 PM" src="https://github.com/user-attachments/assets/f907577c-2599-4bd1-b181-9b2a81ac2290" style="width: 49%;">
  <img width="1200" alt="Screenshot 2024-09-02 at 11 03 31 PM" src="https://github.com/user-attachments/assets/7a283e99-1d2e-4adf-bed1-7be62fc8ac6b" style="width: 49%;">
  <img width="1200" alt="ScreenRecording2024-09-02at11 06 17PM" src="https://github.com/user-attachments/assets/9785c862-0b83-43fd-94b3-990eb87413d7" style="width: 99%;">
</div>


## Demo

You can see a live demo of the application [here](https://ravn-development-test.vercel.app/).

## Stack

- React
- TypeScript
- Vite
- Apollo Client
- GraphQL
- EsLint
- Tailwind CSS
- Headless UI
- React Hook Form
- Nope
- React DnD
- React Toastify
- React Icons

I used Vite as the bundler because it offers faster build times and a more efficient development experience compared to others.

I implemented Apollo Client for managing GraphQL queries and mutations due to its ease of use and efficient data management capabilities. I selected Tailwind CSS for styling components because it offers a lot of utility classes that make it easy to create and style components quickly. Additionally, I’m using Headless UI to create modals and popovers, as it provides accessible and customizable components that integrate well with Tailwind CSS.

React Hook Form is selected, because it offers a simple and efficient way to manage form state and validation. Moreover, I'm using Nope, Nope is very similar to Yup, but it is more lightweight and has a simpler API.

React DnD was chosen for implementing drag-and-drop functionality due to its flexibility and easy integration. I like to use React Icons because it provides a lot of icons from various libraries, making it easy to include icons in the project. Finally, I use React Toastify for displaying notifications because, in my opinion, it is the best library for this purpose.
