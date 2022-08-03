import PropTypes from 'prop-types';

const Display = (props) => {
  const { value } = props;
  return <div id="display" type="number">{ value }</div>;
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
