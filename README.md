# Start Now, Succeed

![Start Now, Succeed](https://github.com/Kamisia/task-manager-app/blob/main/src/assets/StartNowScreenshot.png)

## Description

'Start Now, Succeed' is a task management application that supports full CRUD operations (create, read, update, delete) and integrates with a PostgreSQL database. The demo version, available on GitHub Pages, relies on localStorage, enabling quick testing of the interface and basic functionalities without the need for a backend.

## Demo

The demo version of the application (localStorage):[Start Now, Succeed](https://kamisia.github.io/task-manager-app/)

Note: The demo version uses localStorage, meaning the data is not persistent and does not utilize a backend or the PostgreSQL database.

## Full Version Setup

To run the full version of the application with a backend and a PostgreSQL database, follow the instructions below:

1. Clone the repository to your computer:

   ```
   git clone https://github.com/Kamisia/task-manager-app.git
   ```

2. Navigate to the project directory:

   ```
   cd task-manager-app
   ```

3. Install dependencies using npm or yarn:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Database Configuration

   Create a >.env
   file in the >backend
   directory of the project and fill it out using the template below:

   ```env
   DB_NAME=todo_db
   DB_USER=your_user
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=5432
   ```

5. Run the application:

**Run backend:**

Navigate to >backend/src
directory

```
node server.js
```

**Run frontend:**

Navigate to the project directory

```
npm run dev
```

or

```
yarn start
```

## Instructions for Use

1. Adding a Task:

- In the input field, enter the name of the task you want to add to the list.
- Press the "Add" button to confirm the entered task.
- The added task will appear as the next item on the to-do list.

2. Editing a Task:

- To edit the name of an existing task, click the pencil icon next to it.
- After clicking the pencil, a text field will appear where you can make changes.
- Click the floppy disk icon to save the changes made, or the cross icon to cancel the operation.

3. Deleting a Task:

- Each task on the list is displayed with a Checkmark button. Click this button to remove the task from the list.

## Technologies

- **Frontend**: React, Redux, Axios
- **Backend**: Node.js, Express, Sequelize
- **Database**: PostgreSQL

## Notes

- The demo version does not support the backend and is intended solely for showcasing the user interface.
- To test the full functionality, you need to run the application locally with a properly configured backend.

If you have any questions or encounter issues, feel free to reach out!

## Author

The project was created by [Kamila Samczuk](https://github.com/Kamisia).
