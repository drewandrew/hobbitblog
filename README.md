# The Hobbit Blog

This project was created by Andrew Dixon for educational purposes. The current version makes use of the following libraries and resources:
- [Create React App](https://github.com/facebookincubator/create-react-app)
  - Webpack
  - Babel
  - ESLint
- [Redux](https://github.com/reactjs/redux)
- [React Router](https://github.com/ReactTraining/react-router)
- [React Router Redux](https://github.com/reactjs/react-router-redux)
- [Redux Logger](https://www.npmjs.com/package/redux-logger)

In future versions the following libraries and resources will be included:
- [Redux Thunk](https://github.com/gaearon/redux-thunk)
- [Normalizr](https://github.com/paularmstrong/normalizr)
- [Isomorphic Fetch](https://www.npmjs.com/package/isomorphic-fetch)
- [OAuth2](https://oauth.net/2/)

As well as a backend powered by:
- [Elixir](http://elixir-lang.org/)
- [Erlang VM](http://erlang.org/faq/introduction.html)
- [Phoenix Framework](http://www.phoenixframework.org/)
- [PostgreSQL Database](https://www.postgresql.org/)


## Notes on the current version

Fairly straightforward, this version of the application is a convenient first checkpoint at which to test out and showcase my proficiency with react, redux, routing, git, and heroku. There is only a small amount of the code that will need to be scrapped in the next version. Most obviously, I hacked the login and deletePost actions. I began to use Normalizr, a library used to flatten heavily nested APIs, in order to synchronize each post's ID with its key in the array, but realized that it would not carry over well to future versions with a RESTful API defined in Phoenix so I discarded it.

A feature that I decided to include for its scalability was the modal creator. Initially, I had planned to create a simple alert window to apologetically login users as Hobbit1, but the more complete modal deploying setup will be useful for future confirmation windows as well.

An implementation that I am not entirely sold on (but sort of defaulted to) is `React.cloneElement` as a method to pass props from my main_container to its children components. With react-router determining which component to load into `this.props.children`, providing props becomes trickier. I initially subscribed several components to the store, just to get the app up and running. Turning to `React.cloneElement`, the app now passes props without connecting to the redux store, but some components receive a prop that they do not need (i.e.: `PostList` recieves `onSubmitPost`). It also seems to me that `React.cloneElement` creates superfluous instances for each component object as it clones on every render (Perhaps this is a good thing? Surely it is immutable, but I'm not certain that it is the most efficient method. It will be the source of a future performance testing, given the time.). In future versions I will likely connect components such as `CreatePostForm` and `LoginAuth` to the redux store, shortening the chain of children to which props need to be passed.

Other resources that I have familiarized myself with include SASS (though it is not currently supported by the Create React App), lodash, node-foreman, and humps.

The final step of this project will be to unplug the create-react-app configuration so that I can further familiarize myself with webpack.

As initially discussed, this project will not be hosted on GitHub Pages and instead will be hosted on Heroku. GH Pages is not optimal for SPAs. This project was pushed to Heroku with the following buildpack(s):
- [Heroku Buildpack for Create React App](https://github.com/mars/create-react-app-buildpack#customization)

Hobbits unite!
