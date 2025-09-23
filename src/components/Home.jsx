import TypingAnimation from './TypingAnimation';

const Home = () => {
  const titles = [
    "Aspiring SWE, Economics & CS Student"
  ];

  return (
    <section id="home">
      <img src="/my-portfolio/profile.jpg" alt="Mit Gohel" className="profile-pic" />
      <h1>
        I'm <span className="gradient-name">Mit Gohel</span>,{' '}
        <TypingAnimation texts={titles} speed={80} deleteSpeed={40} pauseTime={1500} />
      </h1>
      <p>I specialize in combining finance and technology into real-world solutions.</p>
    </section>
  );
};

export default Home;
