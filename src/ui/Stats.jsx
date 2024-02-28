import Stat from "./Stat";
import { BiCollection } from "react-icons/bi";

const data = [
  {
    id: 1,
    icon: <BiCollection className="w-7 sm:w-11 h-7 sm:h-11 text-white" />,
    title: "100 ",
    subTitle: " کل کتاب‌ها ",
    bgColor: "green",
  },
  {
    id: 2,
    icon: <BiCollection className="w-7 sm:w-11 h-7 sm:h-11 text-white" />,
    title: "60",
    subTitle: "خوانده شده‌ها",
    bgColor: "yellow",
  },
  {
    id: 3,
    icon: <BiCollection className="w-7 sm:w-11 h-7 sm:h-11 text-white" />,
    title: "40",
    subTitle: "خوانده نشده‌ها",
    bgColor: "blue",
  },
];
function Stats() {
  return (
    <div className="my-16 sm:my-28 grid grid-cols-12 justify-between gap-4 md:gap-8">
      {data &&
        data.map((item) => (
          <Stat
            key="item.id"
            color={item.bgColor}
            title={item.title}
            value={item.subTitle}
            icon={item.icon}
          />
        ))}
    </div>
  );
}

export default Stats;
