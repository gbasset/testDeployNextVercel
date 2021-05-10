
import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/EventList';
import Head from 'next/head'
function HomePage(props) {
    return (
        <div>
            <Head>
                <title>NextJs Homepage</title>
                <meta name="description" content="Find a lot of great events" />
            </Head>
            <h1>Homepage</h1>
            <EventList items={props.featuredEvents} />
        </div>
    )

}
export async function getStaticProps(context) {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            featuredEvents: featuredEvents
        },
        revalidate: 3600
    }
}
export default HomePage;