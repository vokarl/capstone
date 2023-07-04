import Link from "next/link";

const treeTypes = [
  "Eichenstammholz",
  "Buchenstammholz",
  "Douglasienstammholz",
  "Fichten - Tannenstammholz",
  "Kiefernstammholz",
];

export default function TreeType() {
  return (
    <>
      <h1>Baumsortenwahl</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        {treeTypes.map((treeType) => (
          <Link key={treeType} href={`/sortinglist/${treeType.toLowerCase()}`}>
            {" "}
            {/*${} hier einfaches template literal, da die Adresse ein string ist// dann to lowercase- wird im slug mit lower-
          case verglichen!!*/}
            {treeType}
          </Link>
        ))}
      </div>
    </>
  );
}
