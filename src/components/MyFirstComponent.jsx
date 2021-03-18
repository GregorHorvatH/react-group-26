import { Fragment } from 'react';
import PropTypes from 'prop-types';
import MySecondComponent from './MySecondComponent';

// we know here we have props
const MyFirstComponent = ({ user, x }) => (
  <Fragment>
    <div className="test-component">
      <h2>Test Component</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis
        numquam eveniet mollitia eligendi saepe fugiat, sit voluptatum
        repudiandae aperiam reiciendis consequuntur quam natus soluta cumque.
        Reiciendis, illo! Molestiae, deleniti!
      </p>
      <p>user name: {user.name}</p>
      <p>x: {x}</p>
    </div>
    <div>
      <p>hello</p>
    </div>

    <MySecondComponent user={user} />
  </Fragment>
);

MyFirstComponent.defaultProps = {
  x: 100,
};

MyFirstComponent.propTypes = {
  x: PropTypes.number,
};

export default MyFirstComponent;
