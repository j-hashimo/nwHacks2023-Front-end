import React from "react";
import car2 from "../images/Car2.jpg";
function Analytics() {
  return (
    <div className="w-full bg-green-700 py-16 px-4 mb-1">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={car2}
          className="rounded-md w-[500px] mx-auto my-4"
          alt="Cars"
        />
        <div className="flex flex-col justify-center pl-3">
          <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Easily carpool to your favorite events
          </h1>
          <p className="text-white font-semibold py-2">
            Say goodbye to the stress of solo commuting and hello to the
            benefits of carpooling. Join our community and connect with
            like-minded people who are looking to save money and reduce their
            carbon footprint while heading to events. Not only will you be doing
            your part for the environment, but you'll also save on gas and
            parking costs. Plus, carpooling can be a great way to make new
            friends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
