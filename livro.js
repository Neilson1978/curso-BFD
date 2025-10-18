class Livro {
 // Complete o construtor aqui
 constructor(titulo, autor, anoPublicacao) {
 // Inicialize as propriedades aqui
 this.titulo = titulo;
 this.autor = autor;
 this.anoPublicacao = anoPublicacao;
 this.disponivel = true;
 }

 // Implemente os métodos abaixo
 obterInformacoes() {
 // Deve retornar uma string com título, autor e ano
 return `${this.titulo} por ${this.autor} (${this.anoPublicacao})`;
 }

 estaDisponivel() {
 // Deve retornar true se o livro estiver disponível
 return this.disponivel;
 }

 emprestar() {
 // Deve marcar o livro como indisponível
 this.disponivel = false;
 }

 devolver() {
 // Deve marcar o livro como disponível
 this.disponivel = true;
 }
}
function carregarLivrosTabela(){
    const livros = [
        new Livro("Dom Casmurro", "Machado de Assis", 1899),
        new Livro("Vidas secas", "Graciliano Ramos", 1938),
        new Livro("O alquimista", "Paulo Coelho", 1988),
        new Livro("O cortiço", "Aluísio Azevedo", 1890),
        new Livro("Iracema", "José de Alencar", 1865),
        new Livro("O Alienista", "Machado de Assis", 1882),
        new Livro("Os sertões", "Euclídes da Cunha", 1902),
    ];
    livros[3].emprestar();
    let tableLivros = document.getElementById("livros-tbody");
    for (let livro of livros) {
        let row = document.createElement("tr");
        let titulo = document.createElement("td");
        titulo.textContent = livro.titulo;
        let autor = document.createElement("td");
        autor.textContent = livro.autor;
        let ano = document.createElement("td");
        ano.textContent = livro.anoPublicacao;
        let disponivel = document.createElement("td");
        disponivel.textContent = livro.estaDisponivel() ? "Sim" : "Não";
        let tdEmprestar = document.createElement("td");
    
        let btnEmprestar = document.createElement("button");
        btnEmprestar.textContent = "Emprestar";
        btnEmprestar.disabled = !livro.estaDisponivel();
        btnEmprestar.addEventListener("click", ()=> {
            livro.emprestar();
            disponivel.textContent = "Não";
            btnEmprestar.disabled = true;
        });
        tdEmprestar.appendChild(btnEmprestar);
        row.appendChild(titulo);
        row.appendChild(autor);
        row.appendChild(ano);
        row.appendChild(disponivel);
        row.appendChild(tdEmprestar);
        tableLivros.appendChild(row);   
    }
}
document.addEventListener("DOMContentLoaded", carregarLivrosTabela);
// Teste sua implementação
const meuLivro = new Livro("Dom Casmurro", "Machado de Assis", 1899);
console.log(meuLivro.obterInformacoes());
console.log("Disponível:", meuLivro.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro.estaDisponivel());
meuLivro.devolver();
console.log("Disponível após devolução:", meuLivro.estaDisponivel());
const meuLivro2 = new Livro("Vidas secas", "Graciliano Ramos", 1938);
console.log(meuLivro2.obterInformacoes());
meuLivro2.emprestar();
console.log("Disponível:", meuLivro2.estaDisponivel());
meuLivro2.emprestar();
console.log("Disponível após empréstimo:", meuLivro2.estaDisponivel());
meuLivro2.devolver();
console.log("Disponível após devolução:", meuLivro2.estaDisponivel());
const meuLivro3 = new Livro("O alquimista", "Paulo Coelho", 1988);
console.log(meuLivro3.obterInformacoes());
console.log("Disponível:", meuLivro3.estaDisponivel());
meuLivro3.emprestar();
console.log("Disponível após empréstimo:", meuLivro3.estaDisponivel());
meuLivro3.devolver();
console.log("Disponível após devolução:", meuLivro3.estaDisponivel());
const meuLivro4 = new Livro("O cortiço", "Aluísio Azevedo", 1890);
console.log(meuLivro4.obterInformacoes());
meuLivro4.emprestar();
console.log("Disponível:", meuLivro4.estaDisponivel());
meuLivro4.emprestar();
console.log("Disponível após empréstimo:", meuLivro4.estaDisponivel());
meuLivro4.devolver();
console.log("Disponível após devolução:", meuLivro4.estaDisponivel());
const meuLivro5 = new Livro("Capitães de areia", "Jorge Amado", 1937);
console.log(meuLivro5.obterInformacoes());
console.log("Disponível:", meuLivro5.estaDisponivel());
meuLivro5.emprestar();
console.log("Disponível após empréstimo:", meuLivro5.estaDisponivel());
meuLivro5.devolver();
console.log("Disponível após devolução:", meuLivro5.estaDisponivel());