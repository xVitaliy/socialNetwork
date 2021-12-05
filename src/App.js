import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import Footer from "./components/Footer/Footer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
    catchAllUnhandledErrors = () => {
        console.log('some error occurred')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    // вызывается непосредственно перед размонтированием и удалением компонента
    // если мы были подписаны на событие от него необходимо отписаться
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Redirect exact from="/" to="/profile" />
                        <Route path={'/dialogs'}
                               render={withSuspense(DialogsContainer)} />

                        <Route path={'/profile/:userId?'}
                               render={withSuspense(ProfileContainer)} />

                        <Route path={'/users'}
                               render={() => <UsersContainer />} />

                        <Route path={'/news'} render={() => <News />} />
                        <Route path={'/music'} render={() => <Music />} />
                        <Route path={'/settings'} render={() => <Settings />} />
                        <Route path={'/login'} render={() => <LoginPage />} />
                        <Route path={'*'} render={() => <div>404 NOT FOUND</div>} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}
export default SamuraiJSApp

//  заменем BrowserRouter -> HashRouter для удобства работы на GitHub (нам нужно, что-бы в URL(е)
//  появился # и после перезагрузки страницы на GIT у нас не вылетатла ошибка, загрузка шла с нужного
//  нам домена)

// если бы мы использовали BrowserRouter нам бы пришлось дополнить
// <BrowserRouter basename={process.env.PUBLIC_URL}> что бы загрузка начиналась относительно
// нашего репозитория