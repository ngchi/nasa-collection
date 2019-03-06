#NFQ Base Frontend Assessment

NASA Collection website build with Reactjs - Redux and Webpack.

#Project Accomplisment list
Note: Due to the different in js framework ( Vuejs and Reactjs ) so it took more times for me to switch tech and adapt to Reactjs as fast as I can, so I'm developing and learning at the same time, that's why I can't manage to achieve all the optional, plus point for candidate in project requirement and make the UI/UX more prettier.
- Base on our design. ✔
- Search from NASA APIs and Add to the list. ✔
- For each Item, user can: Add to favorite, Edit and Delete. ✔
- User can: Filter (type, date, favorite), Sort (Title, Date), Pagination (optional). ✘
- Must not use any boilerplate.
- The list should use Local Storage or your preferable storage service. ✔
- Styling by SASS, SCSS, LESS or Style components. ✔
- No UI framework. ✔
- Use Redux, Mobx, Flux. ✔
- Config Webpack builds separately for the production and development environment. ✘
- Build PWA. ✘
- React Native (you can deploy to https://expo.io/ instead of https://pages.github.com/) ✘

### Project structure

├── /build/                     # The folder for compiled output
├── /config/                    # Webpack enviroment and paths config
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files which are copied into the /build folder
├── /scripts/                   # Dev, build and test enviroment
├── /src/                       # The source code of the application
│   ├── /assets/                # Media stuffs like images, fonts, etc.
│   ├── /components/            # React components
│   ├── /config/                # Environment variable configurations
│   ├── /containers             # Views or places for routes
│   ├── /utils                  # Utilities for developing, Axios configuration
│   ├── /configureStore.js      # Global store
│   ├── /index.js               # Entry point
│   ├── /localStorage.js        # Local storage configurations
│   ├── /reducers.js            # Redux reducers
├── package.json                # The list of 3rd party libraries and utilities
└── yarn.lock                   # Fixed versions of all the dependencies

### Quick Start

#### Install
yarn install

#### Run
yarn start

#### Test
yarn test

#### Build
yarn build

#### Deploy to Github Pages
yarn deploy
