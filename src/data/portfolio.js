import calculator from '../assets/previews/calculator.png';
import dataVis from '../assets/previews/data-vis.png';
import taskPreview from '../assets/previews/tasks.png';
import portf from '../assets/previews/portf.png';
import crops from '../assets/previews/crops.png';
import cropProd from '../assets/previews/cropProd.png';
import {
  form1,
  form2,
  fullAnalysis,
  step1,
  step4,
  fullview,
  recurrency,
  form,
  datepicker,
  prod
} from '../assets/imgs';

export const projects = [
  {
    id: 'recharts-data',
    title: 'recharts data visualization',
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
    preview: {
      img: taskPreview,
      alt: 'Select crops'
    },
    imgs: [taskPreview, form, datepicker, recurrency],
    description:
      'data visualization tool built with react library called recharts - users can create and edit analyses of different combinations of analog and digital sensors in their farms',
    tags: ['Frontend', 'Backend', 'ReactJS']
  },
  {
    id: 'investment-calc',
    title: 'investment calculator',
    preview: {
      img: calculator,
      alt: 'Select crops'
    },
    imgs: [calculator, step4],
    demoLink: 'https://www.freightfarms.com/investment-calculator',
    description:
      'this tool takes given data around projected yield, crop pricing, and labor and supply costs, and provides an estimate for investment return on a Freight Farm',
    tags: ['Frontend', 'HTML/CSS', 'Javascript']
  },
  {
    id: 'portfolio',
    title: 'portfolio website',
    preview: {
      img: portf,
      alt: 'website'
    },
    imgs: [portf, step4],
    demoLink: 'https://www.freightfarms.com/investment-calculator',
    description:
      'first designed using Figma, this website was bootstrapped using Create React App and built with MaterialUI design principles in mind',
    tags: ['ReactJS', 'HTML/CSS', 'Material-UI']
  },
  {
    id: 'crops',
    title: 'crop planning tool',
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
