import tw from "../../lib/tailwind";
export const myboxStyles = {
  container:
    "w-[90%] bg-NeutralDarkGrayishBlue  items-center pt-[2rem] px-[2rem] rounded-lg  min-h-[10rem]",
  header: [
    tw`text-PrimaryNeonGreen tracking-[0.2rem] `,
    { fontFamily: "manrope" },
  ],
  advice: [
    tw`text-white text-center text-[1.4rem] my-[1.5rem]`,
    { fontFamily: "manrope" },
  ],
  btn: [
    tw`bg-PrimaryNeonGreen h-[3.5rem] aspect-square items-center justify-center  rounded-full`,
    { transform: [{ translateY: 27 }] },
  ],
};
