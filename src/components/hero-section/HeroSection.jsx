import { useState } from "react";
import Container from "@/components/container/Container.jsx";
import HeroText from "@/components/hero-section/HeroText.jsx";
import FormOutput from "@/components/hero-section/FormOutput.jsx";
import Form from "@/components/hero-section/Form.jsx";

function HeroSection() {
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

      return Number((weight / (height / 100) ** 2).toFixed(1));
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

      return Number(((totalPounds / totalInches ** 2) * 703).toFixed(1));
    }
  }

  function BMIRating() {
    const calculatedBMI = BMI;
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
    let idealWeightRange;

    if (unit === "metric") {
      const height = metric.height / 100;

      idealWeightRange = {
        min: (18.5 * height ** 2).toFixed(1),
        max: (24.9 * height ** 2).toFixed(1),
        unit: "kg",
      };
    }

    if (unit === "imperial") {
      const feet = Number(imperial.feet);
      const inches = Number(imperial.inches);
      const totalInches = feet * 12 + inches;

      const minLb = (18.5 * totalInches ** 2) / 703;
      const maxLb = (24.9 * totalInches ** 2) / 703;

      function toStonePounds(lb) {
        const total = Math.round(lb); // round to nearest lb
        const st = Math.floor(total / 14);
        const lbs = total % 14;
        return { st, lbs };
      }

      idealWeightRange = {
        min: toStonePounds(minLb),
        max: toStonePounds(maxLb),
        unit: ["st", "lb"],
      };
    }

    idealWeight =
      unit === "metric"
        ? `${idealWeightRange.min}${idealWeightRange.unit} and ${idealWeightRange.max}${idealWeightRange.unit}`
        : `${idealWeightRange.min.st}${idealWeightRange.unit[0]} ${idealWeightRange.min.lbs}${idealWeightRange.unit[1]} and ${idealWeightRange.max.st}${idealWeightRange.unit[0]} ${idealWeightRange.max.lbs}${idealWeightRange.unit[1]}`;

    return idealWeight;
  }

  function BMIReport() {
    return (
      <span>
        Your BMI suggests you're{" "}
        <span className="font-semibold">{BMIRating()}</span>. Your ideal weight
        is between <span className="font-semibold">{idealWeight()}</span>
      </span>
    );
  }

  const BMI = calculateBMI();
  const report = BMIReport();

  return (
    <section>
      <Container classNames="p-4">
        <HeroText />

        <div className="bg-white rounded-2xl shadow-lg p-4 border grid gap-8">
          <Form
            unit={unit}
            setUnit={setUnit}
            metric={metric}
            imperial={imperial}
            handleImperialChange={handleImperialChange}
            handleMetricChange={handleMetricChange}
          />

          <FormOutput BMI={BMI} report={report} />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
