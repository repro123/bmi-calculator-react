function FormOutput({ BMI, report }) {
  return (
    <div
      className={`bg-blue-500 rounded-2xl p-4 grid gap-8 ${!BMI && !report ? "" : "md:flex md:justify-between md:items-center md:pr-8"} md:rounded-l-2xl md:rounded-r-full`}
    >
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
      <p
        className={`text-preset-7 text-white ${!BMI && !report ? "" : "md:max-w-[20ch]"}`}
      >
        {report
          ? report
          : "Please enter your height and weight, and you'll see your BMI result here"}
      </p>
    </div>
  );
}

export default FormOutput;
