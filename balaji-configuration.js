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
    followUrl: 'https://twitter.com/intent/follow?screen_name=heybalajisv'
  },
  profile: {
    name: 'Balaji Saravanan',
    handle: '@heybalajisv',
    desc: 'Engineering at Atomicwork | Previously at Zoho | Frontend | Typescript | React | Next | Vue',
    location: 'Bangalore | Chennai | Remote',
    linkName: 'Bio links',
    link: 'https://balajisv.bio.link/',
    date: 'Feb 12'
  },
  profileHandler: {
    name: 'Balaji Saravanan',
    handle: '@heybalajisv',
    image: 'balaji-pic',
    url: 'https://twitter.com/heybalajisv'
  },
  tweets: [{
      id: 'about',
      pinnedMsg: 'About',
      eventDate: 'Forever',
      content: `Passionate about Frontend engineering, Deep tech, Business.<br/><br/>Always curious and don't shy away for asking dumb questions.<br><br>Love to blog, read, and talk about anything on engineering, finance, business.`
    },
    {
      id: 'work',
      pinnedMsg: 'Work',
      eventDate: 'May, 2023 - Present',
      eventImg: 'atomicwork',
      tweetImgHref: 'https://atomicwork.com/',
      content: `Working in a team of early engineers to develop and build the very first version of Atomicwork applications. <br/><br>At Atomicwork, we’re leveraging AI to build an ITSM platform that doesn’t make employees feel like they’re going back in time every time they contact IT. Our aim is to not only help IT teams get more work done but also be seen as enablers of innovation and business success.`
    },
    {
      eventDate: 'May, 2019 - May, 2023',
      eventImg: 'zoho',
      tweetImgHref: 'https://www.youtube.com/watch?v=j-DV1KZZmwc',
      content: `Earlier to Atomicwork, started my career at Zoho where, I got to work in a large scale web application, used as a low code app by the product users.<br/><br/>
      Worked and lead on a various modules of the low code application like, a drag and drop Dashboard builder, App Menu Builder effectively enabling our users to create industry ready applications from scratch with low to no code in a very short span of time.`
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
      eventDate: 'May, 2023 - Present',
      content: `Software Engineer II at Atomicwork Inc.<br/><br/>Working with a talented pool of engineer delivering high quality outputs in no time to get our very first version of our application reach in the hands of our customers.<br/><br/>Hands-on experience in but not limited to NextJs, ReactJs, Typescript, Devops, and varied development tools
      and technologies.`
    },
    {
      eventDate: 'July, 2020 - May, 2023',
      content: `Member Technical Staff at Zoho Corporation.<br/><br/>Worked in an interesting and fast paced product as a Front-End Engineer.<br/><br/>Standing in the shoes of a Front-end Software engineer at Zoho to solve and develop features to various problems, with an effort to bring good user experience and solutions to customers.`
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
      contents: [
        {
          title: 'Gradient Genertor',
          image: "gradient-generator",
          date: "May 2020",
          imageHref: "https://balajisv-gradient-generator.vercel.app/",
          content: `A simple gradient generator app with undo/redo capablity which lets you generate gradients and copy the CSS code with a single click. Built in no time with NextJS`,
          tags: 'NextJs | ReactJs(Typescript) | Zustand | Hosted on Vercel',
          links: [{
              name: 'Live',
              type: 'live',
              href: "https://balajisv-gradient-generator.vercel.app/"
            },
            {
              name: 'Code',
              type: 'code',
              href: "https://github.com/Balaji1202/gradient-generator"
            }
          ]
        },
        {
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
      footerLink: 'https://heybalajisv.medium.com/',
      contents: [
        {
          title: 'The Power of a Good Git Commit Message',
          image: "git-commit",
          date: "Jan 2023",
          imageHref: "https://medium.com/@heybalajisv/the-power-of-a-good-git-commit-message-9840de6a13d1",
          content: `As a developer, you are constantly working on code and making changes to projects. Git commit messages are an important tool that help you and your team track the history of a project and understand the changes that have been made. A good commit message can make all the difference in the success of a project.`,
          links: [{
            name: 'Read',
            type: 'blog',
            href: "https://medium.com/@heybalajisv/the-power-of-a-good-git-commit-message-9840de6a13d1"
          }]
        },
        {
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
    href: 'https://twitter.com/heybalajisv/',
    logo: 'twitter'
  }, {
    href: 'mailto:balajilitsv@gmail.com',
    logo: 'mail'
  }, {
    href: 'https://www.instagram.com/heybalajisv/',
    logo: 'instagram'
  }]
}