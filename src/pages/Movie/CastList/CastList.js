import "./castList.scss";

import { useEffect, useState } from "react";

import * as apiServices from "../../../services/apiServices";

import NoImg from "../../../assets/img/No-Image-Placeholder.png";

const CastList = ({ id }) => {
    const [cast, setCast] = useState([]);

    const creditResult = async () => {
        const responseCredits = await apiServices.getCredits(id);
        setCast(responseCredits.cast);
    };

    useEffect(() => {
        creditResult();
    }, [id]);

    if (!cast) return null;

    return (
        <div className="actor">
            <h2 className="actorTitle">Actor</h2>

            <div className="castList">
                {cast.length > 0 &&
                    cast.slice(0, 5).map((item) => (
                        <CastItem
                            key={item.id}
                            data={item}
                        />
                    ))}
            </div>
        </div>
    );
};

const CastItem = ({ data }) => {
    const { name, profile_path } = data;
    return (
        <div className="castInfo">
            <img
                src={profile_path ? `https://image.tmdb.org/t/p/original/${profile_path}` : NoImg}
                alt={name}
            />
            <p className="name">{name}</p>
        </div>
    );
};

export default CastList;
