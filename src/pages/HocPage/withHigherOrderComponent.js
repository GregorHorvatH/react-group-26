const withHigherOrderComponent = (Component) => (props) => {
  return <Component {...props} magicNumber={11} />;
};

export default withHigherOrderComponent;
