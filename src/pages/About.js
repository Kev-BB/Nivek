import { Link } from "react-router-dom";
import Faq from "../components/Accordion";
const About = () => {
  return (
    <section className="section">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        euismod tortor sed nulla pharetra, quis fermentum orci molestie. Mauris
        semper hendrerit eleifend. Vestibulum ultricies varius rhoncus. Nam
        tincidunt, ipsum nec accumsan elementum, lorem tellus viverra lorem,
        eget porta sapien neque ac mauris. Fusce non tincidunt justo, vel
        ultrices dui. Donec dictum viverra mauris ac consectetur. Maecenas
        accumsan lorem a bibendum posuere. Nulla at mattis justo, quis blandit
        diam. Nulla erat dolor, pretium consequat ipsum a, varius volutpat
        massa. Nunc ligula sapien, commodo eget posuere in, pulvinar a ex.
        Mauris neque diam, ullamcorper sit amet porta et, lobortis ut leo. Fusce
        pretium nibh vitae risus sodales tincidunt. Proin elementum ligula
        nulla, vel volutpat nisi malesuada vel. Aliquam rhoncus blandit risus
        quis pretium. Nulla luctus dignissim eros et interdum. Morbi mollis
        magna a est iaculis pharetra.{" "}
      </p>
      <Faq/>
    </section>
  );
};
export default About;
