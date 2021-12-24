import "../App.less";

const Videobox = (props) => {
  let source = props.link;
  source = source.replace("/watch?v=", "/embed/");
  return (
    <div
      style={{
        width: `${props.width}`,
      }}
      class="video-container"
    >
      <iframe
        src={source}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen={true}
      ></iframe>
    </div>
  );
};

export default Videobox;
