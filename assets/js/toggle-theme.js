(function() {
  const setTheme = (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const toggleBtn = document.querySelector('[data-theme-toggle]');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = !document.documentElement.classList.contains('dark');

      if (!document.startViewTransition) {
        setTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        return;
      }

      document.startViewTransition(() => {
        setTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    });
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme(true);
  }
})();

window.addEventListener('DOMContentLoaded', () => {
  const tocToggleBtn = document.getElementById('toc-toggle');
  const postLayout = document.getElementById('post-layout');

  if (tocToggleBtn && postLayout) {
    tocToggleBtn.addEventListener('click', () => {
      postLayout.classList.toggle('toc-hidden');
    });
  }
});