const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <div className="about-content">
      <p>I'm an economics & computer science student at the University of Pittsburgh with a passion for finance, data-driven decision-making, and investment strategy. As a Senior Analyst at Panther Equity, I research consumer and healthcare equities, build valuation models, and contribute to investment pitches. At InvestIQ LLC, I refined trading algorithms and collaborate with analysts and engineers to enhance AI-driven trading strategies. Beyond finance, I enjoy staying active playing pickleball and volleyball, and when I'm not analyzing market trends, you can find me revisiting my favorite 2010s pop hits.</p>
    </div>
    {/*Internship Logos */}
    <div className="internship-logos">
      <img src={`${import.meta.env.BASE_URL}CCI.png`} alt="Crown Castle" />
      <img src={`${import.meta.env.BASE_URL}pantherequity.png`} alt="Panther Equity" />
      <img src={`${import.meta.env.BASE_URL}investiq.png`} alt="InvestIQ" />
    </div>

  </section>
);

export default About;
