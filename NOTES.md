# Next.js Learning

<h1> What is NextJs ? </h1>
<img src="Images/What_is_nextJs.png">

<h1> Reasons to learn Nextjs framework</h1>
<img src="Images/Why_learn_nextjs.png">

<h1> Creating & running nextJs application</h1>

- We should run the command , `create next-app` to create the brand new next application in terminal.

* The terminal will prompt wheather proceed with installing the nextJs packages for sure. Provide `y` to continue

* Then the terminal will prompt for project name that need to be used. We should type the valid project name.

* Next the terminal will prompt for list of continous YES or NO questions for wheather to use typescript , ESLint , Tailwind css , src directory , App router and customized default import alias. Choose the required choices. ( Except for customize import alias question , remaining should be answered as "YES)

* Once finished aswering for all the above questions, a new nextjs project will be avilable in the folder.

<img src="Images/create-next-app.png">

- To run the application , we should naviage to the project folder and run the command : `npm run dev`

* Once the command is run the application will be avilable in http://localhost:3000 in the browser.

<h1> Project structure </h1>

- Usually the inital project folder will contain the four folders and 10 files within it.

<h4>package.json file</h4>

- It is responsible for necessary dependancies like react , react-dom and next.

- It also contains other dev-dependencies like eslint , tailwind css , typescript , autoprettier and so on based on the answes we provide while installing the next app.

- It also has th scripts for running , building this next application. And the server side start script and lint script also availbalein the script section.

<h4>package-lock.json file</h4>

- Contains all meta on every packages available in package.json file.

<h4>.eslintrc.json file</h4>

- Configuration file for es-lint

<h4>.gitignor file</h4>

- To handle version controlling

<h4>next-env.d.ts file</h4>

- Typescript declarations for next project.

<h4>Some configuration files</h4>

- next.config.mjs file --> next configuration file.

- postcss.config.js file , tailwind.config.ts --> tailwind css configuration file.

* tsconfig.json --> type-script configuration file.

<h4> README.md </h4>

- The documentation file which explains how to set up and run the application and other important information which is important.

<h4>.next folder <h4>

- This folder is generated when we run the script `npm run dev` or `npm run build`.

- This is responsible to serve this application in both development and production environments.

- This file is gitignored. So need not to worry about thid during development.

<h4> node_modules folder </h4>

- In this folder all the dependencies are get installed.

* It can be installed with `npm i` script but usually when we run , `npm run dev` script it should be get installed.

* This is also gitignored.

<h4>Public folder</h4>

- This is an inportant folder which should contain all the static assets like images , svg's , videos or audios etc.

<h4>src folder</h4>

- It is the project's very important folder. All the logics and UI part will be developed under this folder.

* It has `app` folder which is responsible for advanced routing.

* The app folder contains the below four files.

  - favicon.ico --> Icon of the web-page in browser tab.

  - globals.css --> Responsible for application's global styles.

  - layout.tsx --> It has the UI that can be shared across different pages of the application.

  * page.tsx --> It is also returns the UI which is actually passed as children prop to th layout.tsx file. This is responsible for overall application's view.

<h1> Application control flow ( package.jsin to page.tsx ) </h1>

- When we execute the script `npm run dev` in terminal inorder to run the application, The flow immediately transfereed package.json to to `layout.tsx file`.

* In the layout.tsx file,there is a function named `Rootlayout` which returns the main `html` and `body` tags. This RootLayout function/component accepts the children prop. The children prop is used in the body tag.

* Then flow tranferred to the page.tsx file. In page.tsx file, any UI or json can be returned and this JSX is passed as children prop in layout.tsx file's RootLayout function. And the application is updated with the UI in the page.tsx file.
