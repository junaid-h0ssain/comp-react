import Accordion from "./components/Accordion";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarSelector from "./components/StarSelector";

function App() {
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4">
      <Accordion />
      <RandomColorGenerator />
      <StarSelector />
    </div>
  );
}

export default App;
