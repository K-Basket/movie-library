import { MovieGallery } from 'components/MovieGallery';

const HomePage = () => {
  return (
    <>
      {/* <h1>Home pages</h1> */}

      <MovieGallery movieId={'12345'} title="Top film of the week" />
    </>
  );
};

export default HomePage;
