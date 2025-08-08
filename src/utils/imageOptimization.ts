// Image optimization utilities
export const getOptimizedImageUrl = (url: string, width?: number, height?: number): string => {
  // For Pexels images, we can add query parameters for optimization
  if (url.includes('pexels.com')) {
    const urlObj = new URL(url);
    if (width) urlObj.searchParams.set('w', width.toString());
    if (height) urlObj.searchParams.set('h', height.toString());
    urlObj.searchParams.set('auto', 'compress');
    urlObj.searchParams.set('cs', 'tinysrgb');
    return urlObj.toString();
  }
  return url;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = async (): Promise<void> => {
  const criticalImages = [
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  ];

  try {
    await Promise.all(criticalImages.map(preloadImage));
  } catch (error) {
    console.warn('Failed to preload some images:', error);
  }
};