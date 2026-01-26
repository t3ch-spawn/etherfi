import plant from "../assets/plant.svg";
import money_bag from "../assets/money_bag.svg";
import liquid from "../assets/liquid.svg";
import fashion_bag from "../assets/fashion_bag.svg";

export default function Navbar() {
  const icons = [plant, liquid, money_bag, fashion_bag];

  return (
    <nav>
      <div className="flex justify-start items-center gap-[22px]">
        {icons.map((icon) => {
          return <img src={icon} alt="" />;
        })}
      </div>
    </nav>
  );
}
