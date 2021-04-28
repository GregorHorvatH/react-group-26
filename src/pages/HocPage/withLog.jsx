import { useEffect } from 'react';

const withLog = (WrappedComponent) => (props) => {
  useEffect(() => {
    console.group(`WithLog ouput @${WrappedComponent.name}`);
    console.log(props);
    console.groupEnd();
  }, []); // eslint-disable-line

  return <WrappedComponent {...props} />;
};

export default withLog;
