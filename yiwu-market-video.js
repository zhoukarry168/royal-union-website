document.addEventListener("DOMContentLoaded", () => {
  const heroGrid = document.querySelector(".guide-hero-grid");
  const videoSection = document.querySelector("main > .guide-video");
  if (!heroGrid || !videoSection) return;

  heroGrid.append(videoSection);
  const video = videoSection.querySelector("video");
  if (video) {
    const source = video.querySelector("source");
    const fullVideoUrl = source?.getAttribute("src");
    if (source) source.setAttribute("src", "assets/videos/mu-group-in-yiwu-preview.mp4");
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.preload = "auto";
    video.load();
    video.play().catch(() => {});

    if (fullVideoUrl) {
      const fullVideoLink = document.createElement("a");
      fullVideoLink.className = "guide-full-video-link";
      fullVideoLink.href = fullVideoUrl;
      fullVideoLink.target = "_blank";
      fullVideoLink.rel = "noreferrer";
      fullVideoLink.textContent = "Watch full video (1:59) ↗";
      video.closest(".guide-video-frame")?.append(fullVideoLink);
    }
  }
  document.body.classList.add("guide-video-in-hero");
});
