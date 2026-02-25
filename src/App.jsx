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

    if (key === "inches" && value > 11) return;
    if (key === "pounds" && value > 13) return;

    if (key === "feet" && value > 8) return;
    if (key === "stone" && value > 80) return;

    setImperial((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function calculateBMI() {
    if (unit === "metric") {
      const { height, weight } = metric;
      if (!height || !weight) return null;

      return (weight / (height / 100) ** 2).toFixed(1);
    }

    if (unit === "imperial") {
      const feet = Number(imperial.feet);
      const inches = Number(imperial.inches);
      const stone = Number(imperial.stone);
      const pounds = Number(imperial.pounds);

      if (!feet || !stone) return null;

      const totalPounds = stone * 14 + pounds;
      const totalInches = feet * 12 + inches;

      if (!totalInches) return null;

      return ((totalPounds / totalInches ** 2) * 703).toFixed(1);
    }
  }

  function BMIRating() {
    const calculatedBMI = calculateBMI();
    let BMIRating;
    if (calculatedBMI < 18.5) BMIRating = "underweight";
    if (calculatedBMI >= 18.5 && calculatedBMI < 25)
      BMIRating = "normal weight";
    if (calculatedBMI >= 25 && calculatedBMI < 30) BMIRating = "overweight";
    if (calculatedBMI >= 30) BMIRating = "obese";

    return BMIRating;
  }

  function idealWeight() {
    let idealWeight;
    if (unit === "metric") {
      const height = metric.height / 100;
      idealWeight = {
        min: (18.5 * height ** 2).toFixed(1),
        max: (24.9 * height ** 2).toFixed(1),
      };
    }
    if (unit === "imperial") {
      const feet = Number(imperial.feet);
      const inches = Number(imperial.inches);
      const totalInches = feet * 12 + inches;
      idealWeight = {
        min: ((18.5 * totalInches ** 2) / 703).toFixed(1),
        max: ((24.9 * totalInches ** 2) / 703).toFixed(1),
      };
    }
    return idealWeight;
  }

  function BMIReport() {
    return (
      <span>
        Your BMI suggests you're{" "}
        <span className="font-semibold">{BMIRating()}</span>. Your ideal weight
        is between <span className="font-semibold">{idealWeight()?.min}kg</span>{" "}
        and <span className="font-semibold">{idealWeight()?.max}kg</span>.
      </span>
    );
  }

  const BMI = calculateBMI();
  const report = BMIReport();

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

                <FormRadioInputs setUnit={setUnit} unit={unit} />

                <div
                  className={`grid gap-4 ${unit === "metric" ? "md:grid-cols-2" : ""}`}
                >
                  {unit === "metric" ? (
                    <MetricInputs
                      metric={metric}
                      handleMetricChange={handleMetricChange}
                    />
                  ) : (
                    <ImperialInputs
                      imperial={imperial}
                      handleImperialChange={handleImperialChange}
                    />
                  )}
                </div>
              </fieldset>
            </form>

            <div className="bg-blue-500 rounded-2xl p-4 grid gap-8 md:rounded-r-full">
              <p className="text-preset-4 text-white font-semibold">
                {BMI ? (
                  <>
                    <span className="font-medium">Your BMI is...</span>
                    <span className="block text-preset-2">{BMI}</span>
                  </>
                ) : (
                  "Welcome"
                )}
              </p>
              <p className="text-preset-7 text-white">
                {report
                  ? report
                  : "Please enter your height and weight, and you'll see your BMI result here"}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function FormRadioInputs({ unit, setUnit }) {
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
            checked={unit === (index === 0 ? "metric" : "imperial")}
            className="w-4 h-4 accent-blue-500 cursor-pointer"
          />
          {index === 0 ? "Metric" : "Imperial"}
        </label>
      ))}
    </div>
  );
}

function MetricInputs({ metric, handleMetricChange }) {
  return Array.from({ length: 2 }).map((_, i) => {
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
  });
}

function ImperialInputs({ imperial, handleImperialChange }) {
  return Array.from({ length: 2 }).map((_, i) => {
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
                <label htmlFor={inputUnit} className="sr-only">
                  {inputUnit}
                </label>
                <div className="border rounded-lg flex items-center gap-2 px-2 focus-within:ring-2 focus-within:ring-blue-500 has-hover:border-blue-500">
                  <input
                    type="text"
                    required
                    name={inputUnit}
                    id={inputUnit}
                    value={imperial[inputUnit]}
                    onChange={(e) => handleImperialChange(e, inputUnit)}
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
  });
}

export default App;
