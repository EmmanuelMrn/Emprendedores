import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

class Home extends Component {
  constructor() {
    super();

    this.state = {
    };

  }

  render() {
    const {

    } = this.state;

    let Button;
    if (localStorage.hasOwnProperty('the_main_app')) {
      Button = <div className="img-bg">
                 <a className="btn btn-success btn-lg" id="BtnHome"href="/vistaprincipal">Inicia aqui</a>
               </div>
    } else {
      Button = <div className="img-bg">
                 <a className="btn btn-success btn-lg" id="BtnHome"href="/signup">Inicia aqui</a>
               </div> 
    }

    return(
      <div>
        {Button}
        <div>
        <form>
        <div>
          <h3>ACERCA DE VIELYF</h3>
          <hr width= "50%"/>
          <div className="container Content-containers">
            <div className="col-md-8 offset-md-2">
              <p align="justify">
              Vielyf le ofrece la oportunidad de cambiar su vida y la de los demás a través de herramientas
              para conectar un nutricionista con sus clientes, si usted es un nutricionista y desea administrar mejor
              comunicación con sus clientes o está buscando cambiar su estilo de vida con la ayuda de
              Un profesional, le ofrecemos lo mejor para cumplir sus objetivos.
              </p>
            </div>
          </div>
        </div>
          <div className="back-color">
          <div className="container Title-containers">
          <h3>Como usuario nutricionista</h3>
          <hr width= "50%"/>
          </div>
          <div className="container Content-containers">
          <div className = "row justify-content-around">
            <div className = "col-4 text-center">
              <img src="https://image.flaticon.com/icons/svg/944/944034.svg" width= "80px" height="80px" className="img-thumbnaill"/>
              <h2>Conectate con tus clientes</h2>
              <p align="justify">
              Conéctese con todos sus pacientes de manera eficiente y desde cualquier lugar, con la ayuda de esta plataforma, puede administrar sus consultas y los archivos de sus pacientes.</p>
            </div>
            <div className = "col-4 text-center">
            <img src="https://image.flaticon.com/icons/svg/79/79649.svg" width= "80px" height="80px" className="img-thumbnaill"/>
              <h2>Organiza tu tiempo</h2>
              <p align="justify">
              Con las opciones de agenda puede organizar sus citas de forma rápida y eficiente.
              </p>
            </div>
            <div className = "col-4 text-center">
            <img src="https://image.flaticon.com/icons/svg/79/79575.svg" width= "80px" height="80px" className="img-thumbnaill"/>
              <h2>Adquiere nuevos clientes</h2>
              <p align="justify">
              Con nuestro catálogo de nutricionistas, usted puede ser encontrado por clientes potenciales que están buscando cambiar sus vidas.
              </p>
            </div>
          </div>
          </div>
          </div>
          <div className="container Title-containers">
          <h3>Como usuario normal</h3>
          <hr width= "50%"/>
          </div>
          <div className="container Content-containers">
          <div className = "row justify-content-around">
            <div className = "col-5  text-center">
            <img src="https://image.flaticon.com/icons/svg/858/858181.svg" width= "80px" height="80px" className="img-thumbnailll"/>
              <h2>Checa tu progreso</h2>
              <p align="justify">
              Observe su progreso de manera fácil y comprensible con la ayuda de los gráficos de progreso que comparan sus cambios en cada análisis que su nutricionista registra.</p>
            </div>
            <div className = "col-5  text-center">
            <img src="https://image.flaticon.com/icons/svg/838/838668.svg" width= "80px" height="80px" className="img-thumbnailll"/>
              <h2>Encuentra a tu nutricionista</h2>
              <p align="justify">
              Comience un nuevo y mejor cambio en su vida de la manera más amigable posible, aquí puede encontrar
              Nutriólogos que te ayudan a cumplir tus objetivos.
              </p>
            </div>
            </div>
          </div>
          <div className="back-color ">
          <div className="container Title-containers">
            <h3>Catalogo de nutricionistas</h3>
            <hr width= "50%"/>
          </div>
          <div className="container Content-containers">
            <div className="col-md-8 offset-md-2">
              <p align="justify">
              Encuentra a tu nutricionista ideal en nuestra sección del catálogo de nutriologos.
              </p>
            </div>
            <br/>
            <div className = "row justify-content-around">
              <div className = "col-3 text-center">
                <img src="https://image.flaticon.com/icons/svg/145/145849.svg" width= "180px" height="180px" className="img-thumbnaill"/>
              </div>
              <div className = "col-3 text-center">
                <img src="https://image.flaticon.com/icons/svg/145/145848.svg" width= "180px" height="180px" className="img-thumbnaill"/>
              </div>
              <div className = "col-3 text-center">
                <img src="https://image.flaticon.com/icons/svg/145/145843.svg" width= "180px" height="180px" className="img-thumbnaill"/>
              </div>
            </div>
            <a className="btn btn-danger" id="BtnGo"href="/catalogueNutriologist">Ir a catalogo</a>
          </div>

            <div className="img-bg3">
            <div className="container TitleBlog-containers">
              <h3 style={{color: "rgba(232, 246, 247, 0.863)"}}>Blog Saludable</h3>
              <hr width= "50%"/>
            </div>
            <div className="container">
              <div className="col-md-8 offset-md-2">
                <font color="White" size="4">
                  <p align="justify">
                  Encuentra las noticias más relevantes para tu nuevo estilo de vida más saludable.
                  Ver tendencias y recomendaciones diariamente.
                  </p>
                </font>
              </div>
              <a className="btn btn-danger" id="BtnGo" href="/nutritionalBlog">Ir a Blog</a>
            </div>
          </div> 

          
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Home;
