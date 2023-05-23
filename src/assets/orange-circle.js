import { ORANGE } from '../utils/constants';
import PropTypes from 'prop-types';

export default function OrangeCircle({ height = 340, width = 340 }) {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 328 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M327.5 162C327.5 251.188 254.304 323.5 164 323.5C73.6956 323.5 0.5 251.188 0.5 162C0.5 72.8118 73.6956 0.5 164 0.5C254.304 0.5 327.5 72.8118 327.5 162Z"
        fill={ORANGE}
        stroke={ORANGE}
      />
    </svg>
  );
}

OrangeCircle.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
};
