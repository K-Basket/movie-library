import { useState } from 'react';
import { Text, TextReadMore } from './Reviews.styled';

export const ReadMore = ({ children }) => {
  const text = children;
  const [showMore, setIsReadMore] = useState(true);
  const numCharacters = 300;

  const toggleReadMore = () => {
    setIsReadMore(!showMore);
  };

  return (
    <Text>
      {showMore ? text.slice(0, numCharacters) : text}

      {text.length > numCharacters && (
        <TextReadMore onClick={toggleReadMore}>
          {showMore ? ' ...read more' : ' show less'}
        </TextReadMore>
      )}
    </Text>
  );
};
