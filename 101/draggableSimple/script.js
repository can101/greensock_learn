Draggable.create(".red", { bounds: "body" });
Draggable.create(".purple", { bounds: "body", inertia: true });
Draggable.create(".orange", {
  bounds: "body",
  inertia: true,
  type: "rotation",
});
