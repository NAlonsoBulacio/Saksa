import React from "react";
import "./GoogleMapEmbed.css";
const GoogleMapEmbed = () => {
  const apiKey = "AIzaSyBu-e2OBM1eyAudbRyVSa8spxztumlhlkc";
  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=-26.817489529039374,-65.30312572944267&key=${apiKey}`;

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <iframe
        className="mapa"
        title="Google Map"
        frameBorder="0"
        style={{ border: 0 }}
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;
