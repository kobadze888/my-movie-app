/**
 * ИСПРАВЛЕННАЯ ВЕРСИЯ
 * Мы импортируем только 'React' и используем React.useState, React.useMemo, React.useEffect
 * чтобы исправить ошибку сборки на Vercel.
 */

import React from 'react';
// 'useState', 'useMemo', 'useEffect' удалены из строки выше

// --- Icon Components (Inline SVG) ---

const StarIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
);

const PlayIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="M8 5v14l11-7L8 5z" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// --- დემო მონაცემების დაბრუნება ---
// სანამ Back-End-ი აეწყობა, ვიყენებთ ამ მონაცემებს
const demoAllMedia = [
  {
    id: 1,
    title: 'Dune: Part Two',
    poster: 'https://placehold.co/500x750/1a1a1a/ffffff?text=Dune+2+Poster',
    rating: 8.4,
    youtubeId: 'U2Qp5pL3ovA',
    type: 'movie',
    genres: ['Sci-Fi', 'Adventure'],
  },
  {
    id: 2,
    title: 'Oppenheimer',
    poster: 'https://placehold.co/500x750/1a1a1a/ffffff?text=Oppenheimer+Poster',
    rating: 8.6,
    youtubeId: 'bK6ldnjE3Y0',
    type: 'movie',
    genres: ['Biography', 'Drama', 'History'],
  },
  {
    id: 3,
    title: 'The Batman',
    poster: 'https://placehold.co/500x750/1a1a1a/ffffff?text=The+Batman+Poster',
    rating: 7.8,
    youtubeId: 'mqqft2x_Aa4',
    type: 'movie',
    genres: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 4,
    title: 'Joker',
    poster: 'https://placehold.co/500x750/1a1a1a/ffffff?text=Joker+Poster',
    rating: 8.4,
    youtubeId: 'zAGVQLHvwOY',
    type: 'movie',
    genres: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 5,
    title: 'Shōgun',
    poster: 'https://placehold.co/500x750/2a2a2a/ffffff?text=Shogun+Poster',
    rating: 9.2,
    youtubeId: 'H_4O-S__3vA',
    type: 'series',
    genres: ['Drama', 'History', 'War'],
  },
  {
    id: 6,
    title: 'Breaking Bad',
    poster: 'https://placehold.co/500x750/2a2a2a/ffffff?text=Breaking+Bad+Poster',
    rating: 9.5,
    youtubeId: 'H_4O-S__3vA',
    type: 'series',
    genres: ['Crime', 'Drama', 'Thriller'],
  },
  {
    id: 7,
    title: 'Game of Thrones',
    poster: 'https://placehold.co/500x750/2a2a2a/ffffff?text=GoT+Poster',
    rating: 9.2,
    youtubeId: 'U2Qp5pL3ovA',
    type: 'series',
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
  },
  {
    id: 8,
    title: 'Stranger Things',
    poster: 'https://placehold.co/500x750/2a2a2a/ffffff?text=Stranger+Things',
    rating: 8.7,
    youtubeId: 'bK6ldnjE3Y0',
    type: 'series',
    genres: ['Drama', 'Fantasy', 'Horror', 'Sci-Fi'],
  },
  {
    id: 9,
    title: 'Interstellar',
    poster: 'https://placehold.co/500x750/1a1a1a/ffffff?text=Interstellar+Poster',
    rating: 8.7,
    youtubeId: 'zSWdZVtXT7E',
    type: 'movie',
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
  },
  {
    id: 10,
    title: "The Queen's Gambit",
    poster: "https://placehold.co/500x750/2a2a2a/ffffff?text=Queen's+Gambit",
    rating: 8.6,
    youtubeId: 'oZn3qSgmLqI',
    type: 'series',
    genres: ['Drama'],
  },
];

// --- React Components ---

/**
 * MovieCard Component
 */
function MovieCard({ item, onPlayTrailer }) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      onClick={() => onPlayTrailer(item.youtubeId)}
    >
      <img
        src={item.poster}
        alt={item.title}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.target.src = `https://placehold.co/500x750/333/fff?text=${item.title.replace(' ', '+')}`;
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <PlayIcon className="h-20 w-20 text-white drop-shadow-lg" />
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4">
        <h3 className="truncate text-lg font-bold text-white">{item.title}</h3>
        <div className="flex items-center">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-sm font-semibold text-white">
            {item.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * ContentGrid Component
 * სექცია, რომელიც აჩვენებს გაფილტრულ სიას
 */
function ContentGrid({ title, items, onPlayTrailer }) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-bold text-white">{title}</h2>
      {items.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {items.map((item) => (
            <MovieCard key={item.id} item={item} onPlayTrailer={onPlayTrailer} />
          ))}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-lg bg-gray-900">
          <p className="text-xl text-gray-500">
            შედეგები არ მოიძებნა
          </p>
        </div>
      )}
    </section>
  );
}

