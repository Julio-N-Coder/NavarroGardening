# Navarro Gardening Website

## This is a website that I made for my dad's small buisness [`Navarro Gardening`](https://www.navarrogardening.com/).

### The front end

The front end is built using **React**. To build the front end, you need to have **Node.js** and **npm** installed on your system. Follow these steps in the root of the project directory to build it:

1. Install the required dependencies:

   ```bash
   npm install
   ```

2. Build the project for production:

   ```bash
   npm run build
   ```

This will generate a `dist` folder containing the optimized production-ready files.

The options bellow are ways to run the website in either development mode or in preview mode to preview the produciton build

- Run the development server:

  ```bash
  npm run dev
  ```

  This will start a local development server. You can access the website at `http://localhost:3000`

- Preview the production build:

  ```bash
  npm run preview
  ```

  This will serve the production build locally. You can access it at `http://localhost:4173`

### The back end

The backend which is in the **lambda-server** directory is just a lambda function that
gets a request from the front end and runs and returns the right things in the function.
At first I added an nodejs server in the file **script.ts** to act as a backend, but next
time I don't think I will be doing this because I just had to write that function many more
times that I probably should have. The actual function is in the directory **lambda-function**
and it's the **index.ts** file. To Improve it next time, I might do this samething but I won't
be installing it's own dependancies as you can see in it's directory. What I will do next time
is keep track of the dependencies it depends on and then install those for the actual lambda
function that the typescript compiller makes. I also wrote test for the function in the
directory **test**. this was my first time writing test and it might be to much but I learned
how to use it while building it.
