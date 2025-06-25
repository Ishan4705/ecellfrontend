import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from './EventsSlider.module.css';

export interface Slide {
	image: string;
	title: string;
	subtitle?: string;
	date?: string;
}

const SLIDES_API_URL = 'http://127.0.0.1:5000/api/events';

const Slider = () => {
	const [slides, setSlides] = useState<Slide[]>([]);
	const [current, setCurrent] = useState(0);

	// Fetch slides from API
	useEffect(() => {
		const fetchSlides = async () => {
			try {
				const response = await fetch(SLIDES_API_URL);
				const data = await response.json();
				setSlides(data);
			} catch (error) {
				console.error('Failed to fetch slides:', error);
			}
		};
		fetchSlides();
	}, []);

	const total = slides.length;

	const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
	const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

	// Helper to get slide index with wrap-around
	const getIndex = (idx: number) => (idx + total) % total;

	// Helper to split title for blue/white effect
	const getStyledTitle = (title = '') => {
		const [first, ...rest] = title.split(' ');
		return (
			<>
				<span className="text-blue-400">{first}</span>{' '}
				<span className="text-white">{rest.join(' ')}</span>
			</>
		);
	};

	if (!slides.length) {
		return <div className="text-white text-center py-8">Loading...</div>;
	}

	return (
		<div className="w-full flex flex-col items-center">
			{/* Slides Row */}
			<div className="flex justify-center items-end gap-8 w-full mt-4 mb-8">
				{[current - 1, current, current + 1].map((idx, i) => {
					const slideIdx = getIndex(idx);
					const slide = slides[slideIdx];
					const isCenter = i === 1;
					return (
						<div
							key={slideIdx}
							className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col items-center
                ${isCenter ? 'scale-105 border-4 border-blue-300 bg-[#18122B] z-10' : 'opacity-60 bg-[#18122B] border-4 border-transparent z-0'}
                max-w-xs w-72 ${styles['slide-box']}`}
						>
							<img
								src={slide.image}
								alt={slide.title}
								className="w-full h-56 object-cover"
								loading="lazy"
							/>
						</div>
					);
				})}
			</div>

			{/* Title, Arrows, and Register Button Row */}
			<div className="flex items-center justify-center gap-4 mt-2 mb-4 w-full max-w-lg">
				<button
					onClick={prevSlide}
					className="text-3xl text-blue-400 bg-[#18122B] hover:bg-blue-900/20 rounded-full p-2 transition flex items-center justify-center"
					title="Previous"
				>
					<BsChevronCompactLeft />
				</button>
				<div className="flex-1 text-4xl font-extrabold text-center flex items-center justify-center">
					{getStyledTitle(slides[current].title)}
				</div>
				<button
					onClick={nextSlide}
					className="text-3xl text-blue-400 bg-[#18122B] hover:bg-blue-900/20 rounded-full p-2 transition flex items-center justify-center"
					title="Next"
				>
					<BsChevronCompactRight />
				</button>
			</div>

			<div className="flex items-center justify-center gap-4 mt-2 mb-4 w-full max-w-lg">
				<button
					className={`rectangle-3847 px-8 sm:px-12 md:px-16 py-3 sm:py-4 font-bold text-base sm:text-lg rounded-[10px] shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-75 text-[#020202] ml-2 ${styles['register-btn']}`}
				>
					Register
				</button>
			</div>

			{/* Slide Indicator */}
			<div className="flex items-center gap-2 mt-2 mb-2">
				{slides.map((_, idx) => (
					<span
						key={idx}
						className={`h-3 w-3 rounded-full cursor-pointer ${idx === current ? 'bg-blue-400' : 'bg-gray-500'}`}
						onClick={() => setCurrent(idx)}
					/>
				))}
			</div>
		</div>
	);
};

export default Slider;
