"use client";
import PropTypes from 'prop-types';

const UserCard = ({ name, age, city }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Wiek: {age}</p>
      <p>Miasto: {city}</p>
    </div>
  );
};

// PropTypes dla zapewnienia odpowiednich typów danych
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

// Prosty styl dla karty
const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    maxWidth: '300px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default UserCard;
