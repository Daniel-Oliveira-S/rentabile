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
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define your slides here
  const slides = [
    {
      name: "Vera Maria Garaude - Garaude escritório de advocacia",
      img: "https://rentabileasy.com.br/wp-content/uploads/2022/06/garaude.webp",
      text: "Toda a minha familia é cliente. Com o falecimento do meu pai, nos ajudaram muito com toda a assessoria que nós precisavamos em nossas empresas e também no meu escritório. Foram muito prestativos, atenciosos e competentes. Há aproximadamente 7 anos, contamos com os serviços de contabilidade, assessoria tributária, empresarial, impostos de renda (PJ e PF), entre outros. E os melhores benefícios foram a redução de impostos, organização operacional e tranquilidade por saber que estamos trabalhando com uma empresa séria e competente",
      class: "slide-prev",
    },
    {
      name: "Silvana Perez - Espaço Ser - Saúde, Educação e Reabilitação",
      img: "https://rentabileasy.com.br/wp-content/uploads/2022/06/EspacoSER_Logo-150x150.webp",
      text: "Consideramos o atendimento muito eficiente e prático. A consultoria é excelente, estáo sempre dispostos a nos auxiliar e informar quando necessário. Conseguimos trabalhar com tranquilidade sabendo que estáo cuidando da parte contábil do nosso negócio. A partir do momento que passamos a ser atendidas pela empresa, tivemos mais tempo e criatividade para investir em ideias e turbinar nossonegócio, além de um tempo maior para atendimentos de mais qualidade. Com certeza recomendamos para outras",
      class: "slide",
    },

    {
      name: "Juliana Rodrigues - All smiles Odontologia",
      img: "https://rentabileasy.com.br/wp-content/uploads/2022/06/allsmiles-1-150x150.png",
      text: "Enxergo como uma empresa idônea e com profissionais muito competentes, todos os departamentos estáo sempre prontos para me atender. Reestruturou a All Smiles Odontologia, nos colocando em um novo patamar e, desta forma, aumentando nossa lucratividade de maneira relevante. Sempre que tenho a oportunidade, recomendo para outras empresas",
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

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

  return (
    <body>
      <header id="header">
        <nav id="nav">
          <img src={logo} width={350} alt="" className="" />
          <ul id="menu">
            <li>
              <a href="">O que é?</a>
            </li>
            <li>
              <a href="">Para quem?</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
          <a href="" id="open">
            Quero abrir minha empresa
          </a>
          <a href="" id="change">
            Quero descomplicar
            <br />
            minha contabilidade
          </a>
        </nav>
      </header>
      <section id="hero">
        <div id="hero-content">
          <div id="hero-text">
            <h1>Mais que uma contabilidade, seu</h1>
            <h1>Parceiro de Negócios</h1>
            <p>
              Tenha suas rotinas financeiras, fiscais e contábeis nas mãos de
              profissionais e tenha o acompanhamento com especialistas de
              negócios dedicados ao crescimento de sua empresa.
            </p>
            <a href="" id="transform">
              Quero transformar minha gestão empresarial
            </a>
          </div>

          <img
            src="http://rentabileasy.com.br/wp-content/uploads/2023/10/RENTABILEASY-img01-2.png"
            width={600}
            alt=""
          />
        </div>
      </section>

      <div className="presentation">
        <iframe
          width="755"
          height="425"
          src="https://www.youtube.com/embed/yLkQEZzUzxw"
          title="Vídeo site"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div id="offers">
        <div id="offers-content">
          <div className="icon-text">
            <CheckCircle
              className="icon-check"
              weight="fill"
              size={80}
              color="#40ff76"
            />
            <p>
              Garanta o melhor regime tributário e fiscal para a sua empresa
            </p>
          </div>
          <div className="icon-text">
            <CheckCircle
              className="icon-check"
              weight="fill"
              size={80}
              color="#40ff76"
            />
            <p>Controles e processos que evitam desperdicios</p>
          </div>
          <div className="icon-text">
            <CheckCircle
              className="icon-check"
              weight="fill"
              size={80}
              color="#40ff76"
            />
            <p>Visão completa de todos os indicadores de resultados</p>
          </div>
          <div className="icon-text">
            <CheckCircle
              className="icon-check"
              weight="fill"
              size={80}
              color="#40ff76"
            />
            <p>Atendimento 100% humanizado, lado a lado com você</p>
          </div>
        </div>
      </div>

      <section id="services">
        <div id="services-content">
          <div id="service-icon-text">
            <h1>Oferecemos além da contabilidade:</h1>
            <div className="service-icon">
              <CheckFat weight="fill" color="#fff" size={35} />
              <p>
                Elaboração o Plano de Negócios (Planejamento Estratégico,
                Societário, Tributário e Financeiro)
              </p>
            </div>
            <div className="divider"></div>
            <div className="service-icon">
              <CheckFat weight="fill" color="#fff" size={20} />
              <p>Estruturação e Gestão de Processos;</p>
            </div>
            <div className="divider"></div>

            <div className="service-icon">
              <CheckFat weight="fill" color="#fff" size={35} />
              <p>
                Atuação com estratégias financeiras para geração de recursos
                através de incentivos fiscais;
              </p>
            </div>
            <div className="divider"></div>

            <div className="service-icon">
              <CheckFat weight="fill" color="#fff" size={20} />
              <p>Gestão financeira e fiscal</p>
            </div>
            <div className="divider"></div>

            <div className="service-icon">
              <CheckFat weight="fill" color="#fff" size={20} />
              <p>Tudo isso em paralelo as rotinas contábeis</p>
            </div>
          </div>

          <img
            src="http://rentabileasy.com.br/wp-content/uploads/2023/10/img33.png"
            alt=""
            width={600}
          />
        </div>
      </section>

      <section id="jobs">
        <div id="jobs-content">
          <div id="jobs-text">
            <h1>Pra quem não tem pra onde ir, qualquer caminho serve.</h1>
            <p>
              O caminho mais fácil nem sempre é o correto, entenda o nosso
              propósito para rentabilizar o seu negócio.
            </p>
          </div>
          <img
            src="http://rentabileasy.com.br/wp-content/uploads/2023/11/comparar-1.png"
            alt=""
          />
        </div>
      </section>

      <section id="circles">
        <div id="circles-content">
          <div id="title-descri">
            <h1>Evolua de uma contabilidade, para uma parceira de negócios</h1>
            <p>Experts, contadores e administradores à sua disposição:</p>
          </div>
          <div id="circle-text">
            <div className="circle-text">
              <img
                src="http://rentabileasy.com.br/wp-content/uploads/2023/11/Bolota01.png"
                alt=""
                width={300}
              />
              <h1>Não são robôs, são experts.</h1>
            </div>
            <div className="circle-text">
              <img
                src="http://rentabileasy.com.br/wp-content/uploads/2023/11/bolota02.png"
                alt=""
                width={300}
              />
              <h1>Parcerias e Novos Negócios.</h1>
            </div>
            <div className="circle-text">
              <img
                src="http://rentabileasy.com.br/wp-content/uploads/2023/11/bolota04.png"
                alt=""
                width={300}
              />
              <h1>Consultoria Estratégica.</h1>
            </div>
          </div>
          <div id="circle-cards">
            <div className="card">
              <p>
                Profissionais com visão de sócios e donos, para fortalecer seu
                negócio e seus planos futuros;
              </p>
            </div>
            <div className="card">
              <p>
                Traremos ainda sugestões de inovação, ferramentas parceiras,
                tecnologias, melhorias, como: Plano de Saúde, Contas digitais,
                Consultoria, Certificado digital, etc
              </p>
            </div>
            <div className="card">
              <p>
                Estamos há mais de 40 anos rentabilizando negócios, dando total
                segurança e suporte para empreendedores fazerem a diferença.
              </p>
            </div>
          </div>
          <a href="">Quero essa equipe comigo!</a>
        </div>
      </section>

      <section id="prices">
        <div id="price-text">
          <h1>
            O melhor custo-benefício para você estruturar sua empresa a curto,
            médio e longo prazo:
          </h1>
        </div>
        <div id="price-cards">
          <div className="price">
            <h2>Para ME</h2>
            <div className="divider"></div>
            <div className="price-text">
              <h1>A partir de:</h1>
              <h2>R$ 299,00</h2>
              <a href="">Quero contratar</a>
            </div>
          </div>
          <div className="price">
            <h2>Para EPP</h2>
            <div className="divider"></div>
            <div className="price-text">
              <h1>A partir de:</h1>
              <h2>R$ 599,00</h2>
              <a href="">Quero contratar</a>
            </div>
          </div>
          <div className="price">
            <h2>Gestão completa</h2>
            <div className="divider"></div>
            <div className="price-text">
              <p>
                Acesse um orçamento personalizado sob medida com diagnóstico
                gratuito
              </p>
              <a href="">Quero contratar</a>
            </div>
          </div>
        </div>
      </section>

      <section id="for">
        <div id="for-content">
          <div id="for-title">
            <h1>Empreendedores que mais rentabilizam com a gente:</h1>
          </div>
        </div>
        <div id="for-icons">
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_construcao-1.svg"
              alt=""
            />
            <p>Construção civil</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_coworking.svg"
              alt=""
            />
            <p>Centro de negócios (Coworkings)</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_tech.svg"
              alt=""
            />
            <p>Empresas de Tecnologia</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_franquia.svg"
              alt=""
            />
            <p>Franquias</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_holding-1.svg"
              alt=""
            />
            <p>Holdings</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_hoteis-1.svg"
              alt=""
            />
            <p>Hotéis e Pousadas</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_PJ-1.svg"
              alt=""
            />
            <p>Prestadores de Serviços</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_saude.svg"
              alt=""
            />
            <p>Profissionais e Clínicas da Área da Saúde</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_advogado.svg"
              alt=""
            />
            <p>Sociedades de Advogados</p>
          </div>
          <div className="icon">
            <img
              width={100}
              src="http://rentabileasy.com.br/wp-content/uploads/2022/06/LP_Rentabileasy_startup-1.svg"
              alt=""
            />
            <p>Startups</p>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h1>Nossos clientes vendem por nós: </h1>
        <div id="testimonials-content">
          <div className="slide-transition">
            <button onClick={prevSlide}>
              <ChevronLeft />{" "}
            </button>
            <div className={`slide ${slides[currentSlide].class}`}>
              <p className="">{slides[currentSlide].text}</p>
              <img
                width={100}
                className=""
                src={slides[currentSlide].img}
                alt=""
              />
              <p className=""> {slides[currentSlide].name}</p>
            </div>
            <button onClick={nextSlide}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section id="form">
        <div id="form-content">
          <img
            src="http://rentabileasy.com.br/wp-content/uploads/2023/12/image-59.png"
            alt=""
            width={400}
          />
          <div id="form-text">
            <h1>Vamos rentabilizar?</h1>
            <a href="">Fale com um especialista</a>
          </div>
        </div>
      </section>

      <footer>
        <div id="footer-content">
          <div id="footer-text">
            <p>Calçada dos Ipês, 51</p>
            <p>Centro Comercial Alphaville</p>
            <p>Alphaville - Barueri/SP</p>
            <p>CEP 06453 - 025</p>
          </div>
          <div id="footer-social">
            <div className="social-icon">
              <Phone size={20} color="#392f6f" />
              <p>+55 (11) 4195 - 6006</p>
            </div>
            <div className="social-icon">
              <InstagramLogo color="#4aff81" size={30} />
              <a href="">Segue lá</a>
            </div>
          </div>
          <div id="footer-product">
            <p>A Rentabileasy é um produto</p>
            <img
              src="https://rentabileasy.com.br/wp-content/uploads/2022/06/AbileConsultingGroup_Logo_Negatva.png"
              alt=""
              width={300}
            />
          </div>
        </div>
        <div id="footer-by">
          <p>&copy; Copyright 2023 Abile • Todos os direitos reservados</p>
          <div className="by-crowd">
            <p>Desenvolvido por</p>
            <img
              src="http://rentabileasy.com.br/wp-content/uploads/2023/12/logo.3942e0c5ddc8cb64ca03f061264c9d15-1.png"
              alt=""
              width={150}
            />
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
