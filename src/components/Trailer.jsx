import { useState } from 'react';
import YouTube from 'react-youtube';
import { useGetTrailerByIdQuery } from 'redux/moviesSlice';

export const Trailer = ({ movieId }) => {
  const { data } = useGetTrailerByIdQuery(movieId);
  const [videoId, setVideoId] = useState('');

  if (!data) return;

  const { results } = data;

  const { key } = results.find(el => el.type === 'Trailer');
  if (!videoId) setVideoId(key);

  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <YouTube
        videoId={videoId}
        opts={{ width: '640px', height: '390px' }}
        style={{ borderRadius: '15px', overflow: 'hidden' }}
      />
      <ul>
        {results.map(({ id, name, key }) => (
          <li
            style={{
              cursor: 'pointer',
              marginBottom: '5px',
              color: videoId === key && 'red',
            }}
            key={id}
            onClick={() => {
              setVideoId(key);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
