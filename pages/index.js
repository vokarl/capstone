import AddPile from "../components/AddPile/Index";
import { HeadingStart } from "../components/HeadingStart";

export default function HomePage({ onRandomId }) {
  return (
    <>
      <AddPile onRandomId={onRandomId} />
    </>
  );
}
