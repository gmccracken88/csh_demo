/* CSH demo — made-up sample data for the mock screens.
   Every person, email and file below is invented. No real member data is used. */
window.CSH_DEMO = {
  members: [
    { name: 'Avery Lindqvist', type: 'Member', employer: 'Front Range Pathology Lab', city: 'Denver', email: 'avery.lindqvist@example.org' },
    { name: 'Marisol Ortega', type: 'Member', employer: 'Pikes Peak Regional Hospital', city: 'Colorado Springs', email: 'marisol.ortega@example.org' },
    { name: 'Devon Achebe', type: 'Student', employer: 'Arapahoe Community College', city: 'Littleton', email: 'devon.achebe@example.org' },
    { name: 'Hana Takahashi', type: 'Member', employer: 'Poudre Valley Research Histology', city: 'Fort Collins', email: 'hana.takahashi@example.org' },
    { name: 'Walt Brennan', type: 'Retired', employer: '', city: 'Golden', email: 'walt.brennan@example.org' },
    { name: 'Priya Raman', type: 'Member', employer: 'Western Slope Dermatopathology', city: 'Grand Junction', email: 'priya.raman@example.org' },
    { name: 'Tomasz Nowak', type: 'Member', employer: 'Boulder Biomedical Core', city: 'Boulder', email: 'tomasz.nowak@example.org' },
    { name: 'Keisha Monroe', type: 'Member', employer: 'Aurora Medical Campus', city: 'Aurora', email: 'keisha.monroe@example.org' },
    { name: 'Elliot Graves', type: 'Student', employer: 'Front Range Pathology Lab', city: 'Denver', email: 'elliot.graves@example.org' },
    { name: 'Rosalind Whitaker', type: 'Retired', employer: '', city: 'Pueblo', email: 'rosalind.whitaker@example.org' },
    { name: 'Samir Haddad', type: 'Member', employer: 'Northern Colorado Veterinary Diagnostics', city: 'Greeley', email: 'samir.haddad@example.org' },
    { name: 'Joon-ho Park', type: 'Member', employer: 'Longs Peak Hospital', city: 'Longmont', email: 'joonho.park@example.org' }
  ],

  // members: true means the folder only opens after login.
  folders: [
    { name: 'Constitution and Bylaws', members: false, files: [
      { title: 'CSH Constitution and Bylaws', kind: 'PDF', date: '2020' }
    ]},
    { name: 'Forms', members: false, files: [
      { title: 'Award nomination form', kind: 'PDF', date: '2026' },
      { title: 'Membership application (print version)', kind: 'PDF', date: '2026' },
      { title: 'Vendor registration form', kind: 'PDF', date: '2026' },
      { title: 'Expense reimbursement form', kind: 'DOCX', date: '2025' },
      { title: 'Speaker information form', kind: 'DOCX', date: '2025' }
    ]},
    { name: 'Meeting Programs', members: false, files: [
      { title: '2026 Fall Meeting program', kind: 'PDF', date: '2026' },
      { title: '2024 Fall Meeting program', kind: 'PDF', date: '2024' },
      { title: '2023 Fall Meeting program', kind: 'PDF', date: '2023' },
      { title: '2023 Spring Meeting program', kind: 'PDF', date: '2023' }
    ]},
    { name: 'Policies', members: false, files: [
      { title: 'Privacy policy', kind: 'PDF', date: '2024' },
      { title: 'Refund policy', kind: 'PDF', date: '2024' }
    ]},
    { name: 'Meeting Minutes', members: true, files: [
      { title: 'Sample: annual business meeting minutes', kind: 'PDF', date: '2025' },
      { title: 'Sample: board meeting minutes, spring', kind: 'PDF', date: '2025' },
      { title: 'Sample: board meeting minutes, winter', kind: 'PDF', date: '2024' }
    ]},
    { name: 'Newsletters', members: true, files: [
      { title: 'Sample: CSH newsletter, fall issue', kind: 'PDF', date: '2026' },
      { title: 'Sample: CSH newsletter, spring issue', kind: 'PDF', date: '2026' },
      { title: 'Sample: CSH newsletter, fall issue', kind: 'PDF', date: '2025' }
    ]},
    { name: 'Presentations', members: true, files: [
      { title: 'Sample: meeting handout, special stains', kind: 'PDF', date: '2019' },
      { title: 'Sample: meeting handout, IHC validation', kind: 'PDF', date: '2018' }
    ]}
  ],

  volunteering: [
    { title: 'Registration desk', when: 'Fall Meeting, Saturday morning', category: 'Fall Meeting', spots: 2 },
    { title: 'Room setup and vendor check-in', when: 'Fall Meeting, Friday afternoon', category: 'Fall Meeting', spots: 3 },
    { title: 'Awards ballot counting', when: 'Fall Meeting, Saturday lunch', category: 'Annual', spots: 1 },
    { title: 'Newsletter contributor', when: 'Ongoing', category: 'Annual', spots: 4 }
  ]
};
