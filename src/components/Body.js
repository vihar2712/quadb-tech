import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import { Link } from "react-router-dom";
import useShowsDetails from "../utils/useShowsDetails";

const Body = () => {
  const showList = useShowsDetails();
  // console.log(showList);

  return showList.length === 0 ? (
    <></>
  ) : (
    <div className="flex flex-wrap justify-evenly">
      {showList.map((show) => {
        const { id } = show?.show;
        return (
          <Link key={id} to={"/shows/" + id}>
            <ShowCard showDetails={show.show} />
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
