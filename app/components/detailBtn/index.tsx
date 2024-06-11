"use client"; 

export default function DetailBtn({ id }: { id: number }) {
  return (
    <button className={`px-1 sig-actions-button favourite-button reset-button`}>
      <a href={`/movie/${id}`} className="reset-link">
        <span className={`
        material-symbols-outlined material-symbols-outlined--bold sig-font-size-4--half d-block
      `}>mystery</span>
      </a>
    </button>
  );
}
