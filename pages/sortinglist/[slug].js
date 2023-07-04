import Link from "next/link";
import { useRouter } from "next/router";

const treeData = [
  { slug: "eichenstammholz", attributes: { auswuechse: true, aeste: false } },
  {
    slug: "fichten - tannenstammholz",
    attributes: { auswuechse: false, aeste: true },
  },
  {
    slug: "buchenstammholz",
    attributes: {
      auswuechse: true,
      aeste: true,
      wasserreiser: true,
      drehwuchs: true,
      mondring: true,
      einfachekrümmung: true,
    },
  },
  { slug: "kiefernstammholz", attributes: { auswuechse: true, aeste: true } },
  {
    slug: "douglasienstammholz",
    attributes: { auswuechse: true, aeste: true },
  },
];

// Was macht useRouter() genau?

export default function DynamicForm() {
  const router = useRouter();
  const treeFromSlug = router.query.slug;

  if (!treeFromSlug) {
    return;
  }

  // console.log("treeFromSlug", treeFromSlug);

  const currentTree = treeData.find((element) => element.slug === treeFromSlug);
  const attributes = currentTree.attributes;

  // console.log("currentTree", currentTree);
  // console.log("attributes", attributes);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Formular</h1>
      <Link href="/treelist">← zurück</Link>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {attributes.auswuechse && (
          <div>
            <label htmlFor="input1">Auswüchse</label>
            <input type="text" name="input1" id="input1" />
          </div>
        )}

        {attributes.aeste && (
          <div>
            <label htmlFor="input2">Äste</label>
            <input type="text" name="input2" id="input2" />
          </div>
        )}
        {attributes.wasserreiser && (
          <div>
            <label htmlFor="input1">Wasserreiser</label>
            <input type="text" name="input1" id="input1" />
          </div>
        )}
      </form>
    </div>
  );
}
