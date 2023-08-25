import { useEffect, useState } from "react";
import paginationRepository from "../../repositories/paginationRepository";
import { Pagination } from "../Paginations";
import { Photos } from "../Posts";

const typeOfPaginationOptions = {
  photos: "Fotos",
  comments: "Comments",
  posts: "Posts",
};

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const [typeOfPaginationValue, setTypeOfPaginationValue] = useState("photos");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await paginationRepository(typeOfPaginationValue);
      setPosts(data);
      setIsLoading(false);
    };
    fetchData();
  }, [typeOfPaginationValue]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (number) => setCurrentPage(number);

  return (
    <div>
      <div>
        <select onClick={(e) => setTypeOfPaginationValue(e.target.value)}>
          {Object.entries(typeOfPaginationOptions).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <Photos
        posts={currentPosts}
        loading={isLoading}
        typeOfPagination={typeOfPaginationValue}
      />
      <Pagination
        totalPost={posts.length}
        postsPerPage={postsPerPage}
        paginate={changePage}
      />
    </div>
  );
}

export default Home;
