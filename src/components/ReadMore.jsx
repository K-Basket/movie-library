import { useState } from 'react';
import { Text, TextReadMore } from './Reviews.styled';

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const numCharacters = 300;

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Text>
      {isReadMore ? text.slice(0, numCharacters) : text}
      {text.length >= numCharacters && (
        <TextReadMore onClick={toggleReadMore}>
          {isReadMore ? ' ...read more' : ' show less'}
        </TextReadMore>
      )}
    </Text>
  );
};
