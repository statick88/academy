// src/lib/data/courses.ts
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  modules: number;
  lessons: number;
  labs: number;
  thumbnail: string;
  tags: string[];
  featured: boolean;
  status: 'available' | 'coming-soon' | 'in-development';
  enrollmentCount?: number;
  rating?: number;
  price: 'free' | 'premium';
  prerequisites?: string[];
  learningOutcomes: string[];
  syllabus: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  duration: string;
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'text' | 'lab' | 'quiz';
  duration: string;
  order: number;
  content?: string;
}

// Mock data for available courses
export const courses: Course[] = [
  {
    id: 'open-claw-course',
    slug: 'open-claw-fundamentals',
    title: 'OpenClaw Fundamentals',
    description: 'Dominio completo del ecosistema OpenClaw y asistentes AI',
    longDescription: 'Aprende desde los fundamentos hasta la integración avanzada con asistentes AI. Este curso cubre la arquitectura de OpenClaw, configuración de entornos, desarrollo de herramientas personalizadas y casos de uso avanzados en el desarrollo de software.',
    instructor: 'Statick Team',
    duration: '8 semanas',
    level: 'intermediate',
    modules: 11,
    lessons: 80,
    labs: 20,
    thumbnail: '/images/courses/open-claw.jpg',
    tags: ['OpenClaw', 'AI', 'Automation', 'Development Tools'],
    featured: true,
    status: 'coming-soon',
    enrollmentCount: 0,
    rating: 0,
    price: 'free',
    prerequisites: ['Conocimientos básicos de programación', 'Familiaridad con terminal/CLI'],
    learningOutcomes: [
      'Comprender la arquitectura y componentes de OpenClaw',
      'Configurar y gestionar entornos OpenClaw',
      'Desarrollar herramientas personalizadas con OpenClaw',
      'Integrar OpenClaw con asistentes AI (Claude, Cursor, etc.)',
      'Aplicar OpenClaw en flujos de trabajo de desarrollo',
      'Optimizar y mantener sistemas OpenClaw'
    ],
    syllabus: [
      {
        id: 'module-1',
        title: 'Introducción a OpenClaw',
        description: 'Fundamentos y conceptos básicos del ecosistema OpenClaw',
        lessons: [
          { id: 'lesson-1-1', title: '¿Qué es OpenClaw?', type: 'video', duration: '15min', order: 1 },
          { id: 'lesson-1-2', title: 'Arquitectura General', type: 'text', duration: '20min', order: 2 },
          { id: 'lesson-1-3', title: 'Instalación y Setup', type: 'lab', duration: '30min', order: 3 }
        ],
        duration: '1h 5min',
        order: 1
      },
      {
        id: 'module-2',
        title: 'Componentes Core',
        description: 'Exploración detallada de los componentes principales',
        lessons: [
          { id: 'lesson-2-1', title: 'Núcleo del Sistema', type: 'video', duration: '25min', order: 1 },
          { id: 'lesson-2-2', title: 'Gestión de Estados', type: 'text', duration: '20min', order: 2 },
          { id: 'lesson-2-3', title: 'Configuración Avanzada', type: 'lab', duration: '45min', order: 3 }
        ],
        duration: '1h 30min',
        order: 2
      }
      // Más módulos se añadirán según se desarrolle el contenido
    ]
  },
  {
    id: 'cloud-architecture',
    slug: 'cloud-architecture-patterns',
    title: 'Cloud Architecture Patterns',
    description: 'Patrones y mejores prácticas para arquitectura cloud moderna',
    longDescription: 'Aprende a diseñar sistemas cloud escalables y resilientes. Este curso cubre patrones de arquitectura, servicios cloud, DevOps, y estrategias de migración.',
    instructor: 'Statick Team',
    duration: '6 semanas',
    level: 'intermediate',
    modules: 8,
    lessons: 60,
    labs: 15,
    thumbnail: '/images/courses/cloud.jpg',
    tags: ['Cloud', 'AWS', 'Azure', 'Architecture', 'DevOps'],
    featured: false,
    status: 'in-development',
    enrollmentCount: 0,
    rating: 0,
    price: 'premium',
    prerequisites: ['Conocimientos básicos de cloud', 'Experiencia con al menos un proveedor cloud'],
    learningOutcomes: [
      'Comprender patrones de arquitectura cloud',
      'Diseñar sistemas escalables y resilientes',
      'Implementar estrategias de DevOps',
      'Optimizar costos y rendimiento',
      'Gestionar seguridad en la nube'
    ],
    syllabus: []
  },
  {
    id: 'devops-fundamentals',
    slug: 'devops-fundamentals',
    title: 'DevOps Fundamentals',
    description: 'Fundamentos de DevOps para desarrollo moderno',
    longDescription: 'Introducción completa a las prácticas y herramientas de DevOps. Aprende CI/CD, infraestructura como código, monitoreo, y cultura DevOps.',
    instructor: 'Statick Team',
    duration: '4 semanas',
    level: 'beginner',
    modules: 6,
    lessons: 40,
    labs: 12,
    thumbnail: '/images/courses/devops.jpg',
    tags: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Monitoring'],
    featured: false,
    status: 'in-development',
    enrollmentCount: 0,
    rating: 0,
    price: 'free',
    prerequisites: ['Conocimientos básicos de desarrollo', 'Familiaridad con Git'],
    learningOutcomes: [
      'Comprender la cultura y prácticas DevOps',
      'Implementar pipelines CI/CD',
      'Trabajar con contenedores y orquestación',
      'Configurar monitoreo y logging',
      'Automatizar procesos de desarrollo'
    ],
    syllabus: []
  }
];

// Helper functions
export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

export function getCoursesByStatus(status: Course['status']): Course[] {
  return courses.filter(course => course.status === status);
}

export function getCoursesByLevel(level: Course['level']): Course[] {
  return courses.filter(course => course.level === level);
}