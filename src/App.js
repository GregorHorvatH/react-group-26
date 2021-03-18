import MyFirstComponent from './components/MyFirstComponent';
// import MySecondComponent from './components/MySecondComponent';
import MyThirdComponent from './components/MyThirdComponent';

const App = () => {
  const user = {
    name: 'Peter',
  };

  return (
    <div className="App">
      <h1>Hello from react</h1>

      <MyFirstComponent user={user} x={73} />
      {/* <MySecondComponent user={user} /> */}

      <MyThirdComponent>
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            natus excepturi enim. Modi voluptatem dolorem at neque delectus nemo
            ad alias. Quam animi voluptatem, ut a quidem neque harum quaerat.
          </p>
          <button>push me</button>
        </>
      </MyThirdComponent>
    </div>
  );
};

export default App;
