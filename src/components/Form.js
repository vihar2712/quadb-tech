import { useState } from "react";

const Form = ({ showInfo, closeForm }) => {
  const { name } = showInfo.show;
  const [username, setUserName] = useState(localStorage.getItem("username"));
  const [showUserName, setShowUserName] = useState(localStorage.getItem(name));

  const storeData = () => {
    localStorage.setItem(name, true);
    setUserName(localStorage.getItem("username"));
    setShowUserName(localStorage.getItem(name));
  };
  const formClose = () => {
    closeForm();
  };
  return (
    <div className="bg-gray-200 my-3 rounded-sm shadow-lg p-2">
      <h1 className="font-medium text-3xl">Show name: {name}</h1>
      <h1></h1>
      <label className="mr-2">Your Name: {username}</label>
      {!username && (
        <>
          <input
            type="text"
            className="form-control border-2 border-black px-1"
            name="name"
            onChange={(e) => localStorage.setItem("username", e.target.value)}
          />
        </>
      )}
      {(!showUserName || !username) && (
        <button
          className="px-2 m-2 border-2 border-black rounded-md cursor-pointer"
          onClick={storeData}
        >
          Book Tickets
        </button>
      )}
      <button
        onClick={formClose}
        className="px-2 border-2 m-2 border-black rounded-md cursor-pointer"
      >
        Close
      </button>
      <div>
        {showUserName && username && (
          <h1>
            Tickets are booked for{" "}
            <span className="font-bold">
              {name}, {username}!!
            </span>
          </h1>
        )}
      </div>
    </div>
  );
};
export default Form;
