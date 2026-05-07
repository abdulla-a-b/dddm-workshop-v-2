// Sample data from workshop simulation
const sampleData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  output: [902, 1148, 1070, 906, 871],
  profit: [264820, 200769, 259735, 394027, 264925]
};

const ctx = document.getElementById('trendChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: sampleData.labels,
    datasets: [
      { label: 'Production Output', data: sampleData.output, borderColor: '#10b981', tension: 0.4 },
      { label: 'Profit (BDT)', data: sampleData.profit, borderColor: '#f59e0b', tension: 0.4, yAxisID: 'y1' }
    ]
  },
  options: { scales: { y1: { position: 'right' } } }
});

function simulateDecision(action) {
  const result = document.getElementById('decisionResult');
  if (action === 'reduceOT') {
    result.innerHTML = `<p class="text-emerald-400 text-xl">✅ OT Cost -22% | Profit +18% | Great data-driven choice!</p>`;
  } else {
    result.innerHTML = `<p class="text-emerald-400 text-xl">✅ Absenteeism -15% | Productivity +12% | Training ROI visible in 3 months.</p>`;
  }
}

// Background canvas animation (subtle data points)
