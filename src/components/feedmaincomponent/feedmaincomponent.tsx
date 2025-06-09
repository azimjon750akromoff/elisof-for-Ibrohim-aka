import React from "react";
import Feedback from "../home/fifth/feedback";

const FeedMainComponent = () => {
  return (
    <div className="relative">
      {/* Background image stays behind */}
      <div className="absolute inset-0 bg-uzor hidden md:block"></div>

      {/* Feedback component goes on top */}
      <div className="feedback-container relative z-10">
        <Feedback />
      </div>
    </div>
  );
};

export default FeedMainComponent;
