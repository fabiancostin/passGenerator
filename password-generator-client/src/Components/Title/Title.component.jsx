import { TypeAnimation } from "react-type-animation";

const Title = ({ from, to }) => {
  return (
    <>
      <TypeAnimation
        sequence={[`${from}`, 3000, `${to}`, 3000]}
        speed={30}
        repeat={Infinity}
        deletionSpeed={20}
        className="text-green-400 text-3xl font-bold select-none"
      />
    </>
  );
};

export default Title;
