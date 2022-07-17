import useFetch from "../../hooks/useFetch";
import "./featured.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";


const Featured = () => {

  let destination = "";
  const [count, setCount] = useState(0);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
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

  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Addis Ababa,Bahirdar,Harar"
  );
  const { dispatch } = useContext(SearchContext);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem"    >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Addis_ababa_night_skyline.jpg"
              alt=""
              className="featuredImg"
              onClick={() =>{
                destination = "Addis Ababa"
                dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
                navigate("/hotels", { state: { destination, dates, options } });
              }}
            />
            <div className="featuredTitles">
              <h1>Addis Ababa</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.worqambatour.com/img/slider_single_tour/Bahrdar%20_1000x667.jpg"
              alt=""
              className="featuredImg"
              onClick={() =>{
              destination = "Bahirdar";
                dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
                navigate("/hotels", { state: { destination, dates, options } });
              }}
            />
            <div className="featuredTitles">
              <h1>Bahirdar</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/a7/09/c9/a709c9b359f95727c3484fddf0a9880c.jpg"
              alt=""
              className="featuredImg"
              onClick={() =>{
                destination = "Harar";
                dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
                navigate("/hotels", { state: { destination, dates, options } });
              }}
            />
            <div className="featuredTitles">
              <h1>Harar</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
