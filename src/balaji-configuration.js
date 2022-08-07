export default {
  mobile: false,
  header: {
    name: 'Balaji Saravanan',
    subText: 'Software Engineer',
    image: 'balaji-hi',
    background: 'header-background',
    logo: {
      type: 'b'
    }
  },
  avatar: {
    img: "balaji-pic",
    followUrl: 'https://twitter.com/intent/follow?screen_name=_balajisv_'
  },
  profile: {
    name: 'Balaji Saravanan',
    handle: '@_balajisv_',
    desc: 'Software Engineer @ Zoho | Front-end developer | Vue JS enthusiast | Blogger | Orator',
    location: 'Coimbatore, India',
    linkName: 'Resume',
    link: 'https://drive.google.com/file/d/1pHXb4El1q4H13CxqdCaSTe-BlX-TmsSx/view?usp=sharing',
    date: 'Feb 12'
  },
  profileHandler: {
    name: 'Balaji Saravanan',
    handle: '@_balajisv_',
    image: 'balaji-pic-mini',
    url: 'https://twitter.com/_balajisv_'
  },
  tweets: [{
      id: 'about',
      pinnedMsg: 'About',
      eventDate: 'Forever',
      content: `I'm a Front-End Web Developer who loves solving potential front-end problems, along with designing and developing creative UIs and applications.<br><br>Loves to blog, read, and speak on stages.<br><br>Would love to build something daily on Vue JS.<br/><br/>Very inquisitive on creating good designs and optimized webapps and websites.`
    },
    {
      id: 'work',
      pinnedMsg: 'Work',
      eventDate: 'May, 2019 - Present',
      eventImg: 'zoho',
      tweetImgHref: 'https://www.youtube.com/watch?v=j-DV1KZZmwc',
      content: `Currently working as a Front-End Engineer at Zoho Corporation, Chennai.<br/><br/>Zoho corporation has 45+ products powering various Enterprises and Businesses all over the world, with over an 50 Million users. Those products nearly act as an Operating System to those businesses.<br/><br/>Among those 45+ products, I'm currently working in a product, with a great team, solving potential front-end problems with ground-breaking, clean, and performance-oriented solutions.`
    },
    {
      id: 'education',
      pinnedMsg: 'Education',
      eventImg: 'education',
      eventDate: '2016 - 2020',
      content: `Did my Bachelors in Computer Science and Engineering in Kongu Engineering College, affliated to Anna University, Tamilnadu.`
    },
    {
      id: 'experience',
      pinnedMsg: 'Experience',
      eventDate: 'July, 2020 - Present',
      content: `Member Technical Staff at Zoho Corporation.<br/><br/>Working in an interesting and fast paced product as a Front-End Engineer.<br/><br/>Standing in the shoes of a Front-end Software engineer at Zoho to solve and develop features to various problems, with an effort to bring good user experience and solutions to customers.`
    },
    {
      eventDate: 'July, 2019 - July, 2020',
      content: `Project Trainee at Zoho Corporation.<br/><br/>Got to train and hone myself in the various Front-end technologies and contributed to a great product in a great team.<br/><br/>Fell in love with front-end technologies.`
    },
    {
      eventDate: 'May, 2019 - July, 2019',
      content: `Summer Intern at Zoho Corporation.<br/><br/>Joined Zoho, the Indian Software giant, as a Summer intern where I spent some beautiful days with..... HTML, CSS, JS, and other front-end tech and tools.<br>Came to know about interesting software engineering and project management process.`
    },
    {
      id: 'projects',
      pinnedMsg: 'Projects',
      eventDate: 'I can do this all day',
      content: `Some clutters in the name of personal and pet projects really helped in honing my knowledge of front-end technologies and in having some grasp on full stack technologies.<br/><br/>Have a look at those in the repo.`,
      extra: {
        type: 'project',
        links: [{
          name: 'Github',
          href: 'https://github.com/Balaji1202',
          type: 'code'
        }]
      }
    },
    {
      id: 'coffee',
      pinnedMsg: 'Coffee?',
      eventDate: 'Always',
      content: ``,
      extra: {
        type: 'coffee'
      }
    },
    {
      id: 'contact',
      pinnedMsg: 'Contact',
      eventDate: 'Anytime',
      content: `You can find and reach out to me through some mediums here!`,
      extra: {
        type: 'contact'
      }
    }
  ],
  extras: [{
      type: 'projects',
      headerTitle: 'Projects',
      footerTitle: 'More',
      footerLink: 'https://github.com/Balaji1202?tab=repositories',
      contents: [{
          title: 'Mocked APIs',
          image: "mockapis",
          date: "May 2020",
          imageHref: "https://mock-apis-balaji.herokuapp.com/",
          content: `Thousands of mocked data over various categories absolutely free for development purpose without any restrictions.`,
          tags: 'JavaScript(VueJS) | HTML | CSS | NodeJS | MongoDB | Hosted on Heroku',
          links: [{
              name: 'Live',
              type: 'live',
              href: "https://mock-apis-balaji.herokuapp.com/"
            },
            {
              name: 'Code',
              type: 'code',
              href: "https://github.com/Balaji1202/mock-apis"
            }
          ]
        },
        {
          title: 'Tic-Tac-Toe',
          image: "tictactoe",
          date: "April 2020",
          imageHref: "https://balaji1202.github.io/TicTacToe/src/index.html",
          content: `A paperless Tic-Tac-Toe game where you could play with your friend or with the inbuilt AI friend.`,
          tags: 'JavaScript(VueJS) | HTML | CSS | Hosted on Github pages',
          links: [{
              name: 'Live',
              type: 'live',
              href: "https://balaji1202.github.io/TicTacToe/src/index.html"
            },
            {
              name: 'Code',
              type: 'code',
              href: "https://github.com/Balaji1202/TicTacToe"
            }
          ]
        },
        {
          title: 'Your weather',
          image: "weather",
          date: "March 2020",
          imageHref: "https://balaji1202.github.io/WeatherApp/src/index.html",
          content: `A weather app which lets you know your location's current weather in an animated format.`,
          tags: 'JavaScript(VueJS) | HTML | CSS | Hosted on Github pages',
          links: [{
              name: 'Live',
              type: 'live',
              href: "https://balaji1202.github.io/WeatherApp/src/index.html"
            },
            {
              name: 'Code',
              type: 'code',
              href: "https://github.com/Balaji1202/WeatherApp"
            }
          ]
        },
      ]
    },
    {
      type: 'blogs',
      headerTitle: 'Blogs',
      footerTitle: 'More',
      footerLink: 'https://twobytwelve.blogspot.com/',
      contents: [{
          title: 'Committed to the wrong branch',
          image: "fallenice",
          date: "Jun 2020",
          imageHref: "https://twobytwelve.blogspot.com/2020/06/committed-to-wrong-branch.html",
          content: `A blog on the mistakes I did soon after joining in my junior front-end role. Knowing these might help you in avoiding these common mistakes and help you to overcome it.`,
          links: [{
            name: 'Read',
            type: 'blog',
            href: "https://twobytwelve.blogspot.com/2020/06/committed-to-wrong-branch.html"
          }]
        },
        {
          title: 'ES11 - The JS Show - Part 2',
          image: "es11",
          date: "April 2020",
          imageHref: "https://twobytwelve.blogspot.com/2020/04/es11-js-show-part-2.html",
          content: `The most desired features of ES2020 AKA ES11. Every JavaScript developer must be aware on the latest development evolving in their core tech. Here is a blog on the new features of JavaScript.`,
          links: [{
            name: 'Read',
            type: 'blog',
            href: "https://twobytwelve.blogspot.com/2020/04/es11-js-show-part-2.html"
          }]
        },
        {
          title: 'A drop of honey',
          image: "honey",
          date: "January 2020",
          imageHref: "https://twobytwelve.blogspot.com/2019/12/a-drop-of-honey.html",
          content: `A writing which contrasts two different perspectives of two different famous authors on their thoughts on handling people.`,
          tags: 'JavaScript(VueJS) | HTML | CSS | Hosted on Github pages',
          links: [{
            name: 'read',
            type: 'blog',
            href: "https://twobytwelve.blogspot.com/2019/12/a-drop-of-honey.html"
          }]
        },
      ]
    }
  ],
  navigations: [{
      href: 'home',
      name: 'Home',
      icon: 'home'
    },
    {
      href: 'explore',
      name: 'Explore',
      icon: 'explore'
    },
    {
      href: 'about',
      subnav: true,
      name: 'About',
      icon: 'about'
    },
    {
      href: 'work',
      subnav: true,
      name: 'Work',
      icon: 'work'
    },
    {
      href: 'education',
      subnav: true,
      name: 'Education',
      icon: 'education'
    },
    {
      href: 'experience',
      subnav: true,
      name: 'Experience',
      icon: 'experience'
    },
    {
      href: 'projects',
      subnav: true,
      name: 'Projects',
      icon: 'project'
    },
    {
      href: 'coffee',
      subnav: true,
      name: 'Coffee?',
      icon: 'coffee'
    }

  ],
  contacts: [{
    href: 'https://www.linkedin.com/in/balaji-saravanan/',
    logo: 'linkedin'
  }, {
    href: 'https://twitter.com/_balajisv_/',
    logo: 'twitter'
  }, {
    href: 'mailto:balajilitsv@gmail.com',
    logo: 'mail'
  }, {
    href: 'https://www.instagram.com/_balajisv_/',
    logo: 'instagram'
  }]
}