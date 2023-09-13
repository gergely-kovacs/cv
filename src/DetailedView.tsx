import { Component } from 'solid-js';
import EmploymentHistory from './EmploymentHistory';
import NavHeader from './NavHeader';

const DetailedView: Component = () => {
    return (
        <div class="container-sm mx-auto h-full max-w-screen-md p-5">
            <NavHeader />
            <EmploymentHistory />
        </div>
    );
};

export default DetailedView;
