# ToDo Scheduler

## Table of Contents

- [Preview](#preview)
- [Link](#link)
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Methodologies](#methodologies)
- [Testing](#testing)
- [Requirements](#requirements)
- [Creator](#creator)

## Preview

<img width="500" alt="Tag" src="https://github.com/NateJonesIII/ToDoScheduler/blob/main/Assets/_images/05-third-party-apis-homework-demo.gif">

## Link

[Click_Here!](https://natejonesiii.github.io/ToDoScheduler/)

## Project Description

The ToDo Scheduler provides a user-friendly interface for managing daily tasks. It features time blocks representing each hour of the standard day, where users can input their tasks and save them for later reference. The application dynamically updates the time blocks' background color based on the current time, providing a visual indication of past, present, and future tasks.

## Technologies Used

- HTML: Markup language for structuring the webpage
- CSS: Stylesheet language for styling the webpage
- JavaScript: Programming language for adding interactivity
- Bootstrap: Front-end framework for responsive design and styling

### Features

- Dynamic time blocks: Background color changes based on current time
- Task input: Users can input tasks for each hour of the work day
- Local storage: Tasks are saved locally using browser storage
- Responsive design: Bootstrap ensures the application looks good on various devices

## Installation

1. Clone the repository to your local machine.
2. Open the `index.html` file in your preferred web browser.

## Usage

1. Upon opening the application, you'll see time blocks representing each hour of the work day.
2. Enter your tasks for each hour in the corresponding input fields.
3. Click the save button next to each input field to save your tasks locally.
4. Refresh the page to see your saved tasks persist.

## Methodologies

- **Responsive Design**: Bootstrap is used to ensure the application is responsive and looks good on all devices.
- **Local Storage**: JavaScript's localStorage API is utilized to save tasks locally, allowing users to revisit their tasks even after refreshing the page.
- **Dynamic Styling**: JavaScript dynamically updates the background color of time blocks based on the current time, providing a visual cue for users to distinguish past, present, and future tasks.

## Requirements

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Creator

- [Profile](https://github.com/NateJonesIII/ "Nathaniel Jones") - [LinkedIn](https://www.linkedin.com/in/nathaniel-jones/) - [Email](mailto:15nate.jones@gmail.com?subject=Hello "Hello Nate!")
