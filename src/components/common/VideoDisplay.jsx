import YouTube from 'react-youtube';

function VideoDisplay({ videoId, width, height }) {
  return (
    <>
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            rel: 0,
            modestbranding: 1
          },
          width,
          height
        }}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </>
  );
}

export default VideoDisplay;
