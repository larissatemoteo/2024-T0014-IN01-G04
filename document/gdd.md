<img src="../assets/logointeli.png">


# GDD - Game Design Document - Módulo 1 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final_**

## Grupo 4

#### Nomes dos integrantes do grupo
- <a>Ana Eloisa da Silva Façanha</a>
- <a>Daniel Augusto de Araújo Gonçalves</a>
- <a>Gabriel Bacci Toledo</a> 
- <a>Giovanna Fátima de Britto Vieira</a> 
- <a>Gustavo Gonçalves da Costa</a>
- <a>Larissa dos Santos Temoteo</a> 

## Sumário

[1. Introdução](#c1)

[2. Visão Geral do Jogo](#c2)

[3. Game Design](#c3)

[4. Desenvolvimento do jogo](#c4)

[5. Casos de Teste](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[Anexos](#c8)

<br>


# <a name="c1"></a>1. Introdução

## 1.1. Escopo do Projeto

### 1.1.1. Contexto da indústria

A Meta é uma empresa que tem como missão dar às pessoas o poder de criar comunidades e aproximar o mundo, dessa forma, eles desenvolvem produtos voltados para o mercado digital, resolvem problemas e trabalham juntos para conectar pessoas do mundo todo. Além disso, essa empresa possui um caráter social, logo possui ações voltadas para a diversidade, inclusão de todos e preocupação com o bem-estar dos seus funcionários.

Tendo como princípios dar voz às pessoas, criar conexão e comunidade, servir a todos, manter as pessoas seguras, proteger a privacidade e promover oportunidade econômica, a Meta atingiu 3 bilhões de usuários em todo o mundo e se tornou uma das cinco grandes empresas de tecnologia, em conjunto com a Microsoft, Amazon, Apple e Google.

Em 2004 foi lançado o Facebook, após isso, a cartela de produtos da Meta aumentou e incluiu aplicativos como o Messenger, o Instagram e o WhatsApp. Atualmente, a Meta está expandindo os negócios e indo em direção a experiências imersivas com realidade aumentada, virtual e mista. Em decorrência da vasta gama de produtos e serviços a Meta acumulou uma série de concorrentes (tabela abaixo).

<img src="../assets/tabelaConcorrentes.png">

*Figura 1. Tabela de concorrentes da Meta. Fonte: Autor Próprio (2024)*

Entretanto, apesar da vasta quantidade de concorrentes, em fevereiro de 2024 as ações da Meta dispararam e a empresa teve o maior ganho em valor de mercado em um único dia. As ações da Meta subiram 20,3% e esse ganho acrescentou US$ 206 bilhões em valor de mercado, o que fez com que a empresa se destacasse no cenário mundial e se consagrasse como a 34º posição entre as maiores empresas do globo

### 1.1.2. Análise SWOT 

A análise SWOT é uma ferramenta utilizada para identificar as forças, oportunidades, fraquezas e ameaças de uma empresa. Dessa forma, serve como uma forma de identificar oportunidades de melhoria frente à concorrência e à própria equipe, promovendo uma visão de qual o atual cenário da empresa.

No contexto da Análise SWOT, há os fatores internos e externos, quanto aos fatores internos há: as forças são as ações internas que oferecem uma vantagem competitiva para a empresa, são os fatores que indicam o sucesso da empresa. Enquanto as fraquezas são o oposto, são as iniciativas internas que estão abaixo do esperado e indicam o que precisa ser feito para melhorar na empresa.

Quanto aos fatores externos há as oportunidades e ameaças. As oportunidades são as iniciativas externas às empresas mas que promovem uma melhor posição competitiva. Em relação às ameaças são os fatores externos que estão foram do controle da empresa e podem impactar negativamente o cenário competitivo.

Desse modo, considerando as concepções da Análise SWOT foi possível identificar as forças, fraquezas, oportunidades e ameaças que a contempla a Meta, conforme consta abaixo.

<img src="../assets/MatrizSwotMeta.png">

*Figura 2. Análise SWOT da empresa Meta. Fonte: Autor Próprio (2024)*

**Forças:**
- **Equipe qualificada e talentosa:** A empresa possui uma equipe altamente qualificada e talentosa, capaz de impulsionar a inovação e a excelência em seus produtos e serviços. </br>
- **Marketing e publicidade atraentes:** A empresa investe em estratégias de marketing e publicidade eficazes, que capturam a atenção do público-alvo e promovem o reconhecimento e a preferência de suas marcas e produtos. </br>
- **Marcas e produtos fortemente presentes:** A empresa possui marcas e produtos bem estabelecidos, com uma presença forte e influente no mercado, o que contribui para sua reputação e sucesso comercial. </br>
- **Presença de tecnologia de ponta nos serviços ofertados pela empresa:** A empresa oferece serviços que incorporam tecnologia de ponta, proporcionando aos clientes experiências inovadoras e de alta qualidade.</br>

**Fraquezas:**
- **Falta de otimização nos processos internos:** A empresa enfrenta desafios relacionados à falta de otimização em seus processos internos, o que pode afetar a eficiência operacional e a produtividade.

- **Dificuldade dos colaboradores em entender processos:** Os colaboradores enfrentam dificuldades em entender alguns processos internos da empresa, o que pode impactar negativamente a execução das tarefas e projetos.

- **Constantes comprometimentos na segurança dos dados:** A empresa enfrenta desafios relacionados à segurança dos dados, com ocorrências frequentes de comprometimento, o que pode resultar em perda de confiança dos clientes e danos à reputação da empresa.

- **Renda proveniente do sistema de anúncios:** A empresa depende significativamente da receita gerada pelo sistema de anúncios, o que a torna vulnerável a flutuações no mercado publicitário e mudanças nas políticas de privacidade.

**Oportunidades:**
- **Capacidade de influenciar grandes massas:** A empresa tem a capacidade de influenciar grandes audiências, dada sua presença significativa e impactante no mercado, o que representa uma oportunidade para expandir sua base de clientes e aumentar sua participação de mercado.

- **Capacidade de criar conexões com as mais diversas empresas e instituições:** A empresa possui recursos e alcance para estabelecer conexões com uma variedade de empresas e instituições, o que pode abrir oportunidades para colaborações estratégicas e desenvolvimento de novos produtos e serviços.

- **Possibilidade de explorar novos avanços tecnológicos:** A empresa está em posição de explorar e adotar novos avanços tecnológicos, o que pode impulsionar a inovação e a diferenciação de seus produtos e serviços no mercado.

- **Expandir o mercado:** A empresa tem a oportunidade de expandir seu alcance e penetração em novos mercados geográficos ou segmentos de mercado, o que pode impulsionar o crescimento e a diversificação de suas operações.

**Ameaças:**
- **Mercado com forte concorrência:** A empresa enfrenta uma forte concorrência no mercado, o que pode dificultar a manutenção ou aumento de sua participação de mercado e pressionar os preços e margens de lucro.

- **Economia global instável:** A instabilidade econômica global representa uma ameaça à empresa, pois pode afetar o poder de compra dos consumidores, as condições de crédito e investimento, e a demanda por seus produtos e serviços.

- **Perda de mercado devido a mudanças do consumidor:** Mudanças nas preferências e comportamentos dos consumidores podem levar à perda de participação de mercado da empresa, caso ela não consiga acompanhar ou antecipar essas mudanças de forma eficaz.

- **Riscos de segurança de dados:** A empresa enfrenta riscos significativos relacionados à segurança de dados, incluindo violações de dados, ataques cibernéticos e regulamentações cada vez mais rigorosas de proteção de dados, o que pode resultar em danos à reputação e custos significativos de conformidade e remediação.

Sendo assim, é notável que a análise SWOT da Meta oferece uma visão abrangente das forças, fraquezas, oportunidades e ameaças enfrentadas pela empresa. A Meta, anteriormente conhecida como Facebook, é uma gigante global que moldou a forma como interagimos e nos conectamos digitalmente. Com uma ampla gama de produtos em sua carteira e um marketing marcante, a empresa conquistou uma presença forte e influente em todo o mundo.


### 1.1.3. Descrição da Solução Desenvolvida

A Meta possui um processo para a contratação de fornecedores que perpassa diversas etapas, porém vários colaboradores desconhecem ou possuem dúvidas de partes desse processo. Então, objetivando solucionar esse problema foi idealizado a criação de uma ferramenta gamificada (jogo) com o intuito de capacitar os colaboradores acerca do processo supracitado.

Dessa forma os colaboradores da Meta terão acesso ao jogo para aprender de forma interativa, recebendo feedbacks e recompensas por meio da concusão de diversos desafios ao longo do jogo. 

Sendo assim, é esperado o aumento do engajamento dos usuários devido à abordagem inovadora, promoção de uma assimilação fácil e assertiva do processo, redução dos erros cometidos ao longo do processo e o aumento na eficiência do treinamento, de forma a contribuir para o desenvolvimento dos colaborados e a eficácia do processo de contratação de fornecedores da Meta.

### 1.1.4. Proposta de Valor

O Canvas Proposta de Valor é uma ferramenta que tem como fundamento criar e posicionar produtos ou serviços de acordo com o que o cliente valoriza e precisa. Dessa forma, busca pensar no produto de uma forma mais estrutura e aumentar as chances de fazer o encaixe entre produto e mercado.

Para atingir esse objetivo, a Proposta de Valor conta com dois blocos o Perfil do Cliente e a Proposta de Valor. Nesse primeiro, há a tarefa do cliente, as dores dos clientes e os ganhos dos clientes. Enquanto no segundo bloco estão presentes os produtos e serviços, os aliviadores de dores e os criadores de ganhos. 

Sendo assim, com o intuito de agregar valor na nossa solução e identificar quais as necessidades dos clientes desenvolvemos um Canvas Proposta de Valor, confome consta na imagem abaixo.

<img src="../assets/CanvasPropostaValor.png">

*Figura 3. Canvas Proposta de Valor. Fonte: Autor Próprio (2024)*

**Dores**
1. **Curva de Aprendizagem longa acerca do processo de contratação:** Os colaboradores podem enfrentar dificuldades para entender e assimilar o processo de contratação de fornecedores devido à sua complexidade e falta de recursos de treinamento adequados.

2. **Processos confusos e pouco didáticos:** A falta de clareza e eficácia nos materiais de treinamento pode levar à confusão e frustração entre os colaboradores.

3. **Frustração em um processo ineficiente:** A ineficiência no processo de contratação pode causar frustração e insatisfação entre os colaboradores, afetando negativamente o desempenho e a moral da equipe.

4. **Perda de potenciais fornecedores para a empresa:** Erros ou falta de compreensão do processo de contratação podem resultar na perda de fornecedores em potencial, prejudicando as relações comerciais e o crescimento da empresa.

5. **Processo de Contratação de fornecedores muito burocráticos:** A burocracia excessiva no processo de contratação pode desencorajar potenciais fornecedores e dificultar a eficiência operacional da empresa.

**Tarefas do Cliente**
1. **Processo de ensino para os colaboradores de uma forma tradicional:** Antes da implementação do jogo, os colaboradores eram treinados de maneira mais convencional, o que pode ser menos eficaz e envolvente.

2. **Engajar a equipe para participar do treinamento e os manter engajados:** Uma das tarefas dos gestores é garantir que os colaboradores participem ativamente do treinamento e permaneçam engajados ao longo do processo.

3. **Se manter curioso e engajado acerca do processo:** Os colaboradores também têm a responsabilidade de se manterem curiosos e interessados no processo de aprendizado, buscando constantemente melhorar suas habilidades e conhecimentos.

**Ganhos**
1. **Maior flexibilidade para o colaborador:** O treinamento gamificado oferece aos colaboradores a flexibilidade de aprender no próprio ritmo e no momento que for mais conveniente para eles.

2. **Maior autonomia e potencialização do aprendizado:** A abordagem do jogo permite que os colaboradores assumam o controle do seu próprio aprendizado, explorando e experimentando o conteúdo de forma independente.

3. **Sentimento de Pertencimento e valorização por parte dos funcionários:** Ao investir no desenvolvimento profissional dos colaboradores de forma inovadora, a empresa demonstra seu compromisso com o crescimento e o bem-estar da equipe, promovendo um ambiente de trabalho positivo e inclusivo.

4. **Entendimento do Processo de contratação de fornecedores:** O treinamento eficaz proporcionado pelo jogo ajuda os colaboradores a compreender e dominar o processo de contratação de fornecedores, permitindo que eles desempenhem suas funções com mais confiança e eficiência.</br>

**Criadores de Ganho**
1. **Aumento de Potenciais parceiros de negócio:** Implementar o jogo de treinamento pode atrair mais fornecedores interessados em trabalhar com a Meta, devido à reputação da empresa como inovadora e comprometida com o desenvolvimento de seus colaboradores.

2. **Colaboradores mais engajados e produtivos na empresa:** Um treinamento divertido e interativo pode aumentar o engajamento dos colaboradores, o que geralmente leva a um aumento da produtividade e satisfação no trabalho.

3. **Proporcionar um treinamento divertido e aprendizado ágil:** Ao transformar o processo de aprendizado em um jogo, os colaboradores podem absorver o conhecimento de forma mais rápida e eficaz, tornando o treinamento mais eficiente e agradável.

4. **Sanar dúvidas relacionadas ao processo de contratação:** O jogo oferece uma oportunidade para os colaboradores esclarecerem suas dúvidas de forma prática e interativa, facilitando a compreensão do processo de contratação.

**Aliviam as Dores**
1. **Diminuição da perda de potenciais fornecedores:** Ao fornecer um treinamento mais eficaz e envolvente, a empresa pode reduzir a perda de fornecedores devido a erros ou falta de compreensão do processo.

2. **Satisfação dos colaboradores:** Um treinamento mais atraente e eficaz pode aumentar a satisfação dos colaboradores, ajudando a reter talentos e reduzir a rotatividade.

3. **Maior retenção e entendimento acerca do processo:** A abordagem do jogo pode ajudar os colaboradores a reter e entender melhor o processo de contratação, reduzindo a confusão e os erros.

4. **Inovação tecnológica para melhor didática com os colaboradores:** Utilizar uma abordagem tecnológica e inovadora no treinamento pode tornar o processo mais acessível e eficaz para os colaboradores.

**Produtos e Serviços**
1. **Documento detalhando o processo de desenvolvimento do jogo:** Este documento fornecerá uma visão abrangente do processo de criação do jogo, incluindo todos os aspectos técnicos e de design.

2. **Jogo que possibilita o entendimento didático do processo de contratação de fornecedores da Meta:** O jogo é o produto final, projetado para oferecer aos colaboradores uma experiência de aprendizado imersiva e eficaz sobre o processo de contratação.


### 1.1.5. Matriz de Riscos

A Matriz de Risco é outra ferramenta que utilizada para a avaliar a probabilidade de determinados eventos ocorrerem e quais os impactos desse evento. Para isso, é proposto a construção de uma tabela que possui o eixo vertical como probabilidade e o eixo horizontal como impacto. 

Sendo assim, a probabilidade indica o quão previsível é que um risco ocorra e qual a frequência que ele pode acontecer, enquanto o impacto indica as consequências quando o risco de fato acontece. 

Dessa forma, a Matriz de risco serve para avaliar o potencial de risco na produção desse projeto e ajudar no planejamento de ações para evitar que esses ocorram.

<img src="../assets/MatrizRisco.png">

*Figura 4. Matriz de Riscos. Fonte: Autor Próprio (2024).*

De acordo com os riscos estabelecidos foi possível determinar quais ações seriam tomadas para evitar que estes ocorressem e o que seria feito caso ocorressem.

\# | **Plano de Ação e Resposta** 
--- | ---
**Impasses gerados por ideias divergentes** | Entrar em consenso por meio do diálogo e reuniões
**Ausência de conhecimento técnico** | Buscar nivelar o mais proximo possivel os assuntos a serem abordados
**Divisão de tarefas ineficiente** | Construir um bom plano de ações e organizar os objetivos de maineira clara e simples sozinho ou em dupla
**Atraso nas entregas** | Buscar comprometimento e se atentar aos prazos
**Comunicação malsucedida** | Praticar escuta ativa e melhorar os meios de comunicação
**Falta de experiência com atividades que envolvam programação** | Buscar os conteudos de forma mais suscinta para  areas e coisas de interesse semelhante ao gosto do aluno
**Dificuldade com  gerenciamento socioemocional** | Aprender a lidar bem com suas emoções e da próximo, tendo sempre como princípio respeitar as individualidades
**Má gestão de tempo** | Fazer uso de um bom planejamento, adiantar trabalhos e objetivos para não dar janela para imprevistos
**Ausência por motivo de saúde** | Buscar manter uma alimentação e cuidados saudáveis como individuo para eviatar adoecimento biologico ou mental
**Dificuldade em assimilar o exercício proposto** | Tirar duvidas por meio de perguntas ou de outros exercícios semelhantes com ajuda de professor ou colegas


## 1.2. Requisitos do Projeto

Durante a reunião com o parceiro do projeto foi possível definir uma série de requisitos que contemplam desde a estética até a mecânica do jogo.

**Tabela de requisitos**
\# | **Requisito**  
--- | ---
1 | Garantir que os usuários estejam curiosos e ativos em relação aos processos de forma a reduzir os riscos na contratação.
2 | Garantir que o colaborador saiba o processo.
3 | Desconstruir a ideia que é um processo complicado e garantir um senso de responsabilidade. 
4 | Jogo de curta duração (15 minutos aproximadamente).
5 | Interface prática de ser acessada com o máximo de inovação.
6 | Utilizar cases de exemplo.
7 | O jogo pode ter uma opção em inglês, mas o português deve ser priorizados;
8 | Ofertar tanto Mobile quanto para Computador.
9 | Possibilitar o compartilhamento da conclusão de fases do jogo.


## 1.3. Público-alvo do Projeto (sprint 2)

O público-alvo representa um grupo de pessoas com características semelhantes, tornando-as mais propensas a consumir os produtos ou serviços de uma empresa que as têm como alvo. Definir o público-alvo confere uma vantagem competitiva, direcionando a comunicação e o marketing da empresa, e impulsionando as vendas. No entanto, uma definição imprecisa ou muito abrangente pode resultar em conflitos, daí a importância de estabelecer gênero, idade, localização, profissão, escolaridade e outros aspectos relevantes.

Com o intuito de direcionar o projeto de forma precisa, a definição do público-alvo foi realizada. O Meta Supply, portanto, é direcionado a pessoas de todos os gêneros, raças e etnias, com idade acima de 18 anos, que trabalham como colaboradores da Meta. Além disso, são indivíduos que buscam se manter ativos e curiosos em relação aos processos da empresa, mas que podem se sentir confusos devido à complexidade de alguns deles.

O público-alvo deste jogo é composto por pessoas responsáveis e comprometidas com a diversidade e representatividade em suas relações profissionais, engajadas em promover a diversidade cultural no cenário empresarial.

Outro aspecto relacionado ao público-alvo são as personas, que refletem a personalidade real de um cliente ideal que a empresa pretende alcançar, buscando uma definição mais sofisticada e personalizada que leve em conta informações objetivas e subjetivas, como medos, anseios, dores e sonhos que motivam o desejo por um produto ou serviço.

Com o objetivo de oferecer um produto (jogo) mais personalizado e centrado em "pessoas reais", foi definida uma persona.

**Persona do usuário:**

**Nome:** *Bruna Oliveira*  
**Idade:** *29*  
**Gênero:** *Feminino*  
**Cargo:** *Analista de Marketing da META*  

**Características:**  
- Curiosa</br>
- Criativa  
- Observadora  

**Biografia:**  
Bruna é uma analista de marketing da META, nascida em Minas Gerais e criada em São Paulo. Possui graduação em Marketing pela Universidade de São Paulo (USP) e pós-graduação em Marketing Digital pela Universidade Federal de Minas Gerais (UFMG). Destacou-se no gerenciamento de marketing de diversos e-commerces antes de ser contratada pela META, onde atualmente lidera uma equipe responsável por estratégias de melhoria da presença online da bigtech no Brasil.

**Dores:**  
- Falta de uma abordagem didática e prática para compreender os processos de contratação de fornecedores da META.
- Dificuldade em manter o foco e o engajamento ao longo de treinamentos tradicionais sobre o processo de contratação de fornecedores.

**Necessidades:**  
- Mecanismo que simplifique e promova o entendimento didático do processo de contratação de fornecedores, com aplicação prática do roadmap de um possível fornecedor até o término do contrato.</br>
- Treinamento mais divertido para manter sua atenção.



# <a name="c2"></a>2. Visão Geral do Jogo (sprint 2)

## 2.1. Objetivos do Jogo (sprint 2)

Todo o processo de criação e desenvolvimento do jogo foi direcionado para permitir que os colaboradores da Meta compreendam todas as etapas do processo de contratação de fornecedores, mantendo-se ativos e curiosos para conhecer e entender o funcionamento da contratação. Assim, o jogo foi dividido em 11 fases, das quais duas foram sem interações.

O objetivo principal do jogo é executar a festa de lançamento do novo Meta Quest 4 e finalizar o contrato com o fornecedor selecionado de forma adequada. No entanto, para alcançar esse objetivo, é necessário passar por todas as fases do jogo, cada uma com seus próprios objetivos, que são os seguintes:

- **Fase 1 - Planejar, Avaliar e Selecionar:** escolher os quatro melhores serviços de buffet entre as oito opções disponíveis.</br>
- **Fase 2 - Due Diligence:** coletar informações sobre os fornecedores por meio de documentos ou entrevistas e selecionar os três melhores.</br>
- **Fase 3 - Acordo de confidencialidade:** completar o acordo de confidencialidade com as palavras que melhor se adequem à proposta.</br>
- **Fase 4 - Conhecendo o negócio:** esta fase não possui um objetivo específico, servindo apenas para orientar o jogador.</br>
- **Fase 5 - RFX:** criar um formulário com as melhores perguntas, encaminhar para os fornecedores e selecionar os dois melhores.</br>
- **Fase 6 - Cadastro em Sistemas Internos:** responder a um questionário de cadastro com as informações dos fornecedores.</br>
- **Fase 7 - Avaliação de Terceiros:** participar como jurado do julgamento dos dois fornecedores avaliados, escolhendo apenas um fornecedor.</br>
- **Fase 8 - Negociação de contratos:** estabelecer o preço do serviço, prazos de entrega e cláusulas de qualidade.</br>
- **Fase 9 - Ordem de Compra, Gerenciamento e Monitoramento e Nota Fiscal:** Emitir a ordem de compra, monitorar a festa e receber a nota fiscal.</br>
- **Fase 10 - Pagamento:** Apresentar a nota fiscal no banco e realizar a transferência do dinheiro para o Buffet.</br>
- **Fase 11 - Encerramento e Desligamento:** decidir se irá encerrar o contrato ou apenas arquivar a empresa.</br>

Portanto, ao concluir os objetivos de cada fase do jogo, também se alcança o objetivo final e o propósito do jogo, que é garantir que os colaboradores conheçam e assumam a responsabilidade pelas consequências de suas ações ao longo de cada fase do processo de contratação de fornecedores.

## 2.2. Características do Jogo (sprint 2)

### 2.2.1. Gênero do Jogo (sprint 2)

Desde a origem dos jogos digitais, uma ampla variedade de gêneros e subgêneros foi criada para incorporar inovações em mecânicas, câmeras e jogabilidade. Atualmente, essa diversidade abrange mais de 100 tipos distintos, incluindo, entre outros, ação, aventura, luta, corrida, Role-Playing, simulação, estratégia, esportes, parlor e massive multiplayer online (MMO).

Considerando essa diversidade de gêneros, foi possível classificar o Meta Supply nos gêneros de Role-Playing Game (RPG), simulação e Puzzle e Party Game.

Os jogos de Role Playing Game são reconhecidos por suas narrativas envolventes, nas quais o jogador assume o controle de um ou mais personagens em primeira pessoa, enfrentando desafios e buscando alcançar objetivos específicos. Por outro lado, os jogos de simulação têm como objetivo reproduzir elementos do mundo real no ambiente digital. Por fim, os Puzzle e Party Games são caracterizados pela resolução de enigmas que variam desde desafios lógicos até perguntas diversas.

Assim, o jogador assume o papel de um único personagem em sua jornada, que consiste em simular o processo de contratação de um serviço de buffet para a empresa Meta, enquanto enfrenta desafios de lógica e quebra-cabeças. Esses elementos são integrados em uma narrativa cativante e envolvente, proporcionando uma experiência imersiva ao jogador.  

### 2.2.2. Plataforma do Jogo (sprint 2)

Um computador é uma máquina que possibilita aos usuários realizar cálculos matemáticos, pesquisas e trabalhos utilizando programas específicos. Atualmente, uma variedade de tipos de computadores está disponível, sendo os mais comuns os desktops e os notebooks. Os notebooks se destacam pela sua portabilidade e leveza, possibilitando seu transporte para diferentes locais, ao passo que os desktops são estacionários, fixos na mesa.

Além disso, temos a World Wide Web, conhecida como Web, que é uma rede de computadores na Internet que oferece informações em forma de hipertexto. Ela proporciona uma representação virtual do mundo real, permitindo aos usuários explorar lugares sem sair de casa, conectar-se e interagir com pessoas ao redor do globo, participar de comunidades e muito mais.

Diante desses conceitos, o jogo Meta Supply será desenvolvido para dispositivos desktop e notebooks, utilizando sistemas operacionais web. Essa abordagem visa facilitar o acesso ao jogo, garantir um desempenho de processamento otimizado e evitar possíveis travamentos durante a jogabilidade.

### 2.2.3. Número de jogadores (sprint 2)

Com a proposta de oferecer uma experiência única e personalizada a cada jogador, o jogo foi concebido para ser jogado individualmente, permitindo que o colaborador desenvolva e demonstre suas habilidades de forma individualizada. Nesse sentido, cada partida será destinada a apenas um jogador, que poderá escolher entre diversos personagens e interagir com os personagens não jogáveis ao longo do jogo.

### 2.2.4. Títulos semelhantes e inspirações (sprint 2)

Para desenvolver o jogo Meta Supply, foram utilizados diversos jogos eletrônicos como fonte de inspiração, tanto para os desafios quanto para o design do jogo, incluindo títulos como "Habbo", "The Sims" e "Among Us".

"**Habbo**" é um jogo de simulação no qual os jogadores podem criar avatares, fazer amizades, construir quartos e desenvolver jogos. Ele oferece uma comunidade vibrante onde os jogadores podem expressar sua criatividade e originalidade, sendo acessível via web em computadores.

Da mesma forma, "**The Sims**" é outro jogo de simulação que busca simular a vida real, permitindo que os jogadores construam suas casas, construam carreiras, formem famílias e interajam com outros jogadores ao redor do mundo. Ele também enfatiza a diversidade e a personalização dos personagens conforme as preferências do jogador.

Por fim, "**Among Us**" apresenta uma jogabilidade simples e é conhecido por sua capacidade de conectar grupos de amigos. Nele, os jogadores devem realizar tarefas em uma nave espacial enquanto tentam descobrir quem são os impostores infiltrados, o que cria uma atmosfera de suspense e intriga. A interatividade proporcionada pelas tarefas simples é uma inspiração chave para o jogo Meta Supply.

### 2.2.5. Tempo estimado de jogo (sprint 5)

*Ex. O jogo pode ser concluído em 3 horas passando por todas as fases.*

*Ex. cada partida dura até 15 minutos*

# <a name="c3"></a>3. Game Design (sprints 2 e 3)

## 3.1. Enredo do Jogo (sprints 2 e 3)

A Meta é uma empresa reconhecida por sua vasta gama de produtos e serviços oferecidos em todo o mundo, especialmente em Metaville, onde todos os cidadãos utilizam seus produtos ou serviços. Um dos principais objetivos da empresa é inovar constantemente para atender melhor seu público, o que motiva a equipe de produção a trabalhar arduamente para lançar continuamente novidades e tendências.

O processo de desenvolvimento de um produto ou serviço demanda tempo e dedicação, e todos os funcionários se envolvem intensamente para garantir que todas as etapas sejam executadas corretamente. Como resultado, os colaboradores da empresa estão sempre focados em suas atividades.

O próximo lançamento em destaque é o novo Meta Quest 4, um óculos de realidade virtual que promete revolucionar o Metaverso e marcar um momento importante na história da empresa. No entanto, em meio a uma lista extensa de tarefas, ocorreu uma divisão na equipe de trabalho, e o jogador foi designado para organizar uma festa de lançamento memorável para todos os envolvidos.

Contudo, surge um problema: para realizar essa festa, é necessário contratar uma empresa de eventos ou um serviço de buffet e seguir todo o processo de contratação de fornecedores. Como o jogador estava concentrado em outras atividades, acabou não lendo o documento que explicava esse processo. Portanto, ele terá que embarcar em uma jornada guiada, enfrentando desafios e tomando decisões para alcançar o objetivo final.

## 3.2. Personagens (sprints 2 e 3)

### 3.2.1. Controláveis

José (figura 5) cresceu em uma comunidade simples, na periferia da cidade. Desde jovem, ele enfrentou obstáculos financeiros e sociais, mas sempre demonstrou uma incrível determinação e paixão por alcançar seus sonhos.
<div align="center">
<sub>Figura 5 - José - Personagem do Jogo</sub>
<img src="../assets/personagem1.png" width="75%">

<sup>Fonte: Material produzido pelos autores (2024)</sup>
</div>

Seu desejo de criar uma vida melhor para si mesmo e para sua comunidade o levou a se concentrar em seus estudos e buscar oportunidades de crescimento. Ao ingressar na faculdade, destacou-se em ciências da computação e programação. Sua habilidade excepcional chamou a atenção de uma empresa inovadora líder no desenvolvimento de soluções tecnológicas avançadas.

Embora o ambiente corporativo fosse novo ele trouxe consigo uma ética de trabalho inabalável e uma perspectiva única. Em sua jornada na Meta começou como estagiário, mas rapidamente com seu talento e dedicação foi promovido. 


### 3.2.2. Non-Playable Characters (NPC)

*\<opcional\> Se existirem coadjuvantes ou vilões, aqui é o local para descrevê-los e ilustrá-los. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes. Caso não existam NPCs, remova esta seção.*

### 3.2.3. Diversidade e Representatividade dos Personagens

Considerando as personagens do game, analise se estas estão alinhadas ao público-alvo do jogo (seção 1.3), e compare-as dentro da realidade da sociedade brasileira. Por fim, discorra sobre qual é o impacto esperado da escolha dessas personagens.

## 3.3. Mundo do jogo (sprints 2 e 3)

### 3.3.1. Locações Principais e/ou Mapas (sprints 2 e 3)

*Conforme dados fornecidos pela Meta, sua sede principal está localizada em Menlo Park, Califórnia. A partir dessa informação, uma série de estudos sobre a cidade foi conduzida, e os resultados dessas pesquisas serviram de inspiração para a construção de Metaville, a cidade fictícia onde o jogo se passa.*

*Menlo Park está situada no condado de San Mateo e foi fundada em 1854 por dois empresários que investiram na construção de uma ferrovia, posteriormente adquirindo vastas extensões de terra na região e contribuindo para o estabelecimento de uma comunidade ao redor da estação ferroviária. Hoje em dia, Menlo Park é caracterizada por seus bairros encantadores, arborizados e diversos distritos comerciais.*

*Além disso, os moradores do distrito representam uma variedade de origens, são bem-educados e engajados na vida comunitária, desfrutando dos parques e instalações recreativas da cidade. O centro da cidade oferece uma variedade de lojas e restaurantes exclusivos, com ambientes agradáveis e voltados para pedestres.*

*Menlo Park também é reconhecida como a "Capital do Capital de Risco", pois desempenha um papel fundamental no fomento e no desenvolvimento de novas tecnologias e mercados provenientes do Vale do Silício.*

*Com base em todas essas características de Menlo Park, foi concebida Metaville, uma cidade fictícia tranquila e pacífica, repleta de estabelecimentos comerciais, locais de interesse e, notavelmente, a sede de uma das maiores empresas de tecnologia do mundo: a Meta. Conforme retratado no mapa da cidade (ver figura abaixo), Metaville possui áreas residenciais, comerciais e uma variedade de parques e atrações culturais para seus habitantes.*

<img src="../assets/mapa.png">

*Além disso, no mapa há estabelecimentos que são interativos, ou seja, que o usuário pode acessar, e aqueles que apenas compõem o cenário. As locações que os jogadores poderão acessar são:* <br>
*Escritório da Meta;* <br>
GourmetPark; <br>
SaborVille;<br>
Metaville Fest;<br>
GulaVIP; <br>
Meta Bank; <br>
Tribunal; <br>

<img src="../assets/mapa2.png">

*Esses locais foram divididos de forma que o jogador pudesse passar em cada um dos 4 cantos do mapa de acordo com a fase do jogo em que ele está. O jogador irá iniciar o jogo dentro do escritório da meta (a), na segunda fase ele terá que passar por todos os serviços de buffet (b, c, d, e), as próximas quatro fases ocorrem dentro do escritório da Meta, enquanto a sétima ocorre no tribunal (g), perto da finalização do jogo, na oitava fase o jogador irá até um dos buffets, na nona volta para o escritório, na décima ele irá até o banco (f) e para finalizar o jogo, o jogador poderá estar em qualquer lugar do mapa para realizar o encerramento.* <br>

*Dessa forma, cada um dos locais interativos ou que o jogador poderá acessar possui um mapa próprio, ou seja, o escritório da Meta, os buffets, o banco e o tribunal possuem o seu próprio mapa. O primeiro mapa é o do escritório da Meta (figura abaixo), que foi inspirado em elementos dos escritórios da Meta ao redor do mundo.*<br>

<img src="../assets/mapa3.png">


*A construção desse mapa iniciou pelo piso, que foi feito em tons de cinza e formato quadriculado, assim como os escritórios da Meta em Westlake, Boston, Chicago e Dublin (). Além disso, na maioria dos escritórios da empresa há espaços para recreação dos funcionários, assim foi utilizado no mapa os formatos de sofás mais parecidos com os sofás do The Bowl - MPK 21 e do escritório em Dublin().*  

*No mapa acima também há estantes com livros, assim como no escritório de Chicago, também há os computadores dos colaboradores que foram inseridos em bancadas compartilhadas como no escritório de engenharia da Meta em Boston e há uma sala de reunião inspirada na sala de conferência da Meta em Tel Aviv. Ademais, foi observado na Meta em Chicago e em Boston uma copa com alimentos, bebidas, máquinas de café e de comida, logo foram inseridos esses elementos no mapa. Por fim, o quadro presente na sala de reunião do mapa foi uma representação dos escritórios em Westlake, Boston e Tóquio que possuem ao menos uma parede pintada com cores marcantes. 
Além disso, os assets utilizados para a construção desses cenários foram: Modern Interiors, Modern Office e Modern Exteriors, que foram produzidos por LimeZu.*


### 3.3.2. Navegação pelo mundo (sprints 2 e 3)

*Conforme apresentado na seção 3.3.1, o jogo se passa em Metaville, uma cidade fictícia, e para o jogador andar pelo mundo é necessário utilizar as setas do teclado para ir para cima, para baixo, para a esquerda ou para a direita. O jogador sempre inicia a partida pelo escritório da Meta, porém pode andar livremente pelo mapa.*

*Além disso, o jogo foi organizado em 11 fases e o jogador só passa de fase quando concluir corretamente o desafio da fase em que ele está, não podendo pular ou avançar sem ter concluído a tarefa. Sendo assim, cada fase possui uma task que o jogador precisa concluir para ganhar o jogo, essas tarefas são:*

*Fase 1: Escolher os quatro melhores fornecedores entre os seis disponíveis no computador do escritório, por meio de um jogo de seleção.*

*Fase 2: Conversar com o representante de cada um dos quatro buffets selecionados, e responder um questionário de alternativa sobre quais buffets atendem aos requisitos necessários.*

*Fase 3: Completar um acordo de confidencialidade de forma correta com base nas palavras que foram disponibilizadas para o jogador (encaixar as palavras no texto apresentado).*

*Fase 4: Enviar uma mensagem para os fornecedores informando quais serviços irá precisar.*

*Fase 5: Por meio de um questionário de alternativa o jogador deverá escolher as perguntas mais relevantes para a criação de um formulário, após um tempo o colaborador deverá analisar a resposta  e selecionar as duas melhores respostas.*

*Fase 6: Completar um formulário de cadastro com as informações dos fornecedores dadas no formulário da fase anterior;*

*Fase 7: Atuar como jurado do julgamento dos fornecedores no tribunal da cidade, tendo que selecionar apenas um fornecedor.*

*Fase 8: por meio de um puzzle de ligar, o jogador deverá definir qual o preço, prazo de entrega e cláusulas de qualidade do serviço.*

*Fase 9: No computador do escritório, o jogador deve emitir a ordem de compra e depois acompanhar a festa, garantindo que receberá a nota fiscal.*

*Fase 10: Ir até o banco e realizar a transferência do valor definido na fase 8, informando: número da agência, da conta e valor.*

*Fase 11: Selecionar os botões de conclusão do jogo para finalizar o contato.*

*Portanto, o jogador pode se movimentar livremente pela cidade, porém ele só conseguirá entrar dentro dos estabelecimentos se concluir as tarefas referentes a cada fase.*

### 3.3.3. Condições climáticas e temporais (sprints 2 e 3)

*O jogo Meta Supply se passa em um cenário urbano que não possui mudanças climáticas, ou seja, o clima do jogo permanece fixo independente do local no mapa que o jogador se posiciona. Além disso, não há mudanças temporais, então o jogo não diferencia noite ou dia. Além disso, as mecânicas do jogo não consideraram o tempo, então cada jogador está livre para concluir cada fase no período mais conveniente.*

*Em resumo, o jogo não é afetado por condições climáticas e temporais, pois essas mecânicas permanecem constantes durante todo o jogo.*

### 3.3.4. Concept Art (sprint 2)

*Inclua imagens de Concept Art do jogo que ainda não foram demonstradas em outras seções deste documento. Para cada imagem, coloque legendas, como no exemplo abaixo.*

<img src="../assets/concept1.jpg">

Figura 1: detalhe da cena da partida do herói para a missão, usando sua nave

### 3.3.5. Trilha sonora (sprint 3)

*Descreva a trilha sonora do jogo, indicando quais músicas serão utilizadas no mundo e nas fases. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.*

*Exemplo de tabela*
\# | titulo | ocorrência | autoria
--- | --- | --- | ---
1 | tema de abertura | tela de início | própria
2 | tema de combate | cena de combate com inimigos comuns | Hans Zimmer
3 | ... 

## 3.4. Inventário e Bestiário (sprint 3)

### 3.4.1. Inventário

*\<opcional\> Caso seu jogo utilize itens ou poderes para os personagens obterem, descreva-os aqui, indicando títulos, imagens, meios de obtenção e funções no jogo. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Exemplo de tabela*
\# | item |  | como obter | função | efeito sonoro
--- | --- | --- | --- | --- | ---
1 | moeda | <img src="../assets/coin.png"> | há muitas espalhadas em todas as fases | acumula dinheiro para comprar outros itens | som de moeda
2 | madeira | <img src="../assets/wood.png"> | há muitas espalhadas em todas as fases | acumula madeira para construir casas | som de madeiras
3 | ... 

### 3.4.2. Bestiário

*\<opcional\> Caso seu jogo tenha inimigos, descreva-os aqui, indicando nomes, imagens, momentos de aparição, funções e impactos no jogo. Utilize listas ou tabelas para organizar esta seção. Caso utilize material de terceiros em licença Creative Commons, não deixe de citar os autores/fontes.* 

*Exemplo de tabela*
\# | inimigo |  | ocorrências | função | impacto | efeito sonoro
--- | --- | --- | --- | --- | --- | ---
1 | robô terrestre | <img src="../assets/inimigo2.PNG"> |  a partir da fase 1 | ataca o personagem vindo pelo chão em sua direção, com velocidade constante, atirando parafusos | se encostar no inimigo ou no parafuso arremessado, o personagem perde 1 ponto de vida | sons de tiros e engrenagens girando
2 | robô voador | <img src="../assets/inimigo1.PNG"> | a partir da fase 2 | ataca o personagem vindo pelo ar, fazendo movimento em 'V' quando se aproxima | se encostar, o personagem perde 3 pontos de vida | som de hélice
3 | ... 

## 3.5. Gameflow (Diagrama de cenas) (sprint 2)

*Posicione aqui seu "storyboard de programação" - o diagrama de cenas do jogo. Indique, por exemplo, como o jogo começa, quais opções o jogador tem, como ele avança nas fases, quais as condições de 'game over', como o jogo reinicia. Seu diagrama deve representar as classes, atributos e métodos usados no jogo.*

## 3.6. Regras do jogo (sprint 3)

*Descreva aqui as regras do seu jogo: objetivos/desafios, meios para se conseguir alcançar*

*Ex. O jogador deve pilotar o carro e conseguir terminar a corrida dentro de um minuto sem bater em nenhum obstáculo.*

*Ex. O jogador deve concluir a fase dentro do tempo, para obter uma estrela. Se além disso ele coletar todas as moedas, ganha mais uma estrela. E se além disso ele coletar os três medalhões espalhados, ganha mais uma estrela, totalizando três. Ao final do jogo, obtendo três estrelas em todas as fases, desbloqueia o mundo secreto.*  

## 3.7. Mecânicas do jogo (sprint 3)

*Descreva aqui as formas de controle e interação que o jogador tem sobre o jogo: quais os comandos disponíveis, quais combinações de comandos, e quais as ações consequentes desses comandos. Utilize listas ou tabelas para organizar esta seção.*

*Ex. Em um jogo de plataforma 2D para desktop, o jogador pode usar as teclas WASD para mecânicas de andar, mirar para cima, agachar, e as teclas JKL para atacar, correr, arremesar etc.*

*Ex. Em um jogo de puzzle para celular, o jogador pode tocar e arrastar sobre uma peça para movê-la sobre o tabuleiro, ou fazer um toque simples para rotacioná-la*

# <a name="c4"></a>4. Desenvolvimento do Jogo

## 4.1. Desenvolvimento preliminar do jogo (sprint 1)

Para o desenvolvimento preliminar no jogo foram realizados testes de cenários, escolhas de design e algumas diretrizes para o jogo. Nesses testes de cenário foram produzidos dois andares de um possível prédio da Meta, na primeira imagem(figura 5) consta uma sala da recepção para visitantes e na segunda (figura 6) consta o ambiente de trabalho dos colaboradores da empresa.

<img src="../assets/salaRecepcao.png">

*Figura 5. Ambiente de Recepção. Fonte: Autor Próprio(2024)*.</br>

<img src="../assets/escritorio.png">

*Figura 6. Escritório dos Colaboradores da Meta. Fonte: Autor Próprio(2024).* </br>

Quanto ao jogo preliminar foi utilizado um cenário mais limpo, que contém apenas o piso e as paredes do escritório, conforme consta na imagem abaixo.

<img src="../assets/modeloArt2.png">

*Figura 7. Cenário Preliminar do Game. Fonte: Autor Próprio(2024)*.</br>

Nesse último cenário foi adicionado um spritesheet de um personagem, conforme consta abaixo.

<img src= "../assets/AmeliaFull.png">

*Figura 8. SpriteSheet do Personagem. Fonte: Autor Próprio(2024).*</br>

Para a movimentação do personagem foi realizado uma sequência de códigos, iniciando pela construção da página em HTML (figura 9), seguido das configurações do jogo em JavaScript (figura 10), da função de carregamento de objetos - Preload (figura 11), da função create para adicionar os objetos na cena (figura 12), da função update para garantir a interatividade e movimentação do personagem (figura 13).

<img src="../assets/codigoHtml.png">

*Figura 9. Código em HTML. Fonte: Autor Próprio(2024).*</br>

<img src="../assets/codigoParte1.png">

*Figura 10. Configurações do Jogo. Fonte: Autor Próprio(2024).*</br>

<img src="../assets/codigoParte2.png">

*Figura 11. Função Preload. Fonte: Autor Próprio(2024).*</br>

<img src="../assets/codigoParte3.png">

*Figura 12. Função Create. Fonte: Autor Próprio(2024).*</br>

<img src="../assets/codigoParte4.png">

*Figura 13. Função Update. Fonte: Autor Próprio(2024).*</br>


## 4.2. Desenvolvimento básico do jogo (sprint 2)

*Descreva e ilustre aqui o desenvolvimento da versão básica do jogo, explicando brevemente o que foi entregue em termos de código e jogo. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.3. Desenvolvimento intermediário do jogo (sprint 3)

*Descreva e ilustre aqui o desenvolvimento da versão intermediária do jogo, explicando brevemente o que foi entregue em termos de código e jogo. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e próximos passos.*

## 4.4. Desenvolvimento final do MVP (sprint 4)

*Descreva e ilustre aqui o desenvolvimento da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar. Indique as eventuais dificuldades e planos futuros.*

## 4.5. Revisão do MVP (sprint 5)

*Descreva e ilustre aqui o desenvolvimento dos refinamentos e revisões da versão final do jogo, explicando brevemente o que foi entregue em termos de MVP. Utilize prints de tela para ilustrar.*

# <a name="c5"></a>5. Testes (sprint 4)

## 5.1. Casos de Teste

*Descreva nesta seção os casos de teste comuns que podem ser executados a qualquer momento para testar o funcionamento e integração das partes do jogo. Utilize tabelas para facilitar a organização.*

*Exemplo de tabela*
\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | posicionar o jogo na tela de abertura | iniciar o jogo desde seu início | o jogo deve iniciar da fase 1
2 | posicionar o personagem em local seguro de inimigos | aguardar o tempo passar até o final da contagem | o personagem deve perder uma vida e reiniciar a fase
3 | ...

## 5.2. Testes de jogabilidade (playtests) (sprint 4)

### 5.2.1 Registros de testes

*Descreva nesta seção as sessões de teste/entrevista com diferentes jogadores. Registre cada teste conforme o template a seguir.*

Nome | João Jonas (use nomes fictícios)
--- | ---
Já possuía experiência prévia com games? | sim, é um jogador casual
Conseguiu iniciar o jogo? | sim
Entendeu as regras e mecânicas do jogo? | entendeu as regras, mas sobre as mecânicas, apenas as essenciais, não explorou os comandos complexos
Conseguiu progredir no jogo? | sim, sem dificuldades  
Apresentou dificuldades? | Não, conseguiu jogar com facilidade e afirmou ser fácil
Que nota deu ao jogo? | 9.0
O que gostou no jogo? | Gostou  de como o jogo vai ficando mais difícil ao longo do tempo sem deixar de ser divertido
O que poderia melhorar no jogo? | A responsividade do personagem aos controles, disse que havia um pouco de atraso desde o momento do comando até a resposta do personagem

### 5.2.2 Melhorias

*Descreva nesta seção um plano de melhorias sobre o jogo, com base nos resultados dos testes de jogabilidade*

# <a name="c6"></a>6. Conclusões e trabalhos futuros (sprint 5)

*Escreva de que formas a solução do jogo atingiu os objetivos descritos na seção 1 deste documento. Indique pontos fortes e pontos a melhorar de maneira geral.*

*Relacione os pontos de melhorias evidenciados nos testes com plano de ações para serem implementadas no jogo. O grupo não precisa implementá-las, pode deixar registrado aqui o plano para futuros desenvolvimentos.*

*Relacione também quaisquer ideias que o grupo tenha para melhorias futuras*

# <a name="c7"></a>7. Referências (sprint 5)


LUCK, Heloisa. Liderança em gestão escolar. 4. ed. Petrópolis: Vozes, 2010. <br>

Sebrae. Guia de boas práticas em diversidade e inclusão para micro e pequenas empresas. <br>Disponível em: https://bibliotecas.sebrae.com.br/chronus/ARQUIVOS_CHRONUS/bds/bds.nsf/2ed14d56fbc0a5cd9decd065eba6558c/$File/30715.pdf.

FERNANDO, L. et al. JOGOS DIGITAIS Princípios, conceitos e práticas. [s.l: s.n.]. Disponível em: <https://repositorio.ifes.edu.br/bitstream/handle/123456789/812/jogos_digitais.pdf?sequence=1&isAllowed=y>.

LEONARDO, E. et al. Introdução aos Jogos Digitais Desenvolvimento, Produção e Design. [s.l: s.n.]. Disponível em: <https://central3.to.gov.br/arquivo/453377/>.

‌MOBA, RPG, MMORPG, FPS e mais: entenda significado dos gêneros de games. Disponível em: <https://www.techtudo.com.br/noticias/2021/03/moba-rpg-mmorpg-fps-e-mais-entenda-significado-dos-generos-de-games.ghtml>.

INFORMÁTICA BÁSICA Eixo Conhecimento em Rede. [s.l: s.n.]. Disponível em: <https://esesp.es.gov.br/Media/esesp/Apostilas/Apostila%20Completa%20-%20Inform%C3%A1tica%20B%C3%A1sica%2032h.pdf>.

‌Pokémon GO. Disponível em: <https://www.pokemon.com/br/app/pokemon-go>. 

‌Habbo. Disponível em: <https://www.habbo.com.br/playing-habbo/what-is-habbo>. 

ARTS, E. Jogos The SimsTM - Site Oficial da EA. Disponível em: <https://www.ea.com/pt-br/games/the-sims>.

‌Quem criou o Among Us? Veja quando foi lançado, o que significa e mais. Disponível em: <https://www.techtudo.com.br/noticias/2021/03/quem-criou-o-among-us-veja-quando-foi-lancado-o-que-significa-e-mais.ghtml>.

Informações sobre a empresa. Disponível em: <https://about.fb.com/br/company.info/>.

‌Disponível em: <https://menlopark.gov/Community/City-profile>. 

‌LimeZu. Disponível em: <https://limezu.itch.io/>.

‌
