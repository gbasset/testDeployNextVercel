
import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/EventList';
import ResultTitle from '../../components/results-title/results-title'
import ErrorAlerte from '../../components/UI/error-alert/error-alert'
import Btn from '../../components/UI/Btn'
import Head from 'next/head'
function FilteredEventPage(props) {

    console.log("props", props);
    const pageHeadData = (
        <Head>
            <title>Filtered events</title>
            <meta name="description" content={`All event for ${props.year} , ${props.month} `} />
        </Head>
    )
    if (props.hasError) {
        return (
            <>
                {pageHeadData}
                <ErrorAlerte>  <p>A problem with filter</p></ErrorAlerte>
                <div className="center">
                    <Btn link='/events'>Show all events</Btn>
                </div>
            </>
        )
    }

    if (!props.filteredEvents || props.filteredEvents.length === 0) {
        return (
            <>
                {pageHeadData}
                <ErrorAlerte>  <p>No event</p></ErrorAlerte>
                <div className="center">
                    <Btn link='/events'>Show all events</Btn>
                </div>
            </>
        )
    }

    const date = new Date(props.year, props.month - 1)
    return (
        <>
            {pageHeadData}
            <ResultTitle date={date} />
            <EventList items={props.filteredEvents} />
        </>
    )

}
export async function getServerSideProps(context) {
    const { params } = context;
    const filteredData = params.slug;
    const filteredYear = filteredData[0]
    const filteredMonth = filteredData[1]
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth
    })
    console.log("filteredEvents", filteredEvents);
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
            props: {
                hasError: true
            },
            // notFound: true,
            // redirect: {
            //     destination: '/error'
            // }
        }
    }
    return {
        props: {
            filteredEvents: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }
}
export default FilteredEventPage;