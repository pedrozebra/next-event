import Button from "../ui/Button";
import classes from "./results-title.module.css";

export default function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("it-IT", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Eventi a {humanReadableDate}</h1>
      <Button link="/events">Visualizza tutti gli eventi</Button>
    </section>
  );
}
