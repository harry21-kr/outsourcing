import YouTube from 'react-youtube';

function VideoDisplay({ videoId }) {
  return (
    <>
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1
          }
        }}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </>
  );
}

export default VideoDisplay;
