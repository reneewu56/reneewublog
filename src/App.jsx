import Cover from "./components/Cover";
import Navigation from "./components/Navigation";
import posts from "./posts";
import PostGrid from "./components/PostGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Cover />
      <div className="content3">
        <div className="oPostLayout">
          <div className="heading1">
            <b className="title1">最新文章</b>
          </div>
          <div className="content4">
            <div className="row">
              {posts.map((post) => (
                <PostGrid
                  imgsrc={post.imgsrc} // 你可以添加图片路径
                  category={post.category}
                  title={post.title}
                  date={post.date} 
                  // 如果有日期信息，也可以展示
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
