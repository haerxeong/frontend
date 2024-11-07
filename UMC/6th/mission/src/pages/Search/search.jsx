import React, { useState } from "react";
import * as S from "./search.style";
import * as C from "../../components/Card/card.style";
import Card from "../../components/Card/card.jsx";
import useCustomFetch from "../../hooks/useCustomFetch.js";

const Search = () => {
  const [query, setQuery] = useState("");

  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/search/movie?query=${query}&language=ko-KR`);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <S.SearchContainer>
        <input
          type="text"
          placeholder="영화 제목을 입력해주세요."
          value={query}
          onChange={handleSearch}
        />
        <button>검색</button>
      </S.SearchContainer>

      {isLoading && (
        <S.SkeletonContainer>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index}>
              <S.Skeleton />
              <S.SkelotonText />
            </div>
          ))}
        </S.SkeletonContainer>
      )}

      {!isLoading && isError && <h1 style={{ color: "white" }}>에러중 ㅜㅜ</h1>}

      {!isLoading && !isError && query && (
        <S.SearchResults>
          {movies?.results?.length > 0 ? (
            <C.CardList>
              {movies.results.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </C.CardList>
          ) : (
            <S.NoResultsMessage>
              해당하는 검색어 {query}에 해당하는 데이터가 없습니다.
            </S.NoResultsMessage>
          )}
        </S.SearchResults>
      )}
    </>
  );
};

export default Search;
