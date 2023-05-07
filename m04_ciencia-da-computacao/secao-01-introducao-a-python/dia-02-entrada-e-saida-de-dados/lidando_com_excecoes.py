ALUNOS_RECUPERACAO = []

with open("notas.txt", encoding="utf-8") as file:
    for line in file:
        nota_do_aluno = line
        nota_do_aluno = nota_do_aluno.split(" ")
        if int(nota_do_aluno[1]) < 6:
            ALUNOS_RECUPERACAO.append(nota_do_aluno[0] + "\n")

with open("reprovados.txt", mode="w", encoding="utf-8") as final_file:
    final_file.writelines(ALUNOS_RECUPERACAO)
