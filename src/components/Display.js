import PropTypes from 'prop-types';

const Display = (props) => {
  const { value } = props;
  return <input readOnly  id="display" type="text" value={value} />;
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

Display.defaultProps = {
  value: 0,
}

export default Display;
