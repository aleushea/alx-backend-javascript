0x04. Typescript

From Gebremichael Alemayehu

Resources Read or watch:

	TypeScript in 5 minutes
	TypeScript documentation
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

	Basic types in Typescript
	Interfaces, Classes, and functions
	How to work with the DOM and Typescript
	Generic types
	How to use namespaces
	How to merge declarations
	How to use an ambient Namespace to import an external library
	Basic nominal typing with Typescript
Tasks
0. Creating an interface for a student
mandatory
Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js

Write your code in the main.ts file:

Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x04-TypeScript
File: task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js