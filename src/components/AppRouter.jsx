import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
            {isAuth
                ? (
                    <>
                        {privateRoutes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                        <Route path="/" element={<Navigate to="/posts" replace />} />
                    </>
                )
                : (
                    <>
                        {publicRoutes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                        <Route path="/" element={<Navigate to="/login" replace />} />
                    </>
                )
            }
            <Route path="*" element={<Navigate to={isAuth ? "/posts" : "/login"} replace />} />
        </Routes>
    );
};

export default AppRouter;
