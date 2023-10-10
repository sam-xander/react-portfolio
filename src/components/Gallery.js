import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { useState } from "react";

function Gallery({ imageArray }) {
  const [index, setIndex] = useState(-1);

  const cacheDuration = "30d"; // Specify your cache duration

  const imagesWithCache = imageArray.map((image) => ({
    ...image,
    src: `${image.src}?cache=${cacheDuration}`,
  }));
  return (
    <section className="gallery-section">
      <PhotoAlbum
        layout="rows"
        photos={imagesWithCache}
        onClick={({ index }) => setIndex(index)}
      >
        {imageArray.map((image, index) => (
          <img
            key={index}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={`Gallery ${index + 1}`}
            loading="lazy" // Add the loading="lazy" attribute
          />
        ))}
      </PhotoAlbum>
      <Lightbox
        slides={imagesWithCache}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Captions, Thumbnails]}
        captions={{
          showToggle: true, // Optional: to show/hide captions
          descriptionTextAlign: "start", // Optional: text alignment
          descriptionMaxLines: 3, // Optional: max lines for description
        }}
      />
    </section>
  );
}

export default Gallery;
