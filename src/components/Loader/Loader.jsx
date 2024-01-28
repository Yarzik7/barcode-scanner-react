import LoaderFullScreen from './LoaderFullScreen/LoaderFullScreen';

const Loader = ({ type = 'full screen' }) => {
  return <div>{type === 'full screen' && <LoaderFullScreen />}</div>;
};

export default Loader;
