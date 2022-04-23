# artezaria
> Projeto de uma loja de compra e venda de artes em geral. Requisito parcial da disciplina de Introdução ao Desenvolvimento Web (SCC0219) do curso de Ciências de Computação do ICMC/USP durante o 1º semestre de 2022.

## 1. Requerimentos

* O sistema tem dois tipos gerais de usuários: **clientes** e **administradores**; **clientes** podem ativar a funcionalidade de **artesão** e se tornarem **clientes artesãos**:
  
  * Administradores são responsáveis por registrar e gerenciar administradores, clientes, e produtos ou serviços disponivilizados. A aplicação já disponibiliza uma conta *admin* com a senha *admin*.
  
  * Clientes são usuários que acessam o sistema para comprar produtos.

  * Clientes artesãos são clientes que, tendo ativada a funcionalidade de artesão, acessam o sistema para anunciar produtos.

* O registro de administrador inclui, no mínimo, `nome`, `id`, `phone` e `email`.

* Cada registro de cliente inclui, no mínimo, nome, `id`, `phone` e `email`.

* O registro de produtos e serviços inclui, no mínimo, `id`, `photo`, `description`, `price`, `quantity_in_stock` e `quantity_sold`.

* A loja pode vender produtos, serviços ou ambos.

* Processo de venda de um produto: produtos são selecionados, sua quantidade escolhida e incluídos no carrinho. Produtos são comprados usando um número de cartão de crédito (sem validação). A quantidade de produtos vendidos é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados apenas após o pagamento ou, então, pelos clientes.

* Manutenção de produtos
  
  * Administradores podem criar, atualizar, ler e deletar produtos.

  * Clientes artesãos podem criar, atualizar, ler e deletar seus próprios produtos.

* O sistema tem uma funcionalidade extra de valorização aos clientes artesãos da plataforma. Todos eles têm páginas dedicadas contando com descrição e recursos de mídia.

* O sistema provê recursos de acessibilidade e boa usabilidade. O sistema é responsivo.

## 2. Descrição do projeto

**artezaria** é uma plataforma de compra e venda de obras de arte, como quadros, artesanatos, esculturas, sendo eles de produção única ou em larga quantidade. O foco principal é no comércio dos produtos, mas, também, de valorização de artistas, suas artes e histórias. 

A plataforma, até o momento, está implementada usando HTML, CSS, alguns componentes do [Material Design](batata.com) e o carrossel do framework [Owl Carousel 2](batata.com) para a exibição dos produtos e os scripts necessários para o funcionamento dos elementos.

### 2.1. Diagramas de navegação
Para organizar os conjuntos de telas, foram desenvolvidos diagramas de navegação para o cliente e administrador.

#### Diagrama do Cliente
![diagrama_cliente.jpg](imagens%5Creadme%5Cdiagrama_cliente.jpg)

#### Diagrama do administrador
![diagrama_admin.jpg](imagens%5Creadme%5Cdiagrama_admin.jpg)

Os mockups desenvolvidos para as páginas do cliente estão sob a pasta `imagens/telas`, na raiz do projeto, com nomes correspondentes aos itens dos diagramas de tela.

### 2.2. Funcionalidades propostas para o sistema

Através das telas propostas, os autores esperam que, através do sistema:

1. Um usuário qualquer possa entrar com e-mail e senha na plataforma, cadastrar-se e alterar informações sobre seu próprio cadastro, através das telas `Entrar/Cadastrar` e `Perfil`;
2. Um cliente possa visualizar, adicionar ao carrinho e comprar Produtos disponíveis no site, através das telas `Tela Inicial`, `Produto`, `Carrinho` e `Pagamento`;
3. Um cliente possa visualizar a página de descrição de artistas ativos na plataforma, seus vídeos e materiais, através da tela `Artesão`;
4. Um cliente possa se tornar um cliente artesão, gerenciar suas informações de artesão, seus anúncios ativos e vendas em processo, através das telas `Perfil do artesão`, `Gerenciar vendas` e `Gerenciar anúncios`;
5. Um administrador possa gerenciar o sistema, administradores, anúncios e usuários através das telas `Dashboard`, `Gerenciar anúncios`, `Gerenciar anúncios`.

## 3. Comentários sobre o código
Atualmente, o código-fonte do site está disposto sob a pasta `site`. Nela, estão as pastas `css`, com os estilos desenvolvidos, `pages`, com as páginas desenvolvidas e os demais arquivos utilizados pelas ferramentas externas utilizadas.

## 4. Plano de testes
Atualmente, o projeto foi executado apenas no navegador Google Chrome, sem problemas aparentes de execução. Quando houver a possibilidade de uso de frameworks e servidor, serão utilizadas as ferramentas adequadas para testes, como, por exemplo, JUnit e Postman.

## 5. Procedimentos de execução
Atualmente, basta realizar o download do repositório, navegar até a pasta em que estão dispostos os protótipos desenvolvidos e abrir num navegador web.

## 6. Problemas

* **Construção dos protótipos iniciais**: a intenção do grupo era utilizar os componentes (campos de texto, botões e cards) disponibilizados pelo Material Design. Isso não foi plenamente possível pois, para a implementação, seriam necessários arquivos de configuração personalizados externos aos `.html` e `.css` criados.

## Autores

* [Gustavo Henrique Brunelli (NUSP)](https://github.com/gbrunelli)

* [Matheus Henrique de Cerqueira Pinto (11911104)](https://github.com/cerqueiramatheus)

* [Matheus Ventura de Sousa (NUSP)](https://github.com/matheus-sousa007)
