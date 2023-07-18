import GlobalStyles from "../styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
  const [pileId, setPileId] = useState("");
  const [trees, setTrees] = useState([]);

  function generateRandomId() {
    const randomId = uuidv4();
    setPileId(randomId);
  }
  function handleNewTree(treeForm) {
    setTrees([...trees, treeForm]);
  }
  console.log(pileId);
  console.log(trees);
  return (
    <>
      <GlobalStyles />

      <Component
        {...pageProps}
        onRandomId={generateRandomId}
        pileId={pileId}
        onNewTree={handleNewTree}
        trees={trees}
      />
    </>
  );
}
