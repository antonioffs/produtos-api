import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {

    constructor(private livroService: LivrosService){

    }

    
    @Get()
    async obterTodos(): Promise<Livro[]>{
        return this.livroService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livro>{
        return this.livroService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() livro: Livro) {
        return this.livroService.criar(livro);
    }

    @Put()
    @HttpCode(204)
    async alterar(@Body() livro: Livro) {
        return this.livroService.alterar(livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        return this.livroService.apagar(params.id);
    }

}