import Header from "@/components/header/Header.jsx";
import Container from "@/components/container/Container.jsx";
import HeroText from "@/components/heroSection/HeroText.jsx";
import { useState } from "react";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Main() {
  const [unit, setUnit] = useState("metric");
  const [metric, setMetric] = useState({
    height: "",
    weight: "",
  });
  const [imperial, setImperial] = useState({
    feet: "",
    inches: "",
    stone: "",
    pounds: "",
  });

  function handleMetricChange(e, key) {
    const value = e.target.value;

    if (value < 0) return;

    if (key === "height" && value > 300) return;
    if (key === "weight" && value > 500) return;

    setMetric((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleImperialChange(e, key) {
    const value = e.target.value;

    if (value < 0) return;

    // overflow protection
    if (key === "inches" && value > 11) return;
    if (key === "pounds" && value > 13) return;

    if (key === "feet" && value > 8) return;
    if (key === "stone" && value > 80) return;

    setImperial((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <main>
      <section>
        <Container classNames="p-4">
          <HeroText />

          <div className="bg-white rounded-2xl shadow-lg p-4 border grid gap-8">
            <form>
              <fieldset className="grid gap-6">
                <legend className="text-preset-4 font-semibold">
                  Enter your details below
                </legend>

                <FormRadioInputs setUnit={setUnit} />

                <div
                  className={`grid gap-4 ${unit === "metric" ? "md:grid-cols-2" : ""}`}
                >
                  {unit === "metric"
                    ? Array.from({ length: 2 }).map((_, i) => {
                        const val = i === 0 ? "height" : "weight";
                        return (
                          <div key={i} className="grid gap-2">
                            <label
                              htmlFor={val}
                              className="capitalize text-preset-7 text-grey-500 w-fit"
                            >
                              {val}
                            </label>
                            <div className="border rounded-lg flex items-center gap-2 px-2 focus-within:ring-2 focus-within:ring-blue-500 has-hover:border-blue-500">
                              <input
                                type="number"
                                min="0"
                                step="any"
                                required
                                name={val}
                                id={val}
                                value={metric[val]}
                                onChange={(e) => handleMetricChange(e, val)}
                                className="border-0 outline-0 w-full h-10 text-lg cursor-pointer"
                              />
                              <span className="text-blue-500 font-semibold">
                                {val === "height" ? "cm" : "kg"}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    : Array.from({ length: 2 }).map((_, i) => {
                        const val = i === 0 ? "height" : "weight";
                        return (
                          <fieldset key={i}>
                            <legend className="capitalize text-preset-7 text-grey-500 w-fit">
                              {val}
                            </legend>

                            <div className="grid grid-cols-2 gap-4 mt-2">
                              {Array.from({ length: 2 }).map((_, ind) => {
                                let inputUnit;
                                if (val === "height") {
                                  inputUnit = ind === 0 ? "feet" : "inches";
                                } else {
                                  inputUnit = ind === 0 ? "stone" : "pounds";
                                }

                                return (
                                  <React.Fragment key={inputUnit}>
                                    <label
                                      htmlFor={inputUnit}
                                      className="sr-only"
                                    >
                                      {inputUnit}
                                    </label>
                                    <div className="border rounded-lg flex items-center gap-2 px-2 focus-within:ring-2 focus-within:ring-blue-500 has-hover:border-blue-500">
                                      <input
                                        type="text"
                                        required
                                        name={inputUnit}
                                        id={inputUnit}
                                        value={imperial[inputUnit]}
                                        onChange={(e) =>
                                          handleImperialChange(e, inputUnit)
                                        }
                                        className="border-0 outline-0 w-full h-10 text-lg cursor-pointer"
                                      />
                                      <span className="text-blue-500 font-semibold">
                                        {inputUnit === "feet" && "ft"}
                                        {inputUnit === "stone" && "st"}
                                        {inputUnit === "inches" && "in"}
                                        {inputUnit === "pounds" && "lbs"}
                                      </span>
                                    </div>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </fieldset>
                        );
                      })}
                </div>
              </fieldset>
            </form>

            <div className="bg-blue-500 rounded-2xl p-4 grid gap-4 md:rounded-r-full">
              <p className="text-preset-4 text-white font-semibold">Welcome</p>
              <p className="text-preset-7 text-white">
                Please enter your height and you'll see your BMI result here
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function FormRadioInputs({ setUnit }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <label
          key={index}
          className="flex items-center gap-2 cursor-pointer has-checked:font-semibold"
        >
          <input
            type="radio"
            name="unit"
            id={`unit-${index}`}
            value={index === 0 ? "metric" : "imperial"}
            onChange={(e) => setUnit(e.target.value)}
          />
          {index === 0 ? "Metric" : "Imperial"}
        </label>
      ))}
    </div>
  );
}

export default App;
