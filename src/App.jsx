import Intro from "./intro";
import Nav from "./nav";
import Tech from "./tech";
import {skills, tools} from "./skill";
import "./App.css";

export default function App() {
  document.addEventListener('click', function(e) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';

  document.body.appendChild(ripple);

  ripple.addEventListener('animationend', function() {
    ripple.remove();
  });
});
  return (
    <div className="w-screen">
      <div id="click-effect"></div>
      <Nav />
      <Intro />
      <div><Tech skills={skills} heading="Tech Stack"/></div>
      <div><Tech skills={tools} heading="Tools"/></div>
    </div>
  )
};