import PropTypes from 'prop-types';
import { ButtonMore } from './Button.style';

export default function Button({ text, onClick }) {
    return <ButtonMore type="button" onClick={onClick} >{text}</ButtonMore>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };