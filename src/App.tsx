import Search from "./components/Input";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col bg-[url('.\mukutu.png')] bg-cover bg-center h-screen">
      <div>
        <Navbar />
      </div>
      <div className="my-16">
        <Search></Search>
      </div>
    </div>
  );
}

export default App;
