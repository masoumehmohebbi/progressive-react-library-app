import { BiCollection } from "react-icons/bi";
const icons = [
  {
    id: 1,
    icon: <BiCollection className="w-11 h-11 text-white" />,
    title: "100 عدد",
    subTitle: "تعداد کل کتاب ",
    bgColor: "green-600",
  },
  {
    id: 2,
    icon: <BiCollection className="w-11 h-11 text-white" />,
    title: "100 عدد",
    subTitle: " تعداد کتاب خوانده شده",
    bgColor: "yellow-600",
  },
  {
    id: 3,
    icon: <BiCollection className="w-11 h-11 text-white" />,
    title: "100 عدد",
    subTitle: "تعداد کتاب خوانده نشده",
    bgColor: "blue-600",
  },
];
const Header = () => {
  return (
    <div className="px-2 sm:px-0 bg-red-200">
      <div className="flex">
        {icons &&
          icons.map((item) => (
            <article
              key={item.id}
              className="bg-white shadow-md px-3 p-1 rounded-md flex gap-x-2"
            >
              <div className={` bg-green-600 rounded-full p-3`}>
                {item.icon}
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-lg">{item.title}</p>
                <h2>{item.subTitle}</h2>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Header;
