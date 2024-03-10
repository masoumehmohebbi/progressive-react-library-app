import { toPersianNumbers } from '../utils/toPersianNumbers';

const colors = {
  green: 'bg-green-500 text-white',
  yellow: 'bg-yellow-500 text-white',
  blue: 'bg-blue-500 text-white',
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="col-span-6 w-[45%] sm:w-auto mx-auto justify-items-center cursor-pointer sm:col-span-4 hover:shadow-gray-300/50 hover:shadow-lg flex flex-col items-center sm:grid grid-rows-2 grid-cols-[5.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
      <div
        className={`row-span-2 flex items-center justify-center p-4 sm:p-5
        aspect-square rounded-full
       ${colors[color]}
  `}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
        {toPersianNumbers(title)}
      </h5>
      <p className="text-xs sm:text-base font-bold text-secondary-900">{value}</p>
    </div>
  );
}
export default Stat;
