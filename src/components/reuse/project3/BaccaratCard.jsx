import React, { useState } from "react";
import '../../../Style/project3.css';
const BaccaratCard = () => {
  const images = [
    {
      url: "https://i.pinimg.com/736x/2a/3d/bf/2a3dbf4d2414f7cf2d8906c867ac7b1f.jpg",
      value: 0,
    },
    {
      url: "https://i.pinimg.com/736x/77/e1/50/77e150363de6528897197a5370512217.jpg",
      value: 1,
    },
    {
      url: "https://res.cloudinary.com/dxsdme4qy/image/upload/v1734168723/Capture_s6yabb.jpg",
      value: 2,
    },
    {
      url: "https://i.pinimg.com/736x/72/78/d5/7278d51dda50bd4b8c8cadb7fe349953.jpg",
      value: 3,
    },
    {
      url: "https://i.pinimg.com/736x/34/78/d0/3478d074ad6b2991ccd9aea7b039610b.jpg",
      value: 4,
    },
    {
      url: "https://i.pinimg.com/736x/8f/6a/20/8f6a2068fd6f32c372ea8dab0cde6f40.jpg",
      value: 5,
    },
    {
      url: "https://i.pinimg.com/736x/35/d9/75/35d9751fdc8d1776cee15e9d8b53125d.jpg",
      value: 6,
    },
    {
      url: "https://i.pinimg.com/736x/4c/29/3c/4c293cdaab68eb4b240d570899f0853c.jpg",
      value: 7,
    },
    {
      url: "https://i.pinimg.com/736x/46/34/c2/4634c2ead3ce00e03dd8ff14cc925ab7.jpg",
      value: 8,
    },
    {
      url: "https://i.pinimg.com/736x/df/4a/4f/df4a4f85f1e6912dd2050405dfc402a3.jpg",
      value: 9,
    },
  ];
  const [leftImages, setLeftImages] = useState([]);
  const [rightImages, setRightImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  const [leftThirdCard, setLeftThirdCard] = useState(null);
  const [rightThirdCard, setRightThirdCard] = useState(null);

  // Function to calculate the total, including the third card if present
  const calculateTotal = (hand, thirdCard) => {
    const totalValue =
      hand.reduce((sum, card) => sum + card.value, 0) +
      (thirdCard ? thirdCard.value : 0);
    return totalValue;
  };

  const handleImageClick = (imageUrl, value) => {
    if (imageCount < 4) {
      // Distribute cards to Player (Left) and Banker (Right)
      if (imageCount % 2 === 0) {
        setLeftImages((prev) => [...prev, { imageUrl, value }]);
      } else {
        setRightImages((prev) => [...prev, { imageUrl, value }]);
      }
      setImageCount(imageCount + 1);
    } else if (imageCount === 4) {
      // Calculate totals
      const playerTotal = calculateTotal(leftImages, leftThirdCard);
      const bankerTotal = calculateTotal(rightImages, rightThirdCard);

      // Check for Player's Natural Win
      if ((playerTotal === 8 || playerTotal === 9) && leftImages.length === 2) {
        // Player has a natural win
        setGameResult("Player wins naturally!");
        return; // Stop further actions
      }
      // Player's third card rule
      if (playerTotal <= 5 && leftImages.length === 2 && !leftThirdCard) {
        setLeftThirdCard({ imageUrl, value });
      }

      // Banker's third card rule (using bankerTotal directly)
      else if (rightImages.length === 2 && !rightThirdCard) {
        const playerThirdValue = leftThirdCard ? leftThirdCard.value : null;

        // Evaluate based on Banker's total (bankerTotal)
        if (
          bankerTotal <= 2 ||
          (bankerTotal === 3 && playerThirdValue !== 8) ||
          (bankerTotal === 4 &&
            playerThirdValue &&
            [2, 3, 4, 5, 6, 7].includes(playerThirdValue)) ||
          (bankerTotal === 5 &&
            playerThirdValue &&
            [4, 5, 6, 7].includes(playerThirdValue)) ||
          (bankerTotal === 6 &&
            playerThirdValue &&
            [6, 7].includes(playerThirdValue))
        ) {
          setRightThirdCard({ imageUrl, value });
        }
      }
    }
  };

  const handleRemoveLeft = () => {
    if (leftImages.length > 0) {
      const newLeftImages = leftImages.slice(0, -1);
      setLeftImages(newLeftImages);
      setLeftThirdCard(null);
      const newTotalLeftValue = calculateTotal(newLeftImages, leftThirdCard);
      if (newTotalLeftValue > 10 && leftThirdCard) {
        setLeftThirdCard(null);
      }
    }
  };

  const handleRemoveRight = () => {
    if (rightImages.length > 0) {
      const newRightImages = rightImages.slice(0, -1);
      setRightImages(newRightImages);
    }
  };

  const handleFullReset = () => {
    setLeftImages([]);
    setRightImages([]);
    setImageCount(0);
    setLeftThirdCard(null);
    setRightThirdCard(null);
  };

  const totalLeftValue = calculateTotal(leftImages, leftThirdCard);
  const totalRightValue = calculateTotal(rightImages, rightThirdCard);

  // Extract digits as strings
  const totalLeftString = totalLeftValue.toString();
  const totalRightString = totalRightValue.toString();

  // Display the appropriate value based on the length of the string
  const firstDigitLeft =
    totalLeftString.length > 1 ? totalLeftString[1] : totalLeftString[0];
  const firstDigitRight =
    totalRightString.length > 1 ? totalRightString[1] : totalRightString[0];

  const winner =
    totalLeftValue === totalRightValue
      ? "Tie"
      : totalLeftValue > totalRightValue
      ? "Player"
      : "Banker";
  console.log("Right Third Card:", rightThirdCard);
  return (
    <div>
      <div className="flex gap-[150px] justify-center " style={{marginTop:"-20px"}}>
      <div className="flex flex-row-reverse items-center gap-3 relative bottom-[50px] left-[4px] lg:bottom-[50px] lg:left-[10px] sm:bottom-[60px] sm:left-[8px]">
        {leftImages.map(({ imageUrl, value }, index) => (
          <div key={index} className="w-7 h-5 card-container">
            <img
              src={imageUrl}
              alt={`Left-${index + 1}`}
              className="object-contain card-flip"
            />
          </div>
        ))}
        {leftThirdCard && (
          <div className="w-7 h-5 card-container">
            <img
              src={leftThirdCard.imageUrl}
              alt="Left-Third"
              className="object-contain card-flip"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
        )}
      </div>

        <div className="flex flex-wrap items-center gap-3  relative bottom-[50px] right-[13px] lg:bottom-[50px] lg:right-[10px] sm:bottom-[60px] sm:right-[8px]">
          {rightImages.map(({ imageUrl, value }, index) => (
            <div key={index} className=" w-7 h-5 card-container">
              <img
                src={imageUrl}
                alt={`Right-${index + 1}`}
                className="object-contain card-flip"
              />
            </div>
          ))}
          {rightThirdCard && (
            <div className=" w-7 h-5 card-container">
              <img
                src={rightThirdCard.imageUrl}
                alt="Right-Third"
                className="object-contain card-flip"
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-5 sm:grid-cols-10">
        {images.map(({ url, value }, index) => (
          <img
            key={index}
            src={url}
            alt={`image-${index + 1}`}
            className="h-20 w-20 object-contain cursor-pointer"
            onClick={() => handleImageClick(url, value)}
          />
        ))}
      </div>

      <div className="border-black flex justify-between items-center p-4">
        <button
          className="bg-Player text-white rounded-sm text-sm md:text-base font-medium glass-button"
          onClick={handleRemoveLeft}
        >
          Remove Left
        </button>
        <button
          className="bg-Banker text-white rounded-sm text-sm md:text-base font-medium glass-button1"
          onClick={handleRemoveRight}
        >
          Remove Right
        </button>
        <button
          className="bg-Tie text-white rounded-sm text-sm md:text-base font-medium glass-button1"
          onClick={handleFullReset}
        >
          Reset
        </button>
      </div>

      <div className="text-center">
        <p className="text-lg">Total Player: {firstDigitLeft || "No Value"}</p>
        <p className="text-lg">Total Banker: {firstDigitRight || "No Value"}</p>
        <p className="text-xl font-bold">Winner: {winner}</p>
      </div>
    </div>
  );
};

export default BaccaratCard;
