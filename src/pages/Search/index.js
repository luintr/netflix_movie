import "./styles.scss";

import { useEffect, useState } from "react";
import useDebounce from "../../hook/useDebounce";

import * as apiServices from "../../services/apiServices";

import MovieItem from "../Movie/MovieItem";

const Search = () => {
    const [filter, setFilter] = useState("");
    const filterDebounce = useDebounce(filter, 300);
    const [data, setData] = useState([]);

    useEffect(() => {
        const searchQuery = { params: { api_key: process.env.REACT_APP_MOVIE_API_KEY, query: `${filterDebounce}` } };

        const fetchMovie = async () => {
            try {
                const apiResponse = await apiServices.getMovie("popular");
                if (apiResponse) setData(apiResponse.results);
            } catch (err) {
                throw new Error(err);
            }
        };

        const fetchSearchMovie = async () => {
            try {
                const apiResponse = await apiServices.seachMovie("movie", searchQuery);
                if (apiResponse) setData(apiResponse.results);
            } catch (err) {
                throw new Error(err);
            }
        };

        if (filterDebounce) {
            fetchSearchMovie();
        } else {
            fetchMovie();
        }
    }, [filterDebounce]);

    return (
        <div className="searchPage">
            <div className="container-fluid">
                <div className="searchInput">
                    <input
                        type="text"
                        placeholder="Search"
                        cva="true"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                <div className="searchVideoList">
                    {data.slice(0, 10).map((item) => (
                        <MovieItem
                            key={item.data}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
