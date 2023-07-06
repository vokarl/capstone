import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

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

export default function DynamicForm() {
  const router = useRouter();
  const treeFromSlug = router.query.slug;

  if (!treeFromSlug) {
    return;
  }

  const currentTree = treeData.find((element) => element.slug === treeFromSlug);
  const attributes = currentTree.attributes;

  let inputNumber = 1;

  const renderInputField = (label) => {
    const inputId = `input$(inputNumber)`;
    inputNumber++;
    return (
      <div>
        <label htmlFor={inputId}>{label}</label>
        <input type="text" name={inputId} id={inputId} />
      </div>
    );
  };

  return (
    <div>
      <Heading>Formular</Heading>
      <StyledLink href="/treelist">← zurück</StyledLink>
      <StyledForm>
        {attributes.auswuechse && renderInputField("Auswüchse ?")}
        {attributes.wasserreiser && renderInputField("Wasserreiser vorhanden?")}
        {attributes.drehwuchs && renderInputField("Drehwuchs?")}
        {attributes.mondring && renderInputField("Mondring ?")}
        {attributes.einfachekrümmung && renderInputField("Einfache Krümmung?")}
        {attributes.sternriss && renderInputField("Sternriss?")}
        {attributes.frostriss && renderInputField("Frostriss?")}
        {attributes.ringrisse && renderInputField("Ringrisse?")}
        {attributes.insektenfraßgänge && renderInputField("Insektenfraßgänge")}
        {attributes.fäule && renderInputField("Fäule?")}
        {attributes.einfacherkernriss && renderInputField("Einfacher Kernriss")}
        {attributes.durchgehenderkernriss &&
          renderInputField("Durchgehender Kernriss?")}
        {attributes.weißfäule && renderInputField("Weißfäule")}
        {attributes.rotkern && renderInputField("Rotkern ?")}
        {attributes.spritzkern && renderInputField("Spritzkern ?")}
        {attributes.schlagschaden && renderInputField("Schlagschaden ?")}
        {attributes.rindenschaeden && renderInputField("Rindenschäden ?")}
        {attributes.weichfäule && renderInputField("Weichfäule ?")}
        {attributes.durchsnittlichejahrringbreite &&
          renderInputField("Durchschn. Jahrringbreite?")}
        {attributes.drehwuchs && renderInputField("Drehwuchs? (in cm)")}
        {attributes.exzentritätmarkröhre &&
          renderInputField("Exzentrische Markröhre ?")}

        {attributes.abholzigkeit && renderInputField("Abholzigkeit?")}
        {attributes.verfärbung && renderInputField("Verfärbung?")}
      </StyledForm>
    </div>
  );
}
const Heading = styled.h1`
  color: yellowgreen;
  background-color: darkgreen;
`;

const StyledLink = styled.a`
  display: flex;

  margin-top: 5rem;
  margin-bottom: 5rem;
  color: green;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  color: brown;
  padding-left: 2rem;
`;
