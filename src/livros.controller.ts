import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livroService: LivrosService){

    }

    
    @Get()
    obterTodos(): Livro[]{
        return this.livroService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Livro{
        return this.livroService.obterUm(params.id);
    }

    @Post()
    criar(@Body() body: Livro) {
        return this.livroService.criar(body);
    }

    @Put()
    alterar(@Body() body: Livro): Livro{
        return this.livroService.alterar(body);
    }

    @Delete(':id')
    apagar(@Param() params) {
        return this.livroService.apagar(params.id);
    }

}