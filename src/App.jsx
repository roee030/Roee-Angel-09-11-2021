import './App.css';
import ROUTES from './routes';
import { SnackbarProvider } from 'notistack';
import { useState, useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import FavoritePage from './pages/favorite/FavoritePage';
import { Route, Switch } from 'react-router';
import Layout from './pages/layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import allActions from 'redux/actions';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let myFavoriteList = localStorage.getItem('favoriteList');
    myFavoriteList = JSON.parse(myFavoriteList);
    if (!myFavoriteList) {
      localStorage.setItem('favoriteList', []);
    }
    dispatch(allActions.updateFavoriteWeatherLocations(myFavoriteList || []));
  }, [dispatch]);
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
