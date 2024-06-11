"use client";

export default function ViewModeBtn({ mode, action }: { mode: boolean, action: any }) {
  return (
    <div style={{height: 'min-content'}} className={`d-flex sig-column-gap-1 justify-content-end`}>
      <button onClick={() => {action(false)}} className={`
      px-1 sig-actions-button view-mode-button reset-button
      ${!mode ? 'view-mode-button--active' : ''}
      `}>
        <span className={`
        material-symbols-outlined material-symbols-outlined--bold sig-font-size-4--half d-block
      `}>view_carousel</span>
      </button>
      <button onClick={() => {action(true)}} className={`
      px-1 sig-actions-button view-mode-button reset-button
      ${!!mode ? 'view-mode-button--active' : ''}
      `}>
        <span className={`
        material-symbols-outlined material-symbols-outlined--bold sig-font-size-4--half d-block
      `}>list</span>
      </button>
    </div>

  );
}
