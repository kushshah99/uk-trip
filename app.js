document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');
            // Remove active from all
            document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
            // Add active to clicked
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            // Load content
            loadTabContent(tabId);
        });
    });
});

var loaded = { overview: true };

function loadTabContent(tabId) {
    if (loaded[tabId]) return;
    var el = document.getElementById(tabId);
    var content = null;
    if (tabId === 'weekend1' && typeof weekend1Content !== 'undefined') content = weekend1Content;
    if (tabId === 'weekend2' && typeof weekend2Content !== 'undefined') content = weekend2Content;
    if (tabId === 'weekend3' && typeof weekend3Content !== 'undefined') content = weekend3Content;
    if (tabId === 'weekend4' && typeof weekend4Content !== 'undefined') content = weekend4Content;
    if (tabId === 'bookings' && typeof bookingsContent !== 'undefined') content = bookingsContent;
    if (tabId === 'documents' && typeof documentsContent !== 'undefined') content = documentsContent;
    if (tabId === 'essentials' && typeof essentialsContent !== 'undefined') content = essentialsContent;
    if (content) {
        el.innerHTML = content;
        loaded[tabId] = true;
    }
}

// Also expose switchTab globally for the overview cards
function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
    document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
    document.getElementById(tabId).classList.add('active');
    loadTabContent(tabId);
}
