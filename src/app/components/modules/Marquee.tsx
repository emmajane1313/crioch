import { FunctionComponent, JSX } from "react";
import MarqueeText from "react-fast-marquee";

const Marquee: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative bottom-0 left-0 w-full h-fit flex flex-col z-20">
      <div className="relative w-full bg-oro h-3"></div>
      <div className="relative w-full bg-musgo h-3"></div>
      <div className="relative w-full bg-blanco h-3"></div>
      <div className="relative w-full h-10 border-y border-white flex flex-row bg-black">
        <MarqueeText gradient={false} speed={70} direction={"right"}>
          {Array.from({ length: 30 }).map((_, index: number) => {
            return (
              <span className="relative text-xs text-white px-5" key={index}>
                Is mise Emma-Jane MacKinnon-Lee. Ar thaobh m’athar, tá slua mór de Hogan, Larkin, Ó Donnabháin agus Ó Foghlú ionam. Mar sin, conas a d’fhéadfainn gan Gaeilge a fhoghlaim?!
              </span>
            );
          })}
        </MarqueeText>
      </div>
      <div className="relative w-full bg-azul h-3"></div>
      <div className="relative w-full bg-oro h-3"></div>
      <div className="relative w-full bg-turba h-3"></div>
    </div>
  );
};

export default Marquee;
