import React,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function Residencia() {
  useEffect(() => {
    document.title = 'IADEV - Residencia Profesional'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
      <header>
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Residencia Profesional</span>
      </Fade>
      </div>
      </div>
      <div className='mx-2 sm:mx-10 lg:mx-20 2xl:mx-40'>
      <h4 className='ml-2 font-bold my-4 text-lg  2xl:text-2xl'>Acerca del trámite</h4>
<p className='mx-2 mb-4 2xl:text-xl'>Es una asignatura del plan de estudios de la Licenciatura cursada por el alumno que complementa su formación profesional en el Tecnológico y consiste en la aplicación de los conocimientos en el campo laboral al desarrollar un proyecto en alguna empresa.</p>
<h5 className='ml-2 font-bold my-2 2xl:text-2xl'>Usuarios:</h5>
        <p className='mx-2 mb-4  2xl:text-xl'> Alumnos que han acreditado el 80% del total de créditos de la carrera, que estén reinscritos conforme al reglamento de alumnos y que estén autorizados conforme el FO-TESJo-30.</p>
        <h5 className='ml-2 font-bold my-2 2xl:text-2xl'>Nota de advertencia</h5>
        <ul className='mx-4 mb-4 list-disc  2xl:text-xl'>
          <li className='mx-2'>Una vez dada de alta la Residencia Profesional ya no se puede dar de baja por ningún motivo y solo se puede cursar una sola vez.</li>
          <li className='mx-2'>Se tiene que cumplir un periodo de 4 meses y cubrir 500 horas.</li>
          <li className='mx-2'>Es necesario desarrollar un proyecto acorde al perfil del alumno o de la alumna por el que será evaluado.</li>
        </ul>
        <h2 className='ml-2 font-bold my-2 2xl:text-2xl'>Documentos a obtener</h2>
        <p className='mx-2  2xl:text-xl'>Carta de Liberación de la Residencia Profesional.</p>
        <p className='mx-2 2xl:text-xl'>Forma parte del certificado de estudios.</p>
        
        <h5 className='ml-2 font-bold my-2 2xl:text-2xl'>Vigencia</h5>
        <p className='mx-2 2xl:text-xl'>Como es una asignatura más del plan de estudios tiene validez indefinida una vez que ha sido acreditada.</p>

        <h4 className='mx-2 font-bold mt-4 mb-4 2xl:text-2xl' >Documentación necesaria:</h4>
        <p className='mx-2 my-2 font-semibold 2xl:text-xl'>¿Qué documentos requieres para la autorización y alta de la residencia profesional?</p>
      <ol className='mx-4 mb-4 list-decimal  2xl:text-xl'>
        <li className='mx-2 my-2'>FO-TESJo-30 solicitud de reinscripción autorizada por el Jefe de División.</li>
        <li className='mx-2 my-2'>Oficio de aceptación indicando Nombre, número de control y carrera del alumno, nombre del proyecto a desarrollar, nombre del asesor externo, fecha de inicio, fecha de término y total de horas.</li>
        <li className='mx-2 my-2'>FO-TESJo-135.</li>
      </ol>
      <p className='mx-2 my-2 font-semibold 2xl:text-xl'>¿Qué documentos requieres durante el Desarrollo?</p>
      <ol className='mx-4 mb-4 list-decimal  2xl:text-xl'>
        <li className='mx-2 my-2'>FO-TESJo-64 evaluación parcial de los asesores de Residencia Profesional.</li>
        <li className='mx-2 my-2'>FO-TESJo-67 por una sola ocasión a partir del tercer mes de Residencia Profesional.</li>
      </ol>
      <p className='mx-2 my-2 font-semibold  2xl:text-xl'>¿Qué documentos requieres para la liberación?</p>
      <ol className='mx-4 mb-4 list-decimal 2xl:text-xl'>
        <li className='mx-2'> Oficio de terminación indicando los mismos datos que la carta de aceptación en hoja membretada.</li>
      </ol>
      <div>
      <h6 className='ml-2 font-bold my-2 text-md 2xl:text-2xl'>Costos</h6>
      <p className='mx-2  2xl:text-xl'>El trámite para el alta y liberación de la Residencia Profesional es completamente gratuito.</p>
      <h6 className='ml-2 font-bold my-2 text-md 2xl:text-2xl'>Duración:</h6>
      <p className='mx-2 mb-3  2xl:text-xl'>El periodo de alta es variable de acuerdo al semestre correspondiente, estas fechas son establecidas por la Subdirección de Servicios Escolares en coordinación con el Departamento de Servicio Social y Residencia Profesional, con base en el calendario escolar vigente y son difundidas de forma directa con los alumnos o mediante anuncios, generalmente son los primeros días al inicio de cada semestre. El alumno deberá cubrir como mínimo 500 horas durante un lapso de 4 meses.</p>
    </div>
    <span className='mx-2 font-bold my-4 2xl:text-xl'>Lugar</span>
    <p className='mx-2 my-2  2xl:text-xl'>Tecnológico de Estudios Superiores de Jocotitlán.</p>
    <span className='mx-2 font-bold my-4 2xl:text-xl'>Oficinas</span>
    <p className='mx-2  2xl:text-xl  my-2'>Edificio "B" Departamento de Servicio Social y Residencia Profesional.</p>
    <span className='mx-2 font-bold my-4 py-4 2xl:text-xl'>Horario de atención</span>
    <p className='mx-2 mb-4  2xl:text-xl my-2'>Lunes a Viernes de 9:00 a 18:00 horas.</p>
    <div className='flex flex-wrap mb-8'>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/Estudiantes/Servicos%20Escolares/Servicio%20Social%20y%20Residencia%20Profesional/FO-TESJO-064.doc" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>FO-TESJO-064</a>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/2_FO-TESJo-067.doc" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>FO-TESJO-067</a>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/3_FO-TESJo-135.doc" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>FO-TESJO-135</a>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/4_Lineamientos.pdf" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>Lineamientos</a>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/5_IT-TESJo-26(1).docx" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>IT-TESJo-26</a>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/6_Carta%20de%20aceptacio%CC%81n%20de%20RP.docx" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>Oficio de Aceptación</a>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/7_CARTA%20DE%20LIBERACIO%CC%81N%20RP.doc" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>Carta de Liberación</a>
      <a href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/8_Portada%20del%20proyecto%20de%20Residencia%20Profesional.docx" target='_blank' className='text-blue-600 border-b border-blue-800 m-4 2xl:text-xl'>Portada de Proyecto de Residencia Profesional</a>
    </div>
      </div>
      <footer>
      <Footer/>
    </footer>
      </div>
  )
}

export default Residencia;