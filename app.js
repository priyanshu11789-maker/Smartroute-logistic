const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('active'));
    item.classList.add('active');
    showToast(`${item.dataset.view} view selected.`);
  });
});

document.querySelectorAll('.filter').forEach((filter) => {
  filter.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((button) => button.classList.remove('active'));
    filter.classList.add('active');
    const messages = { risk: 'Showing weather and road risk overlay', traffic: 'Showing live congestion overlay', access: 'Showing accessibility coverage overlay' };
    document.getElementById('layerNote').textContent = messages[filter.dataset.layer];
    showToast(`${filter.textContent} layer enabled.`);
  });
});

document.getElementById('planRoute').addEventListener('click', () => showToast('Route planner is ready for your next trip.'));
document.getElementById('viewAlerts').addEventListener('click', () => showToast('Showing all 5 active alerts.'));
document.getElementById('viewRoutes').addEventListener('click', () => showToast('Opening today\'s delivery schedule.'));
document.getElementById('acknowledge').addEventListener('click', (event) => {
  event.currentTarget.textContent = 'All alerts acknowledged';
  event.currentTarget.disabled = true;
  event.currentTarget.style.opacity = '.6';
  showToast('Priority alerts acknowledged.');
});
