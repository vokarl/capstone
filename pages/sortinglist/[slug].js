import Link from "next/link";
import { useRouter } from "next/router";

const treeData = [
  {
    slug: "eichenstammholz",
    attributes: {
      aeste: false,
      wasserreiser: true,
      auswuechse: true,
      drehwuchs: true,
      mondring: true,
      einfachekrümmung: true,
      sternriss: true,
      frostriss: true,
      ringrisse: true,
      insektenfraßgänge: true,
      fäule: true,
    },
  },
  {
    slug: "buchenstammholz",
    attributes: {
      aeste: false,
      wasserreiser: false,
      auswuechse: false,
      drehwuchs: true,
      mondring: false,
      einfachekrümmung: true,
      einfacherkernriss: true,
      durchgehenderkernriss: true,
      sternriss: true,
      frostriss: true,
      ringrisse: true,
      insektenfraßgänge: true,
      fäule: true,
      weißfäule: true,
      rotkern: true,
      spritzkern: true,
      schlagschaden: true,
      rindenschaeden: true,
    },
  },
  {
    slug: "douglasien und lärchenstammholz",
    attributes: {
      aeste: false,
      wasserreiser: false,
      auswuechse: false,
      drehwuchs: false,
      durchsnittlichejahrringbreite: true,
      drehwuchs: true,
      exzentritätmarkröhre: true,
      einfachekrümmung: true,
      abholzigkeit: true,
      mondring: false,

      sternriss: false,
      frostriss: false,
      ringrisse: false,
      insektenfraßgänge: true,
      fäule: true,
    },
  },
  {
    slug: "fichten und tannenstammholz",
    attributes: {
      aeste: false,
      wasserreiser: false,
      auswuechse: false,
      drehwuchs: false,
      durchsnittlichejahrringbreite: true,
      drehwuchs: true,
      exzentritätmarkröhre: true,
      einfachekrümmung: true,
      abholzigkeit: true,
      mondring: false,

      sternriss: false,
      frostriss: false,
      ringrisse: false,
      insektenfraßgänge: true,
      fäule: true,
      verfärbung: true,
    },
  },
  {
    slug: "kiefernstammholz",
    attributes: {
      aeste: false,
      wasserreiser: false,
      auswuechse: false,
      drehwuchs: false,
      durchsnittlichejahrringbreite: true,
      drehwuchs: true,
      exzentritätmarkröhre: true,
      einfachekrümmung: true,
      abholzigkeit: true,
      mondring: false,

      sternriss: false,
      frostriss: false,
      ringrisse: false,
      insektenfraßgänge: true,
      fäule: true,
      verfärbung: true,
    },
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
      <Link
        href="/treelist"
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "5rem",
        }}
      >
        ← zurück
      </Link>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {attributes.auswuechse && <div>Auswüchse</div>}

        {attributes.aeste && <div>Äste????</div>}
        {attributes.wasserreiser && <div>Wasserreiser</div>}

        {attributes.drehwuchs && <div>Drehwuchs (cm)</div>}
        {attributes.mondring && <div>Mondring ?</div>}
        {attributes.einfachekrümmung && <div>Einfache Krümmung ?</div>}

        {attributes.sternriss && <div>Sternriss ?</div>}

        {attributes.frostriss && <div>Frostriss ?</div>}
        {attributes.ringrisse && <div>Ringrisse- / schäle?</div>}
        {attributes.insektenfraßgänge && <div>Insektenfraßgänge ?</div>}
        {attributes.fäule && <div>Fäule ?</div>}

        {attributes.einfacherkernriss && <div>Einfacher Kernriss?</div>}
        {attributes.durchgehenderkernriss && (
          <div>Durchgehender einfacher Kernriss ?</div>
        )}

        {attributes.insektenfraßgänge && <div>Insektenfraßgänge ?</div>}
        {attributes.weißfäule && <div>Weißfäule ?</div>}
        {attributes.rotkern && <div>Rotkern ?</div>}
        {attributes.spritzkern && <div>Spritzkern ?</div>}
        {attributes.schlagschaden && <div>Schlagschaden ?</div>}
        {attributes.rindenschaeden && <div>Rindenschäen ?</div>}
        {attributes.weichfäule && <div>Weichfäule ?</div>}

        {attributes.durchsnittlichejahrringbreite && (
          <div>⌀ Jahrringbreite ?</div>
        )}
        {attributes.drehwuchs && <div>Drehwuchs ?</div>}
        {attributes.exzentritätmarkröhre && (
          <div>Exzentrität der Markröhre ?</div>
        )}
        {attributes.abholzigkeit && <div>Abholzigkeit ?</div>}
        {attributes.verfärbung && <div>Verfärbung ?</div>}
      </form>
    </div>
  );
}
