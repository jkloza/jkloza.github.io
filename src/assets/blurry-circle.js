import PropTypes from 'prop-types';

export default function BlurryCircle({ height = 340, width = 340 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 270 255">
      <g filter="url(#filter0_f_640_19)">
        <ellipse cx="135" cy="127.5" fill="#8789C0" rx="95" ry="87.5"></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_f_640_19"
          width="270"
          height="255"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur result="effect1_foregroundBlur_640_19" stdDeviation="20"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

BlurryCircle.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
};
