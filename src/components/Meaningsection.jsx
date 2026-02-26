import Container from "@/components/container/Container.jsx";
import { BMI_CONTENT } from "@/data/bmi-content.jsx";
import CurvedLeft from "@/assets/images/pattern-curved-line-left.svg";
import EatingMan from "@/assets/images/image-man-eating.webp";

export default function MeaningSection({ BMIRatingValue }) {
  console.log(BMIRatingValue);

  const content = BMI_CONTENT.find((item) => item.key === BMIRatingValue);
  console.log(content);

  return (
    <section className="py-12">
      <Container classNames="grid gap-12 lg:gap-16 md:grid-cols-2 relative">
        <div>
          <img
            src={EatingMan}
            alt="a man eating"
            className="max-w-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid content-center justify-center gap-4">
          <h2 className="font-semibold text-preset-3 md:text-preset-2 leading-[1.1]">
            What your BMI result means
          </h2>
          <p>
            {BMIRatingValue ? content.description : "No BMI result available."}
          </p>
        </div>

        <img
          src={CurvedLeft}
          alt=""
          className="absolute hidden lg:block right-0 mr-18 -mt-18 size-40"
        />
      </Container>
    </section>
  );
}
