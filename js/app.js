// Airplane Management System — shared behaviour

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const toggleBtn = document.getElementById('sidebarToggle');

  function openSidebar() {
    sidebar.classList.add('show');
    backdrop.classList.add('show');
  }

  function closeSidebar() {
    sidebar.classList.remove('show');
    backdrop.classList.remove('show');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      sidebar.classList.contains('show') ? closeSidebar() : openSidebar();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  // Live clock in topbar, if present
  const clockEl = document.getElementById('liveClock');
  if (clockEl) {
    function updateClock() {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    updateClock();
    setInterval(updateClock, 1000 * 30);
  }

  // Simple client-side table search filter (used on tickets/departures/arrivals)
  const searchInput = document.getElementById('tableSearch');
  const searchTable = document.getElementById('dataTable');
  if (searchInput && searchTable) {
    searchInput.addEventListener('input', function () {
      const q = this.value.toLowerCase();
      searchTable.querySelectorAll('tbody tr').forEach(function (row) {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
});
