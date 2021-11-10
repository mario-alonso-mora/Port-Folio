import React from "react";
import "./Page.css";
import javascript from "../../image/javascript1.png";
import node from "../../image/node.png";
import react from "../../image/react.png";
import angular from "../../image/angular.png";
import html from "../../image/html.png";
import mysql from "../../image/mysql.jpg";
import mongodb from "../../image/mongodb.jpg";
import css_blog from "../../image/css_blog.png";
import sass from "../../image/sass.jpg";
import php from "../../image/php.png";
import symfony from "../../image/symfony.png";
import docker from "../../image/docker.png";
import java from "../../image/java.jpg";
import scrum from "../../image/scrum.png";
import proyect1 from "../../image/proyect1.jpg";
import proyect2 from "../../image/proyect2.jpg";
import proyect3 from "../../image/proyect3.jpg";
import proyect4 from "../../image/proyect4.jpg";

const Page = () => {
  return (
    <div className="page">
      <div className="pageHeader" id="inicio">
        <div>
          <h1 className="pheaderTitle">FULLSTACK DEVELOPER</h1>
          <p className="pheaderText">
            Mi nombre es Mario Alonso Mora Soy web Full stack developer y Java
            developer mi pasion es la programacion y Desde mi infancia he estado
            inmerso en el mundo del software y el hardware,amante de las nuevas
            tecnologias y autodidacta de mi propia curiosidad por aprender cosas
            nuevas y enfrentarme a nuevos retos que me hagan crecer como
            profesional y como persona en todos los ambitos.
          </p>
          <a
            className="btn"
            href="https://github.com/mario-alonso-mora/mario-alonso-mora/blob/master/README.md"
          >
            SABER MÁS
          </a>
        </div>
      </div>
      <div className="body" id="body">
        <div className="bodyOne">
          <h1 className="bOneTitle"> EN BUSCA DE UN SUEÑO</h1>
          <h2>
            <br></br>
            En mi carrera como Full Stack Developer aspiro a mejorar mis
            capacidades y ofrecer mi talento y mi dedicacion al mundo empresarial soy
            una persona responsable y constante.
            <br></br>
          </h2>
        </div>
        <div className="bodyTwo">
          <h1 className="bTwoTitle">MIS HABILIDADES</h1>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={javascript} alt="" />
            </div>
            <div>
              <h1>Javascript</h1>
              <h2>lenguaje de programación</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={react} alt="" />
            </div>
            <div>
              <h1>React</h1>
              <h2>Framework de Javascript (frontend)</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={angular} alt="" />
            </div>
            <div>
              <h1>Angular</h1>
              <h2>Framework de Javascript (frontend)</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={node} alt="" />
            </div>
            <div>
              <h1>NodeJs</h1>
              <h2>
                entorno multiplataforma para la capa en el lado del servidor
                basado en JavaScript.(backend)
              </h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={html} alt="" />
            </div>
            <div>
              <h1>Html5</h1>
              <h2>lenguaje de marcado de hipertexto</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={css_blog} alt="" />
            </div>
            <div>
              <h1>CSS3</h1>
              <h2>Hoja de estilos en cascada</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={sass} alt="" />
            </div>
            <div>
              <h1>Sass</h1>
              <h2>es un procesador CSS</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={mysql} alt="" />
            </div>
            <div>
              <h1>Mysql</h1>
              <h2>Base de datos (relacionales)</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={mongodb} alt="" />
            </div>
            <div>
              <h1>MongoDB</h1>
              <h2>Base de datos ( no relacional)</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={php} alt="" />
            </div>
            <div>
              <h1>PHP</h1>
              <h2>Lenguaje de programacion</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={symfony} alt="" />
            </div>
            <div>
              <h1>Symfony</h1>
              <h2>framework de php </h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={docker} alt="" />
            </div>
            <div>
              <h1>Docker</h1>
              <h2>Herramienta Devops</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={java} alt="" />
            </div>
            <div>
              <h1>Java</h1>
              <h2>Lenguaje de programacion</h2>
            </div>
          </div>
          <div className="bTwoSkill">
            <div className="bTskillImage">
              <img src={scrum} alt="" />
            </div>
            <div>
              <h1>Scrum</h1>
              <h2>Metodología Agíl</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="pageFooter" id="footer">
        <h1>PROYECTOS</h1>
        <div className="gallery">
          <div className="columnOne">
            <a href="https://github.com/mario-alonso-mora/Game-of-Thrones-react">
              <img src={proyect1} alt="" />
            </a>
            <a href="https://github.com/mario-alonso-mora/Amiibos-React">
              <img src={proyect2} alt="" />
            </a>
          </div>
          <div className="columnTwo">
            <a href="https://github.com/mario-alonso-mora/React-Animes">
              <img src={proyect3} alt="" />
            </a>
            <a href="https://github.com/mario-alonso-mora/Casino-BlackJack">
              <img src={proyect4} alt="" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
