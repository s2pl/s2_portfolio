import React from "react";

const VideoCard = ({ embedId , title, description }) => {
    const embedUrl = `https://www.youtube.com/embed/${embedId}?controls=0`;
  return (
    <div className="md:min-w-[700px] md:min-h-[430px] rounded overflow-hidden shadow-lg md:m-4 m-2 relative">
      {/* <video className="w-full object-cover h-48" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}

      <iframe
      className="md:w-[853px] md:h-[480px]"
      src={embedUrl}
      frameBorder="0"
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  controls=0"
      allowFullScreen
      title="Embedded youtube"
    />
    
    </div>
  );
};

export default VideoCard;
