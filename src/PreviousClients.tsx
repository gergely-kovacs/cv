import { For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import { clients } from './details';

function PreviousClients() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Previous Clients" />
            </div>
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-400">
                <For each={clients}>
                    {(client, index) => {
                        return (
                            <span>
                                <a class="font-semibold" href={client.website} target="_blank">
                                    {client.name}
                                </a>
                                {index() < clients.length - 1 ? ', ' : ''}
                            </span>
                        );
                    }}
                </For>
            </div>
        </>
    );
}

export default PreviousClients;
