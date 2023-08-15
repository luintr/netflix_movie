import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Index/Index";
import Layout from "./components/Layout/Layout";
import Movie from "./pages/Movie/Movie";
import AuthPage from "./pages/AuthPage/AuthPage";
import MovieDetail from "./pages/Movie/MovieDetail/MovieDetail";
import TVShow from './pages/TVShow/TVShow'
import Watch from "./pages/Watch/Watch";
import Search from "./pages/Search/Search";
import TVDetail from './pages/TVShow/TVDetail/TVDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='/' element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:movieID" element={<MovieDetail />} />
          <Route path="/watch/:movieID" element={<Watch />} />
          <Route path="/tv" element={<TVShow />} />
          <Route path="/tv/:tvID" element={<TVDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
