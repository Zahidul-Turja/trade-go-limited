import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { MdOutlineShield } from "react-icons/md";
import { TbAlertTriangle } from "react-icons/tb";

function Safety({ safety }) {
  return (
    <section className="mx-auto w-full px-5 py-6 md:pb-big lg:px-big">
      <div className="rounded-lg border border-red-500 px-8 py-5">
        <h1 className="tranking-wide mb-2 flex items-center gap-2 text-base font-extrabold uppercase text-red-500 md:mb-4 md:text-xl">
          <BsFillExclamationTriangleFill className="inline text-2xl text-red-500" />
          Safety Precautions
        </h1>

        {safety.map((app, index) => (
          <div key={index} className="my-5 text-justify text-red-500">
            {Object.entries(app).map(([key, value], i) => (
              <div key={i} className="">
                <MdOutlineShield className="inline text-xl" />
                <span
                  className={`mx-2 text-base font-bold ${isNaN(key) ? "" : "hidden"}`}
                >
                  {key}:
                </span>
                <span className="text-sm">{value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Safety;
