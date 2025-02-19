const convertImage = (image: string) => {
  return `${import.meta.env.VITE_API_URL}/api/upload/file/${image}`;
};

export default convertImage;
