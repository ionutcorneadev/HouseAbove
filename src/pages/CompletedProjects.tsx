
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CompletedProjects = () => {
  const { t } = useLanguage();

  const completedProjects = [
    {
      id: 1,
      title: 'The Ionescu Family Home',
      location: 'Brasov, Romania',
      completedDate: 'March 2024',
      description: 'Built a 2-bedroom home for a single mother and her 3 children. The family now has a safe, warm place to call home.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      cost: '€3,200',
      testimony: 'Words cannot express how grateful we are. Our children finally have their own rooms and we feel safe and warm. God bless everyone who helped us.',
      testimonialAuthor: 'Maria Ionescu'
    },
    {
      id: 2,
      title: 'Village School Renovation',
      location: 'Maramures, Romania',
      completedDate: 'January 2024',
      description: 'Renovated the local school building, providing better learning conditions for 45 children.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      cost: '€5,800',
      testimony: 'The children are so excited to learn in their renovated classrooms. The community is forever grateful for this investment in our future.',
      testimonialAuthor: 'Teacher Elena Popescu'
    },
    {
      id: 3,
      title: 'The Dumitrescu Family Rebuild',
      location: 'Timisoara, Romania',
      completedDate: 'November 2023',
      description: 'Rebuilt home after fire damage, including modern kitchen and bathroom facilities.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
      cost: '€4,100',
      testimony: 'After the fire, we thought we lost everything. But thanks to your help, we have a home that is even better than before. Thank you for giving us hope.',
      testimonialAuthor: 'Nicolae Dumitrescu'
    },
    {
      id: 4,
      title: 'Community Water System',
      location: 'Hunedoara, Romania',
      completedDate: 'September 2023',
      description: 'Installed clean water access system serving 12 families in remote mountain area.',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&h=400&fit=crop',
      cost: '€6,500',
      testimony: 'Clean water has changed everything for our community. Our children are healthier and our daily life is so much easier. This is truly a miracle.',
      testimonialAuthor: 'Village Elder Gheorghe Munteanu'
    },
    {
      id: 5,
      title: 'The Radu Family Extension',
      location: 'Cluj, Romania',
      completedDate: 'August 2023',
      description: 'Added two bedrooms to accommodate growing family of 8 members.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      cost: '€2,800',
      testimony: 'Now all our children have proper beds and space to study. Education is so important and now they have the environment they need to succeed.',
      testimonialAuthor: 'Ana Radu'
    },
    {
      id: 6,
      title: 'Emergency Winter Shelter',
      location: 'Suceava, Romania',
      completedDate: 'October 2023',
      description: 'Provided emergency shelter and heating for 3 families before harsh winter.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      cost: '€1,900',
      testimony: 'You saved our lives. Without proper shelter, we would not have survived the winter. Our children stayed warm and healthy thanks to your kindness.',
      testimonialAuthor: 'Vasile Stoica'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('completedTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('completedDescription')}
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-700">Homes Built</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Lives Changed</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">€450K</div>
              <div className="text-gray-700">Total Investment</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-700">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-600">{project.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Completed</div>
                      <div className="text-sm font-medium text-green-600">{project.completedDate}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Total Cost:</strong> {project.cost}
                    </div>
                  </div>

                  {/* Testimony */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <blockquote className="text-gray-700 italic mb-2">
                      "{project.testimony}"
                    </blockquote>
                    <cite className="text-sm text-blue-600 font-medium">
                      — {project.testimonialAuthor}
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Help Us Write More Success Stories
          </h2>
          <p className="text-xl mb-8 opacity-90">
            These completed projects show what's possible when we work together. Your support helps us continue building hope and changing lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donation">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg">
                {t('donateNow')}
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                See Current Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompletedProjects;
