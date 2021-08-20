# starter-template--elm-tailwind

A starting point template to develop an elm project with tailwindcss.



## Acknowledgements

Special thanks to Aleksandr Bogdanov for the TailwindCSS.elm in https://github.com/laniakea-landscape/tailwindcss-typed.
The TailwindCss elm module is integrated as file because of better support of subsequent optimization processing by tailwindcss.



## Scripts

> npm run dev
Compiles the app to folder 'compile', watches for changes in src and public,serves folder 'compile', and opens the browser to view the index.html.

> npm run stage
Compiles the app to folder 'compile', optimizes the build to folder 'build', watches for changes in src and public, serves folder 'build', and opens the browser to view the index.html.

> npm run build
Compiles and optimizes the app to folder 'build', especially to publish the app.


For detailed script architecture view package.json



## Requirements

> npm install --global watch
(see https://yarnpkg.com/package/watch#readme)

> npm install --global live-server
(see https://www.npmjs.com/package/live-server)



Or in one command line:
> npm i -g watch live-server



## Installation

If you want to compose the starter template of your own and install the npm packages by hand:

> npm init
(nodejs has to be installed: https://nodejs.org/)

> elm init
(elm has to be installed: https://guide.elm-lang.org/install/elm.html) 


> npm i -D npm-run-all
(see https://www.npmjs.com/package/npm-run-all)

> npm i -D copyfiles
(see https://www.npmjs.com/package/copyfiles)

> npm i -D tailwindcss
(see https://www.npmjs.com/package/tailwindcss)

> npm i -D parcel
(see https://www.npmjs.com/package/parcel)

> npm i -D elm@latest-0.19.1
(see https://www.npmjs.com/package/elm)

> npm i -D netlify-cli
(see https://docs.netlify.com/cli/get-started/)



Or in one ommand line:
> npm i -D npm-run-all copyfiles tailwindcss parcel elm@latest-0.19.1netlify  netlify-cli
