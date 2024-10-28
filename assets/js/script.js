const projects = [
    {
      year: 2023,
      project: "Emerson Collective",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "TypeScript", "SCSS", "Contentful"],
      link: "https://emersoncollective.com"
    },
    {
      year: 2023,
      project: "Harvard Business School Next.js Site",
      madeAt: "Upstatement",
      builtWith: ["React", "TypeScript", "Next.js", "Contentful"],
      link: "https://hbs.edu"
    },
    {
      year: 2022,
      project: "Harvard Business School Design System",
      madeAt: "Upstatement",
      builtWith: ["Storybook", "React", "TypeScript"],
      link: ""
    },
    {
      year: 2022,
      project: "Threadable",
      madeAt: "Upstatement",
      builtWith: ["React Native", "Ruby on Rails", "Firebase"],
      link: "https://apps.apple.com"
    },
    {
      year: 2022,
      project: "Pratt",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "WordPress Multisite", "Gutenberg", "JavaScript"],
      link: "https://pratt.edu"
    },
    {
      year: 2022,
      project: "Everytown Gun Law Rankings",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "PHP", "Airtable API"],
      link: "https://everytownresearch.org/rankings"
    },
    {
      year: 2021,
      project: "Koala Health",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "TypeScript", "Redux Toolkit", "Stripe", "Firebase Auth", "Formik", "Vercel"],
      link: "https://koala.health"
    },
    {
      year: 2021,
      project: "Philadelphia Inquirer Sports Scoreboards",
      madeAt: "Upstatement",
      builtWith: ["React", "TypeScript", "Stats Perform API"],
      link: "https://inquirer.com/sports"
    },
    {
      year: 2021,
      project: "Vanderbilt Design System",
      madeAt: "Upstatement",
      builtWith: ["Twig", "Puppy", "JavaScript"],
      link: "https://vanderbilt.edu"
    },
    {
      year: 2020,
      project: "Michelle Wu for Boston Grassroots Toolkit",
      madeAt: "Upstatement",
      builtWith: ["Gatsby", "Styled Components"],
      link: "https://toolkit.michelleforboston.com"
    },
    {
      year: 2020,
      project: "The 19th News",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "Gutenberg", "PHP"],
      link: "https://19thnews.org"
    },
    {
      year: 2020,
      project: "Upstatement’s WordPress Starter Kit",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "Gutenberg", "PHP", "JavaScript"],
      link: null
    },
    {
      year: 2020,
      project: "Northeastern CSSH",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "WordPress Multisite", "PHP", "Algolia", "JavaScript"],
      link: "https://cssh.northeastern.edu"
    },
    {
      year: 2020,
      project: "Integrating Algolia Search with WordPress Multisite",
      madeAt: "Upstatement",
      builtWith: ["Algolia", "WordPress", "PHP"],
      link: "https://medium.com"
    },
    {
      year: 2020,
      project: "Time to Have More Fun",
      madeAt: "",
      builtWith: ["Next.js", "Tailwind CSS", "Firebase"],
      link: "https://time-to-have-more-fun.now.sh"
    },
    {
      year: 2019,
      project: "Upstatement.com",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "Vue", "Prismic"],
      link: "https://upstatement.com"
    },
    {
      year: 2019,
      project: "Building a Headless Mobile App CMS From Scratch",
      madeAt: "Upstatement",
      builtWith: ["Node.js", "Express", "Firebase", "Vue"],
      link: "https://medium.com"
    },
    {
      year: 2019,
      project: "Moms Demand Action Mobile App",
      madeAt: "Upstatement",
      builtWith: ["NativeScript Vue", "iOS", "Android"],
      link: null
    },
    {
      year: 2019,
      project: "OctoProfile",
      madeAt: "",
      builtWith: ["Next.js", "Chart.js", "GitHub API"],
      link: "https://octoprofile.now.sh"
    },
    {
      year: 2018,
      project: "Google Keep Clone",
      madeAt: "",
      builtWith: ["Vue", "Firebase"],
      link: "https://github.com"
    },
    {
      year: 2018,
      project: "Spotify Profile",
      madeAt: "",
      builtWith: ["React", "Express", "Styled Components"],
      link: "https://spotify-profile.herokuapp.com"
    },
    {
      year: 2018,
      project: "Devoted Health",
      madeAt: "Upstatement",
      builtWith: ["Gatsby","TypeScript", "Algolia"],
      link: "https://devoted.com"
    },
    {
      year: 2018,
      project: "Flagship Pioneering",
      madeAt: "Upstatement",
      builtWith: ["Craft CMS","Chart.js"],
      link: "https://flagshippioneering.com"
    },
    {
      year: 2018,
      project: "Upstatement ESLint Config",
      madeAt: "Upstatement",
      builtWith: ["ESLint"],
      link: "https://npmjs.com"
    },
    {
      year: 2018,
      project: "Upstatement Prettier Config",
      madeAt: "Upstatement",
      builtWith: ["Prettier"],
      link: "https://npmjs.com"
    },
    {
      year: 2018,
      project: "blistabloc",
      madeAt: "Scout",
      builtWith: ["WordPress", "Timber", "WooCommerce"],
      link: null
    },
    {
      year: 2018,
      project: "Spotify’s Top Tracks of 2017",
      madeAt: "Northeastern",
      builtWith: ["R", "Spotify API"],
      link: "https://github.com"
    },
    {
      year: 2017,
      project: "Halcyon Theme",
      madeAt: "",
      builtWith: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      link: "https://halcyon-theme.netlify.com"
    },
    {
      year: 2017,
      project: "Apple Music - MusicKit JS",
      madeAt: "Apple",
      builtWith: ["JavaScript"],
      link: "https://developer.apple.com"
    },
    {
      year: 2017,
      project: "Apple Music Embeddable Web Player Widget",
      madeAt: "Apple",
      builtWith: ["MusicKit", "JavaScript", "SCSS"],
      link: "https://tools.applemusic.com"
    },
    {
      year: 2017,
      project: "Apple Music Facebook Messenger Integration",
      madeAt: "Apple",
      builtWith: ["Ember", "JavaScript", "SCSS"],
      link: "https://theverge.com"
    },
    {
      year: 2017,
      project: "Personal Website V3",
      madeAt: "",
      builtWith: ["Jekyll", "SCSS", "JavaScript"],
      link: "https://v3.brittanychiang.com"
    },
    {
      year: 2017,
      project: "Interventions",
      madeAt: "Scout",
      builtWith: ["Jekyll"],
      link: "https://interventions.design"
    },
    {
      year: 2017,
      project: "Lonely Planet DBMS",
      madeAt: "Northeastern",
      builtWith: ["Python", "MySQL", "Flask", "JavaScript"],
      link: "https://github.com"
    },
    {
      year: 2017,
      project: "myNEU Redesign",
      madeAt: "Northeastern",
      builtWith: ["Jekyll", "SCSS", "JavaScript"],
      link: "https://bchiang7.github.io/Redesign-myNEU"
    },
    {
        year: 2017,
        project: "Crowd DJ",
        madeAt: "HackBeanpot 2017",
        builtWith: ["React", "Firebase", "Spotify API"],
        link: "https://github.com"
    },
    {
        year: 2016,
        project: "Personal Website V2",
        madeAt: "",
        builtWith: ["Jekyll", "SCSS", "JavaScript"],
        link: "https://v2.brittanychiang.com"
    },
    {
        year: 2016,
        project: "Weather Widget",
        madeAt: "",
        builtWith: ["Node", "Express", "EJS"],
        link: "https://github.com"
    },
    {
        year: 2016,
        project: "Screentime 2.0",
        madeAt: "Starry",
        builtWith: ["Cordova","Backbone", "Marionette"],
        link: "https://starry.com"
    },
    {
        year: 2016,
        project: "React Profile",
        madeAt: "",
        builtWith: ["React", "CSS"],
        link: "https://bchiang7.github.io/react-profile"
    },
    {
        year: 2016,
        project: "CourseSource",
        madeAt: "Northeastern",
        builtWith: ["Angular", "Node", "Express", "MongoDB"],
        link: "https://github.com"
    },
    {
        year: 2016,
        project: "Personal Website V1",
        madeAt: "",
        builtWith: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        link: "https://v1.brittanychiang.com/"
    },
    {
        year: 2016,
        project: "Fontipsums",
        madeAt: "",
        builtWith: ["HTML", "SCSS"],
        link: "https://bchiang7.github.io/fontipsums"
    },
    {
        year: 2015,
        project: "NU Women in Tech",
        madeAt: "Northeastern",
        builtWith: ["Jekyll", "Bootstrap"],
        link: ""
    },
    {
        year: 2015,
        project: "One Card For All",
        madeAt: "MullenLowe",
        builtWith: ["HTML", "CSS", "JavaScript", "JQuery"],
        link: null
    },
    {
        year: 2015,
        project: "JetBlue HumanKinda",
        madeAt: "Northeastern",
        builtWith: ["Tumblr","HTML", "CSS", "JavaScript"],
        link: null
    },
  ];
  


// işıqlandırma pointer
document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const gradientOverlay = document.getElementById('gradient-overlay');

    gradientOverlay.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});





const menuItems = document.querySelectorAll('.menu-item');
const cont = document.querySelectorAll('.content');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const selectedMenu = item.getAttribute('data-menu');
        cont.forEach(content => {
            if (content.id === selectedMenu) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

document.querySelector('.menu-item[data-menu="about"]').classList.add('active');
document.querySelector('#about').classList.add('active');



