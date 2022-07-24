// import type { DropMenuProps, DropImgProps } from "./HeaderNav";
import type { DropMenuProps, DropImgProps } from "./Interface";

interface PropsType {
  dropWidth: number | undefined;
  dropMenu: DropMenuProps[];
  dropImg: DropImgProps[];
}

function DropdownMenu({ dropWidth, dropMenu, dropImg }: PropsType) {
  return (
    <nav
      className="hidden absolute w-screen py-5 bg-white group-hover:flex top-[57px] justify-center"
      style={{ left: `calc(-${dropWidth}px)` }}
    >
      <ul className="font-normal mr-[200px]">
        {/* 이 요소는 첫번째 드랍 메뉴에서만 필요한 것 */}
        {/* 좋지않은 방법이지만 이 것 하나만이 예외이므로 이렇게라도 처리하자... */}
        {dropMenu[0].where === "도쿄" ? (
          <li className="pb-2 font-bold">인기 여행지</li>
        ) : null}

        {dropMenu.map((item, index) => (
          <li key={index} className="pb-2">
            <a
              href={item.whereLink}
              className="hover:text-red-400 hover:cursor-pointer"
            >
              {item.where}
            </a>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 w-[calc((192px+4px)*2)]">
        {dropImg.map((item, index) => (
          <div className="p-2" key={index}>
            <a href={item.imgHref} className="hover:cursor-pointer">
              <img
                src={item.img}
                alt="beautiful"
                className="block w-[192px] rounded"
              />
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default DropdownMenu;
