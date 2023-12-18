# Time Tracker Project

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Known Issues and Limitations](#known-issues-and-limitations)

5. [Installation](#installation)
6. [Project Structure](#project-structure)
7. [License](#license)
8. [Contact Information](#contact-information)

## Project Summary

The "Time Tracker" project is a web application designed for time management and task tracking. It allows users to track the time spent on various tasks and maintain logs of their activities. The application provides features such as starting, pausing, and stopping a timer, adding a description to the tracked time, and viewing a list of past logged tasks with their respective times and dates. It also includes user authentication for personalized experience.

## Features
- **User Authentication**: Users can register, log in, and log out to maintain individual tracking records.
- **Time Tracking**: Start, pause, and stop features for tracking time spent on tasks.
- **Task Description**: Option to add a description to each time tracking entry.
- **Activity Log**: A detailed log of tracked activities, displaying the task description, duration, and date.
- **Task Deletion**: Users can delete entries from their activity log.
- **Responsive Design**: The UI adjusts for different screen sizes, ensuring usability on desktops and mobile devices.
- **Protected Routes**: Certain pages are accessible only to authenticated users, enhancing security and user experience.
- **Real-time Updates**: Activities and time logs are updated in real-time.
- **Toast Notifications**: Interactive and informative notifications for user actions like errors or confirmations.

## Technologies Used
- **React.js**: For building the user interface and handling the application's state.
- **Firebase**: Used for user authentication and data storage with Firestore.
- **React Router**: For handling navigation within the application.
- **Tailwind CSS**: For styling the application with utility-first CSS classes.
- **Vite**: As a frontend build tool for bundling and development environment.
- **React Hook Form with Zod**: For form validation and handling.
- **Radix UI**: To provide accessible UI components like toasts and forms.
- **ESLint and Prettier**: For code linting and formatting to maintain code quality.
- **Firebase SDK**: Integrated for accessing Firebase services like Authentication and Firestore.

### Known Issues and Limitations

The following are known issues and planned enhancements for the "Time Tracker" project:

- **Toast Structure for Registered Users**
  - Toast notifications need to be operational before routing for the registered user to provide better user feedback.

- **Member Registration Warning**
  - Implementation of a modal warning for attempting to register with an email that has already been used is pending.

- **Password Reset Functionality**
  - The "Forgot Password" feature is currently not functional and requires code implementation for proper operation.

- **Password Strength Validation**
  - Future enhancements will include regex for password strength validation, incorporating checks for upper/lower case letters, special characters, and numbers, in addition to the existing length requirement.

- **Editable Logged Information**
  - The description field in the activity logs is planned to be made editable in future updates to allow users to update their task descriptions post logging.

- **Responsive Design on Index Page**
  - Improvements are planned to align the responsiveness of the Index page with that of the Login and Register pages.

- **Index Page Design Overhaul**
  - A comprehensive redesign of the Index page is planned, including the consolidation of styles into global CSS for a cleaner code structure.

## Installation

1. **Clone the project**:
```bash
git clone https://github.com/altankurt/time-tracker.git
```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm.
```bash
cd time-tracker
npm install
```

3. **Firebase Configuration**: Set up a Firebase project and configure it to use Firebase services (Authentication and Firestore). Update the firebase-config.js with your Firebase project configurations.

4. **Run the Application**: Start the application in development mode by running:
```bash
npm run dev
```

5. **Build for Production**: To build the application for production deployment, run:
```bash
npm run build
```

### Project Structure

- `public/`
  - `vite.svg/`
- `src/`
  - `assets/`
  - `components/`
    - `common/`
    - `ui/`
  - `lib/`
  - `pages/`
      - `IndexPage.jsx/`
      - `LoginPage.jsx/`
      - `RegisterPage.jsx/`
  - `App.jsx`
  - `index.css`
  - `main.jsx`
- `.eslintrc.cjs`
- `.gitignore`
- `LICENSE`
- `README.md`
- `components.json`
- `firebase-config.js`
- `index.html`
- `jsconfig.json`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `prettier.config.js`
- `tailwind.config.js`
- `vite.config.js`

## License

This project is licensed under the MIT license. For more information, see the LICENSE file.

## Contact Information
For questions, feedback, or suggestions, feel free to reach out:

- [hello@altankurt.dev](mailto:hello@altankurt.dev)
- [altankurt.dev](https://altankurt.dev)
- [LinkedIn](https://www.linkedin.com/in/altankurt/)
- [Twitter](https://www.twitter.com/aaltankurt)
- [Medium](https://medium.com/@altankurt)