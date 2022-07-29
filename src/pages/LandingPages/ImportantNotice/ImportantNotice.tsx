import { noticeArr } from "./Interface";
import { BiLinkExternal } from "react-icons/bi";

function ImportantNotice() {
  return (
    <section className="px-[5.33333vw]">
      <h1 className="py-8 text-3xl font-bold border-b-2">중요 공지</h1>
      <article className="flex flex-col justify-between w-100 flex-nowrap md:flex-wrap md:flex-row">
        {noticeArr.map((item, index) => (
          <a
            href={item.href}
            className="flex hover:text-red-500 py-[2vw] w-100 md:w-1/3 border-b-2 md:px-2"
            key={index}
          >
            <div className="flex flex-col w-2/3 font-bold">
              <h2>
                <BiLinkExternal size="15px" className="inline" />
                {item.title}
              </h2>
              <p>{item.time}</p>
            </div>

            <img src={item.img} alt="logo" className="w-1/3 h-auto" />
          </a>
        ))}
      </article>
    </section>
  );
}

export default ImportantNotice;
