const documentsContent = `
<h2>📄 Travel Documents</h2>
<p style="color:#94a3b8; margin-bottom:20px;">All important documents in one place. Click to view/download.</p>

<div class="card">
    <table>
        <tr><th>Document</th><th>Link</th></tr>
        <tr><td>🛂 UK eVisa</td><td><a class="link-btn" href="docs/eVisa_Saloni.pdf" target="_blank">View PDF</a></td></tr>
        <tr><td>✈️ Flight Ticket</td><td><a class="link-btn" href="docs/Ticket_Saloni.pdf" target="_blank">View PDF</a></td></tr>
        <tr><td>✈️ Boarding Pass</td><td><a class="link-btn" href="docs/Boarding Pass-SALONI DIPESHBHAI.pdf" target="_blank">View PDF</a></td></tr>
        <tr><td>📋 GPP Letter</td><td><a class="link-btn" href="docs/5) GPP Letter- Saloni (1).pdf" target="_blank">View PDF</a></td></tr>
    </table>
</div>

<h2>✈️ Flight Details & Live Tracking</h2>
<div class="card">
    <p><strong>PNR:</strong> <span style="font-size:1.4rem; color:#fbbf24; font-family:monospace; letter-spacing:2px; background:#334155; padding:4px 12px; border-radius:6px; user-select:all;">E9ZKSL</span> <small style="color:#94a3b8;">(tap to select, then copy)</small></p>
    <p style="margin-top:12px;"><strong>Airline:</strong> Air India | <strong>Passenger:</strong> Ms. Saloni Dipeshbhai Shah</p>
    <p style="margin-top:12px;">
        <a class="link-btn" href="https://www.airindia.com/in/en/manage/web-checkin.html" target="_blank">✅ Web Check-in (opens 48h before flight)</a>
        <a class="link-btn" href="https://www.airindia.com/in/en/manage.html" target="_blank">📋 Manage Booking / Flight Status</a>
        <a class="link-btn" href="https://www.airindia.in/" target="_blank">Air India Website</a>
    </p>
    <div class="tip">Web check-in: Enter PNR <strong>E9ZKSL</strong> + last name <strong>SHAH</strong>. Opens 48 hours before each flight.</div>
</div>

<h3>🛫 Outbound — Saturday 14 June 2026</h3>
<div class="card" style="border-left-color: #22c55e;">
    <table>
        <tr><th>Leg</th><th>Flight</th><th>Route</th><th>Time</th><th>Terminal</th><th>Track Live</th></tr>
        <tr>
            <td>1</td>
            <td><strong>AI 818</strong></td>
            <td>Ahmedabad → Delhi</td>
            <td>08:25 → 10:15</td>
            <td>T2 → T3</td>
            <td>
                <a class="link-btn" href="https://www.flightradar24.com/data/flights/ai818" target="_blank">Flightradar24</a>
                <a class="link-btn" href="https://www.flightaware.com/live/flight/AIC818" target="_blank">FlightAware</a>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>AI 2017</strong></td>
            <td>Delhi → London Heathrow</td>
            <td>12:05 → 19:00 (local)</td>
            <td>T3 → T2</td>
            <td>
                <a class="link-btn" href="https://www.flightradar24.com/data/flights/ai2017" target="_blank">Flightradar24</a>
                <a class="link-btn" href="https://www.flightaware.com/live/flight/AIC2017" target="_blank">FlightAware</a>
            </td>
        </tr>
    </table>
    <div class="tip">Arrives London Heathrow <strong>Terminal 2</strong> at 7:00 PM local UK time. Layover in Delhi: ~2 hours (same terminal T3).</div>
</div>

<h3>🛬 Return — Sunday 13 July 2026</h3>
<div class="card" style="border-left-color: #ef4444;">
    <table>
        <tr><th>Leg</th><th>Flight</th><th>Route</th><th>Time</th><th>Terminal</th><th>Track Live</th></tr>
        <tr>
            <td>1</td>
            <td><strong>AI 112</strong></td>
            <td>London Heathrow → Delhi</td>
            <td>13:15 → 03:50+1 (local)</td>
            <td>T2 → T3</td>
            <td>
                <a class="link-btn" href="https://www.flightradar24.com/data/flights/ai112" target="_blank">Flightradar24</a>
                <a class="link-btn" href="https://www.flightaware.com/live/flight/AIC112" target="_blank">FlightAware</a>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>AI 817</strong></td>
            <td>Delhi → Ahmedabad</td>
            <td>05:55 → 07:35 (14 Jul)</td>
            <td>T3 → T2</td>
            <td>
                <a class="link-btn" href="https://www.flightradar24.com/data/flights/ai817" target="_blank">Flightradar24</a>
                <a class="link-btn" href="https://www.flightaware.com/live/flight/AIC817" target="_blank">FlightAware</a>
            </td>
        </tr>
    </table>
    <div class="warning">Return flight departs 1:15 PM from Heathrow. She needs to be at airport by <strong>10:00-10:30 AM</strong> (international flight). Plan accordingly for Sunday 13 Jul — no London activities this day!</div>
</div>

<div class="card">
    <h3>📝 Flight Quick Info</h3>
    <ul style="list-style:disc; padding-left:20px;">
        <li><strong>Baggage:</strong> 1 piece per leg (checked)</li>
        <li><strong>Meal:</strong> AVML (Asian Vegetarian) — already booked ✅</li>
        <li><strong>Seat:</strong> 5A (window) on AMD-DEL legs</li>
        <li><strong>Web check-in:</strong> Opens 48hrs before departure — <a href="https://www.airindia.com/in/en/manage/web-checkin.html" target="_blank">Do it here</a></li>
        <li><strong>Heathrow Terminal 2:</strong> Where she arrives & departs London</li>
    </ul>
</div>

<div class="card">
    <h3>📱 Quick Access Tips</h3>
    <ul style="list-style:disc; padding-left:20px;">
        <li>Download PDFs to phone as backup (in case of no internet at airport)</li>
        <li>Keep visa + boarding pass easily accessible during travel</li>
        <li>Screenshot important documents as extra backup</li>
        <li>Track flights live on the day using Flightradar24 links above</li>
    </ul>
</div>
`;
