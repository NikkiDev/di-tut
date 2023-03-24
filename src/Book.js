const Book = (props) => {
  const { imgUrl, title, author } = props;

  return (
    <article>
      <img src={imgUrl} alt="book-image"></img>
      <h3 onMouseMove={() => console.log("on Mouse move event")}>{title}</h3>
      <h5>{author}</h5>
      <button type="button" onClick={() => console.log("DRASTI")}>
        DAMACHIRE
      </button>
    </article>
  );
};

export default Book;
