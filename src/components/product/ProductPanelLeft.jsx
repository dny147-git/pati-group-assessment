import LymphDrainageImg from "../../assets/images/LymphDrainage.webp"
import LymphDrainageREWAMPED from "../../assets/images/LymphDrainageREWAMPED.webp"
import LymphDrainageREWAMPEDvisualsArtboard4 from "../../assets/images/LymphDrainageREWAMPEDvisualsArtboard4.webp"
import LymphDrainageREWAMPEDvisualsArtboard5_1 from "../../assets/images/LymphDrainageREWAMPEDvisualsArtboard5_1.webp"
import LymphDrainageREWAMPEDvisualsArtboard5_2 from "../../assets/images/LymphDrainageREWAMPEDvisualsArtboard5_2.webp"
import puffinessImg from "../../assets/images/puffiness-min.png"
import tirednessImg from "../../assets/images/tiredness-min.png"
import ImageCard from "../ui/ImageCard"
export default function ProductPanelLeft() {
  return (
    <div className="hidden md:block md:w-full lg:w-147">
      {/* flex container */}
      <div className="flex gap-4">
        <ImageCard src={LymphDrainageImg} alt={"LymphDrainageImg"} />
        <ImageCard src={LymphDrainageREWAMPED} alt={"LymphDrainageREWAMPED"} />
      </div>
      {/* grid container */}
      <div className="grid grid-cols-3 gap-4 my-16">
        <ImageCard
          src={LymphDrainageREWAMPEDvisualsArtboard4}
          alt={"LymphDrainageREWAMPEDvisualsArtboard4"}
          width={185}
          height={185}
        />
        <ImageCard
          src={LymphDrainageREWAMPEDvisualsArtboard5_1}
          alt={"LymphDrainageREWAMPEDvisualsArtboard5_1"}
          width={185}
          height={185}
        />
        <ImageCard
          src={LymphDrainageREWAMPEDvisualsArtboard5_2}
          alt={"LymphDrainageREWAMPEDvisualsArtboard5_2"}
          width={185}
          height={185}
        />
      </div>
      <div className="flex gap-4 my-16">
        <ImageCard
          src={tirednessImg}
          alt={"tirednessImg"}
          width={286}
          height={307}
        />
        <ImageCard
          src={puffinessImg}
          alt={"puffinessImg"}
          width={286}
          height={307}
        />
      </div>
    </div>
  )
}
