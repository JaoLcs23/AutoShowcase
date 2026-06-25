export const categories = [
  { id: 'supercarros', name: 'Supercarros', theme: 'city' },
  { id: 'camionetes', name: 'Camionetes', theme: 'countryside' },
  { id: 'populares', name: 'Populares', theme: 'highway' },
  { id: 'suvs', name: 'SUVs', theme: 'city' },
  { id: 'classicos', name: 'Clássicos', theme: 'countryside' },
  { id: 'muscle', name: 'Muscle Cars', theme: 'highway' }
];

export const cars = [

  {
    id: 1,
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    category: 'supercarros',
    year: 2024,
    origin: 'Alemanha',
    topSpeed: '293 km/h',
    acceleration: '4.2s (0-100)',
    description: 'Um ícone automotivo, muito presente nas ruas e garagens de luxo do Brasil. O 911 combina tradição, performance e um design inconfundível.',
    image: '/img/porsche_911_1781891857769.png',
    price: 'R$ 860.000',
    brandHistory: 'A Porsche foi fundada em 1931 por Ferdinand Porsche em Stuttgart, Alemanha. Famosa por seus carros esportivos de alta performance, o 911 é o modelo mais emblemático da marca, mantendo seu design inconfundível há décadas.',
    technicalSpecs: {
      engine: '3.0L Boxer 6 cilindros Twin-Turbo',
      horsepower: '385 cv',
      weight: '1.505 kg',
      transmission: 'PDK (Automatizada de 8 marchas dupla embreagem)'
    }
  },
  {
    id: 2,
    name: 'Ferrari F8 Tributo',
    brand: 'Ferrari',
    category: 'supercarros',
    year: 2023,
    origin: 'Itália',
    topSpeed: '340 km/h',
    acceleration: '2.9s (0-100)',
    description: 'Representando o auge do motor V8 da Ferrari, o F8 Tributo é uma obra de arte da engenharia que atrai olhares nas capitais brasileiras.',
    image: '/img/ferrari_f8_1781891868612.png',
    price: 'R$ 3.880.000',
    brandHistory: 'Fundada por Enzo Ferrari em 1947, em Maranello. A marca é o maior símbolo de status automobilístico do mundo, nascida da paixão de Enzo pelas pistas de corrida, especialmente na Fórmula 1.',
    technicalSpecs: {
      engine: '3.9L V8 Bi-Turbo',
      horsepower: '720 cv',
      weight: '1.435 kg',
      transmission: 'Automatizada de 7 marchas dupla embreagem'
    }
  },
  

  {
    id: 3,
    name: 'Toyota Hilux',
    brand: 'Toyota',
    category: 'camionetes',
    year: 2024,
    origin: 'Japão (Fabricação Argentina)',
    topSpeed: '180 km/h',
    acceleration: '10.7s (0-100)',
    description: 'A rainha do agronegócio brasileiro. Robusta, confiável e com altíssimo valor de revenda. A picape média mais vendida do Brasil.',
    image: '/img/toyota_hilux_fix_1781892914012.png',
    price: 'R$ 275.000',
    brandHistory: 'A Toyota Motor Corporation foi fundada em 1937 por Kiichiro Toyoda no Japão. É conhecida mundialmente pelo "Sistema Toyota de Produção" e pela durabilidade quase indestrutível de seus veículos comerciais.',
    technicalSpecs: {
      engine: '2.8L Turbodiesel de 4 cilindros',
      horsepower: '204 cv',
      weight: '2.090 kg',
      transmission: 'Automática de 6 marchas com tração 4x4'
    }
  },
  {
    id: 4,
    name: 'Ford Ranger',
    brand: 'Ford',
    category: 'camionetes',
    year: 2024,
    origin: 'EUA (Fabricação Argentina)',
    topSpeed: '190 km/h',
    acceleration: '9.2s (0-100)',
    description: 'Símbolo de tecnologia no campo, a nova geração da Ranger traz um motor V6 poderoso e um visual inspirado na F-150.',
    image: '/img/ford_ranger_1781891890614.png',
    price: 'R$ 235.000',
    brandHistory: 'A Ford foi fundada em 1903 por Henry Ford. Revolucionou o mundo com a linha de montagem e o Modelo T, democratizando o automóvel e definindo a indústria moderna.',
    technicalSpecs: {
      engine: '3.0L V6 Turbodiesel',
      horsepower: '250 cv',
      weight: '2.358 kg',
      transmission: 'Automática de 10 marchas com tração 4WD'
    }
  },
  {
    id: 5,
    name: 'Chevrolet S10',
    brand: 'Chevrolet',
    category: 'camionetes',
    year: 2023,
    origin: 'EUA (Fabricação Brasil)',
    topSpeed: '180 km/h',
    acceleration: '10.1s (0-100)',
    description: 'Clássica das estradas de terra brasileiras, a S10 se mantém forte como uma das preferidas nas fazendas do interior.',
    image: '/img/chevrolet_s10_fix_1781892924697.png',
    price: 'R$ 178.000',
    brandHistory: 'Fundada em 1911 por Louis Chevrolet e William C. Durant. No Brasil, consolidou-se como uma marca histórica desde a criação da GM do Brasil, sendo pioneira no mercado de picapes leves e médias.',
    technicalSpecs: {
      engine: '2.8L Turbodiesel',
      horsepower: '200 cv',
      weight: '2.018 kg',
      transmission: 'Automática de 6 marchas com tração 4x4'
    }
  },


  {
    id: 6,
    name: 'Fiat Uno Mille',
    brand: 'Fiat',
    category: 'populares',
    year: 2013,
    origin: 'Itália (Fabricação Brasil)',
    topSpeed: '150 km/h',
    acceleration: '15.2s (0-100)',
    description: 'O verdadeiro tanque de guerra das ruas brasileiras. Especialmente se tiver escada no teto, é considerado o carro mais rápido do Brasil.',
    image: '/img/fiat_uno_1781891922797.png',
    price: 'R$ 25.000',
    brandHistory: 'A Fabbrica Italiana Automobili Torino (FIAT) foi fundada em 1899. No Brasil, instalou-se em Betim (MG) e revolucionou o mercado com carros compactos inovadores, dominando o segmento popular por anos.',
    technicalSpecs: {
      engine: '1.0L Fire Flex de 4 cilindros',
      horsepower: '66 cv',
      weight: '840 kg',
      transmission: 'Manual de 5 marchas'
    }
  },
  {
    id: 7,
    name: 'Volkswagen Gol',
    brand: 'Volkswagen',
    category: 'populares',
    year: 2022,
    origin: 'Alemanha (Fabricação Brasil)',
    topSpeed: '167 km/h',
    acceleration: '13.1s (0-100)',
    description: 'Por décadas o carro mais vendido do Brasil. Um clássico absoluto de manutenção barata e resistência mecânica.',
    image: '/img/vw_gol_fix_1781892935967.png',
    price: 'R$ 54.000',
    brandHistory: 'Fundada nos anos 1930 para criar o "Carro do Povo" (Fusca). O Gol foi um projeto totalmente concebido no Brasil para substituir o Fusca, mantendo-se na liderança de vendas por 27 anos seguidos.',
    technicalSpecs: {
      engine: '1.0L MPI Flex de 3 cilindros',
      horsepower: '84 cv',
      weight: '1.015 kg',
      transmission: 'Manual de 5 marchas'
    }
  },
  {
    id: 8,
    name: 'Hyundai HB20',
    brand: 'Hyundai',
    category: 'populares',
    year: 2024,
    origin: 'Coreia do Sul (Fabricação Brasil)',
    topSpeed: '190 km/h',
    acceleration: '9.3s (0-100)',
    description: 'Sucesso de vendas com design ousado e conforto. O HB20 conquistou o público jovem que busca seu primeiro carro.',
    image: '/img/hyundai_hb20_1781891945150.png',
    price: 'R$ 83.500',
    brandHistory: 'A Hyundai foi fundada em 1967 na Coreia do Sul. O projeto HB20 (Hyundai Brasil 20) foi desenhado e concebido exclusivamente para o mercado nacional, trazendo padrão premium aos populares.',
    technicalSpecs: {
      engine: '1.0L TGDI Turbo Flex',
      horsepower: '120 cv',
      weight: '1.090 kg',
      transmission: 'Automática de 6 marchas'
    }
  },


  {
    id: 9,
    name: 'Jeep Compass',
    brand: 'Jeep',
    category: 'suvs',
    year: 2024,
    origin: 'EUA (Fabricação Brasil)',
    topSpeed: '206 km/h',
    acceleration: '9.4s (0-100)',
    description: 'O SUV médio que domina o mercado nacional com tecnologia avançada e conforto.',
    image: '/img/jeep_compass_fix_1781900886003.png',
    price: 'R$ 151.000',
    brandHistory: 'A Jeep nasceu da necessidade do exército americano na Segunda Guerra Mundial em 1941. O termo "Jeep" virou sinônimo de veículo off-road. Hoje, a marca une essa capacidade à sofisticação urbana.',
    technicalSpecs: {
      engine: '1.3L Turbo Flex (T270)',
      horsepower: '185 cv',
      weight: '1.585 kg',
      transmission: 'Automática de 6 marchas'
    }
  },


  {
    id: 10,
    name: 'Volkswagen Fusca',
    brand: 'Volkswagen',
    category: 'classicos',
    year: 1970,
    origin: 'Alemanha (Fabricação Brasil)',
    topSpeed: '133 km/h',
    acceleration: '22.0s (0-100)',
    description: 'O clássico mais amado do Brasil, com motor traseiro refrigerado a ar e carisma inegável.',
    image: '/img/vw_fusca_fix_1781900876737.png',
    price: 'R$ 35.000',
    brandHistory: 'Encomendado por Ferdinand Porsche e Adolf Hitler nos anos 30, o Fusca (Beetle) sobreviveu à guerra para se tornar o maior ícone pop automobilístico global, e o primeiro amor sobre rodas de milhares de brasileiros.',
    technicalSpecs: {
      engine: '1.5L Boxer 4 cilindros (Refrigeração a Ar)',
      horsepower: '52 cv',
      weight: '800 kg',
      transmission: 'Manual de 4 marchas'
    }
  },


  {
    id: 11,
    name: 'Chevrolet Camaro SS',
    brand: 'Chevrolet',
    category: 'muscle',
    year: 2023,
    origin: 'EUA',
    topSpeed: '290 km/h',
    acceleration: '4.2s (0-100)',
    description: 'Muscle car icônico que traz a fúria do V8 americano para as ruas brasileiras.',
    image: '/img/chevrolet_camaro_fix_1781900894037.png',
    price: 'R$ 555.000',
    brandHistory: 'Lançado em 1966 como resposta direta ao Ford Mustang. Ao longo de mais de 50 anos, o Camaro cultivou uma legião de fãs, sendo imortalizado nos cinemas e até em músicas populares no Brasil.',
    technicalSpecs: {
      engine: '6.2L V8',
      horsepower: '461 cv',
      weight: '1.709 kg',
      transmission: 'Automática de 10 marchas'
    }
  },


  {
    id: 12,
    name: 'Chevrolet Onix',
    brand: 'Chevrolet',
    category: 'populares',
    year: 2024,
    origin: 'EUA (Fabricação Brasil)',
    topSpeed: '187 km/h',
    acceleration: '10.1s (0-100)',
    description: 'Um dos hatches mais vendidos do Brasil, entregando ótimo custo-benefício e tecnologia embarcada.',
    image: '/img/chevrolet_onix_fix_1781900903036.png',
    price: 'R$ 76.000',
    brandHistory: 'O Onix foi a aposta da Chevrolet do Brasil para suceder sucessos absolutos como o Corsa e o Celta. Lançado em 2012, rapidamente se tornou líder de vendas absoluto no país.',
    technicalSpecs: {
      engine: '1.0L Turbo Flex 3 cilindros',
      horsepower: '116 cv',
      weight: '1.046 kg',
      transmission: 'Automática de 6 marchas'
    }
  }
];
