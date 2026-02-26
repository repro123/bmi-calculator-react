import Container from "@/components/container/Container.jsx";
import HeroText from "@/components/hero-section/HeroText.jsx";
import FormOutput from "@/components/hero-section/FormOutput.jsx";
import Form from "@/components/hero-section/Form.jsx";

function HeroSection({
  unit,
  setUnit,
  metric,
  imperial,
  handleImperialChange,
  handleMetricChange,
  BMI,
  report,
}) {
  return (
    <section className="py-12">
      <Container classNames="flex flex-col items-center gap-12 lg:gap-16 lg:grid lg:grid-cols-2">
        <HeroText />

        <div className="bg-white rounded-2xl shadow-lg p-4 grid gap-8 w-full">
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
