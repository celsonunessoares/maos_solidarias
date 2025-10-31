import Head from "next/head";
import Image from "next/image";
import TeamMember from "../components/composed/team-member";

const QuemSomos = () => {
   return (
      <>
         <Head>
            <title>Mãos Solidárias</title>
            <meta name="description" content="IFPI" />
         </Head>
         <Missao />
         <Valores />
         <Historia />
         <Time />
      </>
   );
};

const Missao = () => {
   return (
      <main class="container-xl row mx-auto text-center text-lg-start">
        <div class="nossa-missao">

            <div class="imagens-missao">
                <Image
                src="/assets/team-goals.gif"
                alt="foto1"
                width={500}
                height={500}/>
            </div>

            <div class="descricao-missao">

                <h1>Nossa Missão</h1>
                <h3>Nosso projeto tem como missão principal oferecer auxílio e suporte às pessoas afetadas por desastres
                    naturais. Acreditamos que em momentos de adversidade, é essencial unir forças para ajudar aqueles
                    que
                    mais precisam.</h3>
            </div>

        </div>
    </main>
   );
};

const Valores = () => {
   return (
      <div class="container-xl row mx-auto text-center text-lg-start">

        <div class="nossos-valores">
            <div class="descricao-valores">
                <h1 class="descricao-tit-valores">Nossos Valores</h1>
                <h3 class="descricao-subtit-valores">Nossos valores são fundamentados na compaixão, solidariedade e
                    comprometimento. Acreditamos na importância de agir com empatia e respeito, reconhecendo a dignidade
                    de
                    cada indivíduo afetado por desastres naturais.</h3>
            </div>

            <div class="imagens-valores">

                <Image
                src="/assets/about-us.gif" alt="foto3"
                width={500}
                height={500}/>

            </div>

        </div>
    </div>
   );
};

const Historia = () => {
   return (
      <div class="container-xl row mx-auto text-center text-lg-start">

        <div class="nossa-historia">

         <h1>Mãos Solidárias: Tecnologia e Resiliência em Ação</h1>
         <h3>A plataforma Mãos Solidárias é uma iniciativa prática desenvolvida pelo estudante Celso Nunes do Curso Técnico em Desenvolvimento de Sistemas no Instituto Federal do Piauí (IFPI), Campus Floriano.<br />

           <br />Em 2025, o projeto reflete o compromisso de utilizar a ciência e a inovação tecnológica como ferramentas para gerar valor social. Ele visa otimizar e facilitar o processo de doação, garantindo auxílio rápido e transparente às pessoas afetadas por desastres naturais — um desafio nacional que se intensifica com as mudanças climáticas.<br />

           <br />Este trabalho integra a programação da Semana Nacional de Ciência & Tecnologia (SNCT 2025), alinhando-se ao tema central: Planeta Água: a cultura oceânica para enfrentar as mudanças climáticas no meu território.<br />
        
           <br />Meu objetivo é claro: demonstrar como as soluções digitais podem ser essenciais para a geração de soluções, a inclusão social e a melhoria da qualidade de vida das comunidades em nosso território. Ao estabelecer parcerias com organizações e voluntários, busco promover a recuperação e a resiliência, transformando o código em solidariedade.<br />

           <br />Minha história é guiada pelo compromisso de fazer a diferença. Convido você a se juntar a esta causa humanitária e tecnológica, provando que a ciência, feita no IFPI, é a chave para enfrentar os desafios regionais.
            </h3>
        </div>
    </div>
   );
};


const teamMembers = [
  {
    name: "Jeff J. Rowley",
    role: "Development",
    github: "https://github.com/jeffrowley",
    linkedin: "https://www.linkedin.com/in/jeffrowley",
    imageSrc: "/assets/pessoa1.png",
    imageAlt: "pessoa1",
  },
  
  {
    name: "Helen L. Sanchez",
    role: "Development",
    github: "https://github.com/helensanchez",
    linkedin: "https://www.linkedin.com/in/helensanchez",
    imageSrc: "/assets/pessoa2.png",
    imageAlt: "pessoa2",
  },

  {
    name: "Heather W. Cola",
    role: "Development",
    github: "https://github.com/heathercola",
    linkedin: "https://www.linkedin.com/in/heathercola",
    imageSrc: "/assets/pessoa3.png",
    imageAlt: "pessoa3",
  },
  {
    name: "David D. Liu",
    role: "Development",
    github: "https://github.com/daviddliu",
    linkedin: "https://www.linkedin.com/in/daviddliu",
    imageSrc: "/assets/pessoa4.png",
    imageAlt: "pessoa4",
  },
  {
    name: "Brad C. Butler",
    role: "Development",
    github: "https://github.com/bradbutler",
    linkedin: "https://www.linkedin.com/in/bradbutler",
    imageSrc: "/assets/pessoa5.png",
    imageAlt: "pessoa5",
  },
  {
    name: "Scott I. Brown",
    role: "Development",
    github: "https://github.com/scottbrown",
    linkedin: "https://www.linkedin.com/in/scottbrown",
    imageSrc: "/assets/pessoa6.png",
    imageAlt: "pessoa6",
  },
];

const Time = () => (
  <div className="container-xl row mx-auto text-center text-lg-start content-main">
    <div className="nosso-time">
      <div className="container-time">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      {/* Rest of your Time component */}
      <div class="barra-vertical"></div>


            <div class="descricao-time">
                <h1>Nosso Time</h1>
                <h3>Unindo forças para ajudar pessoas afetadas por desastres naturais, com comprometimento e paixão.
                    Junte-se a nós nessa jornada solidária. </h3>
            </div>
    </div>
  </div>
);
  


export default QuemSomos;
