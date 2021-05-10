import { useRouter } from 'next/router';
import { getEventById, getAllEvents, getFeaturedEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import Head from 'next/head'
function EventDetailPage(props) {
    // const router = useRouter()
    // const event = getEventById(router.query.eventId);

    if (!props.event) {
        return <p className='center'> Loading</p>
    }
    return (
        <>
            <Head>
                <title>{props.event.title}</title>
                <meta name="description" content={props.event.description} />
            </Head>
            <EventSummary title={props.event.title} />
            <EventLogistics date={props.event.date} address={props.event.location} image={props.event.image} />
            <EventContent>
                <p>{props.event.description}</p>
            </EventContent>

        </>
    )

}
export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(event => (
        { params: { eventId: event.id } }
    ))
    return {
        paths: paths,
        fallback: true
        // fallback: 'blocking
    }
}
export async function getStaticProps(context) {
    const eventid = context.params.eventId;
    const event = await getEventById(eventid);
    return {
        props: {
            event: event
        }
    }
}
export default EventDetailPage;