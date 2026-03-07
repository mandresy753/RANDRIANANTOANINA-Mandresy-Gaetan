import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="footer" className="w-full py-10 px-6 text-center pb-32
      bg-gray-100 dark:bg-slate-900
      border-t border-gray-200 dark:border-slate-800">
          <p className="text-lg font-semibold mb-6 text-gray-700 dark:text-slate-300">
        Travaillons ensemble 🤝
      </p>
      <div className="flex justify-center gap-6 mb-6 text-2xl">
        <a
          target="_blank"
          href="tel:+261344141732"
          className="text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-gray-200 transition"
          aria-label="Phone"
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>

        <a
          target="_blank"
          href="mailto:mandresy2020@gmail.com"
          className="text-gray-600 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a
          target="_blank"
          href="https://github.com/mandresy753/"
          className="text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-gray-200 transition"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/mandresy-ga%C3%ABtan-randrianantoanina-30231a33b/"
          className="text-gray-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          target="_blank"
          href="https://facebook.com/RANDRIANANTOANINA.Mandresy.Gaetan?locale=fr_FR"
          className="text-gray-600 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-500 transition"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>

      <p className="text-sm text-gray-500 dark:text-slate-500">
        Made with ❤️ by Mandresy<br />
        © {new Date().getFullYear()} All rights reserved
        
      </p>
    </footer>
  );
}

export default Footer;