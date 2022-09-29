
import ImageGaleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {Gallery} from './ImageList.style';

export default function ImageList({ items, onClick }) {
    return (
        <Gallery>
            {items.map(item => (
                <ImageGaleryItem key={item.id}
                    imageURL={item.webformatURL}
                    imageTitle={item.tags}
                    imageUrlLarge={item.largeImageURL}

                    onClickItem={onClick}
                />
            ))}
                </Gallery>
    )
}

