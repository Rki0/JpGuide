import { hightlightArr } from "./Interface";

function TravelHighlight() {
  return (
    <div>
      <h1 className="py-8 text-3xl font-bold pl-[5.33333vw]">
        여행 하이라이트
      </h1>
      <div>
        {hightlightArr.map((item, index) => (
          <a href={item.href} className="relative">
            <h2 className="absolute p-5 font-bold text-white border-2 border-white rounded shadow-lg drop-shadow-lg">
              {item.title}
            </h2>
            <img src={item.img} alt="monthly japan" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TravelHighlight;
