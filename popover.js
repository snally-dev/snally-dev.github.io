const pops = Array.from(document.querySelectorAll(".snally-pop"));

function closeAll(except = null) {
  for (const pop of pops) {
    if (pop === except) continue;
    const btn = pop.querySelector(".snally-pop__trigger");
    const panel = pop.querySelector(".snally-pop__panel");
    if (!btn || !panel) continue;
    btn.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
  }
}

for (const pop of pops) {
  const btn = pop.querySelector(".snally-pop__trigger");
  const panel = pop.querySelector(".snally-pop__panel");
  if (!btn || !panel) continue;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    closeAll(pop);
    btn.setAttribute("aria-expanded", String(!isOpen));
    panel.setAttribute("aria-hidden", String(isOpen));
  });

  panel.addEventListener("click", (e) => e.stopPropagation());

  pop.addEventListener("focusout", (e) => {
    if (!pop.contains(e.relatedTarget)) {
      closeAll();
    }
  });
}

document.addEventListener("click", () => closeAll());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});
