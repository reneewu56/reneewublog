function PostGrid({ imgsrc, category, title, date,url}) {
  return (
    <div className="mPostCardGrid">
      <a href={`https://reneewublog.com/${url}`} className="post-link">
        <img className="mPostCardGridChild" alt="" src={imgsrc} />
        <div className="content5">
          <div className="heading">
            <div className="aBadge1">
              <div className="text">{category}</div>
            </div>
            <div className="title2">{title}</div>
          </div>
          <div className="shortInfo">
            <div className="aAuthor">
              <img
                className="imageIcon1"
                alt=""
                src="./src/assets/reneewublog1.png"
              />
              <div className="author">Renee Wu</div>
            </div>
            <div className="date">{date}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PostGrid;
