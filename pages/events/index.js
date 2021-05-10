

import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/event-detail/eventSearch'
import { Router, useRouter } from 'next/router'
import Head from 'next/head'
function EventsPage(props) {

    const router = useRouter()
    function finEventSearch(year, month) {
        const fullPath = `events/${year}/${month}`
        router.push(fullPath)
    }
    console.log(process.env.test);
    return (
        <div>
            <Head>
                <title>NextJs Events</title>
                <meta name="description" content="Find a lot of great events" />
            </Head>
            <h1>all events</h1>
            <EventSearch onSearch={finEventSearch} />
            <EventList items={props.events} />
        </div>
    )

}
export async function getStaticProps(context) {
    const events = await getAllEvents();
    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}
export default EventsPage;