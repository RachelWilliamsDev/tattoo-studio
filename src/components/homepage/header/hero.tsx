import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative lg:w-full hidden lg:flex justify-end items-end">
      <Image
        src="/assets/hero.png"
        width={945}
        height={1019}
        alt="hero image"
        className=" w-full max-w-[945px object-contain"
      />
    </div>
  );
};
export default Hero;
