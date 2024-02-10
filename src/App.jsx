import Navbar from "./components/Navbar";


const App = () => {
  const name = "John";
  const isSingle = false;

  const renderStatus = (status) => {
    if (status) {
      return <p>Saya sudah menikah</p>;
    } else {
      return <p>Saya belum menikah</p>;
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Hello my name is {name}</h1>
      {isSingle ? <p>Saya belum menikah</p> : <p>Saya sudah menikah</p>}
      {renderStatus(isSingle)}
    </div>
  );
};

export default App;
