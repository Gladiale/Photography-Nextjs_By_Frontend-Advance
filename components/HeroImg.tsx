import Image from "next/image";

type PropsType = {
  containerStyles: string;
  imgSrc: `/${string}`;
};

const HeroImg = ({ containerStyles, imgSrc }: PropsType) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default HeroImg;
