import axios from 'axios';
import PropTypes from 'prop-types';

const URL = 'https://pixabay.com/api/';
const KEY = '29320535-0299dbdcd796402aab516fa97';
const PER_PAGE = 12;

const fetchKey = async (searchName, page) => {
    const response = await axios.get(
        `${URL}?q=${searchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    return response.data;
}

fetchKey.propTypes = {
    searchName: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  };

export default fetchKey;