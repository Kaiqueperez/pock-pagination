export const Photos = ({ loading, posts, typeOfPagination }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return typeOfPagination === "photos" ? (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <p>{post.title}</p>
            <img src={post.thumbnailUrl} />
          </li>
        );
      })}
    </ul>
  ) : (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <p>{post.title || post.body}</p>
            <p>{!!post.name && post.name}</p>
            <img src={post.thumbnailUrl} />
          </li>
        );
      })}
    </ul>
  );
};
