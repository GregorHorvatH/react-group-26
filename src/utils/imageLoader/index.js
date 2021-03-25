import noImage from './noImage.png';

const requestImage = require.context('../../assets', false, /.jpeg$/);
const loadImage = (imageName) => requestImage(`./${imageName}.jpeg`).default;

export const getImage = (imageName) => {
  let image = noImage;

  try {
    image = loadImage(imageName);
  } catch (error) {
    console.log(error.message);
  }

  return image;
};
