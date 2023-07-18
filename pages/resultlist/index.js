export default function SeparatePage({ pileId, trees }) {
  return (
    <>
      {trees.map((tree) => (
        <li key={tree.treeId}>Polter ID: {tree.treeId}</li>
      ))}
    </>
  );
}
