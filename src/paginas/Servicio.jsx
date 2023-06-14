import React,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function Servicio() {
  useEffect(() => {
    document.title = 'IADEV - Servicio Social'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
     <header >
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Servicio Social</span>
      </Fade>
      </div>
     
      </div>
      <div>
        <h4 className='ml-2 font-bold my-4 text-lg'>Acerca del trámite</h4>

        <span className='ml-2 font-bold my-2'>Descripción:</span>
        <p className='mx-2 mb-4'>Es un conjunto de actividades de carácter temporal y obligatorio que prestan los estudiantes, donde aplican los conocimientos científicos, técnicos y humanísticos adquiridos en su formación.</p>
        <h5 className='ml-2 font-bold my-2'>Nota de advertencia</h5>
        <ul className='mx-4 mb-4 list-disc'>
          <li className='mx-2'>Haber acreditado el 50% del total de créditos de tu carrera para iniciar el tramite.</li>
          <li className='mx-2'>Cumplir con un periodo de prestación de mínimo de 6 meses y máximo 2 años, acumulando 500 horas.</li>
          <li className='mx-2'>Es un requisito indispensable para liberar tu constancia de Servicio Social para asignación de Residencia Profesional, el trámite de titulación y de la Cédula Profesional.</li>
          <li className='mx-2'>Tienes que realizar primero tu servicio social para poder realizar la Residencia Profesional.</li>
        </ul>
        <h5 className='ml-2 font-bold my-2'>Usuarios:</h5>
        <p className='mx-2 mb-4'> Alumnos que hayan acreditado el 50% del total de Créditos de la Carrera.</p>
      <h6 className='ml-2 font-bold my-2'>Documentos que se obtienen</h6>
      <p className='mx-2 mb-4'>Acreditación y/o constancia de liberación de Servicio Social.
      </p>
      <h6  className='ml-2 font-bold my-2'>Vigencia</h6>
      <span  className='mx-2 mb-4'>2 años</span>

    <div>
      <h1  className='ml-2 font-bold my-2 text-lg'>Documentación necesaria</h1>
      <p className='mx-2'>¿Qué documentos requieres para el trámite de alta en institución pública?</p>
      <ol className='mx-4 mb-4 list-decimal'>
        <li className='mx-2'>Solicitud Registro/Autorización. <a className='text-blue-600 border-b border-blue-800' href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/SOLICITUD%20REGISTRO-AUTORIZACION.xls">Registro de autorización</a></li>
        <li className='mx-2'>Seguro Facultativo o seguro médico.</li>
        <li className='mx-2'>Carta de presentación - aceptación emitida en el Departamento de Servicio Social y Residencia Profesional.</li>
      </ol>
    </div>
    <div>
      <h2 className='ml-2 font-bold my-2 text-lg'>Documentos requeridos para la liberación</h2>
      <ol className='mx-4 mb-4 list-decimal'>
        <li className='mx-2'>Informes trimestrales</li>
        <li className='mx-2'>Informe global <a className='text-blue-600 border-b border-blue-800'  href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/serviciosocial%20y%20residencia/SS/3_INFORME%20GLOBAL%20DE%20SERVICIO%20SOCIAL%20para%20imprimir.pdf" target='_blank'>Informe global</a> </li>
        <li className='mx-2'>Carta de Término y Evaluación de Servicio Social. <a className='text-blue-600 border-b border-blue-800' href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/CARTA%20DE%20TERMINO%20Y%20EVALUACIO%CC%81N%20DE%20SS.doc" target='_blank'>Formato de Carta de Término y Evaluación de Servicio Social</a></li>
      </ol>
      <h4 className='mx-2 font-semibold mb-4' >¿Qué documentos requieres para liberar tu servicio social conforme al Artículo 21 del Servicio Social y 91 del Reglamento de la Ley Reglamentaria del Artículo 5 Constitucional?</h4>
      <ol className='mx-4 mb-4 list-decimal'>
        <li className='mx-2'>Informe de actividades elaborado por el interesado, mínimo una cuartilla, avalado por el jefe inmediato superior, en papel membretado, firma y sello.</li>
        <li className='mx-2'>Copia del último talón de cheque y/o comprobante de ingresos.</li>
        <li className='mx-2'>Constancia de antigüedad actualizada.</li>
        <li className='mx-2'>Solicitud Registro/Autorización ( Para realizar el Servicio Social en Empresa, Escuela Privada, Fundación Asociación Civil, etc.)</li>
      </ol>
      <h5  className='mx-2 font-semibold mb-4'>¿Qué documentos adicional requieres para obtener la autorización en Sector Privado?</h5>
      <ol className='mx-4 mb-4 list-decimal'>
        <li className='mx-2'>Una Solicitud de incorporación en hoja membretada. <a className='text-blue-600 border-b border-blue-800' href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/Estudiantes/Servicos%20Escolares/Servicio%20Social%20y%20Residencia%20Profesional/SOLICITUD%20DE%20INCORPORACION.doc" target='_blank'>Solicitud de Incorporación</a></li>
      
      <ul className='mx-4 mb-4 list-disc'>
        <li className='mx-2'>Dirigida a la Mtra. Nuria Elda Olascoaga Rosas. Directora de Apoyo a la Eduación de la Secretaría de Educación del Gobierno del Estado de México.</li>
        <li className='mx-2'>Denominación y giro de la Empresa.</li>
        <li className='mx-2'>Justificación, alcance e impacto del proyecto que se va a realizar.</li>
        <li className='mx-2'>Objetivos y Actividades a desarrollar.</li>
        <li className='mx-2'>Lugar de realización, duración y horarios.</li>
        <li className='mx-2'>Nombre de los participantes, carrera y escuela de procedencia.</li>
        <li className='mx-2'>Coordinador (Jefe Inmediato).</li>
        <li className='mx-2'>Apoyo que la Empresa te otorgara. (indispensable).</li>
      </ul>
      <li className='mx-2'>Anexo Técnico firmado y sellado por la empresa (original, procurar que las fechas de alta y término sean en días hábiles. El periodo mínimo es de 6 meses). <a className='text-blue-600 border-b border-blue-800' href="https://tesjo.edomex.gob.mx/sites/tesjo.edomex.gob.mx/files/files/ANEXO%20TECNICO%20SECTOR%20SOCIAL%20Y%20PRIVADO.xls" target='_blank'>Anexo Técnico Social y Privado
</a></li>
      </ol>
    </div>
    <div>
      <h6 className='ml-2 font-bold my-2 text-md'>Costos</h6>
      <p className='mx-2'>El trámite para el alta y liberación del Servicio Social es completamente gratuito.</p>
      <h6 className='ml-2 font-bold my-2 text-md'>Duración y fechas para realizarlo:</h6>
      <p className='mx-2 mb-3'>El tiempo para dar de alta el Servicio Social es de 15 días a partir de que se entrega la documentación necesaria y de un mes aproximadamene para la entrega de la constancia del alumno.</p>
      <p className='mx-2 mb-8'>La evaluación tiene como objetivo medir el nivel de desempeño alcanzado por parte del prestador del Servicio Social en las actividades realizadas.</p>
    </div>
    <span className='mx-2 font-bold my-2'>Lugar</span>
    <p className='mx-2'>Tecnológico de Estudios Superiores de Jocotitlán.</p>
    <span className='mx-2 font-bold my-2'>Oficinas</span>
    <p className='mx-2'>Edificio "B" Departamento de Servicio Social y Residencia Profesional.</p>
    <span className='mx-2 font-bold my-2'>Horario de atención</span>
    <p className='mx-2 mb-8'>Lunes a Viernes de 9:00 a 18:00 horas.</p>
      </div>
      <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default Servicio;
