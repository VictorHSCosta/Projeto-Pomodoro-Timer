import styles from "~/styles/homepage.module.css";
import { Bar } from "./_components/bar";
import { Title } from "./_components/Title";
import { Clock } from "./_components/clock";

export default function HomePage() {
  return (
    <nav>
      <Bar />
      <Title content = "Pomodoro Timer"  />
      <Clock time = "25:00" />
    </nav>
  );
}