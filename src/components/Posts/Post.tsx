import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";

export interface IPost {
  authorName: string;
  subTitle: string;
  description: string;
  src: string;
  emoji: string | React.ReactNode;
  commentsCount: number;
  onClick?: () => void;
}

export const Post = ({
  authorName,
  subTitle,
  description,
  emoji,
  commentsCount,
  src,
  onClick,
}: IPost) => {
  return (
    <div className="bg-backgroundSecondary p-4 rounded-lg shadow-md border border-borderPrimary">
      <div className="flex justify-between items-start">
        <div className="flex justify-between items-start">
          <img
            className="w-12 h-12 rounded-full mr-2"
            src={src}
            alt={authorName}
          />
          <div>
            <h2 className="text-xl font-semibold">{authorName}</h2>

            <h2 className="text-sm text-borderPrimary">{subTitle}</h2>
          </div>
        </div>
        <button onClick={onClick}>
          <PiDotsThreeBold />
        </button>
      </div>

      <div className="mt-4 flex items-center bg-backgroundPrimary p-4 rounded-lg">
        <span className="text-2xl rounded-full bg-backgroundSecondary py-2 px-3">
          {emoji}
        </span>
        <span className="pl-2 text-borderPrimary">{description}</span>
      </div>
      <div className="flex">
        <div className="py-3rounded-md text-borderPrimary mt-3 flex items-center justify-center align-middle">
          <FaRegCommentAlt />
          <span className="ml-2">{commentsCount} Comments</span>
        </div>
      </div>
    </div>
  );
};
