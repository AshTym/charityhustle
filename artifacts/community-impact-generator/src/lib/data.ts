export type CountryCode = 'AU' | 'NZ' | 'UK' | 'US' | 'CA';

export const COUNTRIES: Record<CountryCode, string> = {
  AU: 'Australia',
  NZ: 'New Zealand',
  UK: 'United Kingdom',
  US: 'United States',
  CA: 'Canada'
};

export type Charity = {
  id: string;
  country: CountryCode;
  name: string;
  description: string;
  url: string;
  tags: string[];
};

export const CHARITIES: Charity[] = [
  // AU
  { id: 'au-vol', country: 'AU', name: 'Volunteering Australia', description: 'The national peak body for volunteering. A comprehensive hub connecting people to local opportunities across all sectors.', url: 'https://www.volunteeringaustralia.org/', tags: ['All causes', 'Community'] },
  { id: 'au-govol', country: 'AU', name: 'GoVolunteer', description: 'A massive national database designed to match your interests, skills, and availability to thousands of local causes.', url: 'https://www.govolunteer.com.au/', tags: ['All causes'] },
  { id: 'au-seek', country: 'AU', name: 'SEEK Volunteer', description: 'Brings SEEK’s search power to the non-profit sector, making it easy to find roles that fit your professional skills or personal passions.', url: 'https://www.volunteer.com.au/', tags: ['All causes', 'Skills & behind the scenes'] },
  { id: 'au-red-cross', country: 'AU', name: 'Australian Red Cross', description: 'Support vulnerable people in your community, from checking in on older neighbours to assisting during natural disasters.', url: 'https://www.redcross.org.au/volunteer/', tags: ['Crisis support', 'Older neighbours', 'Community'] },
  { id: 'au-cva', country: 'AU', name: 'Conservation Volunteers Australia', description: 'Get your hands dirty protecting local biodiversity, planting trees, and restoring habitats for native wildlife.', url: 'https://conservationvolunteers.com.au/get-involved/volunteer/', tags: ['Nature & climate', 'Animals'] },
  { id: 'au-smith-family', country: 'AU', name: 'The Smith Family', description: 'Help young Australians experiencing disadvantage through mentoring, learning support, events, and skilled volunteer roles.', url: 'https://www.thesmithfamily.com.au/get-involved/volunteer', tags: ['Young people', 'Skills & behind the scenes'] },
  { id: 'au-rspca', country: 'AU', name: 'RSPCA Australia', description: 'Support animal welfare through local care, events, administration, fundraising, and community education opportunities.', url: 'https://www.rspca.org.au/support-us/volunteer', tags: ['Animals', 'Community'] },
  { id: 'au-landcare', country: 'AU', name: 'Landcare Australia', description: 'Join practical environmental projects that restore habitats, protect biodiversity, and strengthen local communities.', url: 'https://landcareaustralia.org.au/get-involved/', tags: ['Nature & climate', 'Community'] },
  { id: 'au-vinnies', country: 'AU', name: 'Vinnies Australia', description: 'Offer practical help, companionship, retail support, or professional skills to people experiencing hardship.', url: 'https://www.vinnies.org.au/get-involved/volunteering', tags: ['Community', 'Older neighbours', 'Skills & behind the scenes'] },
  { id: 'au-caritas', country: 'AU', name: 'Caritas Australia', description: 'Contribute your time and skills to humanitarian action, community events, advocacy, and education programs.', url: 'https://www.caritas.org.au/volunteer/', tags: ['Crisis support', 'Community', 'Skills & behind the scenes'] },
  { id: 'au-community-first', country: 'AU', name: 'Community First Development', description: 'A First Nations-led organisation where skilled volunteers work alongside Aboriginal and Torres Strait Islander communities on community-led priorities.', url: 'https://communityfirstdevelopment.org.au/getinvolved', tags: ['First Nations & Indigenous', 'Community', 'Skills & behind the scenes'] },
  { id: 'au-antar', country: 'AU', name: 'ANTAR', description: 'A national advocacy organisation working for justice, rights, respect, and self-determination for Aboriginal and Torres Strait Islander peoples.', url: 'https://antar.org.au/get-involved', tags: ['First Nations & Indigenous', 'Community'] },
  { id: 'au-first-nations-foundation', country: 'AU', name: 'First Nations Foundation', description: 'An Indigenous financial wellbeing foundation helping Aboriginal and Torres Strait Islander people build financial confidence and prosperity.', url: 'https://firstnationsfoundation.org.au/', tags: ['First Nations & Indigenous', 'Skills & behind the scenes'] },

  // NZ
  { id: 'nz-vol', country: 'NZ', name: 'Volunteering New Zealand', description: 'The national voice for volunteering in Aotearoa, offering pathways to contribute to almost any cause.', url: 'https://www.volunteeringnz.org.nz/', tags: ['All causes', 'Community'] },
  { id: 'nz-seek', country: 'NZ', name: 'SEEK Volunteer NZ', description: 'Find flexible, one-off, or long-term volunteer roles matching your skills and schedule.', url: 'https://seekvolunteer.co.nz/', tags: ['All causes', 'Skills & behind the scenes'] },
  { id: 'nz-red-cross', country: 'NZ', name: 'New Zealand Red Cross', description: 'Deliver Meals on Wheels, support former refugees, or train to help your community in emergencies.', url: 'https://www.redcross.org.nz/get-involved/volunteer/', tags: ['Crisis support', 'Older neighbours', 'Community'] },
  { id: 'nz-fb', country: 'NZ', name: 'Forest & Bird', description: 'New Zealand’s leading independent conservation organisation. Help protect native plants, animals, and wild places.', url: 'https://www.forestandbird.org.nz/get-involved/volunteer', tags: ['Nature & climate', 'Animals'] },
  { id: 'nz-spca', country: 'NZ', name: 'SPCA New Zealand', description: 'Help animals through hands-on care, foster support, op shops, events, and local community roles.', url: 'https://www.spca.nz/how-you-can-help/volunteer', tags: ['Animals', 'Community'] },
  { id: 'nz-doc', country: 'NZ', name: 'Department of Conservation', description: 'Protect Aotearoa’s native species, tracks, coastlines, and treasured natural places through practical volunteering.', url: 'https://www.doc.govt.nz/get-involved/volunteer/', tags: ['Nature & climate', 'Animals'] },
  { id: 'nz-rmhc', country: 'NZ', name: 'Ronald McDonald House Charities NZ', description: 'Support families with a child in hospital through hosting, housekeeping, meals, events, and practical help.', url: 'https://rmhc.org.nz/support-us/volunteer', tags: ['Young people', 'Community'] },
  { id: 'nz-cancer-society', country: 'NZ', name: 'Cancer Society of New Zealand', description: 'Contribute to community support, driving, fundraising, events, administration, and local outreach.', url: 'https://www.cancer.org.nz/get-involved/volunteer/', tags: ['Community', 'Older neighbours', 'Skills & behind the scenes'] },
  { id: 'nz-habitat', country: 'NZ', name: 'Habitat for Humanity New Zealand', description: 'Help create safe, healthy homes through building projects, ReStore roles, events, and professional support.', url: 'https://habitat.org.nz/volunteer/', tags: ['Community', 'Skills & behind the scenes'] },
  { id: 'nz-mwwl', country: 'NZ', name: 'Māori Women’s Welfare League', description: 'A national Māori organisation strengthening the wellbeing of wāhine Māori, tamariki, rangatahi, and whānau through community-led action.', url: 'https://www.mwwl.org.nz/', tags: ['First Nations & Indigenous', 'Young people', 'Community'] },
  { id: 'nz-maori-wardens', country: 'NZ', name: 'Māori Wardens New Zealand', description: 'Māori volunteers supporting whānau, community wellbeing, safety, and practical assistance throughout Aotearoa.', url: 'https://maoriwardens.nz/contact-maori-wardens/', tags: ['First Nations & Indigenous', 'Community'] },

  // UK
  { id: 'uk-reach', country: 'UK', name: 'Reach Volunteering', description: 'Connects charities with people willing to share their professional skills (like design, writing, or organizing).', url: 'https://reachvolunteering.org.uk/', tags: ['Skills & behind the scenes'] },
  { id: 'uk-ncvo', country: 'UK', name: 'NCVO', description: 'The National Council for Voluntary Organisations champions the voluntary sector and connects people to countless community roles.', url: 'https://www.ncvo.org.uk/get-involved/volunteering/', tags: ['All causes', 'Community'] },
  { id: 'uk-red-cross', country: 'UK', name: 'British Red Cross', description: 'Help people in crisis respond to and recover from emergencies in your local community.', url: 'https://www.redcross.org.uk/get-involved/volunteer-with-us', tags: ['Crisis support', 'Community'] },
  { id: 'uk-vol-matters', country: 'UK', name: 'Volunteering Matters', description: 'Focused on local impact, offering roles that support young people, older and disabled people, and local families.', url: 'https://volunteeringmatters.org.uk/', tags: ['Young people', 'Older neighbours', 'Community'] },
  { id: 'uk-rvs', country: 'UK', name: 'Royal Voluntary Service', description: 'Support people, communities, and the NHS through companionship, patient services, transport, and local activities.', url: 'https://www.royalvoluntaryservice.org.uk/volunteering/', tags: ['Older neighbours', 'Community'] },
  { id: 'uk-age-uk', country: 'UK', name: 'Age UK', description: 'Help older people through friendship, advice, digital support, shops, fundraising, and local services.', url: 'https://www.ageuk.org.uk/get-involved/volunteer/', tags: ['Older neighbours', 'Community'] },
  { id: 'uk-save-children', country: 'UK', name: 'Save the Children UK', description: 'Use your time in shops, campaigns, events, and specialist roles to help children thrive in the UK and worldwide.', url: 'https://www.savethechildren.org.uk/how-you-can-help/volunteer', tags: ['Young people', 'Crisis support', 'Skills & behind the scenes'] },
  { id: 'uk-national-trust', country: 'UK', name: 'National Trust', description: 'Care for nature, historic places, collections, gardens, visitors, and community programs across the country.', url: 'https://www.nationaltrust.org.uk/support-us/volunteer', tags: ['Nature & climate', 'Community'] },
  { id: 'uk-rspca', country: 'UK', name: 'RSPCA', description: 'Improve animal welfare through care, fostering, fundraising, shops, events, and support behind the scenes.', url: 'https://www.rspca.org.uk/getinvolved/volunteer', tags: ['Animals', 'Skills & behind the scenes'] },
  { id: 'uk-survival-international', country: 'UK', name: 'Survival International', description: 'A UK-based global movement campaigning for the rights of Indigenous and tribal peoples and defending their lands and ways of life.', url: 'https://www.survivalinternational.org/getinvolved', tags: ['First Nations & Indigenous', 'Skills & behind the scenes'] },

  // US
  { id: 'us-volmatch', country: 'US', name: 'VolunteerMatch', description: 'The web’s largest volunteer engagement network, making it easy to find good causes in your zip code.', url: 'https://www.volunteermatch.org/', tags: ['All causes'] },
  { id: 'us-catchafire', country: 'US', name: 'Catchafire', description: 'Matches professionals with non-profits that need specific skills, from graphic design to data analysis.', url: 'https://www.catchafire.org/volunteer/', tags: ['Skills & behind the scenes'] },
  { id: 'us-points', country: 'US', name: 'Points of Light Engage', description: 'A global network that mobilizes millions of people to take action on the causes they care about most.', url: 'https://engage.pointsoflight.org/', tags: ['All causes', 'Community'] },
  { id: 'us-red-cross', country: 'US', name: 'American Red Cross', description: 'Turn compassion into action. Volunteers make up 90% of the Red Cross workforce responding to emergencies.', url: 'https://www.redcross.org/volunteer/become-a-volunteer.html', tags: ['Crisis support', 'Community'] },
  { id: 'us-americorps', country: 'US', name: 'AmeriCorps', description: 'Find structured service opportunities supporting education, disaster response, public health, and communities nationwide.', url: 'https://www.americorps.gov/serve/fit-finder', tags: ['All causes', 'Community'] },
  { id: 'us-habitat', country: 'US', name: 'Habitat for Humanity', description: 'Help families build and improve homes through construction, ReStore, advocacy, and skills-based roles.', url: 'https://www.habitat.org/volunteer', tags: ['Community', 'Skills & behind the scenes'] },
  { id: 'us-feeding-america', country: 'US', name: 'Feeding America', description: 'Support food banks and local communities by sorting food, distributing meals, fundraising, or sharing professional skills.', url: 'https://www.feedingamerica.org/take-action/volunteer', tags: ['Food security', 'Community', 'Skills & behind the scenes'] },
  { id: 'us-nps', country: 'US', name: 'National Park Service', description: 'Care for parks, wildlife, historic sites, trails, visitors, and educational programs across the United States.', url: 'https://www.nps.gov/getinvolved/volunteer.htm', tags: ['Nature & climate', 'Community'] },
  { id: 'us-bbbs', country: 'US', name: 'Big Brothers Big Sisters of America', description: 'Become a mentor and help a young person build confidence, connection, and a bigger sense of possibility.', url: 'https://www.bbbs.org/get-involved/become-a-big/', tags: ['Young people', 'Community'] },
  { id: 'us-narf', country: 'US', name: 'Native American Rights Fund', description: 'A national legal advocacy organisation protecting Native American rights, tribal sovereignty, natural resources, and cultural traditions.', url: 'https://narf.org/support-us', tags: ['First Nations & Indigenous', 'Skills & behind the scenes'] },
  { id: 'us-first-nations-development', country: 'US', name: 'First Nations Development Institute', description: 'A Native-led national organisation strengthening Native economies and supporting community-controlled solutions across Indian Country.', url: 'https://firstnations.org/', tags: ['First Nations & Indigenous', 'Community'] },

  // CA
  { id: 'ca-vol-canada', country: 'CA', name: 'Volunteer Canada', description: 'Provides national leadership and expertise on volunteerism, helping Canadians find meaningful ways to contribute.', url: 'https://volunteer.ca/', tags: ['All causes', 'Community'] },
  { id: 'ca-vol-connect', country: 'CA', name: 'Volunteer Connector', description: 'A platform connecting people to volunteer opportunities that match their values, schedules, and skills.', url: 'https://www.volunteerconnector.org/', tags: ['All causes'] },
  { id: 'ca-red-cross', country: 'CA', name: 'Canadian Red Cross', description: 'Provide relief and support to people experiencing vulnerability and crises in your community.', url: 'https://www.redcross.ca/volunteer', tags: ['Crisis support', 'Community'] },
  { id: 'ca-cv', country: 'CA', name: 'CharityVillage', description: 'Canada’s top destination for non-profit jobs and volunteer positions across all sectors and causes.', url: 'https://charityvillage.com/volunteer-job-search-results/', tags: ['All causes', 'Skills & behind the scenes'] },
  { id: 'ca-habitat', country: 'CA', name: 'Habitat for Humanity Canada', description: 'Build stronger communities through home projects, ReStore roles, events, and professional volunteering.', url: 'https://habitat.ca/en/volunteer', tags: ['Community', 'Skills & behind the scenes'] },
  { id: 'ca-ncc', country: 'CA', name: 'Nature Conservancy of Canada', description: 'Join conservation projects that protect habitats, restore ecosystems, and connect people with nature.', url: 'https://natureconservancy.ca/what-you-can-do/conservation-volunteers', tags: ['Nature & climate', 'Animals'] },
  { id: 'ca-blood-services', country: 'CA', name: 'Canadian Blood Services', description: 'Welcome donors, support events, provide transportation, and strengthen Canada’s blood and plasma system.', url: 'https://www.blood.ca/en/ways-donate/volunteering', tags: ['Crisis support', 'Community'] },
  { id: 'ca-cancer-society', country: 'CA', name: 'Canadian Cancer Society', description: 'Support people affected by cancer through peer connection, transportation, events, advocacy, and office roles.', url: 'https://cancer.ca/en/get-involved/volunteer', tags: ['Community', 'Older neighbours', 'Skills & behind the scenes'] },
  { id: 'ca-food-banks', country: 'CA', name: 'Food Banks Canada', description: 'Help food banks serve their communities through local volunteering, campaigns, events, and skilled support.', url: 'https://foodbankscanada.ca/get-involved/volunteer/', tags: ['Food security', 'Community', 'Skills & behind the scenes'] },
  { id: 'ca-indspire', country: 'CA', name: 'Indspire', description: 'A national Indigenous charity investing in the education of First Nations, Inuit, and Métis students and celebrating their achievements.', url: 'https://indspire.ca/', tags: ['First Nations & Indigenous', 'Young people', 'Skills & behind the scenes'] },
  { id: 'ca-nwac', country: 'CA', name: 'Native Women’s Association of Canada', description: 'A national Indigenous organisation advocating for the rights, safety, and wellbeing of Indigenous women, girls, and gender-diverse people.', url: 'https://nwac.ca/', tags: ['First Nations & Indigenous', 'Community'] }
];

