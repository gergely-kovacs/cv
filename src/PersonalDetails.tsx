import CategoryHeader from './CategoryHeader';

function PersonalDetails() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Personal & Contact Details" />
            </div>
            <div class="mb-8 mt-4 flex flex-col gap-2 text-gray-800 dark:text-neutral-300 sm:gap-0">
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">First name:</div>
                    <div>Gergely</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Last name:</div>
                    <div>Kovacs</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Date of birth:</div>
                    <div>1992. 04. 11.</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Nationality:</div>
                    <div>hungarian</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Highest degree:</div>
                    <div>Computer Science Engineering (BSc)</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Email:</div>
                    <div>gergely-kovacs@hotmail.com</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Phone:</div>
                    <div>+36 70 389 7606</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">LinkedIn:</div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/gergely-kov%C3%A1cs-473551293/">
                            gergely-kovács-473551293
                        </a>
                    </div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Github:</div>
                    <div>
                        <a target="_blank" href="https://github.com/gergely-kovacs">
                            gergely-kovacs
                        </a>
                    </div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Detailed CV:</div>
                    <div>
                        <a target="_blank" href="https://gergely-kovacs.github.io/cv/">
                            gergely-kovacs.github.io/cv
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalDetails;
