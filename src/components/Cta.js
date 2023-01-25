import React from "react";
import SecondaryBtn from "./global/SecondaryBtn";

const Cta = function(props) {
  return (
    <div>
    <dt>
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
        {props.image_url && (
          <img src={props.image_url} alt={"Associated CTA Image"} />
        )}
      </div>
      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
        {props.header}
      </p>
    </dt>
    <dd className="mt-2 text-base text-gray-500">
      <p className="text-sm leading-5 text-gray-900">{props.body}</p>
    </dd>
    <SecondaryBtn>Learn More</SecondaryBtn>
  </div>
);
};

export default Cta;
