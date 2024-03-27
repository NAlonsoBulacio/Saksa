import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Counter.css";
const Counter = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(1);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const incrementCount = (currentCount, setCount, maxCount, increment) => {
    if (currentCount < maxCount) {
      setTimeout(() => {
        setCount(Math.min(currentCount + increment, maxCount));
      }, 500 / ((maxCount - currentCount) / increment));
    }
  };

  if (inView1) {
    incrementCount(count1, setCount1, 57, 1);
  }

  if (inView2) {
    incrementCount(count2, setCount2, 30, 1);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-wrap justify-between items-start lg:items-center px-0 lg:px-10 notranslate text-center gap-y-4 lg:space-y-0 ">
        <div className="w-[46%] md:w-1/3 flex flex-wrap justify-start items-start lg:items-center ">
          <div
            ref={ref2}
            className="w-full flex justify-center lg:justify-center items-start lg:items-center"
          >
            <p className="text-gray-300 font-bold text-center w-32 md:w-40 text-7xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              {count2}
            </p>
          </div>
          <div className="w-full flex justify-center ">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-emerald-400 text-center text-lg lg:text-xl 2xl:text-2xl`}
            >
              Años De Trayectoria
            </h1>
          </div>
        </div>
        <div className="w-[50%] h-full md:w-1/3 flex flex-wrap justify-center items-center lg:border-l-2 border-green-600">
          <div
            ref={ref1}
            className="w-full h-2/3 flex justify-center lg:justify-center items-center"
          >
            <p className="text-gray-300 font-bold text-center  w-32 md:w-40 text-7xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              +45
            </p>
          </div>
          <div className="w-full justify-center lg:justify-center">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-emerald-400 text-lg lg:text-xl 2xl:text-2xl text-center lg:text-center`}
            >
              Proyectos concluidos
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-wrap justify-center items-center lg:border-l-2 border-green-600">
          <div
            ref={ref1}
            className="w-full flex justify-center lg:justify-center md:justify-center items-center"
          >
            <p className="text-gray-300 font-bold w-32 md:w-40 text-7xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              +{count1}K
            </p>
          </div>
          <div className="w-full lg:w-full flex justify-center lg:justify-center px-0 lg:px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              }  text-emerald-400 text-lg lg:text-xl 2xl:text-2xl text-center`}
            >
              Metros cuadrados construidos.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
