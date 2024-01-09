import { useState } from 'react';
import { useGetTrailerByIdQuery } from 'redux/moviesSlice';
import { Item, List, WrappTrailer, YoutubeStyle } from './Trailer.styled';

export const Trailer = ({ movieId }) => {
  const { data } = useGetTrailerByIdQuery(movieId);
  const [videoId, setVideoId] = useState('');

  if (!data) return;

  const { results } = data;
  if (results.length === 0) return;

  const { key } = results.find(el => el.type === 'Trailer');
  if (!videoId) setVideoId(key);

  return (
    <WrappTrailer>
      <YoutubeStyle
        videoId={videoId}
        // opts={{ width: '640px', height: '390px' }}
        title="videoPlayer"
      />

      <Item>
        {results.map(({ id, name, key }) => (
          <List
            key={id}
            $active={videoId === key}
            onClick={() => {
              setVideoId(key);
            }}
          >
            {name}
          </List>
        ))}
      </Item>
    </WrappTrailer>
  );
};
