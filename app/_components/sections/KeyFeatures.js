import { FiPackage } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";

function KeyFeatures({ features }) {
  return (
    <section className="w-screen py-5">
      {features.length && (
        <div className="mx-auto w-[80%] rounded-lg bg-primary px-12 py-12 text-white shadow-md">
          <div className="flex items-center gap-2">
            <FiPackage className="text-2xl" />
            <h3 className="text-xl font-bold">Key Features</h3>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="my-5 text-justify">
              {Object.entries(feature).map(([key, value], i) => (
                <div key={i} className="">
                  <MdOutlineShield className="inline text-xl" />
                  <span className="mx-2 text-base font-bold">{key}:</span>
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default KeyFeatures;
