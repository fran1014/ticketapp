import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackButton = ({ url }) => {
  return (
    <Link to={url} classname="btn btn-reverse btn-back">
      <FaArrowLeft />
      Back
    </Link>
  );
};

export default BackButton;
