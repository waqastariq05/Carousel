import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'

function App() {
  const items = [
    {
      title: 'Content Marketing',
      description: "Content is anything that adds value to the reader's life.",
      image: img1,
    },
    {
      title: 'Social Media',
      description: 'Digital marketing is the only fashion that never fades.',
      image: img2,
    },
    {
      title: 'Branding',
      description: 'When it absolutely, positively has to be there overnight.',
      image: img3,
    },
    {
      title: 'Campaign Development',
      description: '"Melts in Your Mouth, Not in Your Hand',
      image: img4,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Carousel items={items} />
    </div>
  );
}

export default App;
