import api from "../service/axios";

const paginationRepository = async (typeOfPagination) => {
  try {
    const { data } = await api.get(`/${typeOfPagination}`);
    return data;
  } catch (error) {}
};

export default paginationRepository;
