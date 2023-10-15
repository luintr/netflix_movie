import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import { Auth as AuthPage, Home, Movie, MovieDetail, Search, TVDetail, TVShow, Watch } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/search"
                        element={<Search />}
                    />
                    <Route
                        path="/auth"
                        element={<AuthPage />}
                    />
                    <Route
                        path="/movie"
                        element={<Movie />}
                    />
                    <Route
                        path="/movie/:movieID"
                        element={<MovieDetail />}
                    />
                    <Route
                        path="/watch/:movieID"
                        element={<Watch />}
                    />
                    <Route
                        path="/tv"
                        element={<TVShow />}
                    />
                    <Route
                        path="/tv/:tvID"
                        element={<TVDetail />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
