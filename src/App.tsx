"use client";
import "./App.css";
import {
  CheckCircle,
  CheckFat,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";
import logo from "./assets/logo.png";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Button } from "./components/button";


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

  // Define your slides here
  const slides = [
    {
      name: "Vera Maria Garaude - Garaude escritório de advocacia",
      text: "Clientes há 7 anos, a empresa oferece assessoria completa. Após o falecimento de meu pai, foram cruciais na gestão empresarial, contábil e tributária, proporcionando redução de impostos e tranquilidade operacional.",
      class: "slide-prev",
    },
    {
      name: "Silvana Perez - Espaço Ser - Saúde, Educação e Reabilitação",
      text: "Atendimento eficiente e consultoria excelente. A empresa proporciona tranquilidade na gestão contábil, permitindo mais tempo e criatividade para investir no negócio. Recomendamos para outras empresas sem hesitação.",
      class: "slide",
    },

    {
      name: "Juliana Rodrigues - All smiles Odontologia",
      text: "Empresa idônea, profissionais competentes e atenciosos. Reestruturou a All Smiles Odontologia, elevando-nos a um novo patamar e impulsionando nossa lucratividade. Recomendo a outras empresas.",
      class: "slide-next",
    },
    // Add as many slides as you want
  ];

  const nextSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide + 1;
      if (newSlide === slides.length) {
        newSlide = 0; // Loop back to the start
      }

      return newSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide - 1;
      if (newSlide < 0) {
        newSlide = slides.length - 1; // Loop back to the end
      }
      return newSlide;
    });
  };

  // divider

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <body>
      <header id="header">
        <nav id="nav" className={`${isMenuOpen ? "active" : ""}`}>
          <img src={logo} alt="" className="logo" />

          <button id="btn-mobile" onClick={handleMenu}>
            <span id="hamburger"></span>
          </button>
          {mobile ? (
            <ul id="menu">
              <li>
                <a onClick={handleMenu} href="#hero">
                  O que é?
                </a>
              </li>
              <li>
                <a onClick={handleMenu} href="#for">
                  Para quem?
                </a>
              </li>
              <li>
                <a onClick={handleMenu} href="#prices">
                  Serviços
                </a>
              </li>
              <li>
                <a
                  onClick={handleMenu}
                  href="https://news.rentabileasy.com.br/blog/"
                >
                  Blog
                </a>
              </li>
              <li>
              <a href="https://typebot.co/quero-abrir-minha-empresa" target="_blank" >
            Quero abrir minha empresa
          </a>
          </li>
          <li>
          <a href="https://typebot.co/rentabileasy-descomplicar" target="_blank" >
            Quero descomplicar
            <br />
            minha contabilidade
          </a>
          </li>
            </ul>
          ) : (
            <ul id="menu">
              <li>
                <a href="#hero">O que é?</a>
              </li>
              <li>
                <a href="#for">Para quem?</a>
              </li>
              <li>
                <a href="#prices">Serviços</a>
              </li>
              <li>
                <a href="https://news.rentabileasy.com.br/blog/">Blog</a>
              </li>
            </ul>
          )}
          <a href="https://typebot.co/quero-abrir-minha-empresa" target="_blank" id="open">
            Faça um diagnóstico da sua empresa
          </a>
      
        </nav>
      </header>
      <section id="hero">
        <div id="hero-content">
          <div className="container">
            <div id="hero-text">
              <h1>Mais que uma contabilidade, seu</h1>
              <h1>Parceiro de Negócios</h1>
              <p>
                Tenha suas rotinas financeiras, fiscais e contábeis nas mãos de
                profissionais e tenha o acompanhamento com especialistas de
                negócios dedicados ao crescimento de sua empresa.
              </p>
          
            </div>

<form action="https://formsubmit.co/camilaribeiro.marketing@gmail.com" method="post">
<p><strong>O Rentabileasy te ajuda a descomplicar a burocracia e impulsionar seu negócio.
</strong>
<br />
<br />
Preencha os campos a seguir que entraremos em contato o mais breve possível.</p>

<input type="hidden" name="_captcha" value="false"></input>
<input type="text" name="_honey" style={{display: "none"}}></input>
<input type="hidden" name="_template" value="table"></input>
<label htmlFor="">Nome completo*</label>
            <input type="text" name="Name" id="Name" required />
            <label htmlFor="">Email*</label>
            <input type="email" name="Email" id="Email"  required/>
          
            <label htmlFor="Number">Whatsapp*</label>
            <input type="number"  name="Telefone" id="Number" required/>
            <label htmlFor="Empresa">Empresa*</label>
            <input type="text" id="Empresa" required/>
            <button type="submit" id="transform">Quero lucrar mais</button>
