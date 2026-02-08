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
