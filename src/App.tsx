import Accordion from "./components/Accordion";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import RandomColorGenerator from "./components/RandomColorGenerator";
import StarSelector from "./components/StarSelector";

function App() {
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4 gap-12 bg-[#fdfaf1]">
      <Accordion />
      <RandomColorGenerator />
      <StarSelector numStars={10} />
      <ImageSlider urls={"https://picsum.photos/v2/list?page=3&limit=100"} />
      <LoadMore />
    </div>
  );
}

export default App;
