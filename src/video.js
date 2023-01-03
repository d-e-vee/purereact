import { useState } from "react";
import video1 from './videos/video1.mp4';
import ReactPlayer from 'react-player'
const Video = () => {
//   const [src, setSrc] = useState("./videos/video1.mp4");
//   const handleChange = (event) => {
//     try {
//       // Get the uploaded file
//       const file = event.target.files[0];

//       // Transform file into blob URL
//       setSrc(URL.createObjectURL(file));
//     } catch (error) {
//       console.error(error);
//     }
//   };

  return (
    <>
      <ReactPlayer url={video1} controls width="20%"/>
        // Sorry, your browser doesn't support embedded videos.
      {/* <input type="file" onChange={handleChange} /> */}
    </>
  );
};

export default Video;