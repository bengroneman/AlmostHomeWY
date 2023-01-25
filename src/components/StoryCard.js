import React from "react";
import SecondaryBtn from "./global/SecondaryBtn";
import { formatTime } from "../utils/utils";

const StoryCard = function(props) {
    return (
      <div
        key={props.story.title}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0"></div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a href={props.story.slug} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {props.story.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {props.story.description}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex space-x-1 text-sm text-gray-500">
              <time>{formatTime(props.story.updatedAt)}</time>
              <span aria-hidden="true">&middot;</span>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <SecondaryBtn link={props.story.slug}>Read Story</SecondaryBtn>
          </div>
        </div>
      </div>
    );
};

export default StoryCard;
