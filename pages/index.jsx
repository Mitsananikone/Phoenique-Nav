import Link from 'next/link';
import FlightSearchForm from './account/flightSearchForm';

import { userService } from 'services';

export default Home;

function Home() {
    return (
        <div >
            <div className="container w-full">
                <FlightSearchForm/>
            </div>
        </div>
    );
}
