import {
  fullGraph,
  crops,
  form1,
  form2,
  tasks,
  step1,
  step4,
  form,
  datepicker,
  prod,
  cropProd,
  calculator,
  home,
  figma
} from '../assets/imgs';

export const projects = [
  {
    id: 'recharts-data',
    title: 'recharts data visualization',
    createdFor: 'freight farms',
    preview: {
      img: fullGraph,
      alt: 'Graph'
    },
    imgs: [fullGraph, form1, form2],
    description:
      'farmhand users can create, edit, save, and remove analyses of their farm’s analog and digital sensors. allows users to gain valuable insight into how their farms are running',
    tags: ['Frontend', 'Backend', 'ReactJS']
  },
  {
    id: 'tasks',
    title: 'task management system',
    createdFor: 'freight farms',
    preview: {
      img: tasks,
      alt: 'Select crops'
    },
    imgs: [tasks, form, datepicker],
    description:
      'task management system that allows users to create and assign tasks to various members of their organization. users can customize the title, descriptions, assignee, due date, and recurrence of their tasks. ',
    details: [
      {
        content:
          'Task management system that allows users to create and assign tasks to various members of their organization. Users can customize the title, descriptions, assignee, due date, and recurrence of their tasks. This project also includes the concept of ‘built-in’ tasks, which are tasks that are automatically assigned to an organization based on consistent farm maintenance and crop schedules (eg. Harvesting, cleaning, etc.) These tasks were determined internally by crop science and customer success teams, and then assigned to users based on the type of farm they had.'
      },
      {
        content:
          'This project included designing the data schemas for all task-related entities, building out API interactions to retrieve, edit, and delete the data, as well as pagination strategies for handling large volumes of data. I want to highlight a few of the key elements/learnings from this project, as well as some more background information.'
      },
      {
        header: 'Schema Design',
        content:
          'Tasks and TaskTemplate objects were the main pieces of interest. TaskTemplates were what we called ‘built in’ tasks (things like maintenance tasks) that would be automatically assigned to a task list based on what maintenance schedules were necessary for each user. These templates were created internally, and when a template was adjusted, all tasks related to that template would need to be adjusted as well. TaskSettings is a column on a User object- this is how users could turn on/off different ‘built in’ task functionality if they so chose.  '
      },
      {
        header: 'Pagination',
        content:
          'Pagination was achieved using a cursor-based approach, where a set of data is queried for using some ID indicating more data is to be fetched, as well as a limit for the number of items coming back within a single query. For task pagination, a date comparison was used and tasks were requested in order of latest created. '
      },
      {
        header: 'Understanding the Recurrence Rule (RRule)',
        content:
          'Recurrence is achieved using the iCalendar standard RRule. An RRule generator component was built to handle user selection for recurrence of tasks, as well as an interpreting function within the API to be able to create new tasks based on the RRule.'
      },
      {
        header: 'Filtering/Sorting',
        content:
          'Custom filters were built to be able to view tasks categorized by Farm, Status (incomplete/complete), Due Date, Completed Date, and Assignee. Sort was achieved through built in functionality on a MaterialTable component (however custom sort functions were injected onto certain columns to achieve specific needs)'
      }
    ],
    tags: ['Frontend', 'Backend', 'ReactJS']
  },
  {
    id: 'investment-calc',
    title: 'investment calculator',
    createdFor: 'freight farms',
    preview: {
      img: calculator,
      alt: 'Select crops'
    },
    imgs: [calculator, step1, step4],
    description:
      'this tool takes given data around projected yield, crop pricing, and labor and supply costs, and provides an estimate for investment return on a Freight Farm',
    details: [
      {
        content:
          'This project was built in collaboration with a marketing and crop science team. Data was given from the crop science team around different crop yields, energy usage data, and growing supply costs. I built the calculations given that data and user inputs involving crop pricing, labor usage,  energy usage, and upfront cost to provide a simple analysis tool on the payback time period for an investment of a Freight Farm. '
      },
      {
        content:
          'This tool was written using HTML/CSS and Javascript, and was deployed within a code injection block on Squarespace. ',
        link: { label: 'Live Demo', src: 'https://www.freightfarms.com/investment-calculator' }
      }
    ],
    tags: ['Frontend', 'HTML/CSS', 'Javascript']
  },
  {
    id: 'portfolio',
    title: 'portfolio website',
    createdFor: 'personal project',
    preview: {
      img: home,
      alt: 'website'
    },
    imgs: [home, figma],
    demoLink: 'https://www.freightfarms.com/investment-calculator',
    description:
      'first designed using Figma, this website was bootstrapped using Create React App and built with MaterialUI design principles in mind',
    details: [
      {
        content:
          'You are probably viewing the live demo right now! Created using ReactJS, bootstrapped with create-react-app. Utilizes MaterialUI component library and deployed via GitHub. Designed myself using a product design tool called Figma, and I had a couple iterations for how I wanted it to look. I was able to play with a few design-oriented things, such as light and dark mode, color palettes, front-end animation in CSS, and responsive strategies.'
      },
      {
        content:
          'I implemented testing using Jest and React Testing Library. I am running snapshot tests on specific pages, as well as unit tests. I also utilized atomic design principles for file structure/organization.'
      }
    ],
    tags: ['ReactJS', 'HTML/CSS', 'Material-UI']
  },
  {
    id: 'crops',
    title: 'crop planning tool',
    createdFor: 'freight farms',
    preview: {
      img: crops,
      alt: 'website'
    },
    imgs: [crops, step4],
    demoLink: 'https://www.freightfarms.com/investment-calculator',
    description:
      'first designed using Figma, this website was bootstrapped using Create React App and built with MaterialUI design principles in mind',
    tags: ['ReactJS', 'HTML/CSS', 'Material-UI']
  },
  {
    id: 'production',
    title: 'crop production log',
    createdFor: 'freight farms',
    preview: {
      img: cropProd,
      alt: 'crop production'
    },
    imgs: [cropProd, prod],
    demoLink: 'https://www.freightfarms.com/investment-calculator',
    description:
      'first designed using Figma, this website was bootstrapped using Create React App and built with MaterialUI design principles in mind',
    tags: ['ReactJS', 'HTML/CSS', 'Material-UI']
  }
];
