const projects = [
    {
      year: 2023,
      project: "Emerson Collective",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "TypeScript", "SCSS", "Contentful"],
      link: "emersoncollective.com"
    },
    {
      year: 2023,
      project: "Harvard Business School Next.js Site",
      madeAt: "Upstatement",
      builtWith: ["React", "TypeScript", "Next.js", "Contentful"],
      link: "hbs.edu"
    },
    {
      year: 2022,
      project: "Harvard Business School Design System",
      madeAt: "Upstatement",
      builtWith: ["Storybook", "React", "TypeScript"],
      link: null
    },
    {
      year: 2022,
      project: "Threadable",
      madeAt: "Upstatement",
      builtWith: ["React Native", "Ruby on Rails", "Firebase"],
      link: "apps.apple.com"
    },
    {
      year: 2022,
      project: "Pratt",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "WordPress Multisite"],
      link: "pratt.edu"
    },
    {
      year: 2022,
      project: "Everytown Gun Law Rankings",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "PHP", "Airtable API"],
      link: "everytownresearch.org/rankings"
    },
    {
      year: 2021,
      project: "Koala Health",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "TypeScript", "Redux Toolkit", "Stripe"],
      link: "koala.health"
    },
    {
      year: 2021,
      project: "Philadelphia Inquirer Sports Scoreboards",
      madeAt: "Upstatement",
      builtWith: ["React", "TypeScript", "Stats Perform API"],
      link: "inquirer.com/sports"
    },
    {
      year: 2021,
      project: "Vanderbilt Design System",
      madeAt: "Upstatement",
      builtWith: ["Twig", "Puppy", "JavaScript"],
      link: "vanderbilt.edu"
    },
    {
      year: 2020,
      project: "Michelle Wu for Boston Grassroots Toolkit",
      madeAt: "Upstatement",
      builtWith: ["Gatsby", "Styled Components"],
      link: "toolkit.michelleforboston.com"
    },
    {
      year: 2020,
      project: "The 19th News",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "Gutenberg", "JavaScript"],
      link: "19thnews.org"
    },
    {
      year: 2020,
      project: "Upstatement's WordPress Starter Kit",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "Gutenberg", "PHP"],
      link: null
    },
    {
      year: 2020,
      project: "Northeastern CSSH",
      madeAt: "Upstatement",
      builtWith: ["WordPress", "Timber", "WordPress Multisite", "PHP", "JavaScript"],
      link: "cssh.northeastern.edu"
    },
    {
      year: 2020,
      project: "Integrating Algolia Search with WordPress Multisite",
      madeAt: "Upstatement",
      builtWith: ["Algolia", "WordPress", "PHP"],
      link: "medium.com"
    },
    {
      year: 2020,
      project: "Time to Have More Fun",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "Tailwind CSS", "Firebase"],
      link: "time-to-have-more-fun.now.sh"
    },
    {
      year: 2019,
      project: "Upstatement.com",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "Vue", "Prismic"],
      link: "upstatement.com"
    },
    {
      year: 2019,
      project: "Building a Headless Mobile App CMS From Scratch",
      madeAt: "Upstatement",
      builtWith: ["Node.js", "Express", "Firebase", "Vue"],
      link: "medium.com"
    },
    {
      year: 2019,
      project: "Moms Demand Action Mobile App",
      madeAt: "Upstatement",
      builtWith: ["NativeScript Vue", "iOS", "Android"],
      link: "Case Study"
    },
    {
      year: 2019,
      project: "OctoProfile",
      madeAt: "Upstatement",
      builtWith: ["Next.js", "Chart.js", "GitHub API"],
      link: "octoprofile.now.sh"
    },
    {
      year: 2018,
      project: "Google Keep Clone",
      madeAt: "Upstatement",
      builtWith: ["Vue", "Firebase"],
      link: "GitHub"
    },
    {
      year: 2018,
      project: "Spotify Profile",
      madeAt: "Upstatement",
      builtWith: ["React", "Express", "Styled Components"],
      link: "spotify-profile.herokuapp.com"
    },
    {
      year: 2018,
      project: "Devoted Health",
      madeAt: "Upstatement",
      builtWith: ["Gatsby", "TypeScript", "Algolia"],
      link: "devoted.com"
    },
    {
      year: 2018,
      project: "Flagship Pioneering",
      madeAt: "Upstatement",
      builtWith: ["Craft CMS", "Chart.js"],
      link: "flagshippioneering.com"
    }
  ];
  
  

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

document.querySelector('.menu-item [data-menu ="about"]').classList.add('active');
document.querySelector('#about').classList.add('active');
