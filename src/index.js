import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "./assets/vendor/fontawesome5/css/all.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from "./styles/GlobalStyles";
import App from "./views/App";
import NotFound from "./views/pages/NotFound";
import Home from "./views/pages/Home";
import ListTodo from "./views/pages/todos/ListTodo";
import About from "./views/pages/About";
import ListUser from "./views/pages/users/ListUser";
import DetailUser from "./views/pages/users/DetailUser";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={
            createStore(
                rootReducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        }>
            <GlobalStyles>
                <ReactRouter>
                    <HelmetProvider>
                        <Routes>
                            <Route path="/" element={<App />}>
                                <Route path="" element={<Home />} />
                                <Route path="todos" element={<ListTodo />} />
                                <Route path="about" element={<About />} />
                                <Route path="users">
                                    <Route path="" element={<ListUser />} />
                                    <Route path="detail/:id" element={<DetailUser />} />
                                </Route>
                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>
                    </HelmetProvider>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </ReactRouter>
            </GlobalStyles>
        </Provider>
    </React.StrictMode >,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
