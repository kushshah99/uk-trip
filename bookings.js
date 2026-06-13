const bookingsContent = `
<h2>🎟️ Flexible Booking Reference</h2>
<p style="color:#94a3b8; margin-bottom:20px;">Use this page to rebook or reschedule. All time slots, alternative dates, and direct links in one place.</p>

<h2>🎭 Moulin Rouge! The Musical</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Venue</td><td>Piccadilly Theatre, Denman Street, W1D 7DY</td></tr>
        <tr><td>Closing</td><td><strong>August 2026</strong> — last chance!</td></tr>
        <tr><td>Duration</td><td>2h 30min (including interval)</td></tr>
        <tr><td>Price</td><td>From £30</td></tr>
    </table>
    <h3 style="margin-top:16px;">Available Performance Times:</h3>
    <table>
        <tr><th>Day</th><th>Matinee</th><th>Evening</th><th>Notes</th></tr>
        <tr><td>Monday</td><td>—</td><td>7:30 PM</td><td></td></tr>
        <tr><td>Tuesday</td><td>—</td><td>7:30 PM</td><td></td></tr>
        <tr><td>Wednesday</td><td>2:30 PM ✅</td><td>7:30 PM</td><td>Matinee works!</td></tr>
        <tr><td>Thursday</td><td>—</td><td>7:30 PM</td><td></td></tr>
        <tr><td>Friday</td><td>—</td><td>7:30 PM</td><td></td></tr>
        <tr><td><strong>Saturday</strong></td><td><strong>2:30 PM ✅</strong></td><td>7:30 PM</td><td><strong>Current plan: Sat 21 Jun 2:30 PM</strong></td></tr>
        <tr><td>Sunday</td><td>—</td><td>—</td><td>No Sunday shows</td></tr>
    </table>
    <div class="tip">Best for her: <strong>Wednesday or Saturday 2:30 PM matinee</strong> — home by 8:30 PM. Evening shows (7:30 PM) end at 10 PM — too late.</div>
    <a class="link-btn" href="https://moulinrougemusical.co.uk/" target="_blank">Official site</a>
    <a class="link-btn" href="https://officiallondontheatre.com/show/moulin-rouge-the-musical/" target="_blank">Discount tickets</a>
    <a class="link-btn" href="https://www.todaytix.com/london/shows/moulin-rouge" target="_blank">TodayTix (last minute)</a>
</div>

<h2>🎭 A Midsummer Night's Dream — Open Air Theatre</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Venue</td><td>Regent's Park Open Air Theatre</td></tr>
        <tr><td>Dates</td><td>20 June — 18 July 2026</td></tr>
        <tr><td>Duration</td><td>~2h 20min (including interval)</td></tr>
        <tr><td>Price</td><td>From £15 (+£2.50 booking fee)</td></tr>
    </table>
    <h3 style="margin-top:16px;">Available Performance Times:</h3>
    <table>
        <tr><th>Day</th><th>Matinee</th><th>Evening</th><th>Notes</th></tr>
        <tr><td>Monday</td><td>—</td><td>7:45 PM</td><td>Too late</td></tr>
        <tr><td>Tuesday</td><td>—</td><td>7:45 PM</td><td>Too late</td></tr>
        <tr><td>Wednesday</td><td>—</td><td>7:45 PM</td><td>Too late</td></tr>
        <tr><td><strong>Thursday</strong></td><td><strong>12:30 PM ✅</strong></td><td>7:45 PM</td><td>Matinee works! (from 27 Jun)</td></tr>
        <tr><td>Friday</td><td>—</td><td>7:45 PM</td><td>Too late</td></tr>
        <tr><td><strong>Saturday</strong></td><td><strong>12:30 PM ✅</strong></td><td>7:45 PM</td><td><strong>Current plan: Sat 4 Jul 12:30 PM</strong></td></tr>
        <tr><td>Sunday</td><td>—</td><td>—</td><td>No shows on Sundays</td></tr>
    </table>
    <div class="tip">Only <strong>Thursday & Saturday 12:30 PM</strong> matinees work. Evening shows end at 10 PM — too late for Peterborough train.</div>
    <div class="warning">Outdoor theatre — performances go ahead in light rain. Bring layers + jacket. They sell ponchos (£4) and blankets.</div>
    <a class="link-btn" href="https://openairtheatre.com/dream" target="_blank">Book tickets</a>
    <a class="link-btn" href="https://openairtheatre.com/whats-on" target="_blank">Full season schedule</a>
</div>

<h2>🧙‍♂️ Harry Potter Studio Tour</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Venue</td><td>Warner Bros. Studio Tour, Leavesden, Watford</td></tr>
        <tr><td>Price</td><td>£56 adult</td></tr>
        <tr><td>Duration</td><td>3.5 — 4 hours (self-paced)</td></tr>
        <tr><td>Open</td><td>Every day, various time slots</td></tr>
    </table>
    <h3 style="margin-top:16px;">Time Slots (choose when booking):</h3>
    <table>
        <tr><th>Slot</th><th>Works for her?</th><th>Notes</th></tr>
        <tr><td>09:00</td><td>✅</td><td>Very early — tight with 8 AM Peterborough train</td></tr>
        <tr><td>09:30</td><td>✅</td><td>Still tight</td></tr>
        <tr><td><strong>10:00</strong></td><td><strong>✅ Best</strong></td><td><strong>Current plan. Arrive 8:47 → Platform 9¾ → Watford by 10</strong></td></tr>
        <tr><td><strong>10:30</strong></td><td><strong>✅ Best</strong></td><td><strong>Most comfortable with 8 AM departure</strong></td></tr>
        <tr><td>11:00</td><td>✅</td><td>Works — but finishes later (~3:30 PM)</td></tr>
        <tr><td>11:30</td><td>✅</td><td>Works — finishes ~4 PM</td></tr>
        <tr><td>12:00</td><td>⚠️</td><td>Finishes ~4:30 — less time for Covent Garden after</td></tr>
        <tr><td>12:30+</td><td>⚠️</td><td>Finishes 5+ PM — rushing to get train home</td></tr>
    </table>
    <div class="tip"><strong>Recommended: 10:00 or 10:30 AM slot.</strong> Gives comfortable travel time from Peterborough + time for Covent Garden after.</div>
    <div class="warning">MUST pre-book. Cannot buy on the day. Summer weekends sell out weeks ahead.</div>
    <a class="link-btn" href="https://www.wbstudiotour.co.uk" target="_blank">Book tickets</a>
    <a class="link-btn" href="https://www.wbstudiotour.co.uk/getting-here/" target="_blank">Getting there</a>
    <a class="link-btn" href="https://www.wbstudiotour.co.uk/food-drink/" target="_blank">Food inside</a>
</div>

<h2>🏰 Windsor + Stonehenge + Bath Tour</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Duration</td><td>11-12 hours</td></tr>
        <tr><td>Departure</td><td>London Victoria, ~8:00-8:30 AM</td></tr>
        <tr><td>Returns</td><td>~7:30-8:00 PM to Victoria</td></tr>
        <tr><td>Price</td><td>£85-100 (all entries included)</td></tr>
        <tr><td>Runs</td><td>Daily (year-round)</td></tr>
    </table>
    <h3 style="margin-top:16px;">Multiple providers — compare:</h3>
    <table>
        <tr><th>Provider</th><th>Departure</th><th>Price</th><th>Link</th></tr>
        <tr><td>GetYourGuide</td><td>~8:30 AM</td><td>£85-95</td><td><a href="https://www.getyourguide.com/london-l57/london-windsor-stonehenge-bath-and-roman-baths-day-trip-t945/" target="_blank">Book</a></td></tr>
        <tr><td>Viator</td><td>~8:00 AM</td><td>£80-100</td><td><a href="https://www.viator.com/tours/London/Stonehenge-Windsor-Castle-and-Bath-Day-Trip-from-London/d737-3858EE021" target="_blank">Book</a></td></tr>
        <tr><td>Evan Evans</td><td>~8:30 AM</td><td>£85-99</td><td><a href="https://evanevanstours.com/tours/stonehenge-tours/" target="_blank">Book</a></td></tr>
        <tr><td>Golden Tours</td><td>~8:00 AM</td><td>£75-95</td><td><a href="https://www.goldentours.com" target="_blank">Book</a></td></tr>
    </table>
    <div class="tip">All include: Windsor Castle + Stonehenge + Roman Baths entry + coach + guide. Free cancellation up to 24h on most. <strong>Check exact departure time when booking</strong> — she needs to arrive from Peterborough first (06:30 train → Victoria by 07:45).</div>
    <div class="warning">Only day she skips hotel breakfast. Grab food at Peterborough station.</div>
</div>

<h2>🧊 Floating Igloo — Skuna Boats</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Location</td><td>West India Quay, Canary Wharf</td></tr>
        <tr><td>Duration</td><td>~90 minutes</td></tr>
        <tr><td>Price</td><td>From £45-49pp</td></tr>
        <tr><td>Open</td><td>7:30 AM — 9 PM daily, year-round</td></tr>
    </table>
    <h3 style="margin-top:16px;">Booking rules:</h3>
    <ul style="padding-left:20px; list-style:disc;">
        <li>Before 5 PM: minimum 2 people</li>
        <li>After 5 PM (Sun-Fri): minimum 4 people</li>
        <li>Saturdays after 5 PM: minimum 6 people</li>
        <li>Book at least 2 hours before departure</li>
    </ul>
    <div class="tip"><strong>Current plan: Sat 4 Jul ~6 PM.</strong> If she's alone, book the <strong>afternoon slot (before 5 PM)</strong> since it only requires 2 people minimum. Or check if they allow solo bookings.</div>
    <a class="link-btn" href="https://www.skunaboats.com/igloo-boat" target="_blank">Book igloo</a>
    <a class="link-btn" href="https://www.skunaboats.com/canary-wharf-london/" target="_blank">Getting there</a>
</div>

<h2>🪞 Paradox Museum</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Location</td><td>Knightsbridge (opposite Harrods)</td></tr>
        <tr><td>Price</td><td>£17-22</td></tr>
        <tr><td>Duration</td><td>~1-1.5 hours</td></tr>
    </table>
    <h3 style="margin-top:16px;">Opening Hours:</h3>
    <table>
        <tr><th>Day</th><th>Hours</th></tr>
        <tr><td>Mon — Thu</td><td>9:30 AM — 6:00 PM</td></tr>
        <tr><td>Fri — Sat</td><td>9:30 AM — 7:30 PM</td></tr>
        <tr><td>Sunday</td><td>9:30 AM — 7:00 PM</td></tr>
    </table>
    <div class="tip">No fixed time slot needed — just turn up within opening hours. But booking online is slightly cheaper than on the door.</div>
    <a class="link-btn" href="https://paradoxmuseum.com/london/" target="_blank">Book tickets</a>
</div>

<h2>🌇 Sky Garden</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Location</td><td>20 Fenchurch Street (the "Walkie Talkie" building)</td></tr>
        <tr><td>Price</td><td><strong>FREE</strong></td></tr>
        <tr><td>Duration</td><td>30-45 min</td></tr>
    </table>
    <h3 style="margin-top:16px;">Opening Hours & Booking:</h3>
    <table>
        <tr><th>Day</th><th>Hours</th><th>Slots available</th></tr>
        <tr><td>Mon — Fri</td><td>10:00 AM — 6:00 PM</td><td>Every 30 min</td></tr>
        <tr><td>Sat — Sun</td><td>10:00 AM — 9:00 PM</td><td>Every 30 min</td></tr>
    </table>
    <div class="warning">FREE but MUST pre-book a time slot online. Slots release 3 weeks ahead and fill up fast — especially weekends. Book as soon as available!</div>
    <a class="link-btn" href="https://skygarden.london/" target="_blank">Book free slot</a>
</div>

<h2>🌿 Garden at 120</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Location</td><td>120 Fenchurch Street (5 min walk from Sky Garden)</td></tr>
        <tr><td>Price</td><td><strong>FREE</strong></td></tr>
        <tr><td>Hours</td><td>Mon-Fri 8AM-6:30PM, Sat-Sun 10AM-5PM (Apr-Oct)</td></tr>
    </table>
    <div class="tip">No booking needed — just walk in. Quieter and more intimate than Sky Garden. Do both on the same trip (5 min apart).</div>
</div>

<h2>🌸 Columbia Road Flower Market</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Location</td><td>Columbia Road, Shoreditch, E2</td></tr>
        <tr><td>Price</td><td><strong>FREE entry</strong></td></tr>
        <tr><td>Open</td><td><strong>SUNDAYS ONLY</strong> — 8:00 AM to ~2:00 PM</td></tr>
    </table>
    <div class="warning"><strong>Sunday only!</strong> Best before 11 AM (gets crowded after). Flowers sell cheaper towards closing (1-2 PM) but less choice.</div>
    <div class="tip">The side streets have cute independent shops (vintage, homeware, cafés) that are also only open on Sundays.</div>
</div>

<h2>🥙 Borough Market</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Location</td><td>8 Southwark Street, London Bridge, SE1</td></tr>
        <tr><td>Price</td><td><strong>FREE entry</strong></td></tr>
    </table>
    <h3 style="margin-top:16px;">Opening Hours:</h3>
    <table>
        <tr><th>Day</th><th>Hours</th><th>Notes</th></tr>
        <tr><td>Monday</td><td>CLOSED</td><td>❌</td></tr>
        <tr><td>Tuesday — Friday</td><td>10:00 AM — 5:00 PM</td><td>Full market</td></tr>
        <tr><td><strong>Saturday</strong></td><td><strong>9:00 AM — 5:00 PM</strong></td><td>Best day — full stalls + busiest</td></tr>
        <tr><td>Sunday</td><td>10:00 AM — 4:00 PM</td><td>Reduced hours</td></tr>
    </table>
    <div class="tip">Loads of veggie options: falafel wraps, halloumi, veggie pies, padella pasta, fresh juice, brownies. No booking needed.</div>
    <a class="link-btn" href="https://boroughmarket.org.uk/visit-us/" target="_blank">boroughmarket.org.uk</a>
</div>

<h2>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Highlands Day Tour</h2>
<div class="card">
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Duration</td><td>10-12 hours</td></tr>
        <tr><td>Departure</td><td>Edinburgh (Royal Mile area), ~8:00-8:30 AM</td></tr>
        <tr><td>Returns</td><td>~7:00-7:30 PM</td></tr>
        <tr><td>Price</td><td>£45-60pp</td></tr>
        <tr><td>Runs</td><td>Daily (year-round, multiple providers)</td></tr>
    </table>
    <h3 style="margin-top:16px;">Providers compared:</h3>
    <table>
        <tr><th>Provider</th><th>Group size</th><th>Price</th><th>Best for</th><th>Link</th></tr>
        <tr><td><strong>Rabbie's</strong></td><td>Max 16</td><td>£55-65</td><td>Small group, personal</td><td><a href="https://www.rabbies.com" target="_blank">Book</a></td></tr>
        <tr><td>Highland Experience</td><td>~30-50</td><td>£45-55</td><td>Budget-friendly</td><td><a href="https://www.highlandexperience.com" target="_blank">Book</a></td></tr>
        <tr><td>Timberbush</td><td>~30-50</td><td>£45-55</td><td>Good value</td><td><a href="https://www.timberbush-tours.co.uk" target="_blank">Book</a></td></tr>
        <tr><td>GetYourGuide</td><td>Varies</td><td>£45-65</td><td>Compare all</td><td><a href="https://www.getyourguide.com/edinburgh-l44/" target="_blank">Compare</a></td></tr>
    </table>
    <div class="tip"><strong>Rabbie's is best rated</strong> — small 16-seat bus means more stops, more personal, better photos. Worth the extra £10. Book early for July weekends.</div>
</div>

<h2>🚂 Train Quick Reference</h2>
<div class="card">
    <table>
        <tr><th>Route</th><th>Time</th><th>Advance from</th><th>With Railcard (1/3 off)</th></tr>
        <tr><td>Peterborough → London King's Cross</td><td>47 min</td><td>£16.60</td><td>~£11</td></tr>
        <tr><td>Peterborough → Edinburgh</td><td>3h 30min</td><td>£24.50</td><td>~£16</td></tr>
        <tr><td>Peterborough → Birmingham</td><td>1h 30min</td><td>~£15</td><td>~£10</td></tr>
        <tr><td>Peterborough → Leeds</td><td>1h 45min</td><td>~£15</td><td>~£10</td></tr>
        <tr><td>Peterborough → Leicester</td><td>50 min</td><td>~£8</td><td>~£5</td></tr>
        <tr><td>Peterborough → Cambridge</td><td>50 min</td><td>~£10</td><td>~£7</td></tr>
        <tr><td>Edinburgh → Pitlochry</td><td>1h 45min</td><td>~£15</td><td>~£10</td></tr>
    </table>
    <div class="tip"><strong>Book 4+ weeks ahead</strong> for cheapest advance fares. Prices double closer to the date.</div>
</div>

<h2>💳 Railcard & Booking Apps</h2>
<div class="card">
    <h3>26-30 Railcard — Saves 1/3 on ALL trains</h3>
    <table>
        <tr><th>Detail</th><th>Info</th></tr>
        <tr><td>Cost</td><td>£35/year (or £80 for 3 years)</td></tr>
        <tr><td>Saves</td><td>1/3 off almost all rail fares</td></tr>
        <tr><td>Pays for itself</td><td>After just 2 London return trips!</td></tr>
        <tr><td>Digital</td><td>Stored on phone — no physical card needed</td></tr>
    </table>
    <a class="link-btn" href="https://www.26-30railcard.co.uk/" target="_blank">Official site (£35)</a>
    <a class="link-btn" href="https://www.mytrainpal.com/" target="_blank">TrainPal (code MSE23 = 23% off → £26.95!)</a>
    <a class="link-btn" href="https://www.thetrainline.com/trains/great-britain/railcards" target="_blank">Buy on Trainline</a>
    <div class="tip">Buy the Railcard BEFORE booking any trains — then apply it to get 1/3 off every ticket.</div>
</div>

<div class="card">
    <h3>Where to Book Train Tickets (compare these)</h3>
    <table>
        <tr><th>App/Site</th><th>Pros</th><th>Link</th></tr>
        <tr><td><strong>TrainPal</strong></td><td>No booking fees, code MSE5OFF = £5 off first ticket, cheapest railcard</td><td><a href="https://www.mytrainpal.com/" target="_blank">mytrainpal.com</a></td></tr>
        <tr><td><strong>LNER</strong></td><td>Direct operator, no fees, LNER Perks (£5 free + 2% back), best for Peterborough-London/Edinburgh</td><td><a href="https://www.lner.co.uk" target="_blank">lner.co.uk</a></td></tr>
        <tr><td><strong>Trainline</strong></td><td>Compares all operators, easy app, split ticketing, digital railcards</td><td><a href="https://www.thetrainline.com" target="_blank">thetrainline.com</a></td></tr>
        <tr><td><strong>National Rail</strong></td><td>Official timetables + journey planner</td><td><a href="https://www.nationalrail.co.uk" target="_blank">nationalrail.co.uk</a></td></tr>
    </table>
    <div class="tip"><strong>Pro tip:</strong> LNER is best for Peterborough↔London and Peterborough↔Edinburgh (direct trains, no fees, Perks rewards). Use TrainPal for the railcard discount + first ticket £5 off.</div>
</div>
<h2>🚇 London Transport — Oyster vs Contactless</h2>
<div class="card">
    <h3>Does she need an Oyster card?</h3>
    <table>
        <tr><th></th><th>Contactless Bank Card</th><th>Oyster Card</th></tr>
        <tr><td><strong>Best for her?</strong></td><td><strong>✅ YES — use this</strong></td><td>Not needed if she has contactless</td></tr>
        <tr><td>How</td><td>Just tap in/out with any Visa/Mastercard debit or credit card (or phone — Apple/Google Pay)</td><td>Buy at station, load money, tap in/out</td></tr>
        <tr><td>Daily cap Zone 1-2</td><td>~£8.10 (same as Oyster)</td><td>~£8.10</td></tr>
        <tr><td>Works on</td><td>Tube, Bus, DLR, Overground, Elizabeth Line, Tram</td><td>Same</td></tr>
        <tr><td>Advantage</td><td>No need to buy anything or top up — just use her bank card!</td><td>Budget control (only spend what's loaded)</td></tr>
    </table>
    <div class="tip"><strong>Recommendation: Just use contactless.</strong> Same price, no queues, nothing to buy or return. If her Indian bank card is Visa/Mastercard contactless-enabled, it works.</div>
</div>

<div class="card">
    <h3>If she DOES need an Oyster card (e.g. card not contactless):</h3>
    <table>
        <tr><th>Where to buy</th><th>Details</th></tr>
        <tr><td><strong>Tube station ticket machines</strong></td><td>Available at ALL stations including King's Cross. Yellow machines. Card costs £7 deposit (refundable) + however much you top up.</td></tr>
        <tr><td><strong>Oyster Ticket Shops</strong></td><td>4,000+ newsagents across London with blue Oyster sticker in window</td></tr>
        <tr><td><strong>Visitor Oyster Card (pre-order)</strong></td><td>Order online before trip, delivered to her address. Comes with discount booklet.</td></tr>
    </table>
    <h3 style="margin-top:16px;">How to top up:</h3>
    <ul style="padding-left:20px; list-style:disc;">
        <li><strong>Ticket machines</strong> at any Tube station (cash or card)</li>
        <li><strong>TfL app</strong> or <strong>tfl.gov.uk/oyster</strong> (online, takes ~30 min to activate)</li>
        <li><strong>Oyster Ticket Shops</strong> (newsagents with blue sticker)</li>
        <li><strong>Contactless at the machine</strong> — fastest, no queue</li>
    </ul>
    <h3 style="margin-top:16px;">How much to load:</h3>
    <ul style="padding-left:20px; list-style:disc;">
        <li>Daily cap is ~£8.10 (Zone 1-2) — she won't spend more than this per day</li>
        <li>For a 1-day trip: load <strong>£10-15</strong></li>
        <li>For a weekend (2 days): load <strong>£20</strong></li>
        <li>Unused balance is <strong>refundable</strong> at any ticket machine (if under £10)</li>
    </ul>
    <a class="link-btn" href="https://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster" target="_blank">TfL Official Guide</a>
    <a class="link-btn" href="https://tfl.gov.uk/travel-information/visiting-london/visitor-oyster-card" target="_blank">Pre-order Visitor Oyster</a>
    <a class="link-btn" href="https://tfl.gov.uk/fares/find-fares/tube-and-rail-fares/pay-as-you-go-caps" target="_blank">Daily fare caps</a>
</div>

<h2>⏱️ Rest & Pace Guide</h2>
<div class="card">
    <h3>Built-in rest across all weekends:</h3>
    <table>
        <tr><th>Weekend</th><th>Seated/Rest time per day</th><th>Steps (approx)</th></tr>
        <tr><td>W1 Saturday</td><td>~4 hrs (Moulin Rouge 2.5h + dinner 1h + cafés)</td><td>~10K</td></tr>
        <tr><td>W1 Sunday</td><td>~4 hrs (HP self-paced + trains + café)</td><td>~8K</td></tr>
        <tr><td>W2 Saturday</td><td>~6 hrs (coach between all 3 sites!)</td><td>~8K</td></tr>
        <tr><td>W2 Sunday</td><td>~2 hrs (cafés + Sky Garden sit + canal walk)</td><td>~8K</td></tr>
        <tr><td>W3 Thursday</td><td>~4 hrs (train 3.5h + dinner)</td><td>~8K</td></tr>
        <tr><td>W3 Friday</td><td>~7 hrs (Highlands tour — mostly seated on coach!)</td><td>~5K</td></tr>
        <tr><td>W3 Saturday</td><td>~5 hrs (trains to/from Pitlochry)</td><td>~8K</td></tr>
        <tr><td>W4 Saturday</td><td>~5 hrs (theatre 2.5h + igloo 1.5h + café)</td><td>~10K</td></tr>
        <tr><td>W4 Sunday</td><td>~3 hrs (cafés + park benches + deckchairs)</td><td>~6K</td></tr>
    </table>
    <div class="tip"><strong>Every schedule has:</strong> ☕ Coffee break every 2-3 hours | 🪑 Seated activity in the middle of each day | 🌳 Park/bench time to decompress | No day exceeds 12K steps</div>
</div>
`;