import { useRouter } from "next/router";
import { Fragment } from "react";
import ErrorAlert from "../../components/error-alert/error-alert";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummy-data";
export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear; //cast to int
  const numMonth = +filteredMonth; //cast to int

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Filtri non validi. Per favore controlla.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Tutti gli eventi</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Non sono stati trovati eventi per i filtri selezionati.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Tutti gli eventi</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
