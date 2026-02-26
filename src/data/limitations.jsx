import Gender from "@/assets/images/icon-gender.svg";
import Age from "@/assets/images/icon-age.svg";
import Muscle from "@/assets/images/icon-muscle.svg";
import Pregnancy from "@/assets/images/icon-pregnancy.svg";
import Race from "@/assets/images/icon-race.svg";

export const limitations = [
  {
    img: Gender,
    id: 1,
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    img: Age,
    id: 2,
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    img: Muscle,
    id: 3,
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    img: Pregnancy,
    id: 4,
    title: "Pregnancy",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    img: Race,
    id: 5,
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];
