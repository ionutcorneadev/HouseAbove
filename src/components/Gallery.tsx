
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      title: t('family1Title'),
      description: t('family1Desc')
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      title: t('family2Title'),
      description: t('family2Desc')
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      title: t('family3Title'),
      description: t('family3Desc')
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
      title: t('family4Title'),
      description: t('family4Desc')
    },
    // Additional items to fill the 4x4 grid
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      title: 'Roof repair for storm damage',
      description: 'Hurricane damaged this family\'s roof. We are providing materials and labor to repair it completely.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      title: 'Clean water access project',
      description: 'Installing a well and water pump system for a remote village of 15 families.'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      title: 'School supplies for 6 children',
      description: 'This family cannot afford school supplies. We are providing books, uniforms, and materials.'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
      title: 'Medical care fund',
      description: 'Grandmother needs surgery but family cannot afford it. We are raising funds for her treatment.'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      title: 'Wheelchair accessibility ramp',
      description: 'Building a ramp so a disabled father can access his home safely and independently.'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      title: 'Winter heating system',
      description: 'Installing a wood stove and proper insulation for a family facing harsh winter conditions.'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      title: 'Kitchen renovation project',
      description: 'Providing a proper kitchen with running water and storage for a family of 8.'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
      title: 'Electric system installation',
      description: 'Installing safe electrical wiring and lighting for a family living without electricity.'
    },
    {
      id: 13,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      title: 'Garden and farming tools',
      description: 'Providing seeds, tools, and guidance to help a family grow their own food sustainably.'
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
      title: 'Furniture for new home',
      description: 'Furnishing a newly built home with beds, table, chairs, and storage for a family of 5.'
    },
    {
      id: 15,
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      title: 'Clothing and shoes drive',
      description: 'Providing warm clothing and shoes for children before the school year starts.'
    },
    {
      id: 16,
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
      title: 'Emergency food supplies',
      description: 'Providing monthly food packages for families facing extreme poverty and hunger.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('currentFamilies')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each family has a unique story and specific needs. Your support helps us provide hope and practical assistance to those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
