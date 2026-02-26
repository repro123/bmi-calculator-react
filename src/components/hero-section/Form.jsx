function Form({
  unit,
  setUnit,
  metric,
  imperial,
  handleImperialChange,
  handleMetricChange,
}) {
  return (
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

export default Form;
