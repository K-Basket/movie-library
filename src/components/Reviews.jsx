import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserReviewsMovieQuery } from 'redux/moviesSlice';
import { Text, TitleAuthorRewiews, TitleWrapp } from './Reviews.styled';
import { ReadMore } from './ReadMore';
import { BtnSeeMore } from './BtnSeeMore';

export const Reviews = () => {
  const { id: movieId } = useParams();
  const { data, isLoading, error } = useGetUserReviewsMovieQuery(movieId);
  const [dataReviews, setDataReviews] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const numberReviews = 3;

  const descendingReviews = useMemo(() => {
    if (data) {
      const { results: rewiews } = data;
      return [...rewiews].sort((a, b) =>
        a.created_at < b.created_at ? 1 : -1
      );
    }
  }, [data]);

  useEffect(() => {
    if (descendingReviews) {
      if (isActive) return setDataReviews(descendingReviews);

      const res = [];

      for (let i = 0; i < numberReviews; i += 1) {
        if (descendingReviews[i]) res.push(descendingReviews[i]);
      }
      setDataReviews(res);
    }
  }, [data, isActive, descendingReviews, numberReviews]);

  const makeActive = () => {
    setIsActive(!isActive);
  };

  if (isLoading && !error)
    return <h1 style={{ fontSize: '30px', color: 'salmon' }}>...loading...</h1>;

  return (
    <>
      <ul style={{ margin: '10px 0' }}>
        {dataReviews?.map(({ id, author, content, created_at }) => {
          const createdDate = created_at.slice(0, 10);
          const contentRewiews = content;

          return (
            <li key={id} style={{ marginBottom: '20px' }}>
              {
                <>
                  <TitleWrapp>
                    <TitleAuthorRewiews>{author}</TitleAuthorRewiews>
                    <Text> {`(${createdDate})`}</Text>
                  </TitleWrapp>

                  <ReadMore>{contentRewiews}</ReadMore>
                </>
              }
            </li>
          );
        })}
      </ul>

      {dataReviews.length >= numberReviews && (
        <BtnSeeMore click={makeActive}>
          {isActive ? 'see less reviews' : 'see more reviews'}
        </BtnSeeMore>
      )}
    </>
  );
};
