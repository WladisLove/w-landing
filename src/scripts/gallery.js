import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export function initGallery() {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.pswp-gallery',
    children: '.pswp-item',
    loop: true,
    // resolve dimensions dynamically so we don't need data-pswp-width/height
    pswpModule: () => import('photoswipe'),
  });

  // load image dimensions on the fly if not set on the anchor
  lightbox.addFilter('domItemData', (itemData, element) => {
    const img = element.querySelector('img');
    if (img && img.naturalWidth) {
      itemData.w = img.naturalWidth;
      itemData.h = img.naturalHeight;
    } else {
      // fallback: load to get real dimensions
      const probe = new Image();
      probe.src = itemData.src;
      probe.onload = () => {
        itemData.w = probe.naturalWidth;
        itemData.h = probe.naturalHeight;
      };
      itemData.w = itemData.w || 1600;
      itemData.h = itemData.h || 1067;
    }
    return itemData;
  });

  lightbox.init();
}