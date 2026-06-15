/* Portfolio data — Ember & Frames
 * Interior & Architectural Photography
 *
 * Single source of truth for photos, projects, and ordering.
 * Images live under assets/images/{id}.jpg
 */
(function () {
  'use strict';

  var PHOTOS = [
    // ── IRA Moonglade · Show Flat (Lodha Group) ──────────────────────────────
    { id: 'p1',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Dining room, set for dinner' },
    { id: 'p2',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Dining, looking towards the entry' },
    { id: 'p3',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Living room, teal accent wall' },
    { id: 'p4',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Sofa detail, afternoon light' },
    { id: 'p5',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Master bedroom, wood headboard' },
    { id: 'p6',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Second bedroom, mint walls' },
    { id: 'p7',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Kids bedroom, pink and grey' },
    { id: 'p8',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Living and dining, wide' },
    { id: 'p9',  project: 'vertiga',   category: 'IRA Moonglade', caption: 'Table setting, brass and ceramic' },
    { id: 'p10', project: 'vertiga',   category: 'IRA Moonglade', caption: 'Second sitting room, red armchair' },

    // ── Rü — Craft Bar · Art Cuisine ──────────────────────────────────────────
    { id: 'r1',  project: 'tiffin',    category: 'Rü — Craft Bar', caption: 'Main dining room, warm lanterns' },
    { id: 'r2',  project: 'tiffin',    category: 'Rü — Craft Bar', caption: 'Full floor, overhead view' },
    { id: 'r3',  project: 'tiffin',    category: 'Rü — Craft Bar', caption: 'Evening service, wood divider' },
    { id: 'r4',  project: 'tiffin',    category: 'Rü — Craft Bar', caption: 'Stone wall, candlelit tables' },
    { id: 'r5',  project: 'tiffin',    category: 'Rü — Craft Bar', caption: 'Staircase corner, single setting' },
    { id: 'r6',  project: 'tiffin',    category: 'Rü — Craft Bar', caption: 'Afternoon light through the blinds' },
    { id: 'r7',  project: 'tiffin',    category: 'Rü — Craft Bar', caption: 'Banquette and wall niches' },

    // ── Studio 512 · Music studio ─────────────────────────────────────────────
    { id: 's1',  project: 'studio512', category: 'Studio 512', caption: 'Control room, red session' },
    { id: 's2',  project: 'studio512', category: 'Studio 512', caption: 'Condenser mic, vocal booth' },
    { id: 's3',  project: 'studio512', category: 'Studio 512', caption: 'Outboard rack, patch bay' },
    { id: 's4',  project: 'studio512', category: 'Studio 512', caption: 'Corridor, Hendrix quote wall' },
    { id: 's5',  project: 'studio512', category: 'Studio 512', caption: 'Reception, Studio 512 signage' },
    { id: 's6',  project: 'studio512', category: 'Studio 512', caption: 'Electronic kit, overhead detail' },
    { id: 's7',  project: 'studio512', category: 'Studio 512', caption: 'Alesis kit, live room' },
    { id: 's8',  project: 'studio512', category: 'Studio 512', caption: 'Bass guitar and Hartke cab' },
    { id: 's9',  project: 'studio512', category: 'Studio 512', caption: 'Drum pads, red glow' },
    { id: 's10', project: 'studio512', category: 'Studio 512', caption: 'Bass body detail' },
    { id: 's11', project: 'studio512', category: 'Studio 512', caption: 'Keyboard, keys in red light' },
    { id: 's12', project: 'studio512', category: 'Studio 512', caption: 'DiGiCo mixing desk' },
    { id: 's13', project: 'studio512', category: 'Studio 512', caption: 'Pearl acoustic kit, miked up' },
    { id: 's14', project: 'studio512', category: 'Studio 512', caption: 'Cymbal and overhead mic' },
    { id: 's15', project: 'studio512', category: 'Studio 512', caption: 'Congas, red room' },
    { id: 's16', project: 'studio512', category: 'Studio 512', caption: 'Bongo heads, close' },
    { id: 's17', project: 'studio512', category: 'Studio 512', caption: 'Marshall stack and silent guitar' },
    { id: 's18', project: 'studio512', category: 'Studio 512', caption: 'Marshall, darker angle' },

    // ── Lunar Cafe · Outdoor / garden dining ──────────────────────────────────
    { id: 'o1',  project: 'outdoor',   category: 'Lunar Cafe', caption: 'Terrace wall, terrarium circles at dusk' },
    { id: 'o2',  project: 'outdoor',   category: 'Lunar Cafe', caption: 'Crescent moon sculpture, daytime' },
    { id: 'o3',  project: 'outdoor',   category: 'Lunar Cafe', caption: 'Pebble mosaic wall art, garden seating' },
    { id: 'o4',  project: 'outdoor',   category: 'Lunar Cafe', caption: 'Stepping stone path, crescent beyond' },
    { id: 'o5',  project: 'outdoor',   category: 'Lunar Cafe', caption: 'Crescent lit, dusk reflection' },
  ];

  // Resolve image paths once
  PHOTOS.forEach(function (p) { p.src = 'assets/images/' + p.id + '.jpg'; });

  var PROJECTS = {
    studio512: {
      title:    'Studio 512',
      subtitle: 'Music studio · Hyderabad',
      client:   'Studio 512',
      year:     '2025',
      role:     'Photography & lighting',
      blurb:    'A full-service recording facility with five rooms: two live rooms, a control room, isolation booth, and rehearsal space. We shot entirely under practical red lighting — the studio’s own ambience, not ours. The brief was to make the gear look as good as it sounds.',
      photos:   ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15','s16','s17','s18'],
    },
    tiffin: {
      title:    'Rü — Craft Bar',
      subtitle: 'Restaurant & Bar · Hyderabad',
      client:   'Rü — Craft Bar',
      year:     '2025',
      role:     'Photography',
      blurb:    'A warm, layered restaurant space built around handwoven lanterns, raw plaster walls, and a boulder that was simply left where it stood. We shot before service and again at peak, so the room reads both as a space and as the place it becomes when full.',
      photos:   ['r4','r2','r1','r6','r5','r3','r7'],
    },
    vertiga: {
      title:    'IRA Moonglade',
      subtitle: 'Show flat · Hyderabad',
      client:   'Ira Ventures',
      year:     '2025',
      role:     'Lead photography',
      blurb:    'A 3-bedroom show flat completed for the developer’s sales launch. Shot across a single day, the brief was to capture the space as it would feel to a buyer walking in — lived-in, warm, and full of natural light.',
      photos:   ['p5','p1','p2','p3','p4','p6','p7','p8','p9','p10'],
    },
    outdoor: {
      title:    'Lunar Cafe',
      subtitle: 'Café · Hyderabad',
      client:   'Lunar Cafe',
      year:     '2025',
      role:     'Photography',
      blurb:    'An open-air dining garden built around a crescent moon sculpture and a hand-laid pebble mosaic. Shot twice — once in full afternoon light and again as the moon arch lit up at dusk. The space reads completely differently in each light.',
      photos:   ['o1','o2','o3','o4','o5'],
    },
  };

  // Display order on the page
  var PROJECT_ORDER = ['studio512', 'tiffin', 'vertiga', 'outdoor'];

  // Site-wide config
  var SITE = {
    name:        'Ember & Frames',
    discipline:  'Interior & Architectural Photography',
    city:        'Hyderabad, India',
    email:       'emberandframes@gmail.com',
    phone:       '+91 84474 02780',
    waHref:      'https://wa.me/918447402780',
    year:        '2026',

    // Hero copy
    title1:      'Spaces,',
    title2:      'quietly composed.',
    tagline:     'Interior & architectural photography for hospitality, residential, and studio interiors across India.',
    shortAbout:  'We work with developers, hospitality groups, and design studios — making pictures that earn their place on sales floors, hero banners, and brand books.',

    // Default hero photo per theme
    heroPhotoDark:  'p5', // Master bedroom, wood headboard
    heroPhotoLight: 'p5', // Master bedroom, wood headboard
  };

  window.PORTFOLIO_DATA = {
    PHOTOS: PHOTOS,
    PROJECTS: PROJECTS,
    PROJECT_ORDER: PROJECT_ORDER,
    SITE: SITE,
  };
})();
