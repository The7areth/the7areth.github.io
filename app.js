const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) count++;
  });
  document.getElementById('count').textContent = `Showing ${count} projects`;
}));
