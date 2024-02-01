import { useParams } from "react-router-dom";
import { ALT_IMAGE_URL } from "../utils/constants";
import useShowsDetails from "../utils/useShowsDetails";
import Form from "./Form";
import { useState } from "react";

const ShowItem = () => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  // console.log(id);

  const allShows = useShowsDetails();
  const filteredData = allShows.filter((show) => show.show.id == id);

  const displayForm = () => {
    setShowForm(true);
  };

  if (filteredData.length === 0) return <></>;

  // console.log(filteredData.length);
  const { name, summary, image, runtime, rating, language, genres, type } =
    filteredData[0]?.show;
  return (
    <div className="mt-2 p-2 w-9/12 mx-auto ">
      <h1 className="text-3xl font-medium">{name}</h1>
      <div className="flex my-2 max-lg:flex-wrap">
        <div className="max-lg:6/12 lg:w-1/5 mr-2">
          <img
            src={image?.original || image?.medium || ALT_IMAGE_URL}
            className="rounded-x-lg max-lg:w-1/2 max-lg:mx-auto lg:w-full"
          />
          <div className="max-lg:w-1/2 max-lg:mx-auto">
            <button
              className="bg-green-600 p-1 rounded-sm max-lg:w-full  max-lg:mx-auto w-full font-medium"
              onClick={displayForm}
            >
              Book Ticket
            </button>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: summary }}
          className="max-lg:6/12 lg:w-3/5 p-2"
        />
        <div className="max-lg:w-full lg:w-1/5 bg-gray-200 rounded-sm p-2 h-fit shadow-lg">
          <div className="border-b-2 border-gray-400 border-dotted">
            <h1 className="text-2xl">Show Info</h1>
          </div>
          <h1>{runtime && "Duration: " + runtime + " minutes"}</h1>
          <h1>{rating.average && "Ratings: " + rating.average + " ⭐"}</h1>
          <h1>Language: {language}</h1>
          <h1>Genres: {genres.join(", ")}</h1>
          <h1>Show Type: {type}</h1>
        </div>
      </div>
      <div>
        {showForm && (
          <Form
            showInfo={filteredData[0]}
            closeForm={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ShowItem;
