import { IconMenuArr } from "./Interface";

function IconMenu() {
  return (
    <div className="w-screen px-[5vw] flex justify-between flex-wrap mb-6">
      {IconMenuArr.map((item, index) => (
        <div
          className="flex flex-col items-center w-1/3 mb-6 md:mb-0 md:w-1/6"
          key={index}
        >
          <a
            href={item.href}
            className="w-full md:w-[7.5vw] hover:text-red-400 flex flex-col items-center text-center mb-2"
          >
            <div className="w-[10vw] h-[10vw] md:w-[7.5vw] h-14 mb-3">
              <img src={item.img} alt="icon" className="w-full h-full" />
            </div>

            <div className="flex items-center justify-center h-12 font-bold">
              <h1>{item.title}</h1>
            </div>
          </a>

          <ul className="text-center">
            {item.lists.map((list, index) => (
              <li
                className="text-gray-500 hover:text-red-400 hover:cursor-pointer"
                key={index}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default IconMenu;
