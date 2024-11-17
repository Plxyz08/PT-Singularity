import "./../styles/section.css";

const Section = ({ id, content }) => {
  return (
    <section id={id} className="section-container">
      {content}
    </section>
  );
};

export default Section;
