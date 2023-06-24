import { Component } from 'solid-js';
import EmploymentHistory from './EmploymentHistory';
import NavHeader from './NavHeader';
import PersonalDetails from './PersonalDetails';

const DetailedView: Component = () => {
    return (
        <div class="container-sm mx-auto h-full max-w-screen-md p-5">
            <NavHeader />
            <PersonalDetails />
            <EmploymentHistory />
        </div>
    );
};

export default DetailedView;
