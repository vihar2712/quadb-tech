import { ALT_IMAGE_URL } from "../utils/constants";

const ShowCard = ({ showDetails }) => {
  const { image, name, genres, rating } = showDetails;
  //   console.log( image.medium);

  return (
    <div className="p-4 m-4 bg-green-800 rounded-md font-serif text-white ">
      <img
        src={image?.original || image?.medium || ALT_IMAGE_URL}
        alt="name"
        className="w-48 h-56 rounded-sm"
      />
      <h1 className="font-bold text-2xl mt-1">{name}</h1>
      <h2 className="font-medium">{genres.join(", ")}</h2>
      <h4>{rating.average ? rating.average + " ⭐" : "No ratings yet"}</h4>
    </div>
  );
};

export default ShowCard;
