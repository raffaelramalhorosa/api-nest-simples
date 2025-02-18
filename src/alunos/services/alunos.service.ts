import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Aluno } from '../entities/aluno.entity';
import { CreateAlunoDto } from '../dto/input/create-aluno.dto';
import { UpdateAlunoDto } from '../dto/input/update-aluno.dto';

@Injectable()
//Classe de serviços que podem executar em alunos
export class AlunosService {
  private alunos: Aluno[] = [];
  private idCounter = 1;

  //Cria um objeto aluno, com id automatico sempre subindo de 1 em 1
  create(createAlunoDto: CreateAlunoDto): Aluno {
    const hashedPassword = bcrypt.hashSync(createAlunoDto.password, 10); // Faz uma senha com segredo usando a biblioteca bcrypt
    const aluno = {
      id: this.idCounter++, //incrementa o ID
      name: createAlunoDto.name, //usa o metodo create aluno para definir um nome
      email: createAlunoDto.email, //usa o metodo create aluno para definir um email
      password: hashedPassword, //insere a senha anteriormente criada pelo Bcrypt
    };
    this.alunos.push(aluno); //Adiciona um objeto aluno ao array de alunos (que tambem são outros objetos)
    return aluno;
  }

  findAll(): Aluno[] { //Vasculha dentro do array de Alunos e retorna todos os que estiverem dentro
    return this.alunos;
  }

  findOne(id: number): Aluno | undefined { //Procura no arraay de alunos, vasculhando a propriedade id para encontrar o exato id procurado
    return this.alunos.find(aluno => aluno.id === id);
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto): Aluno | undefined { //Utilizando o ID do aluno, vasculha pelo array de alunos buscando a exata propriedade ID do objeto e fazendo as alterações enviadas pela requisição
    const aluno = this.findOne(id);
    if (!aluno) return undefined; //Caso não ache nenhum aluno, retorna undefined
    if (updateAlunoDto.name) aluno.name = updateAlunoDto.name;
    if (updateAlunoDto.email) aluno.email = updateAlunoDto.email;
    if (updateAlunoDto.password) aluno.password = bcrypt.hashSync(updateAlunoDto.password, 10); //Verifica se é a mesma senha passada ao encripta-lá novamente, caso seja igual, atualiza
    return aluno;
  }

  delete(id: number): boolean { //Procura pelo id do aluno no array alunos e apaga do mesmo
    const index = this.alunos.findIndex(aluno => aluno.id === id);
    if (index === -1) return false;
    this.alunos.splice(index, 1);
    return true;
  }
}

