document.addEventListener("DOMContentLoaded", () => {
  const heroGrid = document.querySelector(".guide-hero-grid");
  const videoSection = document.querySelector("main > .guide-video");
  if (!heroGrid || !videoSection) return;

  heroGrid.append(videoSection);
  const video = videoSection.querySelector("video");
  if (video) {
    video.muted = true;
    video.autoplay = true;
    video.preload = "metadata";
    video.play().catch(() => {});
  }
  document.body.classList.add("guide-video-in-hero");
});
