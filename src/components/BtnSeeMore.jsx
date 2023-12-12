import { Button } from './BtnSeeMore.styled';

export const BtnSeeMore = ({ children, click }) => {
  return (
    <Button type="button" onClick={click}>
      {children}
    </Button>
  );
};
