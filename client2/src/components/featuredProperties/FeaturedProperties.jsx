import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  let destination = "";
  const [count, setCount] = useState(0);
  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate()+1);
  const [dates, setDates] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
                onClick={() =>{
                  console.log(item._id);
                  console.log(item.city);
                  destination = item.city
                  // dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
                  navigate(`/hotels/${item._id}`);
                }}
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
