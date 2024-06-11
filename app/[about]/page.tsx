import Thumb from "../components/thumbnail";
import ThumbList from "../components/thumbList";
import PageFrame from "../components/pageFrame";
export default function Home() {
  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3000/api/authApi');
  }
  handleSubmit();
  return (
    <PageFrame>
      <h1 className="m-0 pt-4">Cosmic frame 🛰️</h1>
      <span className="sig-text-label">To infinty, and beyond!</span>
      <ThumbList />
    </PageFrame>
  );
}
