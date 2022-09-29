import PropTypes from 'prop-types';
import {GalleryItem, Img} from './ImageGalleryItem.style';

export default function ImageGaleryItem({ imageURL, imageTitle, imageUrlLarge, onClickItem }) {
    return  <GalleryItem onClick={() => {onClickItem({imageUrlLarge, imageTitle})}}>
                <Img src={imageURL} alt={imageTitle} />
            </GalleryItem>
}

ImageGaleryItem.propTypes = {
    imageURL: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired,
    imageUrlLarge: PropTypes.string.isRequired,
    onClickItem: PropTypes.func.isRequired,
  };
 
  