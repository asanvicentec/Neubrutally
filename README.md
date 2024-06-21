# Neubrutally (WIP)
This is a CSS library that provides classes with design in the form of the recently created Neubrutalism style.

# For developers
You are welcome to improve this project, as long as new styles make sense with the Neubrutalism design style.

## Setup
Setting up the project locally is the same as your typical Node project.
Just clone the repo with your favourite tool and install dependencies with:
```
npm i
```

## Developing
To compile the source files automatically as you modify them you can run:
```
npm run watch
```
If you also want to render the styles as you modify them with little overhead, 
the best solution I found was to start a server with the VSCode *Live Server extension* and open the index.html 
file in the browser while having the watch command running.

### Testing locally in other projects
Run the following command:
```
npm pack --pack-destination your-directory
```
This will create a tarball file in the specified location. Then, in the project you wish to install the library, add this in package.json's dependencies:
```
"neu-brutally": "file:your-directory"

```
Finally run `npm i` to install it.

## Linting
Always lint the CSS before commiting, to do so run the command:
```
npm run lint
```

You can check the Stylelint rules [here](https://stylelint.io/user-guide/rules).




