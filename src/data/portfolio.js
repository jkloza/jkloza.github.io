import calculator from '../assets/previews/calculator.png';
import dataVis from '../assets/previews/data-vis.png';
export const projects = [
  {
    id: 'recharts-data',
    title: 'recharts data visualization',
    preview: {
      img: dataVis,
      alt: 'Graph'
    },
    description:
      'farmhand users can create, edit, save, and remove analyses of their farm’s analog and digital sensors. allows users to gain valuable insight into how their farms are running',
    tags: ['Frontend', 'Backend', 'ReactJS']
  },
  {
    id: 'tasks',
    title: 'task management system',
    preview: {
      img: calculator,
      alt: 'Select crops'
    },
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
    description:
      'this tool takes given data around projected yield, crop pricing, and labor and supply costs, and provides an estimate for investment return on a Freight Farm',
    tags: ['Frontend', 'HTML/CSS', 'Javascript']
  }
];
