const logs = {
  sle: `SLEmailer v2.1 – 2025-06-20\n• Fixed email queue issue\n• Added dark mode toggle`,
  eml: `EML to PDF Converter v1.5 – 2025-06-18\n• Added multi-file batch convert\n• Improved PDF quality`,
  dump: `Data Dump v3.0 – 2025-06-15\n• Added database filters\n• Performance improvements`
};

function openLog(key) {
  modal.querySelector('#modal-title').textContent = logs[key].split('\n')[0];
  modal.querySelector('#modal-body').textContent = logs[key].split('\n').slice(1).join('\n');
  modal.showModal();
}
