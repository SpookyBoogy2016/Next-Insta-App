import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "tinnnnn",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAFY_9yPY2B_gnruXUK7S6K_EMgDzVxI1kg&usqp=CAU",
    img: "https://www.apkmirror.com/wp-content/uploads/2021/01/20/6015600b8b6af.png",
    caption: "NEONNNNNN! This picture is hella dope!",
  },
  {
    id: "124",
    username: "tinnnnn",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAFY_9yPY2B_gnruXUK7S6K_EMgDzVxI1kg&usqp=CAU",
    img: "https://www.apkmirror.com/wp-content/uploads/2021/01/20/6015600b8b6af.png",
    caption: "NEONNNNNN! This picture is hella dope!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
