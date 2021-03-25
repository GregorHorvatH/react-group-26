import noImage from './noImage.png';

const requestImage = require.context('../../assets', false, /.jpeg$/);

export const loadImage = (imageName) => {
  try {
    return requestImage(`./${imageName}.jpeg`).default;
  } catch (error) {
    return noImage;
  }
};
