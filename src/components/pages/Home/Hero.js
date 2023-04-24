import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
// import restaurantFoodImage from "./assets/greek-salad-2.jpg";
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
		<section className="hero">
			<div className="container grid">
				<div className="hero-information">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<Link className="button-primary" to={pages.get("bookings").path}>
						Reserve a table
					</Link>
				</div>
				<img
					className="hero-image"
					src={bruschettaImage}
					alt="Restaurant food"
				/>
			</div>
		</section>
	);
};

export default Hero;
