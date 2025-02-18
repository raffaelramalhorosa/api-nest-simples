import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AlunosService } from '../services/alunos.service';
import { CreateAlunoDto } from '../dto/input/create-aluno.dto';
import { UpdateAlunoDto } from '../dto/input/update-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alunosService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(Number(id), updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.alunosService.delete(Number(id));
  }
}
