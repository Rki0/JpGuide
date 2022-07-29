import { FamousArr } from "./Interface";

function FamousPlace() {
  return (
    <div className="mb-5">
      <h1 className="py-8 text-3xl font-bold pl-[5.33333vw]">인기 장소</h1>

      <section className="px-[5.33333vw]">
        {FamousArr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mb-1 md:flex-row md:items-start"
          >
            <div className="block w-full mb-2 md:mr-2 md:w-1/2">
              <a className="relative w-full" href={item.images.bigImg.href}>
                <img
                  src={item.images.bigImg.img}
                  alt="big"
                  className="w-full rounded"
                />

                <h2 className="absolute text-[24px] md:text-[28px] font-bold text-white bottom-[1vh] left-[1vw]">
                  {item.images.bigImg.title}
                </h2>
              </a>
            </div>

            <div className="flex grid w-full grid-cols-2 gap-2 mb-1 md:w-1/2 md:mb-0">
              {item.images.smallImg.map((small, index) => (
                <a href={small.href} key={index}>
                  <div className="relative h-auto">
                    <img
                      src={small.img}
                      alt="small"
                      className="w-full rounded "
                    />

                    <h2 className="absolute text-[16px] md:text-[18px] font-bold text-white bottom-[1vh] left-[1vw]">
                      {small.title}
                    </h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FamousPlace;
