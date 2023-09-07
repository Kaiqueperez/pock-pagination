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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const [typeOfPaginationValue, setTypeOfPaginationValue] = useState("photos");

  const filtradedData = data.filter((item) =>
    item.title.includes(searchFilter)
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await paginationRepository(typeOfPaginationValue);
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [typeOfPaginationValue]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (number) => setCurrentPage(number);

  return (
    <div>
      <div>
        <label>
          Buscar:
          <input
            type="text"
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </label>

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
        filtradedList={filtradedData}
      />
      <Pagination
        totalPost={data.length}
        postsPerPage={postsPerPage}
        paginate={changePage}
      />
    </div>
  );
}

export default Home;
