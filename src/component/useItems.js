export function useItems() {
  const items = [
    {
      id: 1,
      image: '/img/Car/Car9.webp',
      imageUp: '/img/Car/CarUp9.png',
      delay: 100
    },
    {
      id: 2,
      image: '/img/Car/Car7.webp',
      imageUp: '/img/Car/CarUp7.png',
      delay: 200
    },
    {
      id: 3,
      image: '/img/Car/Car8.webp',
      imageUp: '/img/Car/CarUp8.png',
      delay: 300
    }
  ];

  return {
    items
  };
}
