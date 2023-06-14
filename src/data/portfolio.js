import dataVis from '../assets/previews/data-vis.png';
import crops from '../assets/previews/crops.png';
import cropProd from '../assets/previews/cropProd.png';
import {
  form1,
  form2,
  tasks,
  step1,
  step4,
  form,
  datepicker,
  prod,
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
      img: dataVis,
      alt: 'Graph'
    },
    imgs: [dataVis, form1, form2],
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
    demoLink: 'https://www.freightfarms.com/investment-calculator',
    description:
      'this tool takes given data around projected yield, crop pricing, and labor and supply costs, and provides an estimate for investment return on a Freight Farm',
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
