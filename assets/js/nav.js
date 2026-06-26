window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');

      if (entry.intersectionRatio > 0) {
        document.querySelectorAll('#TableOfContents li a').forEach((section) => {
          section.classList.remove('active-toc');
        });
        
        const activeLink = document.querySelector(`#TableOfContents li a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active-toc');
        }
      }
    });
  }, { rootMargin: "0px 0px -80% 0px" }); 
  document.querySelectorAll('.post-content h1[id], .post-content h2[id], .post-content h3[id], .post-content h4[id]').forEach((section) => {
    observer.observe(section);
  });
});