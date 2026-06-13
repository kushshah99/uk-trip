const documentsContent = `
<h2>📄 Travel Documents</h2>
<p style="color:#94a3b8; margin-bottom:20px;">All important documents in one place. Click to view/download.</p>

<div class="card">
    <table>
        <tr><th>Document</th><th>Details</th><th>Link</th></tr>
        <tr><td>✈️ Flight Ticket</td><td>Outbound</td><td><a class="link-btn" href="docs/flight-outbound.pdf" target="_blank">View</a></td></tr>
        <tr><td>✈️ Flight Ticket</td><td>Return</td><td><a class="link-btn" href="docs/flight-return.pdf" target="_blank">View</a></td></tr>
        <tr><td>🏨 Hotel Booking</td><td>Peterborough</td><td><a class="link-btn" href="docs/hotel-peterborough.pdf" target="_blank">View</a></td></tr>
        <tr><td>🏨 Hotel Booking</td><td>Edinburgh (2 nights)</td><td><a class="link-btn" href="docs/hotel-edinburgh.pdf" target="_blank">View</a></td></tr>
        <tr><td>🛂 Visa / ETA</td><td>UK Entry</td><td><a class="link-btn" href="docs/visa.pdf" target="_blank">View</a></td></tr>
        <tr><td>🛡️ Travel Insurance</td><td>Policy document</td><td><a class="link-btn" href="docs/insurance.pdf" target="_blank">View</a></td></tr>
        <tr><td>🎟️ Harry Potter Ticket</td><td>Sun 22 Jun</td><td><a class="link-btn" href="docs/harry-potter-ticket.pdf" target="_blank">View</a></td></tr>
        <tr><td>🎭 Moulin Rouge Ticket</td><td>Sat 21 Jun</td><td><a class="link-btn" href="docs/moulin-rouge-ticket.pdf" target="_blank">View</a></td></tr>
        <tr><td>🚂 Train Tickets</td><td>All journeys</td><td><a class="link-btn" href="docs/train-tickets.pdf" target="_blank">View</a></td></tr>
        <tr><td>🚌 Bath Tour Booking</td><td>Sat 28 Jun</td><td><a class="link-btn" href="docs/bath-tour.pdf" target="_blank">View</a></td></tr>
        <tr><td>🏔️ Highlands Tour Booking</td><td>Fri 4 Jul</td><td><a class="link-btn" href="docs/highlands-tour.pdf" target="_blank">View</a></td></tr>
        <tr><td>📋 Emergency Contacts</td><td>Important numbers</td><td><a class="link-btn" href="docs/emergency-contacts.pdf" target="_blank">View</a></td></tr>
    </table>
</div>

<div class="tip">
    <strong>How to add/update documents:</strong><br>
    Put files in the <code>docs/</code> folder in the GitHub repo, then push. Name them to match the links above:<br>
    <code>docs/flight-outbound.pdf</code>, <code>docs/hotel-peterborough.pdf</code>, etc.<br><br>
    To add a new document, add a row to the table in <code>documents.js</code>.
</div>

<div class="card">
    <h3>📱 Quick Access Tips</h3>
    <ul style="list-style:disc; padding-left:20px;">
        <li>Bookmark this page on your phone for offline access</li>
        <li>Screenshot important tickets as backup</li>
        <li>Download PDFs to phone (in case of no internet at airports/stations)</li>
        <li>Keep passport + visa accessible at all times during travel</li>
    </ul>
</div>
`;
