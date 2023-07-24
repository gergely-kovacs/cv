import CategoryHeader from './CategoryHeader';

function PersonalDetails() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Personal & Contact Details" />
            </div>
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-400">
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">First name:</div>
                    <div>Gergely</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">Last name:</div>
                    <div>Kovacs</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">Date of birth:</div>
                    <div>1992. 04. 11.</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">Nationality:</div>
                    <div>hungarian</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">Highest degree:</div>
                    <div>Computer Science Engineering (BSc)</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">Email:</div>
                    <div>gergely-kovacs@hotmail.com</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">Phone:</div>
                    <div>+36 70 389 7606</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">Github:</div>
                    <div>
                        <a target="_blank" href="https://github.com/gergely-kovacs">
                            gergely-kovacs
                        </a>
                    </div>
                </div>
                {/* TODO: add website link*/}
            </div>
        </>
    );
}

export default PersonalDetails;
