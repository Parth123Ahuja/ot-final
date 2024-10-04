import React, { useEffect } from "react";

const DiscoverPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="md:flex  bg-orange-300 text-white">
        <div className="container md:w-1/2 w-full mx-auto px-4">
          <h1 className="text-5xl p-12 font-bold">
          Welcome to Organic Matki
          </h1>
        </div>
        <div className="md:w-1/2 w-full h-96">
          <img
            className="w-full h-96 object-cover"
            src="https://bdsup.org/wp-content/uploads/2022/01/Shabri-waterfall.webp" // Replace with the path to your image
            alt="Canvas Worker"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:flex container mx-auto px-4 mt-16">
        <div className="md:w-1/3 w-full text-justify ">
          <h2 className="text-3xl font-bold text-left text-green-900">The Ambassador of Bundelkhand's Rich Heritage</h2>
          <p className="mt-4 text-green-600">
            <span className="font-bold">
            Nestled in the heart of central India, Bundelkhand. 
            </span>
            <br />
            
          </p>
          <p className="mt-4 text-black">
          A historically vibrant region now part of northern Madhya Pradesh, has been an integral thread in India's diverse cultural tapestry. This enchanting land is home to a distinct heritage, shaped by its resilient people, delectable cuisine, and timeless traditions.
          </p>
          <p className="mt-4 text-black">
          At Organic Matki, we are driven by a passion to showcase the unexplored strengths of Bundelkhand, sharing its unique essence with India and the world. Our mission is to:
          </p>
          <ol className="mt-4 text-gray-600" type="1">
            <li>1. Preserve and promote local traditions: By highlighting the region's artisanal craftsmanship, folk art, and cultural practices.</li>
            <li>2. ⁠Celebrate Bundelkhand's culinary delights: By showcasing its authentic, farm-to-table cuisine, and indigenous ingredients.</li>
            <li>3. Empower local communities: By supporting farmers, artisans, and small-scale entrepreneurs, ensuring fair trade practices.</li>
            <li>4. Foster sustainable living: By promoting eco-friendly practices, organic farming, and environmentally conscious products.</li>
          </ol>
          <p className="mt-12 text-black">
          Through our brand, we aim to:
          </p>
          <ol className="mt-4 text-gray-600" type="1">
            <li>1. Create a platform for Bundelkhand's hidden gems to shine.</li>
            <li>2. Bridge the gap between rural and urban India.</li>
            <li>3. Showcase India's diversity and richness to the global community.</li>
          </ol>
          
        </div>
        {/* Images Section */}
        <div className="md:w-3/4 w-full md:justify-end flex flex-wrap items-center justify-center gap-2 mt-8">
          
            <img
              className="w-1/2 "
              src="https://bdsup.org/wp-content/uploads/2022/01/Shri-Paramhans-Dharkundi-Ashram.webp"
              alt="Canvas 1"
            />{" "}
            {/* Replace with image paths */}
            <img
              className="w-1/2"
              src="https://bdsup.org/wp-content/uploads/2022/01/Rahila-Sagar-Sun-Temple.webp"
              alt="Canvas 2"
            />{" "}
            {/* Replace with image paths */}
          <img
            className="w-1/2 pl-1"
            src="https://bdsup.org/wp-content/uploads/2022/01/Kalinjar-Fort.webp"
            alt="Canvas 3"
          />{" "}
          {/* Replace with image paths */}
        </div>
      </div>
      {/* Quote Section */}
      <div className="bg-white m-6 md:m-12 shadow-md border border-gray-200 rounded-md flex items-center">
        <div className="text-orange-500 ml-2 text-3xl mr-4">❝</div>
        <p className="text-gray-700 p-6 md:p-12 ">
        Join us on this journey to discover, celebrate, and share the beauty of Bundelkhand!
        </p>
      </div>
    </div>
  );
};

export default DiscoverPage;
