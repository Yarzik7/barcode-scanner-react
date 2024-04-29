export const getCameraAccess = async () => {
  if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
    try {
      return await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (error) {
      console.log('Access error: ', error);
    }
  }
};
