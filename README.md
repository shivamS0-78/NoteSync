<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
Notes & Task Management App

A modern Notes & Task Management Web Application built using React. The app allows users to create, edit, delete, search, and persist notes, and manually convert selected note content into structured, priority-based todos with complete CRUD functionality.

# Features
# Notes Management

Create notes with title and content

Edit existing notes

Delete notes

Search notes by title or content

Persistent storage using LocalStorage

Displays note creation date

Clean card-based layout

# Manual Task Conversion

Select specific text inside a note

Convert selected content into a structured Todo

Assign priority level (High / Medium / Low)

Move task from Notes module to Todo module

Maintain independent data models for notes and todos

# Todo Management

Create structured todos

Edit todo details

Delete todos

Mark as completed

Update priority dynamically

Full CRUD functionality

# Tech Stack

React

Redux-Toolkit

JavaScript (ES6+)

LocalStorage API

Tailwind CSS

# Architecture Overview

Component-based modular architecture

Separation of concerns:

Notes Module

Todo Module

Independent state handling for notes and todos using redux

LocalStorage persistence layer

Reusable UI components

# How It Works

User creates and saves notes.

Notes are persisted in LocalStorage.

User manually selects specific content from a note.

Selected content is converted into a Todo.

User assigns priority and manages todo lifecycle separately.
>>>>>>> origin/main
