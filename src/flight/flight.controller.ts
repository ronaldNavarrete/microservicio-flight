import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VueloMSG } from 'src/common/constantes';
import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';

@Controller()
export class FlightController {
    constructor(private readonly vueloServicio:FlightService){
    }
    @MessagePattern(VueloMSG.INSERTAR)
    insertar(@Payload() flightDTO:FlightDTO){
        return this.vueloServicio.insertar(flightDTO);
    }
    @MessagePattern(VueloMSG.TODOS)
    todos(){
        return this.vueloServicio.todos();
    }
    @MessagePattern(VueloMSG.UNO)
    uno(@Payload() id:string){
        return this.vueloServicio.uno(id);
    }
    @MessagePattern(VueloMSG.ACTUALIZAR)
    actualizar(@Payload() paylod:any){
        return this.vueloServicio.actualizar(paylod.id, paylod.flightDTO);
    }
   @MessagePattern(VueloMSG.ELIMINAR)
    eliminar(@Payload() id:string){
        return this.vueloServicio.eliminar(id);
    }
}
