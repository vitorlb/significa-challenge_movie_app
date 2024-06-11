import Image from "next/image";
import styles from "./page.module.css";
import PageFrame from "./components/pageFrame";
import ThumbList from "./components/thumbList";
export default function Home() {
  return (
    <PageFrame>
      <h1 className="m-0 pt-4">Cosmic frame 🛰️</h1>
      <span className="sig-text-label">To infinty, and beyond!</span>
      <ThumbList />
      <div className="weekly-line my-5">
        <h4 className="sig-color-primary sig-font-size-6"><em>"Run, you fools!"</em></h4>
        <p className="sig-text-label">Gandalf the grey</p>
      </div>
      <ThumbList hideSearch={true} favourites={true} />
    </PageFrame>
  );
}
