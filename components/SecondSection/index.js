import CardsCarousel from './Carousel';

const SecondSection = () => {
  return (
    <div
      className={`container mt-32 flex flex-col items-center px-8 xl:px-12 xl:mt-48`}
    >
      <h1
        className={`font-montserrat font-extrabold text-32 w-full text-blue opacity-70 text-left sm:text-40 md:text-left lg:text-70`}
      >
        ¿Por qué Lolo?
      </h1>
      <div
        className={`flex flex-col items-center px-4 md:flex-row md:justify-between md:w-full`}
      >
        <h2
          className={`inline-block font-sans font-black text-24 text-orange leading-snug text-center w-11/12 mt-10 max-w-sm sm:text-26 sm:max-w-md md:text-left md:text-32 md:max-w-21 lg:text-50 lg:max-w-29 xl:text-60 xl:max-w-36`}
        >
          Estos son los motivos por los que confiar en nosotros:
        </h2>
        <CardsCarousel />
      </div>
    </div>
  );
};

export default SecondSection;
