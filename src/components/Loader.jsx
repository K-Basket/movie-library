import { createPortal } from 'react-dom';
import { Watch } from 'react-loader-spinner';

import { redColor } from 'utils/variables.styled';
import { Backdrop } from './Loader.styled';

const loaderRoot = document.querySelector('#root');

const center = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const Loader = () => {
  return createPortal(
    <Backdrop>
      <Watch
        visible={true}
        height="55"
        width="55"
        radius="48"
        color={redColor}
        ariaLabel="watch-loading"
        wrapperStyle={center}
        wrapperClass=""
      />
    </Backdrop>,
    loaderRoot
  );
};
