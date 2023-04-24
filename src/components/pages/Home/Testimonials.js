import person1Image from './assets/person-1.jpg';
import person2Image from "./assets/person-2.jpg";
import person3Image from "./assets/person-3.jpg";
import person4Image from "./assets/person-4.jpg";
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
	{
		fullName: "Michael Moon",
		image: person1Image,
		rating: [1, 1, 1, 1, 0.5],
		says: `The Ubuntu hospitality they are famous for, really makes you feel at home`,
	},
	{
		fullName: "Jason Bourne",
		image: person2Image,
		rating: [1, 1, 1, 1, 1],
		says: `I love it here, they have the most awesome grilled salmon in the whole of Chicago`,
	},
	{
		fullName: "Tamara Day",
		image: person3Image,
		rating: [1, 1, 1, 1, 0.5],
		says: `I love their organic pasta with organic tomatoes on top, delicious!`,
	},
	{
		fullName: "Lee Hong",
		image: person4Image,
		rating: [1, 1, 1, 1],
		says: `They just make you feel at home, they are so warm!`,
	},
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
