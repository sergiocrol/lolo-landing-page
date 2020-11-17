import StepBlock from './StepBlock';

const FirstSection = () => {
  return (
    <div className="container">
      <h1 className="text-blue opacity-70 font-montserrat font-extrabold leading-tight text-30 text-left w-11/12 mx-auto mb-10 mt-16 max-w-xs md:max-w-2xl md:text-40 md:mb-20 md:ml-0 md:text-left lg:text-left lg:text-70 lg:mx-0 lg:max-w-53 md:px-12 lg:mt-0">
        Encontrar a alguien de confianza es así de sencillo:
      </h1>
      <StepBlock
        image="/images/step1.png"
        left={true}
        title="Configura tu servicio"
        body="Elige la fecha, hora, frecuencia y características del servicio."
        button="Configura tu servicio"
      />
      <StepBlock
        image="/images/step2.png"
        left={false}
        title="Selecciona a tu profesional"
        body="Somos la única plataforma en la que tú seleccionas primero a quién quieres contratar."
        marginBottom="mb-10"
      />
      <StepBlock
        image="/images/step3.png"
        left={true}
        title="Paga de forma segura"
        body="Olvídate del efectivo y realiza el pago de forma segura mediante nuestra plataforma."
      />
    </div>
  );
};

export default FirstSection;
