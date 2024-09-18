/* eslint-disable react/no-unescaped-entities */
import {
  Play,
  BarChart2,
  DollarSign,
  Search,
  ChevronRight,
  ArrowUpRight,
} from "react-feather";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Navbar />

          <header className="flex-col xl:flex-row flex justify-between">
            <div className="mx-auto text-center xl:text-left xl:mx-0 mb-20 xl:mb-0">
              <h1 className="font-bold text-gray-700 text-3xl md:text-6xl leading-tight mb-10">
                Une agence de <br /> conception de produits numériques
              </h1>

              <p className="font-normal text-gray-500 text-sm md:text-lg mb-10">
                Nous développons des produits <br /> de haute qualité de classe
                mondiale.
              </p>

              <div className="flex items-center justify-center lg:justify-start">
                <a
                  href="#"
                  className="px-8 py-3 bg-red-500 font-medium text-white text-md md:text-lg rounded-md hover:bg-red-700 transition ease-in-out duration-300 mr-14"
                >
                  Notre histoire
                </a>

                <a
                  href="#"
                  className="hidden lg:block font-normal text-gray-500 text-lg mr-8"
                >
                  Regarder la bande-annonce
                </a>

                <a
                  href="#"
                  className="px-4 py-4 text-gray-300 border-2 border-gray-200 rounded-full"
                >
                  <i>
                    <Play />
                  </i>
                </a>
              </div>
            </div>

            <div className="mx-auto xl:mx-0">
              <img src="./src/assets/image/home-img.svg" alt="Image" />
            </div>
          </header>
        </div>
      </section>

      <section className="py-8 md:py-16" id="services">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Services
              icon={<BarChart2 />}
              title={"Planification d'entreprise"}
              text={
                "Nous offrons des solutions stratégiques pour maximiser la performance de votre entreprise."
              }
              color={"purple"}
            />

            <Services
              icon={<DollarSign />}
              title={"Planification financière"}
              text={
                "Obtenez des conseils financiers pour un meilleur retour sur investissement."
              }
              color={"red"}
            />

            <Services
              icon={<Search />}
              title={"Analyse de marché"}
              text={
                "Analyse approfondie pour comprendre les tendances du marché et la concurrence."
              }
              color={"blue"}
            />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
            Que faisons-nous?
          </h1>

          <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">
            Nous transformons vos idées en produits numériques de qualité
            supérieure.
          </p>

          <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
            <div className="mx-auto xl:mx-0 mb-20 xl:mb-0">
              <img src="./src/assets/image/image-1.svg" alt="Image" />
            </div>

            <div className="mx-auto xl:mx-0 text-center xl:text-left">
              <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
                Le design est notre processus le <br /> plus intense
              </h1>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Nous créons des designs intuitifs et fonctionnels  <br /> qui répondent
                à vos besoins d'entreprise. Nous créons <br />des designs intuitifs et fonctionnels qui répondent
                à vos besoins d'entreprise.
              </p>

              <a
                href="#"
                className="flex items-center justify-center xl:justify-start font-semibold text-red-500 text-lg gap-3 hover:text-red-700 transition ease-in-out duration-300"
              >
                Voir plus
                <i>
                  <ChevronRight />
                </i>
              </a>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
            <div className="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0">
              <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
                Ne vous inquiétez pas pour <br /> l’investissement,
                il vous reviendra.
              </h1>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Chaque centime que vous investissez dans vos produits <br /> numériques
                portera ses fruits. Chaque centime que <br /> vous investissez dans vos produits numériques
                portera ses fruits.
              </p>

              <a
                href="#"
                className="flex items-center justify-center xl:justify-start font-semibold text-red-500 text-lg gap-3 hover:text-red-700 transition ease-in-out duration-300"
              >
                Voir plus
                <i>
                  <ChevronRight />
                </i>
              </a>
            </div>

            <div className="mx-auto xl:mx-0">
              <img src="./src/assets/image/image-2.svg" alt="Image" />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="mx-auto xl:mx-0 mb-20 xl:mb-0">
              <img src="./src/assets/image/image-3.svg" alt="Image" />
            </div>

            <div className="mx-auto xl:mx-0 text-center xl:text-left">
              <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
                Un contenu clair et immédiatement <br /> compréhensible  est
                essentiel.
              </h1>

              <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
                Dans un monde où l'attention des utilisateurs <br /> est de plus en
                plus limitée, il est crucial que les informations soient <br />
                facilement accessibles et compréhensibles dès le premier coup
                d'œil.
              </p>

              <a
                href="#"
                className="flex items-center justify-center xl:justify-start font-semibold text-red-500 text-lg gap-3 hover:text-red-700 transition ease-in-out duration-300"
              >
                Voir plus
                <i>
                  <ChevronRight />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16" id="works">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
            Nos réalisations
          </h1>

          <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20">
            Chaque réalisation est le reflet de notre engagement à offrir des
            solutions innovantes et sur mesure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-1.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Conception, image de marque, développement
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-2.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Conception, image de marque, développement
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-3.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Conception, image de marque, développement
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-3.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Conception, image de marque, développement
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4">
              <img
                src="./src/assets/image/yoga-1.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Conception, image de marque, développement
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>

            <div className="space-y-2 xl:space-y-4 mb-10 md:mb-20">
              <img
                src="./src/assets/image/yoga-2.svg"
                alt="Image"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />

              <p className="font-normal text-gray-400 text-base">
                Conception, image de marque, développement
              </p>

              <a
                href="#"
                className="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-red-500 transition ease-in-out duration-300"
              >
                Yoga School
              </a>
            </div>
          </div>

          <div className="flex justify-center mb-20 md:mb-40">
            <a
              href="#"
              className="px-6 py-2 md:px-8 md:py-3 flex items-center gap-3 font-medium text-red-500 text-lg border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white transition ease-linear duration-300"
            >
              Voir plus des realisations
              <i>
                <ArrowUpRight />
              </i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ml-4 md:ml-20 xl:ml-0 mb-20 xl:mb-40">
            <img
              src="./src/assets/image/brand-1.svg"
              alt="Image"
              className="mb-5 md:mb-10 xl:mb-0"
            />

            <img
              src="./src/assets/image/brand-2.svg"
              alt="Image"
              className="mb-5 md:mb-0"
            />

            <img
              src="./src/assets/image/brand-3.svg"
              alt="Image"
              className="mb-5 md:mb-10 xl:mb-0"
            />

            <img
              src="./src/assets/image/brand-4.svg"
              alt="Image"
              className="mb-5 md:mb-0"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between mb-8" id="contact">
            <div>
              <p className="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">
                Parlons-en
              </p>

              <h1 className="font-bold text-gray-700 text-xl md:text-4xl">
                Avez-vous un projet ?
              </h1>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="px-4 py-2 md:px-8 md:py-3 font-medium text-red-500 text-lg border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white transition ease-linear duration-300"
              >
                Contactez-nous maintenant
              </a>
            </div>
          </div>

          <hr className="text-gray-300 mb-8" />

          <p className="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10">
            Vous avez une idée ou un projet en tête et vous souhaitez lui donner
            vie ? Nous sommes là pour vous accompagner à chaque étape, de la
            conception à la réalisation.
          </p>
        </div>
      </section>

      <footer className="bg-red-50 py-8 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
            <div className="mb-10 lg:mb-0">
              <img
                src="./src/assets/image/batman-5.svg"
                alt="Image"
                className="mb-5 mx-auto lg:mx-0"
              />
              <p className="font-normal text-gray-400 text-md">
                Nous développons des produits de haute qualité <br /> de classe
                mondiale.
              </p>
            </div>

            <div className="space-y-4 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-500 text-lg mb-6">
                Nos services
              </h4>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Tarification
              </a>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Design UI
              </a>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Animation
              </a>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Développement
              </a>
            </div>

            <div className="space-y-4 mb-10 lg:mb-0">
              <h4 className="font-semibold text-gray-500 text-lg mb-6">
                Notre entreprise
              </h4>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Reporting
              </a>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Contactez-nous
              </a>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                Gestion
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-500 text-lg mb-6">
                Contact
              </h4>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                121 Av. Bantu, L'shi, DRC
              </a>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                123-456-7890
              </a>
              <a
                href="#"
                className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
              >
                info@batman-agency.pro
              </a>
            </div>
          </div>

          <hr className="text-gray-300 mt-10" />

          <p className="font-normal text-gray-400 text-md text-center mt-5">
            &copy; 2024 Batman Agency. Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
