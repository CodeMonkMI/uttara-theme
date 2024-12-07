import style from "./Blog.module.css";
const Blog = ({ title, image, text, postedBy, date, url }) => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <img src={image} alt={title} />
        </div>
        <h2 className={style.title}>
          <a href={url}>{title}</a>
        </h2>
        <div className={style.text}>{text}</div>
        <div className={style.meta}>
          <p className={style.postedBy}>Posted By: {postedBy}</p>
          <p className={style.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
