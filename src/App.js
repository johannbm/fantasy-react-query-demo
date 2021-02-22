import './App.css';
import React, {useEffect, useState} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AllPlayersTable from "./AllPlayersTable";
import Player from "./Player";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/player/:id">
                <Player />
              </Route>
              <Route path="/">
                <AllPlayersTable />
              </Route>
            </Switch>
          </header>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
}


