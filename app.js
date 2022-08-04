/**************************************

* Obejtivo: Criar sistema que gerencie as medias escolares de uma universidade
* Autor: Antony Gabriel
* Data Criaçao: 04/08/2022
* Ultima atualizacao: 04/08/2022
* Autor: 
* Finalidade: 
* Versão: 1.0

****************************************/

console.log('\nEXERCICIO PARA CALCULAR A MEDIA \n');

//Import da biblioteca readline (perminete interagir com o usuario)
var readline = require('readline');

//Instancia o objeto para criar a interacao com o usuario
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Nome do aluno/a: \n', function(nomeAluno){

    let nomeA = nomeAluno

    entradaDados.question('\nNome do professor/a: \n', function(nomeProfessor){

        let nomeP = nomeProfessor

        entradaDados.question('\nSexo do aluno/a: \n', function(sexoAluno){

            let sexoA = sexoAluno

            entradaDados.question('\nSexo do professor/a: \n',function(sexoProfessor){

                let sexoP = sexoProfessor

                entradaDados.question('\nCurso: \n', function(curso){

                    let cursoRealizado = curso  

                    entradaDados.question('\nDisciplina: \n', function(disciplina){

                        let disciplinaRealizada = disciplina

                        console.log('\n -INSIRA AS 4 NOTAS PARA REALIZACAO DA MEDIA-\n' + ' (As notas devem ser pontuadas entre 0 e 100)')

                        
                        entradaDados.question('\nNOTA 1: \n', function(valor1){

                            let nota1 = valor1

                            entradaDados.question('\nNOTA 2: \n', function(valor2){
                
                                let nota2 = valor2

                                entradaDados.question('\nNOTA 3: \n', function(valor3){

                                    let nota3 = valor3

                                    entradaDados.question('\nNOTA 4: \n', function(valor4){

                                        let nota4 = valor4

                                        if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                            console.log('ERROR: As notas devem ser informadas para o calculo')
                                            entradaDados.close();
                                        }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
                                            console.log('ERROR: As notas nao podem ser abaixo de 0 ou acima de 100')
                                            entradaDados.close()
                                        }else if(isNaN (nota1) || isNaN (nota2) || isNaN (nota3) || isNaN (nota4)){
                                            console.log('ERROR: As notas devem ser numeros reais')
                                        }

                                    })

                                })

                            })

                        })

                    })

                })

            })

        })

    })

})