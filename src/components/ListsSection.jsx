import Container from "@/components/container/Container.jsx";
import { listContents } from "@/data/lists-content.jsx";

function ListsSection() {
  return (
    <section className="py-12">
      <Container classNames="p-8 bg-secondary/30 py-12 rounded-2xl ">
        <ul className="grid gap-8 lg:grid-cols-3">
          {listContents.map((item) => (
            <List
              key={item.id}
              title={item.title}
              description={item.description}
              src={item.img}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function List({ src, title, description }) {
  return (
    <li className="flex items-center gap-6 lg:flex-col lg:items-start">
      <img src={src} alt="" className="size-16" />
      <div>
        <h3 className="text-preset-4 ">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </li>
  );
}

export default ListsSection;
