import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarSelector from "./components/StarSelector";

function App() {
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4">
      <Accordion />
      <RandomColorGenerator />
      <StarSelector numStars={10} />
      <ImageSlider urls={"https://picsum.photos/v2/list?page=3&limit=100"} />
    </div>
  );
}

export default App;
