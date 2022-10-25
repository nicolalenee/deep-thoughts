import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// establish a new link to the GraphQL server at its /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
})

// function that creates a middleware-like function that will retrieve the token and combine it with the existing httpLink by setting the HTTP request headers of every request to include the token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  // return closure
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
// instantiate the Apollo Client instance and create the connection to the APi endpoint. Instantiate a new cache object
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/profile/:username"
                element={<Profile />}
              />
              <Route
                path="/profile/"
                element={<Profile />}
              />
              <Route
                path="/thought/:id"
                element={<SingleThought />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
