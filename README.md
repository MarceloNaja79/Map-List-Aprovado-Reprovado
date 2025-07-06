# MAP Lista de Aprovados e Reprovados (Java Script)
### Criei um arquivo JavaScript (students_list.js) que utiliza o método MAP para gerar uma nova lista de alunos, 
incluindo o status de Aprovado ou Reprovado com base na nota mínima de 5.

<figuri>
<img src="https://github.com/MarceloNaja79/Map-List-Aprovado-Reprovado/blob/97a754a954efe7c5a6fe88792751e130c0ca432a/Map.Lista%20de%20Aprovado%20e%20Reprovado.PNG" />
<figcaption>Foto do Codigo Java Script</figcaption>
<figuri/>

# Como Funciona

 1. students Array: Este é o array original que você forneceu, contendo objetos onde cada objeto representa um aluno com seu name (nome) e testGrade (nota do teste).

2. MIN_GRADE Constante: Define a nota mínima necessária para que um aluno seja considerado Aprovado. Neste caso, é 5.

3. Map Método:

• O método Map é chamado no array students. Ele itera sobre cada elemento (cada objeto de aluno) do array original.

• Para cada student (aluno), uma nova função de callback é executada.

• Dentro dessa função, um novo objeto é retornado. Este novo objeto contém as propriedades name e testGrade do aluno original.

• A propriedade status é adicionada a este novo objeto. Seu valor é determinado por uma expressão ternária (student.testGrade >= MIN_GRADE ? 'Aprovado' : 'Reprovado').

• Se a testGrade do aluno for maior ou igual a MIN_GRADE (5), o status será Aprovado.

Caso contrário, o status será Reprovado.

4.studentsWithStatus Array: O Map retorna um novo array (studentsWithStatus) que contém todos os novos objetos criados, cada um com o nome, a nota e o status de aprovação/reprovação.

5. console.log: No final, o console.log exibe o studentsWithStatus no console, mostrando a lista final com o status de cada aluno.

<figuri>
<img src="" />
<figcaption>Foto do Codigo Java Script</figcaption>
<figuri/>

<h3 italic>Fique avontade para visitar o Projeto. <a /> Ir para o Site </h3>
