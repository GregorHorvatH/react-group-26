import PropTypes from 'prop-types';

const UserDetails = ({ user }) => {
  const { firstName, lastName, age } = user;

  return (
    <div className="user-details">
      <h4>user details</h4>
      <p>first name: {firstName}</p>
      <p>last name: {lastName}</p>
      <p>age: {age}</p>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

export default UserDetails;
