import { box } from '../../styles/components.module.css';
import { iconContainer } from '../../styles/index.module.css';

const Card = ({ title, body, icon }) => {
  return (
    <div className={`relative max-w-21 min-w-21 min-h-19 max-h-19 xl:min-w-29`}>
      <div className={`${iconContainer} absolute w-4/12 xl:w-3/12`}>{icon}</div>
      <div
        className={`${box} flex flex-col justify-center items-center py-8 pb-16 rounded-40 rounded-bl-none h-full mx-2`}
      >
        <h3
          className={`inline-block font-sans font-black text-24 text-blue text-center w-10/12 mt-12 xl:text-30`}
        >
          {title}
        </h3>
        <p
          className={`inline-block font-sans font-normal text-17 text-gray text-center w-10/12 max-w-15 mt-8 xl:text-24 xl:max-w-21 xl:mt-6 xl:leading-tight xl:w-10/12`}
        >
          {body}
        </p>
      </div>
    </div>
  );
};

export default Card;
