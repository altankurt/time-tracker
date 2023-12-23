# Time Tracker Project

![time-tracker-gif](https://github.com/altankurt/time-tracker/raw/development/public/time-tracker.gif)

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
- **Shadcn UI**: To provide accessible UI components.
- **ESLint and Prettier**: For code linting and formatting to maintain code quality.
- **Firebase SDK**: Integrated for accessing Firebase services like Authentication and Firestore.

### Known Issues and Limitations

The following are known issues and planned enhancements for the "Time Tracker" project:

- [x] **Separation of Concerns**

  - Plan to refactor code by breaking down the logic and UI in components, and creating separate custom hooks for Login, Register, and time-related behaviors on the page.

- [ ] **Atomizing UI Elements**

  - Aiming to further atomize UI elements into more granular components for better reusability and maintainability.

- [x] **Utility Functions Management**

  - Intend to move functions like `formatTime` into the `utils` folder and call them from there to improve code organization and readability.

- [ ] **Asset Management**

  - Planning to manage all assets centrally within the `public` folder for consistency and easier maintenance.

- [ ] **Toast Structure for Registered Users**

  - Toast notifications need to be operational before routing for the registered user to provide better user feedback.

- [ ] **Member Registration Warning**

  - Implementation of a modal warning for attempting to register with an email that has already been used is pending.

- [ ] **Password Reset Functionality**

  - The "Forgot Password" feature is currently not functional and requires code implementation for proper operation.

- [ ] **Password Strength Validation**

  - Future enhancements will include regex for password strength validation, incorporating checks for upper/lower case letters, special characters, and numbers, in addition to the existing length requirement.

- [ ] **Editable Logged Information**

  - The description field in the activity logs is planned to be made editable in future updates to allow users to update their task descriptions post logging.

- [ ] **Responsive Design on Index Page**

  - Improvements are planned to align the responsiveness of the Index page with that of the Login and Register pages.

- [ ] **Index Page Design Overhaul**

  - A comprehensive redesign of the Index page is planned, including the consolidation of styles into global CSS for a cleaner code structure.

- [ ] **Central Loading GIF**
  - A GIF for loading is planned to be added, which will appear in the center of the page to enhance the user experience during loading times.

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Firebase account

### Steps

1. **Clone the project**:

```bash
git clone https://github.com/altankurt/time-tracker.git
```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm.

```bash
cd time-tracker
npm install
```

3. **Firebase Configuration**:

- Set up a Firebase project.
- Configure the project to use Firebase services (Authentication and Firestore).
- Create a .env file in the project root and add your Firebase configuration keys:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

```

4. **Run the Application**: Start the application in development mode by running:

```bash
npm run dev
```

5. **Build for Production**: To build the application for production deployment, run:

```bash
npm run build
```

### Project Structure

```bash
time-tracker/
  ├── public/                           # Contains static assets and icons used in the project.
  │   └── time-tracker.gif              # GIF demonstrating the functionality of the Time Tracker app.
  ├── src/
  │   ├── assets/                       # Directory for static files like images, SVGs.
  │   │   ├── background.svg            # Background SVG image used across various pages.
  │   │   └── favicon.svg               # Favicon for the web application.
  │   ├── components/                   # React components organized by their use-case.
  │   │   ├── common/                   # Common components used throughout the application.
  │   │   │   ├── ProtectedRoute.jsx    # Component for handling protected routes in the app.
  │   │   │   └── ToastContainer.jsx    # Component to display toast notifications.
  │   │   └── ui/                       # UI specific components for building user interfaces.
  │   │       ├── button.jsx            # Reusable button component.
  │   │       ├── form.jsx              # Form component for handling user inputs.
  │   │       ├── input.jsx             # Input field component.
  │   │       ├── label.jsx             # Label component for form inputs.
  │   │       ├── table.jsx             # Table component for displaying data.
  │   │       ├── toast.jsx             # Component for showing toast messages.
  │   │       └── toaster.jsx           # Component managing multiple toasts.
  │   ├── hooks/                        # Custom React hooks for state and logic abstraction.
  │   │   ├── useActivityLogs.js        # Hook for managing activity logs.
  │   │   ├── useAuth.js                # Authentication related hook.
  │   │   ├── useTimer.js               # Hook for the timer functionality.
  │   │   └── useToast.js               # Hook for toast functionality.
  │   ├── lib/                          # Library files and utility functions.
  │   │   └── utils.js                  # General utility functions for the application.
  │   ├── pages/                        # Components representing entire pages in the app.
  │   │   ├── IndexPage.jsx             # Main page component of the application.
  │   │   ├── LoginPage.jsx             # Component for user login functionality.
  │   │   └── RegisterPage.jsx          # Component for new user registration.
  │   ├── schemas/                      # Schemas for data validation and structure.
  │   │   └── formSchemas.js            # Form validation schemas.
  │   ├── utils/                        # Utility functions for specific tasks.
  │   │   ├── formatDate.js             # Function for formatting dates.
  │   │   └── formatTime.js             # Function for formatting time.
  │   ├── App.jsx                       # Root component of the React application.
  │   ├── index.css                     # Global CSS styles for the application.
  │   └── main.jsx                      # Entry point for the React application.
  ├── .eslintrc.json                    # Configuration file for ESLint.
  ├── .gitignore                        # Specifies files to be ignored by Git.
  ├── README.md                         # Documentation of the project.
  ├── components.json                   # JSON configuration for component management.
  ├── firebase-config.js                # Configuration file for Firebase setup.
  ├── index.html                        # HTML template for the React application.
  ├── jsconfig.json                     # JavaScript language services configuration.
  ├── LICENSE                           # The license file for the project.
  ├── package-lock.json                 # Lock file for npm dependencies.
  ├── package.json                      # Project metadata and dependency list.
  ├── postcss.config.cjs                # Configuration file for PostCSS.
  ├── prettier.config.cjs               # Configuration for Prettier code formatter.
  ├── tailwind.config.js                # Tailwind CSS configuration file.
  ├── .env                              # Environment variables for the project, including Firebase.
  └── vite.config.js                    # Configuration file for Vite build tool.
```

## License

This project is licensed under the MIT license. For more information, see the LICENSE file.

## Contact Information

For questions, feedback, or suggestions, feel free to reach out:

- [hello@altankurt.dev](mailto:hello@altankurt.dev)
- [altankurt.dev](https://altankurt.dev)
- [LinkedIn](https://www.linkedin.com/in/altankurt/)
- [Twitter](https://www.twitter.com/aaltankurt)
- [Medium](https://medium.com/@altankurt)
