import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disposition: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  fullness: PropTypes.number.isRequired,
  favoriteActivity: PropTypes.string.isRequired,
  isVicious: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
});

export default { dogShape };
