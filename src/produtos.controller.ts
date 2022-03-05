import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {

    constructor(private produtoService: ProdutosService){

    }

    
    @Get()
    obterTodos(): Produto[]{
        return this.produtoService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto{
        return this.produtoService.obterUm(params.id);
    }

    @Post()
    criar(@Body() body: Produto) {
        return this.produtoService.criar(body);
    }

    @Put()
    alterar(@Body() body: Produto): Produto{
        return this.produtoService.alterar(body);
    }

    @Delete(':id')
    apagar(@Param() params) {
        return this.produtoService.apagar(params.id);
    }

}