import { frontPerson, backPerson } from '../../styles/icons.module.css';

function People() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-13 -30 200 180"
      className="people"
      id="people"
      key={+new Date()}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <g id="front-person" className={frontPerson}>
          <path d="M86 115l-35 1c-3 0-4-2-4-5-1-16 5-29 19-37 13-9 28-9 42 0 13 8 19 21 19 37 0 4-2 5-5 5l-36-1zM67 38a20 20 0 1119 20c-11 0-20-10-19-20z"></path>
        </g>
        <path
          id="back-person"
          className={backPerson}
          d="M25 73H4c-3 0-4-2-4-5-1-13 9-26 22-30 14-4 28 3 35 15 0 1 2 3 0 4l-8 14c-1 2-3 1-4 2H25zm5-43c-8 0-15-7-15-15S22 0 31 0a15 15 0 01-1 30zM148 73h-6c-17 0-17-1-25-15-2-2-1-3 0-5 5-12 20-19 34-15s23 17 22 30c0 4-1 5-4 5h-21zm-5-73c8 0 15 6 15 14 0 9-6 15-14 16a15 15 0 11-1-30z"
        ></path>
      </g>
    </svg>
  );
}

export default People;
