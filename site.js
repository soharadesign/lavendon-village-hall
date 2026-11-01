(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
  }

  const eventList = document.querySelector('#event-list');
  if (eventList) {
    const events = (window.LVH_EVENTS || []).filter(event => new Date(event.date) >= new Date());
    if (!events.length) {
      eventList.innerHTML = '<article class="event-empty"><p class="eyebrow">More soon</p><h3>No events are currently published</h3><p>New classes and community events will appear here as soon as they are added.</p></article>';
    } else {
      eventList.innerHTML = events.map((event, index) => {
        const date = new Date(event.date);
        const month = new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(date);
        const day = new Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(date);
        const weekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(date);
        const time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(date);
        return `<article class="event-card${index === 0 ? ' event-featured' : ''}">
          <div class="event-date"><span>${month}</span><strong>${day}</strong></div>
          <div class="event-copy"><p class="event-meta">${event.type} · ${weekday}, ${time}–${event.end}</p><h3>${event.title}</h3><p>${event.summary}</p></div>
          <a href="${event.href}" aria-label="View details for ${event.title}">View details <span aria-hidden="true">↗</span></a>
        </article>`;
      }).join('') + '<aside class="event-prompt"><p class="eyebrow">Your event here</p><h3>Running a class or community activity?</h3><p>Once your booking is confirmed, the hall team can publish it here.</p><a class="text-link" href="booking.html">Hire the hall <span aria-hidden="true">→</span></a></aside>';
    }
  }

  const spaceSelect = document.querySelector('#space-select');
  document.querySelectorAll('.choose-space').forEach(link => {
    link.addEventListener('click', () => {
      if (spaceSelect) spaceSelect.value = link.dataset.space;
    });
  });
})();
