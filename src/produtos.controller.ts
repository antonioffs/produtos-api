import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto('LIV01', 'TDD e BDD na prática', 29.90),
        new Produto('LIV02', 'Iniciando com Flutter', 49.90),
        new Produto('LIV03', 'Inteligência artificial como serviço', 39.90),
    ]

    @Get()
    obterTodos(): Produto[]{
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto{
        return this.produtos[params.id];
    }

    @Post()
    criar(@Body() body: Produto){
        this.produtos.push(body)
        return 'Produto criado';
    }

    @Put()
    alterar(@Body() body: Produto): Produto{
        return body;
    }

    @Delete(':id')
    apagar(@Param() params): string{
        this.produtos.pop()
        return `Produto ${params.id} deletado`
    }

}