</form>
          </div>
        </div>
      </section>

      <div className="blue"></div>
      <div className="presentation">
      <iframe  
      src="https://www.youtube.com/embed/eHje2PAXj8c" 
      title="Sobre a rentabileasy"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

      <div id="offers">
        <div className="icon-text">
          <CheckCircle className="icon-check" weight="fill" color="#40ff76" />
          <p>Garanta o melhor regime tributário e fiscal para a sua empresa</p>
          <img
            alt=""
            width={150}
          />
        </div>
        <div className="icon-text">
          <CheckCircle className="icon-check" weight="fill" color="#40ff76" />
          <p>Controles e processos que evitam desperdicios</p>
        
        </div>
        <div className="icon-text">
          <CheckCircle className="icon-check" weight="fill" color="#40ff76" />
          <p>Visão completa de todos os indicadores de resultados</p>
        
        </div>
        <div className="icon-text">
          <CheckCircle className="icon-check" weight="fill" color="#40ff76" />
          <p>Atendimento 100% humanizado, lado a lado com você</p>
        
        </div>
      </div>

      <section id="services">
        <div id="services-content">
          <div id="service-icon-text">
            <h1>Oferecemos além da contabilidade:</h1>
            <div className="service-icon">
              {mobile ? (
                <CheckFat className="check-service" size={35} weight="fill" />
              ) : (
                <CheckFat className="check" weight="fill" />
              )}
              <p>
                Elaboração o Plano de Negócios (Planejamento Estratégico,
                Societário, Tributário e Financeiro)
              </p>
            </div>
            <div className="divider"></div>
            <div className="service-icon">
              <CheckFat className="check-service" weight="fill" />
              <p>Estruturação e Gestão de Processos;</p>
            </div>
            <div className="divider"></div>

            <div className="service-icon">
              {mobile ? (
                <CheckFat className="check-service" size={35} weight="fill" />
              ) : (
                <CheckFat className="check" weight="fill" />
              )}
              <p>
                Atuação com estratégias financeiras para geração de recursos
                através de incentivos fiscais;
              </p>
            </div>
            <div className="divider"></div>

            <div className="service-icon">
              <CheckFat className="check-service" weight="fill" />
              <p>Gestão financeira e fiscal</p>
            </div>
            <div className="divider"></div>

            <div className="service-icon">
              <CheckFat className="check-service" weight="fill" />
              <p>Tudo isso em paralelo as rotinas contábeis</p>
            </div>
          </div>

          <img
            src="https://news.rentabileasy.com.br/wp-content/uploads/2023/10/img33-1024x1024.png"
            alt=""
          />
        </div>
      </section>

      <section id="jobs">
        <div id="jobs-text">
          <div className="div-text">
          
            <h1>
              {" "}
              Será que pra quem não sabe para onde ir, qualquer caminho serve,
              mesmo?
            </h1>
            
          </div>
          <p>
            Estudos mostram que a falta de planejamento foi o principal motivo
            para 95% de empreendedores que fecharam as portas nos últimos anos.
            Entenda por que é crucial ter a Rentabileasy como seu parceiro de
            negócios:
          </p>
        </div>
        {mobile ? (
          <img
            src="https://news.rentabileasy.com.br/wp-content/uploads/2023/12/Group-4-1.png"
            alt=""
            className="compare-mob"
          />
        ) : (
          <img
            src="https://news.rentabileasy.com.br/wp-content/uploads/2023/12/comparar-3.png"
            alt=""
          />
        )}
      </section>

      <section id="circles">
        <div id="title-descri">
          <h1>
            Evolua de uma contabilidade, para uma{" "}
            <span>parceira de negócios</span>
          </h1>
          <p>Experts, contadores e administradores à sua disposição:</p>
        </div>
        <div id="circle-text">
          <div className="circle-title">
            <img
              src="https://news.rentabileasy.com.br/wp-content/uploads/elementor/thumbs/Bolota01-qf3x64h5lrbzyrih3gcq9kocdyn9npdu2t8k1gc9fc.png"
              alt=""
            />
            <h1>Não são robôs, são experts.</h1>
            <div className="card">
              <p>
                Profissionais com visão de sócios e donos, para fortalecer seu
                negócio e seus planos futuros;
              </p>
            </div>
          </div>
          <div className="circle-title">
            <img
              src="https://news.rentabileasy.com.br/wp-content/uploads/elementor/thumbs/bolota04-qf3x6bzv4fmajn7jvjlqtis151m7da7orugfvo141k.png"
              alt=""
            />
            <h1>Parcerias e Novos Negócios.</h1>
            <div className="card">
              <p>
                Traremos ainda sugestões de inovação, ferramentas parceiras,
                tecnologias, melhorias, como: Plano de Saúde, Contas digitais,
                Consultoria, Certificado digital, etc
              </p>
            </div>
          </div>
          <div className="circle-title">
            <img
              src="https://news.rentabileasy.com.br/wp-content/uploads/elementor/thumbs/bolota02-qf3x67ao69fuxledmzklz1yq649dasp13770ha82wo.png"
              alt=""
            />
            <h1>Consultoria Estratégica.</h1>
            <div className="card">
              <p>
                Estamos há mais de 40 anos rentabilizando negócios, dando total
                segurança e suporte para empreendedores fazerem a diferença.
              </p>
            </div>
          </div>
        </div>

        <a href="#form">Quero essa equipe comigo!</a>
      </section>

      <section id="prices">
        <h1>
          O melhor custo-benefício para você estruturar sua empresa a curto,
          médio e longo prazo:
        </h1>
        <div id="price-cards">
          <div className="price">
            <h2>Para ME</h2>
            <div className="divider"></div>
            <div className="card-text">
              <h1>A partir de:</h1>
              <h2>R$ 299,00</h2>
              <Button href="#footer-content">Quero contratar</Button>
            </div>
          </div>
          <div className="price">
            <h2>Para EPP</h2>
            <div className="divider"></div>
            <div className="card-text">
              <h1>A partir de:</h1>
              <h2>R$ 599,00</h2>
              <Button href="#footer-content">Quero contratar</Button>
            </div>
          </div>
          <div className="price">
            <h2>Gestão completa</h2>
            <div className="divider"></div>
            <div className="card-text">
              <p>
                Acesse um orçamento personalizado sob medida com diagnóstico
                gratuito
              </p>
              <Button href="#footer-content">Quero contratar</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="for">
        <h1>Empreendedores que mais rentabilizam com a gente:</h1>
        <div id="for-icons">
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_construcao-1.svg"
              alt=""
            />
            <p>Construção civil</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_coworking.svg"
              alt=""
            />
            <p>Centro de negócios (Coworkings)</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_tech.svg"
              alt=""
            />
            <p>Empresas de Tecnologia</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_franquia.svg"
              alt=""
            />
            <p>Franquias</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_holding-1.svg"
              alt=""
            />
            <p>Holdings</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_hoteis-1.svg"
              alt=""
            />
            <p>Hotéis e Pousadas</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_PJ-1.svg"
              alt=""
            />
            <p>Prestadores de Serviços</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_saude.svg"
              alt=""
            />
            <p>Profissionais e Clínicas da Área da Saúde</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_advogado.svg"
              alt=""
            />
            <p>Sociedades de Advogados</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://news.rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_startup-1.svg"
              alt=""
            />
            <p>Startups</p>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h1>Nossos clientes vendem por nós: </h1>
        <div className="slide-transition">
          <button onClick={prevSlide}>
            <ChevronLeft />{" "}
          </button>
          <div className={`slide ${slides[currentSlide].class}`}>
            <p className="">{slides[currentSlide].text}</p>
          
            <p className=""> {slides[currentSlide].name}</p>
          </div>
          <button onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
        <div id="form-text">
            <h1>Vamos rentabilizar?</h1>
            <a href="https://typebot.co/fale-com-especialista" target="_blank">Fale com um especialista</a>
          </div>
      </section>

      <footer>
        <div id="footer-content">
          <div id="footer-text">
            <p>Av. Yojiro Takaoka, 4384</p>
            <p>Santana de parnaíba/SP</p>
            <p>Alphaville</p>
            <p>CEP 06541-038</p>
          </div>
          <div id="footer-social">
            <div className="social-icon">
              <Phone size={20} color="#392f6f" />
              <p>+55 (11) 4195 - 6006</p>
            </div>
            <a href="https://www.instagram.com/rentabileasy_/" target="_blank" className="social-icon">
              <InstagramLogo color="#3eb161" size={30} />
              <p>Segue lá</p>
            </a>
            <a href="" className="news">
              Assine nossa newsletter aqui!
            </a>
          </div>
          <div id="footer-product">
            <p>A Rentabileasy é um produto</p>
            <img
              src="https://news.rentabileasy.com.br/wp-content/uploads/elementor/thumbs/AbileConsultingGroup_Logo_Negatva-ppx2nc5pl1bfega4cbhs3rmdwy8s2jebp3h72mfbf0.png"
              alt=""
              width={300}
            />
          </div>
        </div>
        <div id="footer-by">
          <p>&copy; Copyright 2023 Abile • Todos os direitos reservados</p>
          <a href="https://crowd.app.br/" target="_blank" className="by-crowd">
            <p>Desenvolvido por</p>
            <img
              src="http://news.rentabileasy.com.br/wp-content/uploads/2023/12/logo.3942e0c5ddc8cb64ca03f061264c9d15-1.png"
              alt=""
              width={150}
            />
          </a>
        </div>
      </footer>
    </body>
  );
}

export default App;
 