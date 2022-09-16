interface BannerProps {
  title: string;
  link: string;
  bgImg: string;
}

const HomePageBanner: React.FunctionComponent<BannerProps> = (props) => {
  return (
    <li className="place-self-center">
      <div className="flex flex-col justify-center relative items-center">
        <p className="absolute text-white font-semibold text-lg left-1/5 top-1/2">
          {props.title}
        </p>
        <a className="absolute text-white text-sm font-light bottom-4 underline">
          {props.link}
        </a>
        <img
          src={props.bgImg}
          className="w-full h-64 md:h-2/3 rounded-xl mg:border-none border outline-2 border-gray-600 p-[0] shadow-md md:max-w-[232px]"
          alt=""
        />
      </div>
    </li>
  );
};

export default HomePageBanner;
