# configurations for vite
- To run development server : `yarn dev`

# configurations for rollup.js
```
    # init project
    npm init -y

    # install rollup
    npm i -D rollup

    # install plugin-buble (for svg)
    npm install --save-dev @rollup/plugin-buble 

    # install live-server
    npm install  --save-dev live-server

    # to create bundle with commands
    npm run bundlemanual

    # to create bundle with rollup.config.js file (use this)
    npm run startconfig

    # one-shot bundle and run
    npm run dev
```

```
    # rollup.js

    # for browsers 
    # compile to a <script> containing a self-executing function ('iife')
    rollup main.js --file bundle.js --format iife

    # for nodejs
    # compile to a CommonJS module ('cjs')
    rollup main.js --file bundle.js --format cjs

    # for both browsers and nodejs
    # UMD format requires a bundle name
    rollup main.js --file bundle.js --format umd --name "myBundle"

```
