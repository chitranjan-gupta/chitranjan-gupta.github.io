export function scrollToSection(sectionId: string, offset: number) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}
