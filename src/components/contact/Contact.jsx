import { useRef } from "react";
import { fadeIn } from '../../animations/Animations'
import { ilustration } from '../../assets/img'
import { Title } from '../Title'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xvhchud",
        "template_m4wnvz5",
        form.current,
        "ALa-nL2YYJAeMWV6r"
      )
      .then(
        (result) => {
          toast.success(`Mensaje enviado con exito`, {
            position: "bottom-left",
            theme: "dark",
          });
        },
        (err) => {
          toast.error(`Error mensaje no enviado`, {
            position: "bottom-left",
            theme: "light",
          })
        }
      );
    e.target.reset();
  };

  return (
    <section id='contacto'>
      <div className='containers py-28'>
        <Title className='text-black'>Contactenos</Title>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 w-full rounded-lg lg:max-w-5xl lg:mx-auto'>
          <div>
            <motion.p
              initial='hidden'
              variants={fadeIn('up', 0.6)}
              whileInView={'show'}
              className='texto_primary text-center mb-5'
            >
              No pierdas tiempo buscando cargas, encuentra una rápida, segura y
              acorde a tus requerimientos.
            </motion.p>
            <motion.div
              initial='hidden'
              variants={fadeIn('right', 0.6)}
              whileInView={'show'}
              className=' mt-3'
            >
              <img
                src={ilustration}
                alt='ilustracion de camion'
                loading='lazy'
              />
            </motion.div>
          </div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial='hidden'
            variants={fadeIn('left', 0.6)}
            whileInView={'show'}
            className='flex flex-col w-full mx-auto gap-4'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div className='grid'>
                <label htmlFor='user_name'>
                  Nombre Completo<span className='text-red-600'>*</span>
                </label>
                <input type='text' name='user_name' required />
              </div>
              <div className='grid'>
                <label htmlFor='user_email'>
                  Correo electrónico<span className='text-red-600'>*</span>
                </label>
                <input type='email' name='user_email' className='w-full' required />
              </div>
            </div>
            <div className='grid'>
              <label htmlFor='affair'>
                Asunto<span className='text-red-600'>*</span>
              </label>
              <input type='text' name='affair' required />
            </div>
            <div className='grid'>
              <label htmlFor='message'>
                Mensaje<span className='text-red-600'>*</span>
              </label>
              <textarea
                rows={8}
                className='resize-none'
                name='message'
                required
              />
            </div>
            <button
              type='submit'
              className='btn_primary rounded-md font-semibold w-fit'
            >
              Enviar
            </button>
            <ToastContainer />
          </motion.form>
        </div>
      </div>
    </section>
  )
}
