import React, { Component } from "react";

class NutritionalBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <div className="container">
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
        <section className="image-section" />
        <div className="col-lg-12 col-md-12 col-sm-12 post-title-block">
          <h1 className="text-center">Blog Nutricional</h1>
          <ul className="list-inline text-center">
            <li>Un proyecto de TecHeart</li>
          </ul>
        </div>
        <section className="details-card">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="https://placeimg.com/380/230/nature" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3 className="post-title">Comienza a cuidar tu salud con Vielyf</h3>
                    <p>
                      Vielyf no es solo una plataforma para conectar nutricionistas con clientes, es 
                      ademas una herramienta para mantenerte al dia con el progreso de tu dieta y darte
                      consejos sobre como cuidar tu salur 
                    </p>

                    <a href="#" className="btn-card">
                      Ver mas
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="https://picsum.photos/380/230" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3>El primer paso para iniciar el cambio</h3>
                    <p>
                      Cualquiera que sea tu meta, ya sea perder peso o tener un estilo
                      de vida saludable, Vielyf puede ayudarte, encontrando profesionistas
                      quienes te guiaran en el proceso
                    </p>
                    <a href="#" className="btn-card">
                      Ver mas
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-content">
                  <div className="card-img">
                    <img src="https://placeimg.com/380/230/tech" alt="" />
                  </div>
                  <div className="card-desc">
                    <h3>Las moléculas de la alimentación y la nutrición.</h3>
                    <p>
                    La especialista en nutrición Dra. Dena Herman presentó UCLA
                    estudiantes a las moléculas de la alimentación y la nutrición como parte de
                    nuestro curso de Ciencia y Alimentación 2013. Aprendimos todo sobre
                    nutrientes esenciales, fueron introducidos a la emocionante nueva
                    mundo de los fitonutrientes, un ...
                    </p>
                    <a href="#" className="btn-card">
                      Ver mas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <h5 className="section-title h1">Nuestro equipo</h5>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                onTouchStart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t1.0-9/19225717_2291614677730958_3115237110884134758_n.jpg?_nc_cat=108&_nc_ht=scontent.ftij1-1.fna&oh=04e8ae7e5916adbe5f906ad9c0affa03&oe=5D83315C"
                            alt="card image"
                          />
                        </p>
                        <h4 className="card-title">Emmanuel Moran</h4>
                        <p className="card-text">
                          Desarrollador web y Scrum Master para el proyecto VieLyf<br /> Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">UABC</h4>
                        <p className="card-text">
                          Desarrollador web y Scrum Master para el proyecto VieLyf{" "}
                          <br />
                          Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t31.0-8/904030_619668324792847_1382867971_o.jpg?_nc_cat=100&_nc_ht=scontent.ftij1-1.fna&oh=927df4b0c0f04e8da81b8a3eb1e526e9&oe=5D9BFFE3"
                            alt="card image"
                          />
                        </p>

                        <h4 className="card-title">Dante Lopez</h4>
                        <p className="card-text">
                          Desarrollador web para el proyecto VieLyf<br /> Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">UABC</h4>
                        <p className="card-text">
                        Desarrollador web para el proyecto VieLyf <br />
                        Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              classname="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t1.0-9/61606102_2316386501934682_6290527737308250112_o.jpg?_nc_cat=111&_nc_ht=scontent.ftij1-1.fna&oh=daa209b3802dbdbf3ff51f2516483c22&oe=5D917A94"
                            alt="card image"
                          />
                        </p>

                        <h4 className="card-title">Angelica Avila</h4>
                        <p className="card-text">
                            Product Owner para el proyecto VieLyf <br /> Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">UABC</h4>
                        <p className="card-text">
                        Product Owner para el proyecto VieLyf
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                onTouchStart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t31.0-8/30168152_993515114137451_6257868123585292991_o.jpg?_nc_cat=106&_nc_ht=scontent.ftij1-1.fna&oh=80a014079e71a6ece105e748d0794eaa&oe=5D89127E"
                            alt="card image"
                          />
                        </p>

                        <h4 className="card-title">Berenice Flores</h4>
                        <p className="card-text">
                          QA para el proyecto VieLyf <br /> Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">UABC</h4>
                        <p className="card-text">
                          Web developer for Vielyf proyect <br /> Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              targetName="_blank"
                              href="#"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://scontent.ftij1-1.fna.fbcdn.net/v/t1.0-9/1660440_1015012668565535_1592295409280480372_n.jpg?_nc_cat=101&_nc_ht=scontent.ftij1-1.fna&oh=0698be122e960dc0ad382f55754dba21&oe=5D8D44A2"
                            alt="card image"
                          />
                        </p>

                        <h4 className="card-title">Yair Castrejon</h4>
                        <p className="card-text">
                          Desarrollador web para el proyecto VieLyf
                          <br /> Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">UABC</h4>
                        <p className="card-text">
                        Desarrollador web para el proyecto VieLyf
                          <br /> Estudiante de Ingeniería en computacion en UABC
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NutritionalBlog;
