import scss from './LoaderFullScreen.module.scss';

const LoaderFullScreen = () => {
  return (
    <div className={scss.fullScreenLoader}>
      <span className={scss.fullScreenLoaderSpinner}></span>
    </div>
  );
};

export default LoaderFullScreen;
