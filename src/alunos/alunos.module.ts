import { Module } from '@nestjs/common';
import { AlunosService } from './services/alunos.service';
import { AlunosController } from './controllers/alunos.controller';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService],
})
export class AlunosModule {}

