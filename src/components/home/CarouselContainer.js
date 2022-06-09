import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import canapeaImg from "../../image/canapea.jpg";
import ceasImg from "../../image/ceas.jpg";
import accesoriiImg from "../../image/accesorii.jpg";
import "./CarouselContainer.css";

function CarouselContainer() {
	return (
		<div className='slider'>
			<Carousel>
				<Carousel.Item>
					<img className='d-inline w-100' src={canapeaImg} alt='First slide' />
					<Carousel.Caption>
						<h1>ERIS Fotoliu</h1>
						<p className='description'>
							Fotoliu Eris. Fotoliul din gama Eris este simbolul eleganței și al
							confortului, remarcându-se plăcut în amenajarea din livingul
							vostru. Fotoliul are forme armonioase, definite de rafinament.
						</p>
						<Link className='link' to='/produse'>
							<button className='button'>Vezi articolul</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-inline w-100' src={ceasImg} alt='First slide' />
					<Carousel.Caption>
						<h1>CLOCK Ceas de perete</h1>
						<p className='description'>
							Ceas de perete Clock. În cazul în care aveți nevoie de un ceas
							Clock pe peretele din dormitor sau living, acesta poate fi
							alegerea potrivită pentru a da decorului aspectul visat.
						</p>
						<Link className='link' to='/produse'>
							<button className='button'>Vezi articolul</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-inline w-100'
						src={accesoriiImg}
						alt='First slide'
					/>
					<Carousel.Caption>
						<h1>CACTUS Plantă artificială</h1>
						<p className='description'>
							Plantă artificială în ghiveci plastic Cactus. Adăugați un strop de
							culoare în case cu planta artificială, decorativă, din gama
							Cactus.
						</p>
						<Link className='link' to='/produse'>
							<button className='button'>Vezi articolul</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
export default CarouselContainer;
