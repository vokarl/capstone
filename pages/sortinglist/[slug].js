import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import RenderInputField from "@/components/Form/Index";
import { v4 as uuidv4 } from "uuid";

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

export default function DynamicForm({ pileId, onNewTree }) {
  const router = useRouter();
  const treeFromSlug = router.query.slug;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const treeId = uuidv4();
    const recentTreeData = {
      pileId: pileId,
      treeId,
      treespecies: router.query.slug,
      ...data,
    };
    onNewTree(recentTreeData);
  }

  if (!treeFromSlug) {
    return;
  }

  const currentTree = treeData.find((element) => element.slug === treeFromSlug);
  const attributes = currentTree.attributes;

  return (
    <>
      <StyledHeading>Sortierung</StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        {attributes.auswuechse && <RenderInputField label="Auswüchse?" />}
        {attributes.wasserreiser && <RenderInputField label="Wasserreiser?" />}
        {attributes.drehwuchs && <RenderInputField label="Drehwuchs?" />}
        {attributes.mondring && <RenderInputField label="Mondring?" />}
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
        <StyledButton type="submit">Stamm hinzufügen</StyledButton>
        <StyledLink href={`/resultlist`}>result</StyledLink>
      </StyledForm>
    </>
  );
}
const StyledHeading = styled.h1`
  text-align: center;
  color: yellowgreen;
  background-color: rgb(54, 89, 0);
  margin: auto;
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
const StyledLink = styled(Link)`
  display: flex;
  margin-top: 5rem;
  color: green;
`;
