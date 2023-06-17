import CategoryHeader from "./CategoryHeader";
import { clients } from "./details";

function PreviousClients() {
  function createLinksToClients() {
    return clients.map((client, index) => {
      return (
        <span key={client.id}>
          <a className="font-semibold" href={client.website} target="_blank">
            {client.name}
          </a>
          {index < clients.length - 1 ? ", " : ""}
        </span>
      );
    });
  }

  return (
    <>
      <div className="mt-8">
        <CategoryHeader text="Previous Clients"></CategoryHeader>
      </div>
      <div className="mb-8 mt-4 text-gray-800 dark:text-neutral-400">{createLinksToClients()}</div>
    </>
  );
}

export default PreviousClients;
