
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'The Martinez Family Home',
      location: 'Rural Village, Romania',
      progress: 75,
      description: 'Building a 3-bedroom home for a family of 7. Construction is 75% complete with roofing and interior work remaining.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      needed: '€2,500',
      raised: '€1,875'
    },
    {
      id: 2,
      title: 'Community Water Well Project',
      location: 'Mountain Region, Romania',
      progress: 40,
      description: 'Installing a water well and pump system to serve 15 families in a remote mountain community.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      needed: '€4,000',
      raised: '€1,600'
    },
    {
      id: 3,
      title: 'The Popescu Family Rebuild',
      location: 'Flood-affected area, Romania',
      progress: 20,
      description: 'Rebuilding after devastating floods destroyed their home. Foundation work has begun.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
      needed: '€3,500',
      raised: '€700'
    },
    {
      id: 4,
      title: 'Winter Shelter Emergency',
      location: 'Northern Romania',
      progress: 60,
      description: 'Urgent winterization project providing insulation and heating for 5 families before winter.',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop',
      needed: '€1,800',
      raised: '€1,080'
    },
    {
      id: 5,
      title: 'The Gheorghe Family Kitchen',
      location: 'Suburban Area, Romania',
      progress: 90,
      description: 'Installing a proper kitchen with running water and cooking facilities for a family of 6.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      needed: '€1,200',
      raised: '€1,080'
    },
    {
      id: 6,
      title: 'Medical Access Ramp',
      location: 'Urban Area, Romania',
      progress: 30,
      description: 'Building wheelchair accessibility ramp for disabled family member to access their home safely.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      needed: '€800',
      raised: '€240'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('projectsTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('projectsDescription')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 mb-3">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Funding Information */}
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Raised: <strong className="text-green-600">{project.raised}</strong></span>
                    <span>Goal: <strong className="text-gray-900">{project.needed}</strong></span>
                  </div>

                  <Link to="/donation">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      {t('supportFamily')}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Every Project Needs Your Support
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            These families are counting on our community to help them build a better future. Your contribution, no matter the size, makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donation">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg">
                {t('donateNow')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 text-lg">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
