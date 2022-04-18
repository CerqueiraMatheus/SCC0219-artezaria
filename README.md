# artezaria
> Descrição curta

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

## 3. Comentários sobre o código

## 4. Plano de testes

## 5. Procedimentos de execução

## 6. Problemas

* **Construção dos protótipos iniciais**: a intenção do grupo era utilizar os componentes (campos de texto, botões e cards) disponibilizados pelo Material Design. Isso não foi plenamente possível pois, para a implementação, seriam necessários arquivos de configuração personalizados externos aos `.html` e `.css` criados.

## Autores

* [Gustavo Henrique Brunelli](https://github.com/gbrunelli)

* [Matheus Henrique de Cerqueira Pinto](https://github.com/cerqueiramatheus)

* [Matheus Ventura de Sousa](https://github.com/matheus-sousa007)
