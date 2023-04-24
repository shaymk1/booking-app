// import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
// import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import chefAndre from "./assets/chef-1.jpg";
import chefLoisa from "./assets/chef-3.jpg";
import './OurStory.css';

const OurStory = () => {
  return (
		<section className="container grid our-story">
			<div className="our-story-description">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					The first Little Lemon restaurant opened it's doors in 2010 in Cape
					Town, South Africa. It was a brain child of two best friends, who
					wanted to showcase <span className="italic">Ubuntu</span> to 2010 FIFA
					Soccer World Cup visitors. Ubuntu is a South African philosophy which
					means <span className="italic">Humanity</span>.
				</p>
				{/* <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. Sed ut
					perspiciatis unde omnis iste natus error sit voluptatem accusantium
					doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
					inventore veritatis et quasi architecto beatae vitae dicta sunt
					explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
					odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
					voluptatem sequi nesciunt.
				</p> */}
			</div>
			<div className="our-story-chefs">
				<img src={chefAndre} alt="Chefs Mario and Adrian" />
				<img src={chefLoisa} alt="Chefs Mario and Adrian" />
			</div>
		</section>
	);
};

export default OurStory;
