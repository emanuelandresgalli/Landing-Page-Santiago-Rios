import  { useEffect } from 'react';

export default function Categorias() {
  useEffect(() => {
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    const updateActiveItem = (index) => {
      carouselItems.forEach((item, idx) => {
        item.classList.toggle('hidden', idx !== index);
        item.classList.toggle('block', idx === index);
      });
    };

    const showNextItem = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateActiveItem(currentIndex);
    };

    const showPrevItem = () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateActiveItem(currentIndex);
    };

    const nextButton = document.querySelector('[data-carousel-next]');
    const prevButton = document.querySelector('[data-carousel-prev]');

    nextButton.addEventListener('click', showNextItem);
    prevButton.addEventListener('click', showPrevItem);

    // Initial display setup
    updateActiveItem(currentIndex);

    // Cleanup function
    return () => {
      nextButton.removeEventListener('click', showNextItem);
      prevButton.removeEventListener('click', showPrevItem);
    };
  }, []);

  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://i.ibb.co/6RHy4NQ/Cocina-Webp.webp"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Item 1"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://i.ibb.co/yFsYt1s/Living-Webp.webp"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Item 2"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://i.ibb.co/GV1W1Vq/Oficina-Webp.webp"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Item 3"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://i.ibb.co/D5W7XvD/Local.webp"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Item 4"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://i.ibb.co/LYSKzxR/Comedor.webp"
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Item 5"
          />
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
