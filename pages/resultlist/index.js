export default function SeparatePage({ pileId, trees }) {
  return (
    <>
      <ul>
        {trees.map((tree) => (
          <li key={tree.treeId}>Polter ID: {tree.treeId}</li>
        ))}
      </ul>
    </>
  );
}
