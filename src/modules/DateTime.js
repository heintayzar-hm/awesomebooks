// To fix or import by cdn
// eslint-disable-next-line no-undef
const { DateTime } = luxon;
// import { DateTime } from '../../node_modules/luxon/src/luxon.js';

const formatTs = () => {
  const datetime = DateTime.now();
  let timeString;
  switch (datetime.day.toString().charAt(1)) {
    case '1':
      timeString = datetime.toFormat("LLLL dd'st' yyyy tt");
      break;
    case '2':
      timeString = datetime.toFormat("LLLL dd'nd' yyyy tt");
      break;
    case '3':
      timeString = datetime.toFormat("LLLL dd'rd' yyyy tt");
      break;
    default:
      timeString = datetime.toFormat("LLLL dd'th' yyyy tt");
  }
  return timeString;
};

export default formatTs;