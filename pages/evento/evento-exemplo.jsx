import Image from "next/image";

const Example = () => {
   return (
      <main className="container-xl row mx-auto content-main mt-4 row">
         <Description />
         <Stats />
      </main>
   );
};

const Description = () => {
   return (
      <div className="col-lg-7">
         <Image
            src="/assets/incendio_01.jpg"
            width={727}
            height={349}
            alt="Evento alt tag que vai mudar depois lalalala"
            className="rounded-3 d-block mb-3"
         />
         <span className="d-inline-block py-1 px-2 bg-secondary-subtle rounded-2">
            Incêndios
         </span>
         <span className="d-inline-block px-4 text-end">
            Publicado em 12/04/2023
         </span>
         <h1 className="my-4">O Fogo Levou Tudo: Ajude a Recomeçar</h1>
         <p className="mb-4">
            <p>No dia 12 de abril de 2023, uma série de incêndios devastadores atingiu a região de Sul do Piauí, deixando dezenas de famílias desabrigadas e em situação de vulnerabilidade extrema. O fogo não apenas consumiu residências, mas também plantações e meios de subsistência, exigindo uma mobilização solidária rápida e robusta.</p>

            <p>Nossa meta emergencial é arrecadar os R$ 70K em Dinheiro e os itens essenciais mostrados ao lado. O valor arrecadado será destinado à compra de telhas, tijolos e ferramentas para a fase de Construção, além de garantir o suprimento contínuo de Alimentos e Medicamentos nos primeiros 60 dias após o desastre. Cada doação, por menor que seja, é um tijolo na reconstrução de uma vida.</p>

            <p>O tempo é crucial. Junte-se às Mãos Solidárias e seja a esperança que estas famílias precisam para superar esta crise. Doe Agora e nos ajude a transformar a dor em um novo começo. Sua solidariedade faz toda a diferença!</p>
         </p>
      </div>
   );
};

const Stats = () => {
   const stats = [
      {
         icon: "/assets/icon-estatisticas-dinheiro.svg",
         title: "Dinheiro",
         value: "R$ 70K",
      },
      {
         icon: "/assets/icon-estatisticas-alimentos.svg",
         title: "Alimentos",
         value: "7.000",
      },
      {
         icon: "/assets/icon-estatisticas-roupas.svg",
         title: "Roupas",
         value: "600",
      },
      {
         icon: "/assets/icon-estatisticas-medicamentos.svg",
         title: "Medicamentos",
         value: "1200",
      },
      {
         icon: "/assets/icon-estatisticas-construcoes.svg",
         title: "Construções",
         value: "125",
      },
   ];

   return (
      <div
         className="col-lg-5 bg-secondary-subtle rounded-2 py-4 position-sticky"
         style={{ height: "fit-content", top: "1rem" }}
      >
         <h2 className="px-2 mb-4">Arrecadados</h2>
         <div className="row row-cols-md-2 gap-4 mb-4">
            {stats.map((stat) => (
               <div
                  key={stat.title}
                  className="row row-cols-2 align-items-center"
               >
                  <Image
                     src={stat.icon}
                     alt={stat.title}
                     width={30}
                     height={30}
                     className="d-block"
                  />
                  <div>
                     <div className="h2 mb-0 fs-5">{stat.value}</div>
                     <span className="fs-6 fw-medium">{stat.title}</span>
                  </div>
               </div>
            ))}
         </div>
         <div className="row px-4 align-items-center">
            <a href="#" className="btn btn-primary col-10">
               Doar teste
            </a>
            <button className="btn col-2">
               <Image
                  src="/assets/icon-evento-favoritar.svg"
                  alt="Favoritar evento"
                  width={30}
                  height={30}
               />
            </button>
         </div>
      </div>
   );
};

export default Example;
