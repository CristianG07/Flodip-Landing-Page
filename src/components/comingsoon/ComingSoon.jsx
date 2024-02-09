import { motion } from "framer-motion";
// imagenes
import {
  app_store,
  google_play,
  mercancia,
  phone_mockup,
  transportistas,
} from "../../assets/img";
// componentes
import { Title } from "../Title";
import { fadeIn } from "../../animations/Animations";

export const ComingSoon = () => {
  return (
    <section id="proximamente">
      <div className="containers py-24">
        <Title className="text-black">Proximamente</Title>
        <div className="flex flex-col md:flex-row md:items-start items-center gap-16 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            variants={fadeIn("right", 0.5)}
            whileInView={"show"}
            className="max-w-[75%]"
          >
            <img src={phone_mockup} alt="captura_de_pantalla" loading="lazy" />
          </motion.div>
          <motion.div
            initial="hidden"
            variants={fadeIn("left", 0.5)}
            whileInView={"show"}
            className="flex flex-col gap-4 max-w-full md:max-w-[61%]"
          >
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 0.8)}
              >
                descarga
              </motion.span>{" "}
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 0.9)}
              >
                nuestra
              </motion.span>{" "}
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 1.0)}
              >
                app
              </motion.span>
            </h4>
            <p className="texto_primary">
              Próximamente lanzaremos nuestra aplicación Flodip! En equipo,
              estamos trabajando arduamente para ofrecer una experiencia
              excepcional. ¡Estén atentos para descubrir cómo Flodip mejorará y
              transformará la manera de conseguir cargas y mover mercancías!
            </p>
            <div className="flex items-center gap-5">
              <motion.div
                initial="hidden"
                variants={fadeIn("up", 0.6)}
                whileInView={"show"}
              >
                <img src={app_store} alt="app_store" loading="lazy" />
              </motion.div>
              <motion.div
                initial="hidden"
                variants={fadeIn("up", 0.9)}
                whileInView={"show"}
              >
                <img src={google_play} alt="google_play" loading="lazy" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/*  */}
        <div className="mt-32 flex flex-col md:flex-row md:items-start items-center gap-16 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            variants={fadeIn("right", 0.5)}
            whileInView={"show"}
            className="flex flex-col gap-5 max-w-full md:max-w-[61%]"
          >
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 0.8)}
              >
                trans
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 0.9)}
              >
                por
              </motion.span>
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 1.0)}
              >
                tistas
              </motion.span>
            </h4>
            <p className="texto_primary ">
              Si eres transportista esta es la oportunidad para potenciar tu
              carrera en el transporte. Con nuestro sistema avanzado,
              encontrarás cargas de manera eficiente, asegurando no solo
              rapidez, sino también seguridad y remuneración justa. La
              transparencia y la comunicación directa son el núcleo de nuestra
              plataforma, brindándote control total sobre tus operaciones.
            </p>
            <div className="flex items-center gap-5 mt-5">
              <motion.div
                initial="hidden"
                variants={fadeIn("up", 0.6)}
                whileInView={"show"}
              >
                <img src={transportistas} alt="app_store" loading="lazy" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            variants={fadeIn("left", 0.5)}
            whileInView={"show"}
            className="flex flex-col gap-4 max-w-full md:max-w-[61%]"
          >
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 0.8)}
              >
                dueños
              </motion.span>{" "}
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 0.9)}
              >
                de
              </motion.span>{" "}
              <motion.span
                initial="hidden"
                whileInView={"show"}
                variants={fadeIn("", 1.0)}
              >
                mercancia
              </motion.span>
            </h4>
            <p className="texto_primary">
              Estamos listos para simplificar tus envíos. Con nuestro sistema,
              conectaras directamente a transportistas confiables, asegurando
              entregas puntuales y seguras. Encuentra la combinación perfecta en
              tiempo real, comunícate directamente con el transportista y sigue
              tus envíos con tranquilidad. Optimiza tus envíos y no pierdas
              tiempo valioso donde tu mercancía podría estar en transito a su
              lugar de destino.
            </p>
            <div className="flex items-center gap-5 max-w-[60%] mx-auto">
              <motion.div
                initial="hidden"
                variants={fadeIn("up", 0.6)}
                whileInView={"show"}
              >
                <img src={mercancia} alt="app_store" loading="lazy" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
