import React from 'react';

import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './MainPage';

const theme = createTheme({
    shape: {
        borderRadius: 10,
    },
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
