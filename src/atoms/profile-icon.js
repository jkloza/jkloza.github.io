import PropTypes from 'prop-types';

export const ProfileIcon = ({ link, children }) => {
  return (
    <a rel="noopener noreferrer" href={link} target="_blank">
      {children}
    </a>
  );
};

ProfileIcon.propTypes = {
  link: PropTypes.string,
  children: PropTypes.any
};
