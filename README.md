# Portfolio

### About
This is the repository for storing all the files and stuff for generating my website located at http://brianbrewer.github.io/portfolio

If you want to use this metalsmith configuration for your own website then feel free to fork this and cut out all the mentions of me and give yourself a nice snazzy front end of your own. Be warned though, my NPM dependencies are probably configured incorrectly, so watch out for missing packages is you're looking to `npm install` and then `npm run release`.

Actual generated site is located at the `gh-pages` branch.

### Building
The `package.json` has a few npm scripts setup:

#### `npm run clean` -> `rm -rf build/*`
Just deletes the contents of the `build` folder.

#### `npm run build` -> `node build && npm run post-build`
This builds the solution and runs the `post-build` script too.

#### `npm run post-build` -> `rm -rf build/posts && rm -rf build/*/assets && rm -rf build/*/posts`
Metalsmith can get a bit messy when moving files, mostly to do with `metalsmith-permalinks` and moving too many relative files. If you can think of a fix while you're here then thank you very much!

#### `npm run release` -> `npm run clean && npm run build`
Just cleans and builds all in one.

#### `npm run host` -> `npm run clean && npm run build && http-server build -c-1`
How I quickly check some changes by hosting it locally, requires that you have `http-server` package installed globally or locally.

#### `npm run deploy` -> `cd build && git add --all && git commit -m \"Release\" && git push`
Should be run when there are new changes to the build, adds all the changes and pushes them to the remote `gh-pages` branch in one command.

### Deploying
My setup for deploying requires that there is a `build` folder at the root of the project, before building first you should fork the gh-pages branch into the build folder.

`git clone [repository] --branch gh-pages build`
