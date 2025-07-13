'use client'

import { _galleryGridImages } from '@/components/_data';

export default function Masonry({ images = [] }) {
    const columnCount = 3;
    
    // Define column layout types
    const columnLayouts = [
        ['h25', 'h75'],           // 25% + 75%
        ['h33', 'h33', 'h33'],    // 33% + 33% + 33%
        ['h50', 'h50'],           // 50% + 50%
        ['h25', 'h50', 'h25'],    // 25% + 50% + 25%
        ['h100']                  // 100%
    ];
    
    // Set seed because Math.floor() is causing hydration issues
    const seededRandom = (seed) => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    // Function to shuffle array randomly
    const shuffleArray = (array, seed = 12345) => {
        const shuffled = [...array];
        let currentSeed = seed;
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(currentSeed++) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    
    // Function to distribute images across columns with random layouts
    const distributeImages = (images) => {
        // Shuffle the column layouts array for random assignment
        const shuffledLayouts = shuffleArray(columnLayouts);

        // Ensure we have enough layouts for all columns by repeating if necessary
        const extendedLayouts = [];
        for (let i = 0; i < columnCount; i++) {
            extendedLayouts.push(shuffledLayouts[i % shuffledLayouts.length]);
        }

        // Calculate how many images each column needs based on its layout
        const columnCapacities = extendedLayouts.map(layout => layout.length);

        // Calculate total images needed
        const totalImagesNeeded = columnCapacities.reduce((sum, capacity) => sum + capacity, 0);

        // Shuffle images and take only what we need
        const shuffledImages = shuffleArray(images).slice(0, totalImagesNeeded);

        // Distribute images across columns based on their capacity
        const columns = [];
        let imageIndex = 0;

        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            const layoutType = extendedLayouts[columnIndex];
            const columnCapacity = columnCapacities[columnIndex];
            const columnImages = [];

            // Fill this column with the exact number of images it needs
            for (let i = 0; i < columnCapacity && imageIndex < shuffledImages.length; i++) {
                columnImages.push({
                    ...shuffledImages[imageIndex],
                    id: shuffledImages[imageIndex].id || imageIndex,
                    heightClass: layoutType[i]
                });
                imageIndex++;
            }
            columns.push(columnImages);
        }
        return columns;
    };
    
  
  
    return (
        <div className="gallery-grid mt-[300px]">
            {distributeImages(images).map((column, index) => (
                <div key={index} className="column">
                    {column.map((item, index) => (
                        <div
                            key={index}
                            className={`grid-item ${item.heightClass}`}
                            style={{ backgroundImage: `url(${item.url})`}}
                        >
                            <div>
                                <span><strong>{item.carMake}</strong> {item.carModel}</span>
                                <span>{item.service}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

