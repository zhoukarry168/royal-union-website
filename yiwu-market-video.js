document.addEventListener("DOMContentLoaded", () => {
  const heroGrid = document.querySelector(".guide-hero-grid");
  const videoSection = document.querySelector("main > .guide-video");
  if (!heroGrid || !videoSection) return;

  heroGrid.append(videoSection);
  document.body.classList.add("guide-video-in-hero");
});
