import React from 'react';
import './App.css';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import Info from './components/informations/informations'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_GITHUB_TOKEN
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
     <Info/>
    </div>
    </ApolloProvider>
  );
}

export default App;
