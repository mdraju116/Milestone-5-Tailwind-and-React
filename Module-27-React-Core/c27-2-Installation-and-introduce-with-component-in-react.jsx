/* 




=>✅✅Install and Create First Project
    -Go to vite.dev  =>getting started =>Scaffolding Your First Vite 	Project => 

   ➡️➡️Option-1: copy : npm create vite@latest  (I will use it)

   ➡️➡️Option-2: using create vite with command line options
    -copy: npm create vite@latest my-vue-app -- --template vue 
    -rename as :
     npm create vite@latest my-first-project -- --template react-ts 


-paste to local project directory (address bar) =>cmd 
    =>Ok to proceed? (y) (enter)
    =>Project name : My-first-project  -(Need to type)
    =>Package name:  my-first-project (small letter)  -(only enter)
    =>Select a framework => React
    =>Select a variant =>TypeScript
    =>Which linter to use? => oxlint  
    =>Install with npm and start now? => yes 
    -copy the local path and paste to browser : http://localhost:5173/

    -open vscode and open the my-first-project
    -here the app.tsx inside the src is the main part


  ➡️Run using VsCode Terminal:
    -go to project name folder: cd my-react-app
    -npm install
    -npm run dev

    -then ctrl+click to the link Local:   http://localhost:5173/
    -or copy and paste to browser.

  =>📌Code Running flow: The link calls the index.html => main.tsx => App.tsx

=>✅✅Component in React
-A component is basically a TypeScript function that returns JSX,
-⚠️remember that the function name must be start with Capital letter.

A component is a reusable, independent piece of UI in a React application.
Think of a component like a building block of a React website.

➡️Simple example
function Welcome() {
  return <h1>Welcome to React</h1>;
}
Here, Welcome is a React component.


➡️You can use it inside another component:
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}

The result will display:
Welcome to React
Welcome to React


✅✅Why use components?

| Benefit                | Explanation                                   |
| ---------------------- | --------------------------------------------- |
| **Reusable**           | Create once and use many times                |
| **Organized**          | Break a large UI into smaller parts           |
| **Maintainable**       | Easier to modify and debug                    |
| **Independent**        | Each component can manage its own UI logic    |
| **Reusable with data** | Components can receive data through **props** |


➡️Three steps to a Component
    -Define the Function
    -Export the Component
    -Return JSX markup


*/