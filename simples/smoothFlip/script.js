const allChecksbox = document.querySelector("#all"),
  filters = gsap.utils.toArray(".filter"),
  items = gsap.utils.toArray(".item");

allChecksbox.addEventListener("click", () => {
  filters.forEach((filter) => (filter.checked = allChecksbox.checked));
  updateFilters();
});

filters.forEach((filter) => {
  filter.addEventListener("click", updateFilters);
});

function updateFilters() {
  const state = Flip.getState(items),
    classes = filters
      .filter((checkbox) => checkbox.checked)
      .map((el) => `.${el.id}`),
    matches = classes.length ? gsap.utils.toArray(classes.join(",")) : classes;
  items.forEach(
    (item) =>
      (item.style.display =
        matches.indexOf(item) === -1 ? "none" : "inline-flex")
  );
  Flip.from(state, {
    duration: 0.7,
    scale: true,
    absolute: true,
    stagger: 0.08,
    ease: "power1.inOut",
    onEnter: (items) =>
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1 }
      ),
    onLeave: (items) => gsap.to(items, { opacity: 0, scale: 0, duration: 1 }),
  });

  allChecksbox.checked = matches.length === items.length;
  console.log(
    length === items.length,
    allChecksbox.checked,
    matches.length,
    items.length
  );
}