/**
 * TrailerModal Component
 */
function TrailerModal({ youtubeId, onClose }) {
  if (!youtubeId) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
          aria-label="Close trailer"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&showinfo=0&controls=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/**
 * Header Component
 * დავამატეთ აქტიური ლინკის მონიშვნა და ფილტრაციის ლოგიკა
 */
function Header({ activeCategory, onSelectCategory }) {
  const navItems = [
    { key: 'all', label: 'მთავარი' },
    { key: 'movie', label: 'ფილმები' },
    { key: 'series', label: 'სერიალები' },
  ];

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-gradient-to-b from-black/80 to-transparent py-6 px-4 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="text-3xl font-extrabold text-red-600">
          TRAILERS
        </a>
        
        <div className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onSelectCategory(item.key)}
              className={`text-lg font-medium transition-colors hover:text-red-500 ${
                activeCategory === item.key
                  ? 'text-white'
                  : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="ძიება..."
            className="rounded-full bg-gray-800/70 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </nav>
    </header>
  );
}

/**
 * Hero Section
 */
function HeroSection({ allMedia, onPlayTrailer }) {
  // ვირჩევთ ერთ-ერთ გამორჩეულ ფილმს ჰიროსთვის
  const heroMovie = allMedia.length > 0 ? allMedia.find(m => m.id === 1) : null; // Dune: Part Two

  // დაცვა, სანამ მონაცემები ჩაიტვირთება
  if (!heroMovie) {
    return (
      <div className="relative mb-12 h-[70vh] w-full md:h-[80vh] bg-gray-900">
        {/* Placeholder-ი სანამ მონაცემები იტვირთება */}
      </div>
    );
  }

  return (
    <div className="relative mb-12 h-[70vh] w-full md:h-[80vh]">
      <img
        src={heroMovie.poster.replace('500x750', '1280x720')}
        alt={heroMovie.title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 md:p-10 lg:p-16">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl">
          {heroMovie.title}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 drop-shadow-md hidden md:block">
          {/* რეალურ აპლიკაციაში აქ იქნებოდა ფილმის აღწერა (overview) API-დან */}
          {heroMovie.title} - ის ეპიკური თრეილერი. ნახეთ ახლა და აღმოაჩინეთ კინოსამყაროს
          ახალი განზომილება.
        </p>
        <button
          onClick={() => onPlayTrailer(heroMovie.youtubeId)}
          className="flex transform items-center rounded-full bg-red-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-500"
        >
          <PlayIcon className="mr-2 h-6 w-6" />
          თრეილერის ნახვა
        </button>
      </div>
    </div>
  );
}

/**
 * GenreFilter Component
 * ახალი კომპონენტი ჟანრების მიხედვით ფილტრაციისთვის
 */
function GenreFilter({ genres, activeGenre, onSelectGenre }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-2xl font-bold text-white">ჟანრები</h3>
      <div className="flex space-x-3 overflow-x-auto pb-4">
        {/*
          ჰორიზონტალური სქროლისთვის ვიყენებთ flex და overflow-x-auto-ს.
          Tailwind-ის დანამატი (plugin) დაგჭირდებათ სქროლბარის დასამალად რეალურ პროექტში.
        */}
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onSelectGenre(genre)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              activeGenre === genre
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {/* ქართული თარგმანი დემოსთვის */}
            {
              {
                'ყველა': 'ყველა',
                'Sci-Fi': 'ფანტასტიკა',
                'Adventure': 'სათავგადასავლო',
                'Biography': 'ბიოგრაფია',
                'Drama': 'დრამა',
                'History': 'ისტორიული',
                'Action': 'მძაფრ-სიუჟეტიანი',
                'Crime': 'კრიმინალური',
                'Thriller': 'თრილერი',
                'War': 'საომარი',
                'Fantasy': 'ფენტეზი',
                'Horror': 'საშინელებათა',
              }[genre] || genre
            }
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Main App Component
 * აპლიკაციის მთავარი კომპონენტი
 */
export default function App() {
  // ИСПРАВЛЕНИЕ: Используем React.useState
  const [playingTrailerId, setPlayingTrailerId] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('all'); // 'all', 'movie', 'series'
  const [activeGenre, setActiveGenre] = React.useState('ყველა'); // 'ყველა', 'Action', 'Drama', ...

  // --- ახალი State-ები მონაცემების სამართავად ---
  const [allMedia, setAllMedia] = React.useState([]); // აქ ჩაიტვირთება მონაცემები API-დან
  const [isLoading, setIsLoading] = React.useState(true); // მონაცემების ჩატვირთვის სტატუსი
  const [error, setError] = React.useState(null); // შეცდომის შესანახი

  // --- მონაცემების ჩატვირთვა useEffect-ით ---
  // ИСПРАВЛЕНИЕ: Используем React.useEffect
  React.useEffect(() => {
    // === API-ს ლოგიკის დროებით გათიშვა ===
    /*
    const fetchMedia = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/films'); 
        if (!response.ok) {
          throw new Error(`HTTP შეცდომა! სტატუსი: ${response.status}`);
        }
        const apiData = await response.json();
        
        // --- მონაცემების ტრანსფორმაცია ---
        const transformedData = apiData.data.map(item => ({
          id: item.id,
          title: item.title_geo || item.title_eng || 'უსათაურო',
          poster: item.poster || 'https://placehold.co/500x750/333/fff?text=No+Image',
          rating: item.imdb_rating || 0,
          youtubeId: item.trailer_youtube_id || 'dQw4w9WgXcQ',
          type: item.is_movie ? 'movie' : 'series',
          genres: item.genres ? item.genres.map(g => g.title_geo || g.name) : ['Unknown']
        }));
        
        setAllMedia(transformedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setAllMedia([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
    */

    // === დემო მონაცემების ჩატვირთვა ===
    // ვაკეთებთ მცირე დაყოვნების სიმულაციას (1 წამი)
    setIsLoading(true);
    const timer = setTimeout(() => {
      setAllMedia(demoAllMedia); // ვტვირთავთ დემო მონაცემებს
      setIsLoading(false);
      setError(null);
    }, 1000); // 1000 მილიწამი = 1 წამი

    // ვასუფთავებთ ტაიმერს, თუ კომპონენტი დაიხურა
    return () => clearTimeout(timer);
    
  }, []); // [] ცარიელი მასივი ნიშნავს, რომ ეს ეფექტი გაეშვება მხოლოდ ერთხელ, კომპონენტის ჩატვირთვისას

  // --- ჟანრების სიის დინამიური გენერაცია ---
  // ИСПРАВЛЕНИЕ: Используем React.useMemo
  const allGenres = React.useMemo(() => {
    const genres = new Set(allMedia.flatMap((item) => item.genres));
    return ['ყველა', ...genres];
  }, [allMedia]); // ეს კოდი გაეშვება ყოველ ჯერზე, როცა allMedia შეიცვლება

  // ფილტრაციის ლოგიკა
  // ИСПРАВЛЕНИЕ: Используем React.useMemo
  const filteredMedia = React.useMemo(() => {
    return allMedia.filter((item) => {
      // 1. ვფილტრავთ კატეგორიის მიხედვით
      const categoryMatch =
        activeCategory === 'all' || item.type === activeCategory;

      // 2. ვფილტრავთ ჟანრის მიხედვით
      const genreMatch =
        activeGenre === 'ყველა' || item.genres.includes(activeGenre);

      return categoryMatch && genreMatch;
    });
  }, [allMedia, activeCategory, activeGenre]); // დავამატეთ allMedia დამოკიდებულებებში
  
  // სათაურის გენერაცია ფილტრების მიხედვით
  const getGridTitle = () => {
    if (activeCategory === 'movie') return 'ფილმები';
    if (activeCategory === 'series') return 'სერიალები';
    return 'პოპულარული';
  }

  const handlePlayTrailer = (youtubeId) => {
    setPlayingTrailerId(youtubeId);
  };

  const handleCloseTrailer = () => {
    setPlayingTrailerId(null);
  };

  // --- ვამატებთ ჩატვირთვის და შეცდომის ინდიკატორებს ---
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-2xl font-bold text-white">
        იტვირთება...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-2xl font-bold text-red-500">
        შეცდომა: {error}
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black font-sans text-gray-100">
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main>
        <HeroSection allMedia={allMedia} onPlayTrailer={handlePlayTrailer} />
        
        <div className="mx-auto max-w-7xl px-4 md:px-10">
          <GenreFilter
            genres={allGenres}
            activeGenre={activeGenre}
            onSelectGenre={setActiveGenre}
          />
          
          <ContentGrid
            title={getGridTitle()}
            items={filteredMedia}
            onPlayTrailer={handlePlayTrailer}
          />
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-800 py-10 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Movie Trailers App. დემო ვერსია.
        </p>
      </footer>

      <TrailerModal
        youtubeId={playingTrailerId}
        onClose={handleCloseTrailer}
      />
    </div>
  );
}

