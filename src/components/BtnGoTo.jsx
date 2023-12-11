import sprite from 'images/sprite.svg';
import { Button } from './BtnGoTo.styled';

export const BtnGoTo = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={goToTop}>
      <svg width="20px" height="20px">
        <use href={`${sprite}#icon-arrow-up2`}></use>
      </svg>
    </Button>
  );
};
