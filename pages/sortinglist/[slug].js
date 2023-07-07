import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import RenderInputField from "@/components/Form/Index";

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

  return (
    <>
      <Heading>Sortierung</Heading>
      <StyledLink href="/treelist">← zurück</StyledLink>
      <StyledForm>
        {attributes.auswuechse && <RenderInputField label="Auswüchse?" />}
        {attributes.wasserreiser && <RenderInputField label="Wasserreiser?" />}
        {attributes.drehwuchs && <RenderInputField label="Drehwuchs?" />}
        {attributes.mondring && <RenderInputField label="Monring?" />}
        {attributes.einfachekrümmung && (
          <RenderInputField label="Einfache Krümmung?" />
        )}
        {attributes.sternriss && <RenderInputField label="Sternriss?" />}
        {attributes.frostriss && <RenderInputField label="Frostriss?" />}
        {attributes.ringrisse && <RenderInputField label="Ringrisse?" />}
        {attributes.insektenfraßgänge && (
          <RenderInputField label="Insektenfraßgänge?" />
        )}
        {attributes.fäule && <RenderInputField label="Fäule?" />}
        {attributes.einfacherkernriss && (
          <RenderInputField label="Einfacher Kernriss?" />
        )}
        {attributes.durchgehenderkernriss && (
          <RenderInputField label="Durchgehender Kernriss?" />
        )}
        {attributes.weißfäule && <RenderInputField label="Weißfäule?" />}
        {attributes.rotkern && <RenderInputField label="Rotkern?" />}
        {attributes.spritzkern && <RenderInputField label="Spritzkern?" />}
        {attributes.schlagschaden && (
          <RenderInputField label="Schlagschaden?" />
        )}
        {attributes.rindenschaeden && (
          <RenderInputField label="Rindenschäden?" />
        )}
        {attributes.weichfäule && <RenderInputField label="Weichfäule?" />}
        {attributes.durchsnittlichejahrringbreite && (
          <RenderInputField label="Durchsnittliche Jahrringbreite" />
        )}
        {attributes.drehwuchs && (
          <RenderInputField label="Drehwuchs? (in cm)" />
        )}
        {attributes.exzentritätmarkröhre && (
          <RenderInputField label="Exzentrische Markröhre?" />
        )}
        {attributes.abholzigkeit && <RenderInputField label="Abholzigkeit?" />}
        {attributes.verfärbung && <RenderInputField label="Verfärbung?" />}
        <StyledButton>Stamm hinzufügen</StyledButton>
      </StyledForm>
    </>
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
  gap: 0.5rem;
  color: gray;
  padding-left: 2rem;
  display: flex;
`;

const StyledButton = styled.button`
  border: 2px solid black;
  background-color: darkorange;
  padding: 1rem;
  font-size: 20px;

  align-content: flex-center;
`;
