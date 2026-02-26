import Container from "@/components/container/Container.jsx";
import { limitations } from "@/data/limitations.jsx";

function LimitationsSection() {
  return (
    <section className="py-12">
      <Container classNames="relative">
        <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left lg:absolute lg:top-0 lg:left-0 lg:w-[40%]">
          <h2 className="text-preset-3 lg:text-preset-2">Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-6 mt-12 lg:w-[80%] lg:ml-auto lg:grid-rows-3 lg:grid-cols-[repeat(10,4.65vw)] lg:mt-0">
          {limitations.map((item) => (
            <Limitation
              src={item.img}
              title={item.title}
              description={item.description}
              key={item.id}
              id={item.id}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Limitation({ src, title, description, id }) {
  const styles = [
    {
      id: 1,
      style: "lg:row-start-1 lg:col-start-6 ",
    },
    {
      id: 2,
      style: "lg:row-start-2 lg:col-start-3 ",
    },
    {
      id: 3,
      style: "lg:row-start-2 lg:col-start-7 ",
    },
    {
      id: 4,
      style: "lg:row-start-3 lg:col-start-1 ",
    },
    {
      id: 5,
      style: "lg:row-start-3 lg:col-start-5 ",
    },
  ];

  return (
    <li
      className={`shadow-2xl shadow-secondary/70 drop-shadow-2xl rounded-2xl p-4 lg:row-span-1 lg:col-span-4 ${styles.find((item) => item.id === id).style}`}
    >
      <div className="flex items-center gap-2">
        <img src={src} alt="" />
        <h3>{title}</h3>
      </div>
      <p className="mt-6">{description}</p>
    </li>
  );
}

export default LimitationsSection;
