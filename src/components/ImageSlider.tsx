import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

export default function ImageSlider({ urls }: { urls: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  type Image = {
    id: string;
    download_url: string;
    author: string;
  };
  const [images, setImages] = useState<Image[]>([]);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  const fetchImages = async (getUrl: string) => {
    try {
      const res = await fetch(getUrl);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("An unknown error occurred");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (urls != "") fetchImages(urls);
  },[urls]);

  if(loading){
    return <div>Loading...</div>
  }

  if(errorMsg !== null){
    return <div>Error {errorMsg}</div>
  }

  return (
    <div className="flex flex-row items-center justify-center w-2xl m-4 p-4">
        <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))} className="flex items-center justify-center mr-5">
            <BsArrowLeftCircleFill size={50}/>
        </button>
        <div className="flex flex-col items-center justify-center">
            {images.length > 0 && <img src={images[currentIndex].download_url} alt={images[currentIndex].author} className="h-96 object-cover rounded-lg" />}
            <div className="flex ">{images.length > 0 && <p className="flex items-end mt-2 text-2xl text-gray-900">{images[currentIndex].id}</p>}</div>
        </div>
        <button onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))} className="flex items-center justify-center ml-5">
            <BsArrowRightCircleFill size={50}/>
        </button>
    </div>
  )
}
