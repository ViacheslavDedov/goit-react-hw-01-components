import PropTypes from 'prop-types';
import css from './Wrapper.module.css';

export default function Wrapper({ children }) {
    return <div className={css.wrapper}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.shape({})
    ).isRequired
}