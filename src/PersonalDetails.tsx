import CategoryHeader from './CategoryHeader';

function PersonalDetails() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Personal & Contact Details" />
            </div>
            <div class="mt-4 mb-8 flex flex-col gap-2 px-1.5 text-gray-800 sm:gap-0 dark:text-neutral-300">
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
                    <div>Hungarian</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Highest degree:</div>
                    <div>Computer Science Engineering (BSc)</div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Email:</div>
                    <a href="mailto:gergely-kovacs@hotmail.com">gergely-kovacs@hotmail.com</a>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">Phone:</div>
                    <div class="flex flex-col gap-x-1.5 sm:flex-row">
                        <a href="tel:+36703897606">+36 70 389 7606,</a>
                        <a href="tel:+46769226158">+46 76 922 6158</a>
                    </div>
                </div>
                <div class="flex flex-wrap justify-between">
                    <div class="basis-full font-semibold sm:basis-auto">LinkedIn:</div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/geko92/">
                            geko92
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
                            gergely-kovacs.github.io/cv/
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalDetails;
