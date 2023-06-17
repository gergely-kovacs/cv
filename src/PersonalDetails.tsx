import CategoryHeader from './CategoryHeader';

function PersonalDetails() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Personal & Contact Details" />
            </div>
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-400">
                <p>
                    <span class="inline-block w-64 font-semibold">First name:</span>Gergely
                </p>
                <p>
                    <span class="inline-block w-64 font-semibold">Last name:</span>Kovacs
                </p>
                <p>
                    <span class="inline-block w-64 font-semibold">Date of birth:</span>1992. 04. 11.
                </p>
                <p>
                    <span class="inline-block w-64 font-semibold">Nationality:</span>hungarian
                </p>
                <p>
                    <span class="inline-block w-64 font-semibold">Highest degree:</span>Computer Science Engineering
                    (BSc)
                </p>
                <p>
                    <span class="inline-block w-64 font-semibold">Email:</span>gergely-kovacs@hotmail.com
                </p>
                <p>
                    <span class="inline-block w-64 font-semibold">Phone:</span>+36 70 389 7606
                </p>
                {/* TODO: add website link, add github account link */}
            </div>
        </>
    );
}

export default PersonalDetails;
