export const getImageDimensions = async (url: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const image = new Image();

    image.src = URL.createObjectURL(blob);

    return new Promise((resolve, reject) => {
      image.onload = function () {
        URL.revokeObjectURL(image.src);
        resolve({ width: image.width, height: image.height });
      };
      image.onerror = function () {
        reject('Error loading image');
      };
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};
