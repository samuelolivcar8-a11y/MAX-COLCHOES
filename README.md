# Max Colchões — sistema para GitHub Pages

## O que já está pronto
- Vitrine pública responsiva.
- Hero com a foto original da cama.
- Busca e filtros.
- Página individual de produto.
- WhatsApp e Google Maps.
- Área administrativa `/admin`.
- Login demonstrativo.
- Cadastro, edição e exclusão de produtos.
- Controle de estoque.
- Registro de vendas.
- Faturamento e indicadores.
- Gráfico dos últimos 7 dias.
- Clientes derivados das vendas.
- Configurações do WhatsApp.
- Persistência com `localStorage`.

## Login de demonstração
E-mail: `admin@maxcolchoes.com`
Senha: `123456`

## Como colocar no GitHub
1. Crie um repositório novo.
2. Envie TODOS os arquivos e pastas mantendo a estrutura.
3. Ative GitHub Pages em Settings > Pages.
4. Abra o endereço publicado.

## Importante
Esta versão foi preparada para funcionar sem servidor, diretamente no GitHub Pages. O painel salva os dados no navegador usando `localStorage`. Isso é ótimo para demonstração e protótipo comercial, mas NÃO é uma autenticação segura nem um banco de dados compartilhado para uma operação real. Para produção, conecte o mesmo front-end a Supabase/Firebase e mova autenticação, produtos, vendas e estoque para o backend.

## Fotos
As fotos de referência fornecidas na conversa foram copiadas para `assets/`. Para adicionar fotos de novos produtos, coloque-as em `assets/produtos/` e informe o caminho no cadastro.
