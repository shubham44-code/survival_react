import { useState, useEffect, useRef } from "react";

const useSlider = () => {
    const [childWidth, setChildWidth] = useState();
    const [childElCount, setChildElCount] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const ChildElement = useRef([]);
    const MainSlider = useRef(null);
    const nextButton = useRef(null);
    const prevButton = useRef(null);

    const NextSlide = () => {
        var mainSliderTransform = MainSlider.current.style.transform;
        var translateXValue = mainSliderTransform.replace(/[^\d.]/g, "");

        if (currentSlide < childElCount) {
            setCurrentSlide((current) => {
                return current + 1;
            });
            MainSlider.current.style.transform = `translateX(-${+translateXValue + +childWidth
                }px)`;
        }
    };

    const PrevSlide = () => {
        var mainSliderTransform = MainSlider.current.style.transform;
        var translateXValue = mainSliderTransform.replace(/[^\d.]/g, "");

        if (currentSlide > 1) {
            setCurrentSlide((current) => {
                return current - 1;
            });
            MainSlider.current.style.transform = `translateX(-${+translateXValue - +childWidth
                }px)`;
        }
    };

    useEffect(() => {
        var bannerImages = {
            totalWidth: 0,
        };

        ChildElement.current.map((el) => {
            el.style.width = el.clientWidth + "px";
            var total = bannerImages.totalWidth;
            total += el.clientWidth;
            bannerImages.totalWidth += total;
            setChildElCount((prevCount) => {
                return prevCount + 1;
            });
            setChildWidth(el.clientWidth);
            return null;
        });

        MainSlider.current.style.width = bannerImages.totalWidth + "px";
        MainSlider.current.style.display = "flex";
        MainSlider.current.style.transform = "translateX(0)";
    }, [ChildElement]);

    useEffect(() => {
        if(currentSlide === childElCount) {
          nextButton.current.classList.add("disable");
        } else if(currentSlide === 1) {
          prevButton.current.classList.add("disable");
        } else {
          prevButton.current.classList.remove("disable");
          nextButton.current.classList.remove("disable");
        }
      }, [currentSlide, childElCount]);

    return { MainSlider, ChildElement, childElCount, nextButton, prevButton, NextSlide, PrevSlide }
}

export default useSlider;