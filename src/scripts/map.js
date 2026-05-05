// function hideMapContainer() {
//   console.warn('Яндекс.Карты не загрузились');
//   const el = document.querySelector('.map-container');
//   if (el) el.style.display = 'none';
// }

// export function initMap() {
//   if (!window.ymaps) {
//     hideMapContainer();
//     return;
//   }

//   window.ymaps.ready(
//     () => {
//       try {
//         const mapEl = document.getElementById('map');
//         const map = new window.ymaps.Map('map', {
//           center: [54.065661, 27.791948],
//           zoom: 14,
//           controls: ['zoomControl', 'fullscreenControl']
//         });
//         const placemark = new window.ymaps.Placemark([54.065661, 27.791948], {
//           balloonContent: 'Усадьба Марьянино, Раубичи'
//         });
//         map.geoObjects.add(placemark);

//         // Detect silent failures (e.g. invalid API key): tiles never load
//         let tileLoaded = false;
//         const timer = setTimeout(() => {
//           if (!tileLoaded) hideMapContainer();
//         }, 8000);

//         const observer = new MutationObserver(() => {
//           for (const img of mapEl.querySelectorAll('img[src]')) {
//             const onLoad = () => {
//               if (tileLoaded) return;
//               tileLoaded = true;
//               clearTimeout(timer);
//               observer.disconnect();
//               const container = document.querySelector('.map-container');
//               if (container) container.style.display = 'block';
//             };
//             if (img.complete && img.naturalWidth > 0) {
//               onLoad();
//               return;
//             }
//             img.addEventListener('load', onLoad, { once: true });
//           }
//         });
//         observer.observe(mapEl, { childList: true, subtree: true });
//       } catch (e) {
//         hideMapContainer();
//       }
//     },
//     () => hideMapContainer()
//   );
// }

export function initMap() {
  if (window.ymaps) {
    const mapEl = document.getElementsByClassName('map-container')[0];
    window.ymaps.ready(() => {
      const map = new window.ymaps.Map('map', {
        center: [54.065661, 27.791948],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl']
      });
      const placemark = new window.ymaps.Placemark([54.065661, 27.791948], {
        balloonContent: 'Усадьба Марьянино, Раубичи'
      });
      map.geoObjects.add(placemark);
      mapEl.style.display = 'block';
    });
  } else {
    console.warn('Яндекс.Карты не загрузились');
  }
}