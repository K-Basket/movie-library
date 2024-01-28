import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserReviewsMovieQuery } from 'redux/moviesSlice';
import { Text, TitleAuthorRewiews, TitleWrapp } from './Reviews.styled';
import { ReadMore } from './ReadMore';
import { BtnSeeMore } from './BtnSeeMore';
import { Loader } from './Loader';
import { getLimitedData } from 'helpers/getLimitedData';

export const Reviews = () => {
  const { id: movieId } = useParams();
  const { data, isLoading, error } = useGetUserReviewsMovieQuery(movieId);

  const [dataReviews, setDataReviews] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const numberOfReviews = 3;

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
      if (descendingReviews.length > numberOfReviews) setIsActiveBtn(true);
      if (showMore) return setDataReviews(descendingReviews);

      getLimitedData(descendingReviews, numberOfReviews, setDataReviews);
    }
  }, [data, showMore, descendingReviews, numberOfReviews]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (isLoading && !error) return <Loader />;

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

      {isActiveBtn && (
        <BtnSeeMore click={toggleShowMore}>
          {showMore ? 'see less reviews' : 'see more reviews'}
        </BtnSeeMore>
      )}
    </>
  );
};
