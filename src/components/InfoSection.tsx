interface InfoSectionProps {
  bgColor: string;
  img: string;
  textLeft: boolean;
  title: string;
  text: string;
}

const InfoSection: React.FunctionComponent<InfoSectionProps> = (props) => {
  return (
    <section className={`bg-${props.bgColor} h-[680px] w-full font-poppins`}>
      <div className="flex flex-row items-center justify-center py-20 px-20 gap-[12rem]">
        {props.textLeft ? (
          <>
            <div className="flex flex-col gap-10 w-1/3">
              <p className="text-white text-4xl font-medium">{props.title}</p>
              <p className="text-white font-extralight text-md">{props.text}</p>
            </div>
            <img className="h-[488px] w-[470px]" src={props.img} alt="#" />
          </>
        ) : (
          <>
            <img className="h-[488px] w-[470px]" src={props.img} alt="#" />
            <div className="flex flex-col gap-10 w-1/3">
              <p className="text-black text-4xl font-medium">{props.title}</p>
              <p className="text-black font-extralight text-md">{props.text}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default InfoSection;
