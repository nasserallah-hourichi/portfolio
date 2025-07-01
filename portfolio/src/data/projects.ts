import type { Project } from "../types/project";

export const projects: Project[] = [

  {
    id: '1',
    title: 'RanDev',
    description: 'Booking platform for various general stores all around you',
    link: '/projects/Randev',
    date: '2022 -> 2024',
    client: 'FutureProof.',
    images: [
      'src/assets/project-images/ecommerce-main.jpg',
      'src/assets/project-images/ecommerce-sub1.jpg',
      'src/assets/project-images/ecommerce-sub2.jpg',
    ],
    stack: [
      { tech: 'Flutter', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png', backgroundColor: '#20232a' },
      { tech: 'Springboot', imageUrl: 'https://img.icons8.com/?size=512&id=90519&format=png', backgroundColor: '#6DB33F' },
  ],
  },
  {
    id: '2',
    title: 'Sportopia',
    description: 'Sportopia is a platform aimed at managing the sports activities of its members by listing partner sports centers, private coaches, and sports shops.',
    link: '/projects/Sportopia',
    date: '2024',
    client: 'Sportopia.',
    images: [
      'src/assets/project-images/ecommerce-main.jpg',
      'src/assets/project-images/ecommerce-sub1.jpg',
      'src/assets/project-images/ecommerce-sub2.jpg',
    ],
    stack: [
      { tech: 'Flutter', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png', backgroundColor: '#20232a' },
      { tech: 'Nodejs', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', backgroundColor: '#3C873A' },
  ],
  },
];