export type Idea = {
  id: string;
  tag: string;
  title: string;
  description: string;
  time: string;
  first: string;
  why: string;
  impact: string;
  potential: string;
  expand: string;
};

export const interests = ['Young people', 'Nature & climate', 'Food security', 'Older neighbours', 'Arts & culture', 'Animals', 'First Nations'];
export const skills = ['Listening', 'Making things', 'Organising', 'Teaching', 'Writing', 'Fixing & tinkering'];
export const times = ['20 minutes', 'An hour a week', 'A half day', 'A regular rhythm'];
export const outcomes = ['Meet people nearby', 'Make a visible difference', 'Learn as I go', 'Support a cause I trust'];
export const modes = ['Hands-on', 'Behind the scenes', 'With a small team', 'A one-off project'];

export const ideas: Idea[] = [
  {
    id: 'neighbourhood-skill-share',
    tag: 'Meet people nearby',
    title: 'Host a tiny skill share',
    description: 'Turn one thing you know into a relaxed, useful gathering for a handful of neighbours. You might demonstrate basic bike maintenance, help people understand a phone setting, share a simple recipe, teach conversational language, or explain a practical life skill—then invite everyone else to contribute what they know too.',
    time: '60–90 minutes',
    first: 'Choose one skill you can explain without much preparation. Ask a library, neighbourhood house, school, faith group, or community centre whether you can use a free table or room for a small, no-cost session.',
    why: 'This is a good match if you enjoy making things understandable, prefer a clear one-off commitment, or want to meet people without signing up for a formal ongoing role. The skill does not need to be impressive—useful and welcoming matters more.',
    impact: 'People leave with knowledge they can use straight away, while neighbours who may not normally meet gain a reason to talk. A small session can reduce isolation, build confidence, and reveal useful skills already present in the community.',
    potential: 'One gathering can become a rotating exchange led by different residents. Over time, it can create stronger local relationships, make practical knowledge more accessible, and give people a low-pressure pathway into wider community participation.',
    expand: 'Invite a local organisation to suggest topics people regularly need help with. Add a “bring a skill, learn a skill” format, create simple take-home notes, recruit another host, or run a short monthly series in partnership with a trusted community venue.',
  },
  {
    id: 'welcome-walk',
    tag: 'Make belonging visible',
    title: 'Make a welcome walk',
    description: 'Help someone who is new to the area feel less like a visitor and more like a neighbour. Take a gentle, conversation-led walk past useful and welcoming places—public transport, parks, affordable shops, libraries, community services, cultural spaces, and the small landmarks that make local life easier.',
    time: 'An hour a week',
    first: 'Contact a local settlement service, neighbourhood centre, refugee support group, council welcome program, university, or community language group. Offer to join an existing buddy program rather than approaching an unfamiliar person independently.',
    why: 'This suits someone who is a good listener, enjoys walking and conversation, and knows how confusing a new place can feel. It uses patience and local knowledge rather than specialist qualifications, and the pace can stay gentle and informal.',
    impact: 'A familiar face and practical orientation can reduce isolation and help a new resident access services, activities, and everyday essentials with more confidence. Just as importantly, being welcomed by a local person sends a clear message that they belong.',
    potential: 'A single walk may lead to an ongoing friendship, participation in a community group, or faster access to support. Repeated across a neighbourhood, welcome walks can strengthen social trust and help local services understand what newcomers actually need.',
    expand: 'Create a simple multilingual neighbourhood map with participants, invite other local volunteers to become walking buddies, organise a small monthly welcome group, or share recurring access barriers with the relevant council or community organisation.',
  },
  {
    id: 'pantry-storyboard',
    tag: 'Behind the scenes',
    title: 'Give a pantry a clearer story',
    description: 'Use writing, photography, design, administration, or systems thinking to make a food pantry easier to discover, understand, and support. You could clarify opening information, improve donation guidance, organise signs, simplify a volunteer handout, document a process, or tell the story of the pantry’s work with dignity.',
    time: 'One afternoon',
    first: 'Review the pantry’s public information and note one specific, solvable improvement. Send a short message such as: “I noticed your donation list is hard to find on mobile. I can turn it into a clear one-page graphic this week—would that be useful?”',
    why: 'This fits people who would rather contribute behind the scenes, have limited time, or can offer communication and organisational skills. A tightly defined task respects the pantry’s priorities and is often easier for a busy team to accept than a vague offer to help.',
    impact: 'Clear information helps people find food support with less stress, helps donors give what is genuinely needed, and saves staff or volunteers from repeatedly answering the same questions. Better systems leave more time and energy for direct community support.',
    potential: 'One useful resource can become a repeatable template for campaigns, volunteer onboarding, referrals, or stock updates. Small operational improvements can increase donations, reduce waste, improve dignity, and strengthen trust in the service.',
    expand: 'Ask whether the pantry has another small communications or systems bottleneck. Build reusable templates, train a volunteer to update them, improve accessibility and translations, or connect the pantry with other skilled helpers for web, data, photography, or process work.',
  },
  {
    id: 'digital-confidence-hour',
    tag: 'Older neighbours',
    title: 'Run a digital confidence hour',
    description: 'Help people feel more capable using the technology now woven into everyday life. In a calm, supervised session, you might explain video calls, accessibility settings, online appointment systems, photo sharing, password safety, or how to recognise common scams—always working at the learner’s pace.',
    time: 'An hour a fortnight',
    first: 'Ask a library, seniors’ centre, neighbourhood house, or community organisation whether they already run digital support sessions. Offer to assist with one session and follow their privacy and safety guidance rather than collecting devices or personal details yourself.',
    why: 'This is a strong fit if you are patient, comfortable explaining everyday technology, and happy to solve one small problem at a time. You do not need to be an IT professional; listening carefully and avoiding jargon are the most useful skills.',
    impact: 'Digital confidence helps people stay connected, access essential services, recognise fraud, and maintain independence. Solving a single frustrating problem can remove a barrier that has been limiting someone for weeks or months.',
    potential: 'Regular support can reduce digital exclusion across a whole community and reveal recurring issues that services should address. Participants may also begin helping one another, turning a support session into a more connected peer network.',
    expand: 'Create plain-language guides based on common questions, recruit multilingual helpers, add a device-accessibility session, or help the host organisation build a safe referral pathway for problems involving banking, identity, or sensitive personal information.',
  },
  {
    id: 'community-nature-count',
    tag: 'Nature & climate',
    title: 'Start a community nature count',
    description: 'Turn an ordinary walk into useful local environmental information. Invite a few people to observe birds, insects, plants, litter, shade, water quality, or seasonal changes and contribute observations through an established citizen-science program that researchers and conservation groups can use.',
    time: 'One half-day',
    first: 'Choose one established citizen-science project operating in your area and read its observation guidelines. Pick a safe, accessible route, test the recording process yourself, and invite a small group through a local community or conservation organisation.',
    why: 'This works well if you enjoy being outdoors, noticing details, taking photographs, or bringing people together around a clear task. It offers a practical contribution without requiring specialist environmental qualifications or a long commitment.',
    impact: 'Well-recorded observations can help researchers understand species distribution, habitat health, environmental pressures, and seasonal change. The activity also gives participants a closer relationship with the nature already around them.',
    potential: 'Repeated counts can build a valuable picture of local change and strengthen the case for habitat protection, tree planting, cleaner waterways, or safer wildlife corridors. They can also introduce new people to conservation volunteering.',
    expand: 'Repeat the count each season, partner with a school or Landcare-style group, invite a local expert to verify observations, map accessibility or heat alongside biodiversity, or turn the findings into a short community briefing for local decision-makers.',
  },
  {
    id: 'first-nations-skilled-support',
    tag: 'First Nations',
    title: 'Back a First Nations-led project',
    description: 'Offer a practical skill to a First Nations or Indigenous-led organisation working on priorities set by its community. That could mean helping with bookkeeping, grant research, event logistics, photography, communications, data cleanup, mentoring, or another clearly requested task—contributing under the organisation’s direction rather than arriving with your own solution.',
    time: 'A defined short project',
    first: 'Use the First Nations & Indigenous directory to identify an Indigenous-led organisation and read its current priorities, volunteer guidance, and cultural protocols. Respond to an advertised need or make one respectful, specific offer that is easy to accept or decline.',
    why: 'This fits people who can contribute a useful professional or practical skill and are prepared to listen, follow community leadership, and work without seeking the spotlight. Reliability, humility, and respect for boundaries matter as much as technical ability.',
    impact: 'Good behind-the-scenes support can free staff and community leaders to focus on cultural, social, environmental, legal, or economic priorities. When the contribution answers a real request, even a small project can strengthen an organisation’s capacity.',
    potential: 'A well-scoped task may become a trusted longer-term relationship, a reusable system, or a connection to other resources the organisation controls. The wider change comes from supporting self-determined work rather than substituting outside judgement for community expertise.',
    expand: 'Document your work clearly, hand over editable files, and ask what would make the result sustainable. If invited, train a team member, recruit another specialist for a defined gap, fund the organisation’s time, or continue supporting future projects on its terms.',
  },
];
