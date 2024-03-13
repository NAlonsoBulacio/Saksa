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
    <div className="w-full flex justify-center items-center"
    >
      <div className="flex flex-wrap justify-center items-center px-10 notranslate text-center">
        <div className="w-full md:w-1/3 flex flex-wrap justify-center items-center">
          <div
            ref={ref1}
            className="w-full flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-700 font-bold w-32 md:w-40 text-6xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              +{count1}K
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-center px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              }  text-gray-700 md:text-lg 2xl:text-2xl`}
            >
              Metros cuadrados construidos.
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-wrap justify-center items-center border-l-2 border-green-600">
          <div
            ref={ref2}
            className="w-full flex justify-center items-center"
          >
            <p className="text-gray-700 font-bold text-center w-32 md:w-40 text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              {count2}
            </p>
          </div>
          <div className="w-full flex justify-center ">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-gray-700 text-center md:text-lg 2xl:text-2xl`}
            >
              Años De Trayectoria
            </h1>
          </div>
        </div>
        <div className="w-full h-full md:w-1/3 flex flex-wrap justify-center items-center border-l-2 border-green-600">
          <div
            ref={ref1}
            className="w-full h-2/3 flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-700 font-bold  w-32 md:w-40 text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              +45
            </p>
          </div>
          <div className="justify-center md:justify-center">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-gray-700 md:text-lg 2xl:text-2xl`}
            >
              Proyectos concluidos
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
