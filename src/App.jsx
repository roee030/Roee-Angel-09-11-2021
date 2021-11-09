import './App.css';
import ROUTES from './routes';
import { SnackbarProvider } from 'notistack';
import { useState, useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import FavoritePage from './pages/favorite/FavoritePage';
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Layout from './pages/layout/Layout';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SnackbarProvider maxSnack={1} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
      {
        !isLoading
          ?
          <Layout >
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <HomePage />
              </Route>
              <Route path={ROUTES.FAVORITE}>
                <FavoritePage />
              </Route>
              <Route path="*">
                <HomePage />
              </Route>
            </Switch>
          </Layout>
          : 'Loading...'
      }
    </SnackbarProvider>
  );
}

export default App;
