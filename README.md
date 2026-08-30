# 🍽️ Sabor & Encanto — Website de Restaurante

**Projeto académico em equipa — Interação Homem-Máquina**
**Equipa: A Quarta Essência**

> ⚠️ Este repositório documenta especificamente a minha contribuição no projeto: **todo o JavaScript** (interatividade, carrinho de compras e envio de pedidos). O restante trabalho (estrutura HTML, estilização CSS, conteúdo) foi desenvolvido em conjunto com os colegas de equipa.

Website para o restaurante fictício **Sabor & Encanto**, desenvolvido para proporcionar uma experiência de encomenda online simples, rápida e interativa, com aplicação prática de princípios de Interação Homem-Máquina (IHM) e usabilidade.

## 🛒 Fluxo de utilização

1. O cliente acede ao site e visualiza os pratos em destaque
2. Ao clicar no ícone de carrinho num prato, o item é adicionado ao carrinho flutuante
3. No carrinho flutuante, o cliente pode aumentar/diminuir quantidades ou remover itens
4. Ao clicar em **"Pedir"**, é redirecionado para um formulário de finalização
5. O formulário valida os campos obrigatórios (nome, contacto, endereço) antes de avançar
6. Ao confirmar, é gerada automaticamente uma mensagem de sucesso e o pedido é enviado via **WhatsApp**, já com a lista de pratos, quantidades e dados do cliente preenchidos

## 💻 A minha contribuição — JavaScript

Responsável por toda a camada de interatividade do site, incluindo:

- Lógica do carrinho flutuante (adicionar, remover, incrementar/decrementar quantidades)
- Validação dos campos do formulário de finalização de pedido, com bloqueio de submissão em caso de erro
- Geração automática da mensagem de confirmação ("Pedido foi enviado com sucesso!")
- Construção e envio da mensagem estruturada para o WhatsApp, com a lista de pratos e os dados do formulário

## 🎨 Design

- **Paleta de cores:** `#FFFFFF`, `#FBFBF9`, `#FFBC0D`, `#000000`
- **Tipografia:** Montserrat
- Design moderno, intuitivo e acolhedor, com troca de imagens na página inicial, ícones e fotos dos pratos, e secções com hierarquia visual clara

## 🧠 Princípios de IHM aplicados

| Fator | Como foi aplicado |
|---|---|
| Interação | Menus clicáveis, formulários e botões de ação como "Peça agora" |
| Interatividade | Elementos do formulário dialogam continuamente com o utilizador |
| Comunicação | Linguagem simples e direta, reforçada por ícones e imagens |
| Ergonomia | Boa legibilidade, espaçamento adequado, contraste eficiente, responsivo |
| Cognição | Hierarquia visual e ícones conhecidos, facilitando reconhecimento e aprendizagem |

Foram também aplicadas heurísticas de usabilidade (liberdade do utilizador, prevenção de erros, consistência de padrões) e boas práticas de SEO (atributos `alt`, palavras-chave, responsividade, otimização de carregamento).

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript (ECMAScript 2024)
- Ferramentas: Visual Studio Code, Gedit, Figma (protótipos)

## 👥 Equipa

Íris da Costa (JavaScript), Jonilson Nhanhga, Mariano Bartolomeu, Marlene Francisco — Universidade Católica de Angola, 2025.
