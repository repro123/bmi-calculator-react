function HeroText() {
  return (
    <div className="text-center grid gap-4 lg:text-left">
      <h1 className="text-preset-2 lg:text-preset-1 font-semibold max-w-[10ch] md:max-w-[15ch] mx-auto leading-[1.1]">
        Body Mass Index Calculator
      </h1>

      <p className="text-preset-6 text-grey-500">
        Better understand your weight in relation to your height using our body
        mass index (BMI) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </div>
  );
}

export default HeroText;
