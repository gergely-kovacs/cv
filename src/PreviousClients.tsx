import { For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import { clients } from './details';

function PreviousClients() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Past Clients" />
            </div>
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-400">
                <For each={clients}>
                    {(client, index) => {
                        return (
                            <div>
                                <a class="font-semibold" href={client.website} target="_blank">
                                    {client.name}
                                </a>
                                {index() < clients.length - 1 ? ', ' : ''}
                            </div>
                        );
                    }}
                </For>
            </div>
        </>
    );
}

export default PreviousClients;
