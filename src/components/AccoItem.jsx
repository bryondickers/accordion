import addBtn from "../assets/add.svg";
import minusBtn from "../assets/minus.svg";
export default function AccoItem({
  heading,
  content,
  isActive,
  handleShowBtn,
  handleHideBtn,
  bgColor,
  textColor,
}) {
  return (
    <div className="mb-8 min-w-[356px] text-lg md:min-w-[717px] lg:min-w-[1286px]">
      <div className={`${bgColor} mb-4 px-6 flex justify-between items-center`}>
        <h2 className="font-set">{heading}</h2>
        <button className="w-[50px] md:w-[70px]" onClick={handleShowBtn}>
          <img src={addBtn} />
        </button>
      </div>
      {isActive && (
        <div className={`py-4 ${bgColor} px-6`}>
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <h2 className="font-set">{heading}</h2>
            <button className="w-[50px] md:w-[70px]" onClick={handleHideBtn}>
              <img src={minusBtn} />
            </button>
          </div>
          <p
            className={`${textColor} font-set leading-[20px] md:leading-[48px] lg:leading-[64px]`}
          >
            {content}
          </p>
        </div>
      )}
    </div>
  );
}
