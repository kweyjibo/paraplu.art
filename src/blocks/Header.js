import CloudsAnimation from "../components/cloudsAnimation/CloudsAnimation";
import Quote from "../components/quote/Quote";

export default function Header() {
  return (
    <header className="header-main cell1">
      <Quote />
      <CloudsAnimation />
    </header>
  );
}
