import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Addis Ababa,madrid,london"
  );
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Addis_ababa_night_skyline.jpg"
              alt=""
              className="featuredImg"
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
