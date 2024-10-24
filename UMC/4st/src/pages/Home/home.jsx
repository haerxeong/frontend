import * as S from "./home.style.js";

import Card from "../ ../components/Card/card.jsx";
import useCustomFetch from "../../hooks/useCustomFetch.js";

const HomePage = () => {
  const { data, isLoading, isError } = useCustomFetch(
    `/movie/upcoming?language=ko-KR&page=1`
  );

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>로딩중...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러중 ㅜㅜ</h1>
      </div>
    );
  }

  return (
    <S.CardList>
      {movies.data?.results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </S.CardList>
  );
};

export default HomePage;
