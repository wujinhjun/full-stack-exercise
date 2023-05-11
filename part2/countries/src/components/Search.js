export default function Search({ query, handleQuery }) {
  return (
    <p>
      find countries <input value={query} onChange={handleQuery} />
    </p>
  );
}
